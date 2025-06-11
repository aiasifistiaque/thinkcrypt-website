export default function RobotsTxt() {
	// This component will never be rendered
	return null;
}

export async function getServerSideProps({ res }) {
	// Get the current domain from environment or default
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thinkcrypt.dev';

	const robotsTxt = `# Robots.txt for ThinkCrypt - Software Development Company
# Website: ${baseUrl}

# Allow all search engines to crawl the site
User-agent: *
Allow: /

# Block access to admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /.well-known/

# Block crawling of search and filter pages to avoid duplicate content
Disallow: /search
Disallow: /*?category=*
Disallow: /*?filter=*
Disallow: /*?sort=*
Disallow: /*?page=*

# Allow crawling of specific important paths
Allow: /api/portfolio$
Allow: /api/blog$

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional - helps with server load)
Crawl-delay: 1

# Specific rules for major search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Block specific bot types that might not be useful
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /
`;

	// Set content type for robots.txt
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400'); // Cache for 1 day

	// Write robots.txt content
	res.write(robotsTxt);
	res.end();

	return {
		props: {},
	};
}
