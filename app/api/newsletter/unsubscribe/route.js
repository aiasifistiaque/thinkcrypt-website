import { findByCode, newsletterReady, updateSubscriber } from '@/lib/newsletter';

// The unsubscribe page's button posts { code } — the code from the welcome email's link. The subscriber stays in
// the panel, marked Unsubscribed with the day it happened.
const fail = (status, message) => Response.json({ message }, { status });

export async function POST(request) {
	if (!newsletterReady()) return fail(503, 'Unsubscribing isn’t available right now — try again later.');
	const body = await request.json().catch(() => null);
	const code = String(body?.code || '').trim();
	if (!code || code.length > 100) return fail(400, 'This unsubscribe link isn’t complete — open it from the email again.');

	const found = await findByCode(code);
	if (found === undefined) return fail(502, 'You couldn’t be unsubscribed just now. Try again in a moment.');
	if (!found) return fail(404, 'This unsubscribe link isn’t valid any more.');
	if (found.status === 'unsubscribed') return Response.json({ unsubscribed: true });

	const out = await updateSubscriber(found._id, { status: 'unsubscribed', unsubscribedAt: new Date().toISOString() });
	if (!out.ok) {
		console.error('Newsletter unsubscribe failed:', out.status, out.data?.message);
		return fail(502, 'You couldn’t be unsubscribed just now. Try again in a moment.');
	}
	return Response.json({ unsubscribed: true });
}
