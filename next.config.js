/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		// Enable modern features while keeping Pages Router
		scrollRestoration: false,
		// Enable ES modules support
		esmExternals: true,
	},
	// Turbopack configuration (moved out of experimental)
	turbo: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
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
	// Webpack configuration for better module resolution
	webpack: (config, { isServer }) => {
		// Handle ES modules properly
		config.resolve.extensionAlias = {
			'.js': ['.ts', '.tsx', '.js', '.jsx'],
		};

		// Ensure proper module resolution
		config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false,
			path: false,
			os: false,
		};

		return config;
	},
	// Optimize for production
	poweredByHeader: false,
	compress: true,
};

module.exports = nextConfig;
