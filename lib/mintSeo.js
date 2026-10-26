import { getPage, getSite } from './mint';
import { defaultSEO } from './seoKeywords';

// SEO comes from the Mint panel: Site setup → SEO for the defaults, Website → SEO for each page.
// The values in seoKeywords.js are only used when the panel can't be reached.

const FALLBACK_IMAGE =
	'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const siteUrl = config =>
	config?.seo?.canonicalDomain ? `https://${config.seo.canonicalDomain}` : defaultSEO.siteUrl;

const robotsOf = ({ index = true, follow = true, maxSnippet = -1, maxImagePreview = 'large', noArchive, noImageIndex } = {}) => ({
	index,
	follow,
	nocache: noArchive || undefined,
	googleBot: {
		index,
		follow,
		noimageindex: noImageIndex || undefined,
		'max-video-preview': -1,
		'max-image-preview': maxImagePreview,
		'max-snippet': maxSnippet,
	},
});

// Every page's defaults — used by the root layout
export async function siteMetadata() {
	const site = await getSite();
	const s = site?.settings || {};
	const config = site?.config || {};

	const name = s.siteName || defaultSEO.siteName;
	const title = s.metaTitle || defaultSEO.title;
	const description = s.metaDescription || defaultSEO.description;
	const image = s.ogImage || FALLBACK_IMAGE;
	const favicon = s.favicon || '/favicon.ico';
	const indexing = config.seo?.indexing !== false;

	return {
		metadataBase: new URL(siteUrl(config)),
		title: { default: title, template: s.titleTemplate || `%s | ${name}` },
		description,
		keywords: s.keywords?.length ? s.keywords : defaultSEO.keywords,
		authors: [{ name: defaultSEO.author }],
		creator: defaultSEO.author,
		publisher: name,
		formatDetection: { email: false, address: false, telephone: false },
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url: '/',
			siteName: name,
			title,
			description,
			images: [{ url: image, width: 1260, height: 750, alt: name }],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			creator: '@thinkcrypt',
			images: [image],
		},
		robots: robotsOf({ index: indexing, follow: indexing }),
		icons: { icon: favicon, shortcut: favicon, apple: favicon },
		verification: {
			google: config.seo?.googleVerification || undefined,
			other: config.seo?.bingVerification ? { 'msvalidate.01': config.seo.bingVerification } : undefined,
		},
	};
}

// One page's SEO from Website → SEO, on top of the defaults
export async function pageMetadata(path) {
	const [site, data] = await Promise.all([getSite(), getPage(path)]);
	const s = site?.settings || {};
	const config = site?.config || {};
	const seo = data?.seo || {};
	const v = seo.seo || {}; // the full SEO record (social, robots, canonical)

	const name = s.siteName || defaultSEO.siteName;
	const pageTitle = seo.title || (path === '/' ? s.metaTitle || defaultSEO.title : '');
	// Titles that already carry the site's name (and the home page's) skip the "%s | Thinkcrypt" template
	const shownTitle = pageTitle
		? path === '/' || pageTitle.includes(name)
			? pageTitle
			: (s.titleTemplate || `%s | ${name}`).replace('%s', pageTitle)
		: s.metaTitle || defaultSEO.title;

	const description = seo.description || s.metaDescription || defaultSEO.description;
	const image = seo.image || s.ogImage || FALLBACK_IMAGE;
	const keywords = v.keywords?.length ? v.keywords : seo.keywords?.length ? seo.keywords : undefined;
	const indexing = config.seo?.indexing !== false;
	const index = indexing && !seo.noIndex && v.robots?.index !== false;

	return {
		...(pageTitle ? { title: { absolute: shownTitle } } : {}),
		description,
		...(keywords ? { keywords } : {}),
		alternates: { canonical: v.canonicalUrl || seo.canonical || path },
		openGraph: {
			type: v.ogType || 'website',
			locale: 'en_US',
			url: path,
			siteName: name,
			title: v.ogTitle || shownTitle,
			description: v.ogDescription || description,
			images: [{ url: image, width: 1260, height: 750, alt: v.ogImageAlt || shownTitle }],
		},
		twitter: {
			card: v.twitterCard || 'summary_large_image',
			title: v.twitterTitle || v.ogTitle || shownTitle,
			description: v.twitterDescription || v.ogDescription || description,
			creator: '@thinkcrypt',
			images: [v.twitterImage || image],
		},
		robots: robotsOf({ ...v.robots, index, follow: indexing && v.robots?.follow !== false }),
	};
}
