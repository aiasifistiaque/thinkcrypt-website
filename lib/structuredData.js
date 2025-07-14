// Structured data generators for SEO and search engines

// Organization structured data for the company
export const getOrganizationStructuredData = () => {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'ThinkCrypt',
		alternateName: 'ThinkCrypt Technologies',
		url: 'https://thinkcrypt.dev',
		logo: 'https://thinkcrypt.dev/logo.png',
		description:
			'Transform Your Ideas Into Digital Reality - Full Stack Development, MVP Development, and Custom Software Solutions',
		foundingDate: '2020',
		numberOfEmployees: '10-50',
		slogan: 'Transform Your Ideas Into Digital Reality',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'BD',
			addressRegion: 'Dhaka',
			addressLocality: 'Dhaka',
			streetAddress: 'Dhaka, Bangladesh',
		},
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer service',
			areaServed: 'BD',
			availableLanguage: ['English', 'Bengali'],
			telephone: '+8801828398225',
			email: 'connect@thinkcrypt.dev',
		},
		sameAs: [
			'https://www.linkedin.com/company/thinkcrypt',
			'https://github.com/thinkcrypt',
			'https://twitter.com/thinkcrypt',
		],
		services: [
			'Software Development',
			'MVP Development',
			'Ecommerce Development',
			'Web Application Development',
			'Mobile App Development',
			'CMS Development',
			'ERP Development',
			'Inventory Management Systems',
			'SAAS Development',
			'Custom Software Solutions',
		],
		technology: [
			'Node.js',
			'React',
			'Next.js',
			'MongoDB',
			'Laravel',
			'Express.js',
			'JavaScript',
			'TypeScript',
			'Python',
			'PHP',
		],
		industry: 'Software Development',
		keywords:
			'software development, web development, mobile app development, MVP development, SAAS development, custom software, Bangladesh',
	};
};

// Website structured data for search engines
export const getWebsiteStructuredData = () => {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'ThinkCrypt - Transform Your Ideas Into Digital Reality',
		alternateName: 'ThinkCrypt Technologies',
		url: 'https://thinkcrypt.dev',
		description:
			'Professional software development company specializing in MVP development, web applications, mobile apps, and custom software solutions.',
		publisher: {
			'@type': 'Organization',
			name: 'ThinkCrypt',
			url: 'https://thinkcrypt.dev',
			logo: 'https://thinkcrypt.dev/logo.png',
		},
		potentialAction: {
			'@type': 'SearchAction',
			target: 'https://thinkcrypt.dev/search?q={search_term_string}',
			'query-input': 'required name=search_term_string',
		},
		mainEntity: {
			'@type': 'Organization',
			name: 'ThinkCrypt',
		},
		keywords:
			'software development, web development, mobile development, MVP, SAAS, custom software, technology solutions, Bangladesh',
		inLanguage: 'en-US',
		copyrightYear: '2020',
		copyrightHolder: {
			'@type': 'Organization',
			name: 'ThinkCrypt',
		},
	};
};

// Local business structured data for location-based searches
export const getLocalBusinessStructuredData = () => {
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': 'https://thinkcrypt.dev/#localbusiness',
		name: 'ThinkCrypt',
		alternateName: 'ThinkCrypt Technologies',
		description:
			'Leading software development company in Bangladesh specializing in custom software solutions, MVP development, and digital transformation.',
		url: 'https://thinkcrypt.dev',
		telephone: '+880-1234-567890',
		email: 'hello@thinkcrypt.io',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Dhaka',
			addressLocality: 'Dhaka',
			addressRegion: 'Dhaka',
			postalCode: '1000',
			addressCountry: 'BD',
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: '23.8103',
			longitude: '90.4125',
		},
		openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-16:00'],
		priceRange: '$$',
		currenciesAccepted: 'BDT, USD',
		paymentAccepted: 'Cash, Credit Card, Bank Transfer',
		areaServed: {
			'@type': 'Country',
			name: 'Bangladesh',
		},
		serviceArea: {
			'@type': 'GeoCircle',
			geoMidpoint: {
				'@type': 'GeoCoordinates',
				latitude: '23.8103',
				longitude: '90.4125',
			},
			geoRadius: '50000',
		},
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Software Development Services',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'MVP Development',
						description: 'Rapid prototyping and minimum viable product development',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Web Application Development',
						description: 'Custom web applications using modern technologies',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Mobile App Development',
						description: 'Native and cross-platform mobile applications',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'E-commerce Development',
						description: 'Complete e-commerce solutions and online stores',
					},
				},
			],
		},
		sameAs: [
			'https://www.linkedin.com/company/thinkcrypt',
			'https://github.com/thinkcrypt',
			'https://twitter.com/thinkcrypt',
		],
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: '4.9',
			reviewCount: '50',
			bestRating: '5',
			worstRating: '1',
		},
		founder: {
			'@type': 'Person',
			name: 'ThinkCrypt Team',
		},
		foundingDate: '2020',
		knowsAbout: [
			'Software Development',
			'Web Development',
			'Mobile Development',
			'MVP Development',
			'SAAS Development',
			'E-commerce',
			'Custom Software',
			'Digital Transformation',
		],
	};
};

// Breadcrumb structured data generator
export const getBreadcrumbStructuredData = items => {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
};

// Article structured data generator for blog posts
export const getArticleStructuredData = article => {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: article.title,
		description: article.excerpt,
		image: article.featuredImage,
		author: {
			'@type': 'Person',
			name: article.author,
			image: article.authorImage,
		},
		publisher: {
			'@type': 'Organization',
			name: 'ThinkCrypt',
			logo: {
				'@type': 'ImageObject',
				url: 'https://thinkcrypt.devs/logo.png',
			},
		},
		datePublished: article.publishedAt,
		dateModified: article.publishedAt,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://thinkcrypt.dev/blog/${article.slug}`,
		},
		keywords: article.tags?.join(', '),
		articleSection: article.category,
		wordCount: article.content?.length || 0,
		timeRequired: article.readTime,
	};
};

// Service structured data generator
export const getServiceStructuredData = service => {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: service.name,
		description: service.description,
		provider: {
			'@type': 'Organization',
			name: 'ThinkCrypt',
			url: 'https://thinkcrypt.dev',
		},
		areaServed: {
			'@type': 'Country',
			name: 'Bangladesh',
		},
		serviceType: service.category || 'Software Development',
		offers: {
			'@type': 'Offer',
			priceCurrency: 'USD',
			price: service.price || 'Contact for Quote',
			priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
		},
	};
};

// FAQ structured data generator
export const getFAQStructuredData = faqs => {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map(faq => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};
};

// Default export object with all functions
export default {
	getOrganizationStructuredData,
	getWebsiteStructuredData,
	getLocalBusinessStructuredData,
	getBreadcrumbStructuredData,
	getArticleStructuredData,
	getServiceStructuredData,
	getFAQStructuredData,
};
