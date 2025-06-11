import { blogData } from '../data/blogData';

export default function SitemapXml() {
	// This component will never be rendered
	return null;
}

export async function getServerSideProps({ res }) {
	// Get the current domain from environment or default
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thinkcrypt.dev';
	const currentDate = new Date().toISOString();

	// Define static pages with their priorities and change frequencies
	const staticPages = [
		{
			url: '/',
			changefreq: 'weekly',
			priority: '1.0',
			lastmod: currentDate,
		},
		{
			url: '/services',
			changefreq: 'weekly',
			priority: '0.9',
			lastmod: currentDate,
		},
		{
			url: '/portfolio',
			changefreq: 'weekly',
			priority: '0.9',
			lastmod: currentDate,
		},
		{
			url: '/blog',
			changefreq: 'daily',
			priority: '0.8',
			lastmod: currentDate,
		},
		{
			url: '/team',
			changefreq: 'monthly',
			priority: '0.7',
			lastmod: currentDate,
		},
		{
			url: '/clients',
			changefreq: 'weekly',
			priority: '0.7',
			lastmod: currentDate,
		},
		{
			url: '/startup',
			changefreq: 'monthly',
			priority: '0.8',
			lastmod: currentDate,
		},
		{
			url: '/business-solution',
			changefreq: 'monthly',
			priority: '0.8',
			lastmod: currentDate,
		},
		{
			url: '/web-development',
			changefreq: 'monthly',
			priority: '0.8',
			lastmod: currentDate,
		},
		{
			url: '/course',
			changefreq: 'weekly',
			priority: '0.6',
			lastmod: currentDate,
		},
		{
			url: '/mint',
			changefreq: 'monthly',
			priority: '0.7',
			lastmod: currentDate,
		},
		{
			url: '/techstacks',
			changefreq: 'monthly',
			priority: '0.6',
			lastmod: currentDate,
		},
		{
			url: '/privacy-policy',
			changefreq: 'yearly',
			priority: '0.3',
			lastmod: currentDate,
		},
	];

	// Get dynamic blog posts
	const blogPosts = blogData?.doc?.filter(post => post.status === 'published') || [];

	// Generate blog URLs
	const blogUrls = blogPosts.map(post => ({
		url: `/blog/${post.slug || post.id}`,
		changefreq: 'monthly',
		priority: post.featured ? '0.8' : '0.7',
		lastmod: post.publishedAt ? new Date(post.publishedAt).toISOString() : currentDate,
	}));

	// Service-specific pages
	const servicePages = [
		{
			url: '/services/web-development',
			changefreq: 'monthly',
			priority: '0.8',
			lastmod: currentDate,
		},
		{
			url: '/services/mobile-app-development',
			changefreq: 'monthly',
			priority: '0.8',
			lastmod: currentDate,
		},
		{
			url: '/services/mvp-development',
			changefreq: 'monthly',
			priority: '0.9',
			lastmod: currentDate,
		},
		{
			url: '/services/ecommerce-development',
			changefreq: 'monthly',
			priority: '0.8',
			lastmod: currentDate,
		},
		{
			url: '/services/cms-development',
			changefreq: 'monthly',
			priority: '0.7',
			lastmod: currentDate,
		},
		{
			url: '/services/erp-development',
			changefreq: 'monthly',
			priority: '0.7',
			lastmod: currentDate,
		},
	];

	// Combine all URLs
	const allUrls = [...staticPages, ...blogUrls, ...servicePages];

	// Generate sitemap XML
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allUrls
	.map(
		({ url, changefreq, priority, lastmod }) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	// Set content type and headers for XML
	res.setHeader('Content-Type', 'application/xml');
	res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400'); // Cache for 1 day

	// Write sitemap content
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}
