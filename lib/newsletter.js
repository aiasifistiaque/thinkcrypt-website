import { randomBytes } from 'crypto';

// Newsletter sign-ups live in the Mint panel's "Newsletter subscribers" model (route `newsletter-subscribers`).
// Its endpoints answer only a server key (MINT_SERVER_KEY), so this file is for the site's server only — never
// import it from a client component. The welcome email (with the unsubscribe link) is the panel's automation on
// that model: it runs when a subscriber is added, or switched back to Subscribed.
export const NEWSLETTER_ROUTE = 'newsletter-subscribers';

const API = process.env.MINT_API;
const KEY = process.env.MINT_API_KEY;
const SERVER_KEY = process.env.MINT_SERVER_KEY;

export const newsletterReady = () => Boolean(API && KEY && SERVER_KEY);

export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// What the unsubscribe link carries: random, so nobody can unsubscribe someone else by guessing
export const newCode = () => randomBytes(18).toString('base64url');

// One call to the panel: { ok, status, data } — never throws
const call = async (path, init = {}) => {
	try {
		const res = await fetch(`${API}/${NEWSLETTER_ROUTE}${path}${path.includes('?') ? '&' : '?'}apiKey=${KEY}`, {
			...init,
			headers: { 'Content-Type': 'application/json', 'X-Api-Key': SERVER_KEY, ...init.headers },
			cache: 'no-store',
		});
		return { ok: res.ok, status: res.status, data: await res.json().catch(() => null) };
	} catch (error) {
		console.error('Mint newsletter API:', error);
		return { ok: false, status: 502, data: null };
	}
};

const first = out => (out.ok ? out.data?.doc?.[0] || null : undefined);

// The subscriber with this email / unsubscribe code: the record, null when there is none, undefined when the panel failed
export const findByEmail = async email => first(await call(`?email=${encodeURIComponent(email)}&limit=1`));
export const findByCode = async code => first(await call(`?unsubscribeCode=${encodeURIComponent(code)}&limit=1`));

export const createSubscriber = body => call('', { method: 'POST', body: JSON.stringify(body) });
export const updateSubscriber = (id, body) => call(`/${id}`, { method: 'PUT', body: JSON.stringify(body) });
