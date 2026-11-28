import { createHmac, timingSafeEqual } from 'node:crypto';
import { after } from 'next/server';
import { reply, staffMessage } from '@/lib/chatbot/bot';

// Facebook Page (Messenger) and Instagram messages come here from the Meta app's webhook:
//   Callback URL https://www.thinkcrypt.dev/api/meta/webhook, Verify token = META_VERIFY_TOKEN,
//   fields "messages" and "message_echoes". Setup steps: docs/CHATBOT.md.
// The answer to Meta goes out at once; the bot does its work after (Meta retries slow webhooks).
export const maxDuration = 60;

const VERIFY = process.env.META_VERIFY_TOKEN;
const SECRETS = [process.env.META_APP_SECRET, process.env.INSTAGRAM_APP_SECRET].filter(Boolean);
const APP_ID = process.env.META_APP_ID;
const PAGE_TOKEN = process.env.META_PAGE_ACCESS_TOKEN;
const IG_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const GRAPH = 'https://graph.facebook.com/v21.0';
const IG_GRAPH = 'https://graph.instagram.com/v21.0';

// Meta sometimes sends the same message twice
const seen = new Set();
const firstTime = mid => {
	if (!mid) return true;
	if (seen.has(mid)) return false;
	seen.add(mid);
	if (seen.size > 2000) seen.delete(seen.values().next().value);
	return true;
};

export function GET(request) {
	const q = new URL(request.url).searchParams;
	if (VERIFY && q.get('hub.mode') === 'subscribe' && q.get('hub.verify_token') === VERIFY)
		return new Response(q.get('hub.challenge') || '', { status: 200 });
	return new Response('Forbidden', { status: 403 });
}

function signed(raw, header) {
	if (!SECRETS.length || !header?.startsWith('sha256=')) return false;
	const got = Buffer.from(header.slice(7), 'hex');
	return SECRETS.some(secret => {
		const want = createHmac('sha256', secret).update(raw).digest();
		return got.length === want.length && timingSafeEqual(got, want);
	});
}

// Messenger allows 2000 characters a message, Instagram 1000: split on paragraphs / sentences
function pieces(text, max) {
	const out = [];
	let rest = text.trim();
	while (rest.length > max) {
		let cut = Math.max(rest.lastIndexOf('\n', max), rest.lastIndexOf('. ', max) + 1);
		if (cut < max / 2) cut = max;
		out.push(rest.slice(0, cut).trim());
		rest = rest.slice(cut).trim();
	}
	if (rest) out.push(rest);
	return out;
}

async function send(channel, to, text) {
	const viaIg = channel === 'instagram' && IG_TOKEN;
	const token = viaIg ? IG_TOKEN : PAGE_TOKEN;
	if (!token) return console.error('meta webhook: no access token for', channel);
	for (const part of pieces(text, channel === 'instagram' ? 1000 : 2000)) {
		const res = await fetch(`${viaIg ? IG_GRAPH : GRAPH}/me/messages?access_token=${token}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ recipient: { id: to }, messaging_type: 'RESPONSE', message: { text: part } }),
		});
		if (!res.ok) console.error('meta send', channel, res.status, (await res.text()).slice(0, 300));
	}
}

async function typing(channel, to) {
	if (channel !== 'messenger' || !PAGE_TOKEN) return;
	await fetch(`${GRAPH}/me/messages?access_token=${PAGE_TOKEN}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ recipient: { id: to }, sender_action: 'typing_on' }),
	}).catch(() => {});
}

// Their name, best effort (needs the profile permission; fine without it)
async function nameOf(channel, id) {
	try {
		const viaIg = channel === 'instagram' && IG_TOKEN;
		const fields = channel === 'instagram' ? 'name,username' : 'first_name,last_name';
		const res = await fetch(`${viaIg ? IG_GRAPH : GRAPH}/${id}?fields=${fields}&access_token=${viaIg ? IG_TOKEN : PAGE_TOKEN}`);
		if (!res.ok) return '';
		const p = await res.json();
		return (p.name || [p.first_name, p.last_name].filter(Boolean).join(' ') || p.username || '').slice(0, 120);
	} catch {
		return '';
	}
}

async function handle(channel, event) {
	const m = event.message;
	if (!m || m.is_deleted || !firstTime(m.mid)) return;

	if (m.is_echo) {
		// Our own bot's replies echo back with our app id; anything else is the team writing from Meta Business Suite
		if (APP_ID && String(m.app_id || '') === String(APP_ID)) return;
		if (!APP_ID && !m.app_id) return; // without META_APP_ID we can't tell; don't guess
		if (m.text) await staffMessage({ channel, externalId: event.recipient.id, text: m.text });
		return;
	}

	const from = event.sender?.id;
	if (!from) return;
	const text = m.text || (m.attachments?.length ? '[sent an attachment]' : '');
	if (!text) return;
	await typing(channel, from);
	const name = await nameOf(channel, from);
	const answer = await reply({ channel, externalId: from, text, name, page: channel === 'instagram' ? 'Instagram' : 'Facebook Page' });
	if (answer) await send(channel, from, answer);
}

export async function POST(request) {
	const raw = await request.text();
	if (!signed(raw, request.headers.get('x-hub-signature-256'))) return new Response('Bad signature', { status: 401 });
	let body;
	try {
		body = JSON.parse(raw);
	} catch {
		return new Response('Bad body', { status: 400 });
	}
	const channel = body.object === 'instagram' ? 'instagram' : body.object === 'page' ? 'messenger' : null;
	if (channel) {
		const events = (body.entry || []).flatMap(e => e.messaging || []);
		after(async () => {
			for (const event of events) {
				try {
					await handle(channel, event);
				} catch (e) {
					console.error('meta webhook', channel, e?.message);
				}
			}
		});
	}
	return new Response('EVENT_RECEIVED', { status: 200 });
}
