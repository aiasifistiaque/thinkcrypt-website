/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		// Enable modern features while keeping Pages Router
		scrollRestoration: false,
		// Enable Turbopack for faster development builds
		turbo: {
			// Turbopack configuration
			rules: {
				'*.svg': {
					loaders: ['@svgr/webpack'],
					as: '*.js',
				},
			},
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	// Optimize for production
	poweredByHeader: false,
	compress: true,
};

module.exports = nextConfig;
