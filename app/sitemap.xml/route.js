import { getSite, mintText } from '@/lib/mint';
import { caseStudyPath, getPortfolios } from '@/lib/portfolios';
import { getBlogs } from '@/lib/blog';
import { getWebsiteTypes, typePath } from '@/lib/websiteTypes';

// sitemap.xml from the Mint panel — every published page in Website → Pages —
// plus the blog posts, website types and case studies (all from the Mint panel)
export const revalidate = 300;

const entry = (loc, lastmod) =>
	`  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>` : ''}</url>\n`;

export async function GET() {
	const domain = (await getSite())?.config?.seo?.canonicalDomain || 'www.thinkcrypt.dev';
	const origin = `https://${domain}`;

	const [panel, blogs, types, portfolios] = await Promise.all([
		mintText(`/site/sitemap.xml?origin=${encodeURIComponent(origin)}`),
		getBlogs(),
		getWebsiteTypes(),
		getPortfolios(),
	]);

	const extra =
		blogs
			.filter(b => b?.slug && b.seo?.sitemap?.include !== false && b.seo?.robots?.index !== false)
			.map(b => entry(`${origin}/blog/${encodeURIComponent(b.slug)}`, b.updatedAt || b.publishedAt))
			.join('') +
		types
			.filter(t => t?.slug && t.seo?.sitemap?.include !== false && t.seo?.robots?.index !== false)
			.map(t => entry(`${origin}${typePath(encodeURIComponent(t.slug))}`, t.updatedAt))
			.join('') +
		portfolios
			.filter(p => p?.showCaseStudy && (p?.slug || p?._id))
			.map(p => entry(`${origin}${caseStudyPath(p)}`, p.updatedAt))
			.join('');

	const base =
		panel && panel.includes('</urlset>')
			? panel
			: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entry(`${origin}/`)}</urlset>\n`;
	const xml = base.replace('</urlset>', `${extra}</urlset>`);

	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
