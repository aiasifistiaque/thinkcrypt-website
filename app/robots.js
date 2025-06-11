export default function robots() {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thinkcrypt.dev';

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/admin/', '/api/', '/_next/', '/private/'],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
