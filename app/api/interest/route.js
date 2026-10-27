import { INTEREST_ROUTE, getInterestFields } from '@/lib/contact';

// A product page's sign-up form posts here: this server finds the product by its slug and sends the request to
// the Mint panel's "Product interest" with the server key (MINT_SERVER_KEY, never sent to the browser). The
// panel's automation then tells the team.
const API = process.env.MINT_API;
const KEY = process.env.MINT_API_KEY;
const SERVER_KEY = process.env.MINT_SERVER_KEY;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// A few sends from one address in ten minutes is plenty for people (per server instance — a brake, not a quota)
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

const mint = (path, init = {}) =>
	fetch(`${API}${path}${path.includes('?') ? '&' : '?'}apiKey=${KEY}`, {
		...init,
		headers: { ...init.headers, ...(SERVER_KEY && { 'X-Api-Key': SERVER_KEY }) },
		cache: 'no-store',
	});

// "example.com" → "https://example.com", so a visitor needn't type the scheme
const asUrl = v => (/^https?:\/\//i.test(v) ? v : `https://${v}`);

export async function POST(request) {
	if (!API || !KEY) return fail(503, 'The form isn’t available right now — email us instead.');
	let form;
	try {
		form = await request.formData();
	} catch {
		return fail(400, 'The form couldn’t be read — try again.');
	}
	// A bot filled the hidden field: answer as if it went through
	if (form.get('website_url')) return Response.json({ code: '' }, { status: 201 });

	const fields = await getInterestFields();
	const body = {};
	for (const f of fields) {
		const v = String(form.get(f.key) ?? '').trim();
		if (v) body[f.key] = (f.kind === 'url' ? asUrl(v) : v).slice(0, 5000);
		if (f.kind === 'select' && body[f.key] && f.options && !f.options.includes(body[f.key])) delete body[f.key];
		if (f.required && body[f.key] === undefined) return fail(400, `${f.label} is required.`);
		if (f.kind === 'email' && body[f.key] && !EMAIL.test(body[f.key])) return fail(400, 'Check the email address.');
	}

	const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
	if (tooMany(ip)) return fail(429, 'Too many requests from here — wait a few minutes and try again.');

	// The product the page is about, by its slug
	const slug = String(form.get('product') || '').trim();
	if (slug) {
		const found = await mint(`/products?slug=${encodeURIComponent(slug)}&limit=1`)
			.then(r => (r.ok ? r.json() : null))
			.catch(() => null);
		if (found?.doc?.[0]?._id) body.product = found.doc[0]._id;
	}
	body.page = String(form.get('page') || '').slice(0, 300);

	const res = await mint(`/${INTEREST_ROUTE}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	}).catch(() => null);
	const out = await res?.json().catch(() => null);
	if (!res?.ok) return fail(res?.status === 400 ? 400 : 502, out?.message || 'Your request couldn’t be sent. Try again in a moment.');
	return Response.json({ code: out?.code || out?.doc?.code || '' }, { status: 201 });
}
