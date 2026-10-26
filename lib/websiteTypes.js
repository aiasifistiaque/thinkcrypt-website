import { cache } from 'react';
import { getSite, mint } from './mint';
import { robotsOf } from './mintSeo';

// The kinds of websites Thinkcrypt builds (Mint panel → Website types, route `website-types`).
// Each published one has its own page at /website-development/<slug>; its search and share
// settings are its VSeo (`seo`).

const SITE = 'Thinkcrypt';
const BASE = '/website-development';
const CARD_FIELDS = 'name,slug,tagline,summary,coverImage,featured,order,seo';

export const typePath = slug => `${BASE}/${slug}`;

export const getWebsiteTypes = cache(
	async () => (await mint(`/website-types?limit=100&sort=order&fields=${CARD_FIELDS},updatedAt`))?.doc || []
);

export const getWebsiteType = cache(
	async slug => (await mint(`/website-types?slug=${encodeURIComponent(slug)}&limit=1`))?.doc?.[0] || null
);

const originOf = site => `https://${site?.config?.seo?.canonicalDomain || 'www.thinkcrypt.dev'}`;

// A website type's <head>: its VSeo, falling back to the record itself
export async function websiteTypeMetadata(type) {
	const site = await getSite();
	const v = type.seo || {};
	const path = typePath(type.slug);
	const base = v.metaTitle || `${type.name} Development`;
	const title = base.includes(SITE) || base.length + 13 > 65 ? base : `${base} | ${SITE}`;
	const description = v.metaDescription || type.summary || type.intro || '';
	const image = v.ogImage || type.coverImage;
	const indexing = site?.config?.seo?.indexing !== false;
	const r = v.robots || {};

	return {
		title: { absolute: title },
		description,
		...(v.keywords?.length && { keywords: v.keywords }),
		alternates: { canonical: v.canonicalUrl || path },
		openGraph: {
			type: v.ogType || 'website',
			url: path,
			siteName: SITE,
			locale: 'en_US',
			title: v.ogTitle || title,
			description: v.ogDescription || description,
			images: image ? [{ url: image, alt: v.ogImageAlt || type.name }] : undefined,
		},
		twitter: {
			card: v.twitterCard || 'summary_large_image',
			title: v.twitterTitle || v.ogTitle || title,
			description: v.twitterDescription || v.ogDescription || description,
			creator: '@thinkcrypt',
			images: [v.twitterImage || image].filter(Boolean),
		},
		robots: robotsOf({ ...r, index: indexing && r.index !== false, follow: indexing && r.follow !== false }),
	};
}

// Service + questions + breadcrumbs for a website type's page, or null when its VSeo turns structured data off
export async function websiteTypeJsonLd(type) {
	const v = type.seo || {};
	if (v.schemaType === 'none') return null;
	const origin = originOf(await getSite());
	const url = v.canonicalUrl || `${origin}${typePath(type.slug)}`;
	const features = [...(type.websiteFeatures || []), ...(type.panelFeatures || []), ...(type.highlights || [])].filter(f => f.title);
	const faq = (type.faq || []).filter(q => q.question && q.answer);

	let extra = {};
	try {
		extra = v.schemaJson ? JSON.parse(v.schemaJson) : {};
	} catch {}

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': v.schemaType && v.schemaType !== 'auto' ? v.schemaType : 'Service',
				'@id': `${url}#service`,
				name: type.name,
				serviceType: 'Website development',
				description: v.metaDescription || type.summary || type.intro,
				image: v.ogImage || type.coverImage,
				url,
				provider: { '@id': `${origin}/#organization` },
				areaServed: 'Worldwide',
				audience: type.audience?.length ? { '@type': 'Audience', audienceType: type.audience.join(', ') } : undefined,
				hasOfferCatalog: features.length
					? {
							'@type': 'OfferCatalog',
							name: `Included in a ${type.name.toLowerCase()}`,
							itemListElement: features.map(f => ({
								'@type': 'Offer',
								itemOffered: { '@type': 'Service', name: f.title, description: f.description },
							})),
					  }
					: undefined,
				...extra,
			},
			faq.length && {
				'@type': 'FAQPage',
				'@id': `${url}#faq`,
				mainEntity: faq.map(q => ({ '@type': 'Question', name: q.question, acceptedAnswer: { '@type': 'Answer', text: q.answer } })),
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
					{ '@type': 'ListItem', position: 2, name: 'Website development', item: `${origin}${BASE}` },
					{ '@type': 'ListItem', position: 3, name: v.breadcrumbTitle || type.name, item: url },
				],
			},
		].filter(Boolean),
	};
}
