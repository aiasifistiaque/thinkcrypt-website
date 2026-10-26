// Thinkcrypt's own content API (blogs, portfolios) — read on the server with the site's API token
const API = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND;

export async function backend(path) {
	if (!API) return null;
	try {
		const res = await fetch(`${API}/${path}`, {
			headers: { Accept: 'application/json', ...(process.env.API_TOKEN && { Authorization: process.env.API_TOKEN }) },
			next: { revalidate: 3600 },
		});
		return res.ok ? res.json() : null;
	} catch (error) {
		console.error('Thinkcrypt API:', error);
		return null;
	}
}

// A list's records — the API answers { doc: [...] }
export const backendList = async path => (await backend(path))?.doc || [];
