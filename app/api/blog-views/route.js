// Adds one view to a published blog post. The count is written with the Mint server key
// (MINT_SERVER_KEY, server-side only) through the key-only "Count a blog view" endpoint.
const API = process.env.MINT_API;
const KEY = process.env.MINT_API_KEY;
const SERVER_KEY = process.env.MINT_SERVER_KEY;

export async function POST(request) {
	const { id } = await request.json().catch(() => ({}));
	if (!/^[a-f0-9]{24}$/.test(String(id || ''))) return Response.json({ error: 'bad id' }, { status: 400 });
	if (!API || !KEY || !SERVER_KEY) return new Response(null, { status: 204 });

	// Published posts only: the public read refuses drafts
	const post = await fetch(`${API}/blogs/${id}?apiKey=${KEY}&fields=views`, { cache: 'no-store' })
		.then(r => (r.ok ? r.json() : null))
		.catch(() => null);
	if (!post) return Response.json({ error: 'not found' }, { status: 404 });

	const views = (post.views || 0) + 1;
	const res = await fetch(`${API}/blogs/views/${id}?apiKey=${KEY}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', 'X-Api-Key': SERVER_KEY },
		body: JSON.stringify({ views }),
		cache: 'no-store',
	}).catch(() => null);
	if (!res?.ok) return Response.json({ views: post.views || 0 }, { status: 202 });
	return Response.json({ views });
}
