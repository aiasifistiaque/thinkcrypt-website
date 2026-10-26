// Thinkcrypt's own content API (blogs, portfolios) — the same host and token the browser uses
// (BACKEND_URL points at an old Heroku app that no longer exists)
const API = process.env.NEXT_PUBLIC_BACKEND || process.env.BACKEND_URL;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN || process.env.API_TOKEN;

export async function backend(path) {
	if (!API) return null;
	try {
		const res = await fetch(`${API}/${path}`, {
			headers: { Accept: 'application/json', ...(TOKEN && { Authorization: TOKEN }) },
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
