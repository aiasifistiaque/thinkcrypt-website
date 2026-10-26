import { cache } from 'react';
import { getSite, mint } from './mint';
import { robotsOf } from './mintSeo';

// Blog posts come from the Mint panel (Blog posts, route `blogs`). The public API only
// answers published posts. Each post's search and share settings are its VSeo (`seo`).

const SITE = 'Thinkcrypt';
const LIST_FIELDS =
	'title,slug,excerpt,coverImage,coverImageAlt,category,tags,author,publishedAt,readTime,featured,views,updatedAt,seo';

export const CATEGORIES = {
	ai: 'AI',
	automation: 'Automation',
	'software-development': 'Software development',
	startups: 'Startups',
	ecommerce: 'Ecommerce',
	'web-development': 'Web development',
	mint: 'Mint',
	company: 'Company news',
};

// A post in the shape the blog components read
const toPost = b => ({
	...b,
	name: b.title,
	image: b.coverImage,
	imageAlt: b.coverImageAlt || b.title,
	isFeatured: !!b.featured,
	categoryKey: b.category,
	category: CATEGORIES[b.category] || b.category,
	readTime: b.readTime ? `${b.readTime} min read` : '',
	author: { name: b.author || SITE },
	views: b.views || 0,
	seo: b.seo || {},
});

export const getBlogs = cache(
	async () => ((await mint(`/blogs?limit=100&sort=-publishedAt&fields=${LIST_FIELDS}`))?.doc || []).map(toPost)
);

export const getBlog = cache(async slug => {
	const b = (await mint(`/blogs?slug=${encodeURIComponent(slug)}&limit=1`))?.doc?.[0];
	return b ? toPost(b) : null;
});

const originOf = site => `https://${site?.config?.seo?.canonicalDomain || 'www.thinkcrypt.dev'}`;
const absolute = (origin, url) => (!url ? undefined : url.startsWith('http') ? url : `${origin}${url}`);

// A post's <head>: its VSeo, falling back to the post itself
export async function blogMetadata(post) {
	const site = await getSite();
	const v = post.seo || {};
	const path = `/blog/${post.slug}`;
	const base = v.metaTitle || post.title;
	// The brand only when it still fits in what Google shows
	const title = base.includes(SITE) || base.length + 13 > 65 ? base : `${base} | ${SITE}`;
	const description = v.metaDescription || post.excerpt || '';
	const image = v.ogImage || post.coverImage;
	const indexing = site?.config?.seo?.indexing !== false;
	const r = v.robots || {};

	return {
		title: { absolute: title },
		description,
		...(v.keywords?.length && { keywords: v.keywords }),
		authors: [{ name: post.author.name }],
		alternates: { canonical: v.canonicalUrl || path },
		openGraph: {
			type: v.ogType || 'article',
			url: path,
			siteName: SITE,
			locale: 'en_US',
			title: v.ogTitle || title,
			description: v.ogDescription || description,
			images: image ? [{ url: image, alt: v.ogImageAlt || post.imageAlt }] : undefined,
			publishedTime: post.publishedAt,
			modifiedTime: post.updatedAt,
			authors: [post.author.name],
			section: post.category,
			tags: post.tags,
		},
		twitter: {
			card: v.twitterCard || 'summary_large_image',
			title: v.twitterTitle || v.ogTitle || title,
			description: v.twitterDescription || v.ogDescription || description,
			creator: '@thinkcrypt',
			images: [v.twitterImage || image].filter(Boolean),
		},
		robots: robotsOf({
			...r,
			index: indexing && r.index !== false,
			follow: indexing && r.follow !== false,
		}),
	};
}

// BlogPosting + breadcrumbs for a post, or null when its VSeo turns structured data off
export async function blogJsonLd(post) {
	const v = post.seo || {};
	if (v.schemaType === 'none') return null;
	const origin = originOf(await getSite());
	const url = v.canonicalUrl || `${origin}/blog/${post.slug}`;
	const words = String(post.content || '')
		.replace(/<[^>]+>/g, ' ')
		.split(/\s+/)
		.filter(Boolean).length;

	let extra = {};
	try {
		extra = v.schemaJson ? JSON.parse(v.schemaJson) : {};
	} catch {}

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': v.schemaType && v.schemaType !== 'auto' ? v.schemaType : 'BlogPosting',
				'@id': `${url}#article`,
				headline: v.metaTitle || post.title,
				description: v.metaDescription || post.excerpt,
				image: absolute(origin, v.ogImage || post.coverImage),
				datePublished: post.publishedAt,
				dateModified: post.updatedAt || post.publishedAt,
				author: { '@type': 'Organization', name: post.author.name, url: origin },
				publisher: { '@id': `${origin}/#organization` },
				mainEntityOfPage: url,
				articleSection: post.category,
				keywords: v.keywords?.length ? v.keywords.join(', ') : post.tags?.join(', '),
				wordCount: words || undefined,
				inLanguage: 'en',
				...extra,
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
					{ '@type': 'ListItem', position: 2, name: 'Blog', item: `${origin}/blog` },
					{ '@type': 'ListItem', position: 3, name: v.breadcrumbTitle || post.title, item: url },
				],
			},
		],
	};
}

// The blog index as structured data
export async function blogListJsonLd(posts) {
	const origin = originOf(await getSite());
	return {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		'@id': `${origin}/blog#blog`,
		name: 'Thinkcrypt Blog',
		url: `${origin}/blog`,
		publisher: { '@id': `${origin}/#organization` },
		blogPost: posts.map(p => ({
			'@type': 'BlogPosting',
			headline: p.title,
			url: `${origin}/blog/${p.slug}`,
			datePublished: p.publishedAt,
			image: p.coverImage,
		})),
	};
}
