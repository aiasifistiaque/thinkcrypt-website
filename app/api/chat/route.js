import { reply, FALLBACK } from '@/lib/chatbot/bot';

// The website chat (components/site/ChatWidget.js) posts { visitorId, message, page } here and gets { reply }.
// Chats are saved in the Mint panel (Chatbot → Chat conversations, channel "website").
export const maxDuration = 30;

// 20 messages from one address in ten minutes (per server instance — a brake, not a quota)
const recent = new Map();
const tooMany = ip => {
	const now = Date.now();
	const hits = (recent.get(ip) || []).filter(t => now - t < 10 * 60 * 1000);
	hits.push(now);
	recent.set(ip, hits);
	if (recent.size > 5000) recent.delete(recent.keys().next().value);
	return hits.length > 20;
};

const VISITOR = /^[A-Za-z0-9_-]{8,64}$/;

export async function POST(request) {
	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({ message: 'The message couldn’t be read.' }, { status: 400 });
	}
	const message = String(body?.message || '').trim().slice(0, 1000);
	const visitorId = String(body?.visitorId || '');
	if (!message || !VISITOR.test(visitorId)) return Response.json({ message: 'Write a message first.' }, { status: 400 });

	const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
	if (tooMany(ip))
		return Response.json({ reply: 'You’re sending messages quickly — give it a few minutes, or reach us on WhatsApp at +8801828398225.' });

	const page = String(body?.page || '').slice(0, 200);
	try {
		const answer = await reply({ channel: 'website', externalId: visitorId, text: message, page: page ? `website ${page}` : 'website' });
		return Response.json({ reply: answer || 'Thanks — someone from our team will reply here soon.' });
	} catch (e) {
		console.error('chat route', e?.message);
		return Response.json({ reply: FALLBACK });
	}
}
