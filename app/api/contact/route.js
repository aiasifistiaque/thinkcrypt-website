import { CONTACT_ROUTE, MAX_FILES, MAX_TOTAL_MB, getContactFields } from '@/lib/contact';

// The contact form's own API: the browser posts the form here (multipart), and this server sends its files to the
// Mint panel's upload endpoint and the enquiry to "Contact us" — both with the server key (MINT_SERVER_KEY, never
// sent to the browser). The panel's endpoints for Contact us answer only a server key.
const API = process.env.MINT_API;
const KEY = process.env.MINT_API_KEY;
const SERVER_KEY = process.env.MINT_SERVER_KEY;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TYPES = /\.(png|jpe?g|webp|gif|heic|pdf|docx?|xlsx?|pptx?|txt|csv|zip)$/i;

// A few sends a minute from one address is plenty for people (per server instance — a brake, not a quota)
const recent = new Map();
const tooMany = ip => {
	const now = Date.now();
	const hits = (recent.get(ip) || []).filter(t => now - t < 10 * 60 * 1000);
	hits.push(now);
	recent.set(ip, hits);
	if (recent.size > 5000) recent.delete(recent.keys().next().value);
	return hits.length > 5;
};

const fail = (status, message) => Response.json({ message }, { status });

const mint = (path, init) =>
	fetch(`${API}${path}?apiKey=${KEY}`, { ...init, headers: { ...init.headers, 'X-Api-Key': SERVER_KEY }, cache: 'no-store' });

export async function POST(request) {
	if (!API || !KEY || !SERVER_KEY) return fail(503, 'The form isn’t available right now — email us instead.');
	let form;
	try {
		form = await request.formData();
	} catch {
		return fail(400, 'The form couldn’t be read — try again.');
	}
	// A bot filled the hidden field: answer as if it went through
	if (form.get('website')) return Response.json({ code: '' }, { status: 201 });

	const fields = await getContactFields();
	const body = {};
	for (const f of fields) {
		if (f.kind === 'files') continue;
		if (f.kind === 'multiselect') {
			const values = form.getAll(f.key).map(String).filter(v => !f.options || f.options.includes(v));
			if (values.length) body[f.key] = values;
		} else {
			const v = String(form.get(f.key) ?? '').trim();
			if (v) body[f.key] = v.slice(0, 5000);
		}
		if (f.required && body[f.key] === undefined) return fail(400, `${f.label} is required.`);
		if (f.kind === 'email' && body[f.key] && !EMAIL.test(body[f.key])) return fail(400, 'Check the email address.');
	}

	const files = form.getAll('files').filter(f => typeof f === 'object' && f.size);
	if (files.length > MAX_FILES) return fail(400, `Up to ${MAX_FILES} files.`);
	if (files.reduce((n, f) => n + f.size, 0) > MAX_TOTAL_MB * 1024 * 1024) return fail(413, `Attachments up to ${MAX_TOTAL_MB} MB in total.`);
	const odd = files.find(f => !TYPES.test(f.name || ''));
	if (odd) return fail(415, `“${odd.name}” can’t be attached — photos, PDF, Word, Excel, PowerPoint, text, CSV or zip only.`);

	// Counted once a message is ready to go, so a visitor fixing a mistake isn't held back
	const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
	if (tooMany(ip)) return fail(429, 'Too many messages from here — wait a few minutes and try again.');

	if (files.length) {
		const upload = new FormData();
		files.forEach(f => upload.append('files', f, f.name));
		const res = await mint(`/${CONTACT_ROUTE}/files`, { method: 'POST', body: upload, headers: {} }).catch(() => null);
		const out = await res?.json().catch(() => null);
		if (!res?.ok) return fail(502, out?.message || 'Your files couldn’t be attached. Remove them and send again, or email them to us.');
		const fileField = fields.find(f => f.kind === 'files');
		if (fileField) body[fileField.key] = (out.files || []).map(f => f.url);
	}

	// Where they came from: the page that sent them to the form (the form sends it)
	body.page = String(form.get('page') || '/contact').slice(0, 300);

	const res = await mint(`/${CONTACT_ROUTE}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	}).catch(() => null);
	const out = await res?.json().catch(() => null);
	if (!res?.ok) return fail(res?.status === 400 ? 400 : 502, out?.message || 'Your message couldn’t be sent. Try again in a moment.');
	return Response.json({ code: out?.code || '' }, { status: 201 });
}
