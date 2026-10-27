import {
	EMAIL,
	createSubscriber,
	findByEmail,
	newCode,
	newsletterReady,
	updateSubscriber,
} from '@/lib/newsletter';

// The newsletter form posts { email, page } here. A new address becomes a subscriber in the Mint panel; one that
// had unsubscribed is switched back to Subscribed; one already subscribed is simply thanked again. The panel's
// automation sends the welcome email with the unsubscribe link.

// A few sign-ups from one address is plenty for people (per server instance — a brake, not a quota)
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
const done = () => Response.json({ subscribed: true }, { status: 201 });

export async function POST(request) {
	if (!newsletterReady()) return fail(503, 'Subscribing isn’t available right now — try again later.');
	const body = await request.json().catch(() => null);
	if (!body) return fail(400, 'The form couldn’t be read — try again.');
	// A bot filled the hidden field: answer as if it went through
	if (body.website) return done();

	const email = String(body.email || '').trim().toLowerCase().slice(0, 200);
	if (!EMAIL.test(email)) return fail(400, 'Enter a valid email address.');
	const page = String(body.page || '/').slice(0, 300);

	const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
	if (tooMany(ip)) return fail(429, 'Too many tries from here — wait a few minutes and try again.');

	const sorry = 'You couldn’t be subscribed just now. Try again in a moment.';
	const found = await findByEmail(email);
	if (found === undefined) return fail(502, sorry);
	if (found?.status === 'subscribed') return done();

	const now = new Date().toISOString();
	const out = found
		? await updateSubscriber(found._id, { status: 'subscribed', subscribedAt: now, page })
		: await createSubscriber({ email, status: 'subscribed', page, subscribedAt: now, unsubscribeCode: newCode() });
	if (out.ok) return done();
	// Two sign-ups racing for one address: the other one made it
	if (!found && out.status === 400 && (await findByEmail(email))?.status === 'subscribed') return done();
	console.error('Newsletter sign-up failed:', out.status, out.data?.message);
	return fail(502, sorry);
}
