export default function sitemap() {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thinkcrypt.dev';
	const currentDate = new Date().toISOString();

	// Define static pages with their priorities and change frequencies
	const staticPages = [
		{
			url: `${baseUrl}/`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 1.0,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/portfolio`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: currentDate,
			changeFrequency: 'daily',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/team`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/clients`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/startup`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/web-development`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/business-solution`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/techstacks`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/course`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
	];

	return staticPages;
}
