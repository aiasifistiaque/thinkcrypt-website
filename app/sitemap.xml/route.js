import { getSite, mintText } from '@/lib/mint';

// sitemap.xml from the Mint panel — every published page in Website → Pages
export const revalidate = 300;

export async function GET() {
	const domain = (await getSite())?.config?.seo?.canonicalDomain || 'www.thinkcrypt.dev';
	const origin = `https://${domain}`;
	const xml =
		(await mintText(`/site/sitemap.xml?origin=${encodeURIComponent(origin)}`)) ||
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${origin}/</loc></url>\n</urlset>\n`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
