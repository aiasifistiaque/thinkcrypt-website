// The chatbot keeps everything in the Thinkcrypt Website project in the Mint panel (sidebar → Chatbot):
// Chat conversations (route chat-conversations), Chat messages (chat-messages) and Chatbot knowledge
// (chatbot-knowledge). Their endpoints answer only the server key (MINT_SERVER_KEY), so this runs on the server only.
const API = process.env.MINT_API;
const KEY = process.env.MINT_API_KEY;
const SERVER_KEY = process.env.MINT_SERVER_KEY;

export const storeReady = () => Boolean(API && KEY && SERVER_KEY);

async function call(path, { method = 'GET', body } = {}) {
	const res = await fetch(`${API}${path}${path.includes('?') ? '&' : '?'}apiKey=${KEY}`, {
		method,
		headers: { 'X-Api-Key': SERVER_KEY, ...(body ? { 'Content-Type': 'application/json' } : {}) },
		body: body ? JSON.stringify(body) : undefined,
		cache: 'no-store',
	});
	const out = await res.json().catch(() => null);
	if (!res.ok) throw new Error(`Mint ${method} ${path.split('?')[0]}: ${res.status} ${out?.message || ''}`.trim());
	return out;
}

const q = encodeURIComponent;
const idOf = doc => doc?._id || doc?.doc?._id;
const docOf = out => out?.doc && !Array.isArray(out.doc) ? out.doc : out;

// One conversation per person per channel; `externalId` is "<channel>:<their id>"
export async function findOrCreateConversation({ channel, externalId, name, page }) {
	const found = await call(`/chat-conversations?externalId=${q(externalId)}&limit=1`);
	if (found?.doc?.[0]) return found.doc[0];
	try {
		return docOf(
			await call('/chat-conversations', {
				method: 'POST',
				body: { channel, externalId, ...(name ? { name } : {}), page: page || channel, status: 'open', lastMessageAt: new Date().toISOString() },
			}),
		);
	} catch (error) {
		// Two messages at once can both try to create it: the second finds the first's
		const again = await call(`/chat-conversations?externalId=${q(externalId)}&limit=1`);
		if (again?.doc?.[0]) return again.doc[0];
		throw error;
	}
}

export const updateConversation = (id, fields) => call(`/chat-conversations/${id}`, { method: 'PUT', body: fields });

export const addMessage = (conversationId, role, text) =>
	call('/chat-messages', { method: 'POST', body: { conversation: conversationId, role, text: String(text).slice(0, 8000) } });

// The latest messages, oldest first
export async function recentMessages(conversationId, limit = 20) {
	const out = await call(`/chat-messages?conversation=${q(conversationId)}&sort=-createdAt&limit=${limit}`);
	return (out?.doc || []).reverse();
}

export async function knowledgeArticles() {
	const out = await call('/chatbot-knowledge?limit=100&sort=order');
	return (out?.doc || []).filter(a => a.active !== false);
}

export { idOf };
