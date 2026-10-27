// Structured data (schema.org) for search engines. Names, contacts and socials come from
// the Mint panel (Site setup); the facts below are the fallbacks and the parts the panel doesn't hold.

const SERVICES = [
	['AI Software Development', 'AI-first products: LLM apps, AI agents, chatbots and AI features built into your software.'],
	['AI Automation', 'Business process and workflow automation with AI agents, integrations and internal tools.'],
	['Custom Software Development', 'Bespoke web, mobile and SaaS software built around how your business works.'],
	['MVP Development', 'From idea to a launched, user-tested MVP for startups in weeks.'],
	['Web Development', 'Fast, SEO-ready websites and web apps with Next.js, React and Node.js.'],
	['Mobile App Development', 'iOS and Android apps for customers and teams.'],
	['Ecommerce, ERP & POS Systems', 'Online stores, inventory, POS and ERP systems, including Mint.'],
];

const sameAsOf = s =>
	[s.linkedin, s.facebook, s.x, s.instagram, s.youtube, 'https://github.com/thinkcrypt'].filter(Boolean);

export function siteJsonLd(site) {
	const s = site?.settings || {};
	const domain = site?.config?.seo?.canonicalDomain || 'www.thinkcrypt.dev';
	const url = `https://${domain}`;
	const org = `${url}/#organization`;

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': ['Organization', 'ProfessionalService'],
				'@id': org,
				name: s.siteName || 'Thinkcrypt',
				alternateName: ['ThinkCrypt', 'Thinkcrypt.io'],
				url,
				logo: { '@type': 'ImageObject', url: `${url}/favicon.png`, width: 1280, height: 1280 },
				image: s.ogImage || undefined,
				description: s.metaDescription || undefined,
				slogan: s.tagline || 'AI-first software development agency',
				foundingDate: '2017',
				email: s.email || 'connect@thinkcrypt.dev',
				telephone: (s.phone || '+8801828398225').split(',')[0].trim(),
				priceRange: '$$',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Flat 5B, House 88, Road 17/A, Block E, Banani',
					addressLocality: 'Dhaka',
					postalCode: '1213',
					addressCountry: 'BD',
				},
				areaServed: 'Worldwide',
				knowsAbout: [
					'Artificial intelligence',
					'AI agents',
					'Large language models',
					'Model Context Protocol (MCP)',
					'Business process automation',
					'Custom software development',
					'SaaS development',
					'Next.js',
					'React',
					'Node.js',
					'MongoDB',
				],
				sameAs: sameAsOf(s),
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: 'Software, AI and automation services',
					itemListElement: SERVICES.map(([name, description]) => ({
						'@type': 'Offer',
						itemOffered: { '@type': 'Service', name, description, provider: { '@id': org } },
					})),
				},
				owns: { '@id': `${url}/mint#software` },
			},
			{
				'@type': 'WebSite',
				'@id': `${url}/#website`,
				name: s.siteName || 'Thinkcrypt',
				url,
				inLanguage: 'en',
				publisher: { '@id': org },
			},
		],
	};
}

// Mint — Thinkcrypt's own platform, on /mint
export function mintJsonLd(site) {
	const domain = site?.config?.seo?.canonicalDomain || 'www.thinkcrypt.dev';
	const url = `https://${domain}`;
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		'@id': `${url}/mint#software`,
		name: 'Mint',
		alternateName: 'Mint by Thinkcrypt',
		url: 'https://mintapp.shop',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		description:
			'Mint is an AI-ready business platform by Thinkcrypt: backend as a service with an advanced admin panel, websites, APIs, ecommerce, POS and inventory — built from blocks or by your own AI over MCP.',
		publisher: { '@id': `${url}/#organization` },
		featureList: [
			'Admin panel and back-office tools',
			'Backend as a service and public APIs',
			'Website and CMS',
			'Ecommerce, POS and inventory',
			'Automations and workflows',
			'Build with your own AI over MCP',
		],
	};
}

// <script type="application/ld+json"> body, safe to inline
export const ldScript = data => ({ __html: JSON.stringify(data).replace(/</g, '\\u003c') });

const originOf = site => `https://${site?.config?.seo?.canonicalDomain || 'www.thinkcrypt.dev'}`;

// A service page (/website-development, /business-software): the service, its questions and
// breadcrumbs, from the page's panel sections
function servicePageJsonLd(site, sections, { path, name, serviceType, catalog, crumb }) {
	const origin = originOf(site);
	const url = `${origin}${path}`;
	const of = slug => sections.find(s => s.slug === slug)?.data || {};
	const hero = sections.find(s => s.type === 'hero')?.data || {};
	const features = [...(of('features').items || []), ...(of('more-features').items || [])];
	const faq = sections.find(s => s.type === 'faq')?.data?.items?.filter(q => q.title && q.description) || [];

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				'@id': `${url}#service`,
				name,
				serviceType,
				description: hero.text,
				image: hero.image,
				url,
				provider: { '@id': `${origin}/#organization` },
				areaServed: 'Worldwide',
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: catalog,
					itemListElement: features.map(f => ({
						'@type': 'Offer',
						itemOffered: { '@type': 'Service', name: f.title, description: f.description },
					})),
				},
			},
			faq.length && {
				'@type': 'FAQPage',
				'@id': `${url}#faq`,
				mainEntity: faq.map(q => ({
					'@type': 'Question',
					name: q.title,
					acceptedAnswer: { '@type': 'Answer', text: q.description },
				})),
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
					{ '@type': 'ListItem', position: 2, name: crumb, item: url },
				],
			},
		].filter(Boolean),
	};
}

export const websiteDevelopmentJsonLd = (site, sections) =>
	servicePageJsonLd(site, sections, {
		path: '/website-development',
		name: 'Website development with your own CMS',
		serviceType: 'Website development',
		catalog: 'Included in every website',
		crumb: 'Website development',
	});

export const businessSoftwareJsonLd = (site, sections) =>
	servicePageJsonLd(site, sections, {
		path: '/business-software',
		name: 'Custom ERP, CRM and business software development',
		serviceType: 'Custom business software development',
		catalog: 'Included in every system',
		crumb: 'Business software',
	});

// /products: Thinkcrypt's own products (Mint panel → Products) and breadcrumbs
export const servicesJsonLd = (site, sections) =>
	servicePageJsonLd(site, sections, {
		path: '/services',
		name: 'Software development, AI and automation services',
		serviceType: 'Custom software development',
		catalog: 'Our services',
		crumb: 'Services',
	});

export function productsJsonLd(site, sections) {
	const origin = originOf(site);
	const url = `${origin}/products`;
	const products = sections.find(s => s.type === 'list' && s.data.source === 'products')?.records || [];
	return {
		'@context': 'https://schema.org',
		'@graph': [
			products.length && {
				'@type': 'ItemList',
				'@id': `${url}#products`,
				itemListElement: products.map((p, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					item: {
						'@type': 'SoftwareApplication',
						name: p.name,
						description: p.summary,
						image: p.image,
						url: p.productUrl,
						applicationCategory: 'BusinessApplication',
						operatingSystem: 'Web',
						publisher: { '@id': `${origin}/#organization` },
					},
				})),
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
					{ '@type': 'ListItem', position: 2, name: 'Products', item: url },
				],
			},
		].filter(Boolean),
	};
}

const breadcrumbs = (origin, ...crumbs) => ({
	'@type': 'BreadcrumbList',
	itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
		'@type': 'ListItem',
		position: i + 1,
		name: c.name,
		item: `${origin}${c.path}`,
	})),
});

// /about: an AboutPage about the organization, from the page's panel sections
export function aboutJsonLd(site, sections) {
	const origin = originOf(site);
	const hero = sections.find(s => s.type === 'hero')?.data || {};
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'AboutPage',
				'@id': `${origin}/about#page`,
				url: `${origin}/about`,
				name: 'About Thinkcrypt',
				description: hero.text,
				image: hero.image,
				about: { '@id': `${origin}/#organization` },
				isPartOf: { '@id': `${origin}/#website` },
			},
			breadcrumbs(origin, { name: 'About us', path: '/about' }),
		],
	};
}

// /products/<slug>: one product (Mint panel → Products) with its page's questions
export function productPageJsonLd(site, sections, product, path) {
	const origin = originOf(site);
	const hero = sections.find(s => s.type === 'hero')?.data || {};
	const faq = sections.find(s => s.type === 'faq')?.data?.items?.filter(q => q.title && q.description) || [];
	const name = product?.name || hero.eyebrow;
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'SoftwareApplication',
				'@id': `${origin}${path}#software`,
				name,
				description: product?.summary || hero.text,
				image: product?.image || hero.image,
				url: `${origin}${path}`,
				sameAs: product?.productUrl || undefined,
				applicationCategory: 'BusinessApplication',
				operatingSystem: 'Web',
				publisher: { '@id': `${origin}/#organization` },
			},
			faq.length && {
				'@type': 'FAQPage',
				'@id': `${origin}${path}#faq`,
				mainEntity: faq.map(q => ({
					'@type': 'Question',
					name: q.title,
					acceptedAnswer: { '@type': 'Answer', text: q.description },
				})),
			},
			breadcrumbs(origin, { name: 'Products', path: '/products' }, { name, path }),
		].filter(Boolean),
	};
}
