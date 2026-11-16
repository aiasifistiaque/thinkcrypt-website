import { estimate } from '@/lib/easyCommerce';

// The Easy Instant Commerce estimate form posts here. This server works the estimate out again and sends the
// lead to the Mint panel's "EC leads" with the server key (MINT_SERVER_KEY, never sent to the browser; the
// panel's endpoint takes nothing else). Status and team notes are the team's: the API never writes them.
const API = process.env.MINT_API;
const KEY = process.env.MINT_API_KEY;
const SERVER_KEY = process.env.MINT_SERVER_KEY;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s-]{10,20}$/;

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
const text = (v, max = 300) => String(v ?? '').trim().slice(0, max);

export async function POST(request) {
	if (!API || !KEY || !SERVER_KEY) return fail(503, 'The form isn’t available right now — email us instead.');
	let form;
	try {
		form = await request.json();
	} catch {
		return fail(400, 'The form couldn’t be read — try again.');
	}
	// A bot filled the hidden field: answer as if it went through
	if (form.website) return Response.json({ code: '' }, { status: 201 });

	const name = text(form.name, 120);
	const phone = text(form.phone, 30);
	const email = text(form.email, 160).toLowerCase();
	if (!name) return fail(400, 'Your name is required.');
	if (!PHONE.test(phone)) return fail(400, 'Check the phone number.');
	if (!EMAIL.test(email)) return fail(400, 'Check the email address.');

	const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
	if (tooMany(ip)) return fail(429, 'Too many requests from here — wait a few minutes and try again.');

	const productCount = Math.max(0, Math.floor(Number(form.productCount) || 0));
	const imageCount = Math.max(0, Math.floor(Number(form.imageCount) || 0));
	const e = estimate({ productCount, imageCount, design: form.design, customFeatures: form.customFeatures });

	const body = {
		name,
		phone,
		email,
		business: text(form.business, 160),
		productCount,
		imageCount,
		design: e.design.value,
		demo: text(form.demo, 120),
		customFeatures: e.customFeatures,
		plan: e.plan.value,
		monthlyEstimate: e.monthly,
		buildEstimate: e.build,
		message: text(form.message, 3000),
		page: text(form.page, 300),
	};

	const res = await fetch(`${API}/ec-leads?apiKey=${KEY}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'X-Api-Key': SERVER_KEY },
		body: JSON.stringify(body),
		cache: 'no-store',
	}).catch(() => null);
	const out = await res?.json().catch(() => null);
	if (!res?.ok) return fail(res?.status === 400 ? 400 : 502, out?.message || 'Your request couldn’t be sent. Try again in a moment.');
	return Response.json({ code: out?.code || out?.doc?.code || '' }, { status: 201 });
}
