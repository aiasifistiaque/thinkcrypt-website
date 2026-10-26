import { cache } from 'react';

// The Mint project that manages this site's SEO and analytics (Thinkcrypt Website).
// The project key is publishable — it is made to be seen in a page.
const API = process.env.MINT_API;
const KEY = process.env.MINT_API_KEY;

// Where track.js is served: the API's origin
export const MINT_ORIGIN = API ? API.replace(/\/public\/api\/?$/, '') : '';
export const MINT_KEY = KEY;

export async function mint(path) {
	if (!API || !KEY) return null;
	try {
		const res = await fetch(`${API}${path}${path.includes('?') ? '&' : '?'}apiKey=${KEY}`, {
			next: { revalidate: 60 },
		});
		return res.ok ? res.json() : null;
	} catch (error) {
		console.error('Mint site API:', error);
		return null;
	}
}

export const mintText = async path => {
	if (!API || !KEY) return null;
	try {
		const res = await fetch(`${API}${path}${path.includes('?') ? '&' : '?'}apiKey=${KEY}`, {
			next: { revalidate: 300 },
		});
		return res.ok ? res.text() : null;
	} catch (error) {
		console.error('Mint site API:', error);
		return null;
	}
};

// { settings, menu, config } — Site setup in the panel
export const getSite = cache(() => mint('/site'));

// { page, seo, contents } — a page and its SEO (Website → SEO), null when it isn't published
export const getPage = cache(path => mint(`/pages/by-path?path=${encodeURIComponent(path)}`));
