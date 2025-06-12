#!/usr/bin/env node

const https = require('https');
const http = require('http');
const { URL } = require('url');

async function checkMetaTags(url) {
	return new Promise((resolve, reject) => {
		const parsedUrl = new URL(url);
		const protocol = parsedUrl.protocol === 'https:' ? https : http;

		const options = {
			hostname: parsedUrl.hostname,
			port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
			path: parsedUrl.pathname + parsedUrl.search,
			method: 'GET',
			headers: {
				'User-Agent': 'Mozilla/5.0 (compatible; SEO-checker/1.0)',
				Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
			},
		};

		const req = protocol.request(options, res => {
			let data = '';

			res.on('data', chunk => {
				data += chunk;
			});

			res.on('end', () => {
				resolve(data);
			});
		});

		req.on('error', error => {
			reject(error);
		});

		req.setTimeout(10000, () => {
			req.destroy();
			reject(new Error('Request timeout'));
		});

		req.end();
	});
}

function extractMetaTags(html) {
	const metaTags = {};

	// Extract title
	const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
	if (titleMatch) {
		metaTags.title = titleMatch[1].trim();
	}

	// Extract meta tags
	const metaRegex = /<meta\s+([^>]+)>/gi;
	let match;

	while ((match = metaRegex.exec(html)) !== null) {
		const attrs = match[1];

		// Parse attributes
		const nameMatch = attrs.match(/name=["']([^"']+)["']/i);
		const propertyMatch = attrs.match(/property=["']([^"']+)["']/i);
		const contentMatch = attrs.match(/content=["']([^"']*?)["']/i);

		if (contentMatch) {
			const content = contentMatch[1];

			if (nameMatch) {
				metaTags[nameMatch[1]] = content;
			} else if (propertyMatch) {
				metaTags[propertyMatch[1]] = content;
			}
		}
	}

	return metaTags;
}

function displayMetaTags(metaTags, url) {
	console.log(`\n🔍 SEO Meta Tags Analysis for: ${url}\n`);
	console.log('=' * 80);

	// Basic Meta Tags
	console.log('\n📄 BASIC META TAGS:');
	console.log('-'.repeat(40));
	console.log(`Title: ${metaTags.title || 'NOT FOUND'}`);
	console.log(`Description: ${metaTags.description || 'NOT FOUND'}`);
	console.log(`Keywords: ${metaTags.keywords || 'NOT FOUND'}`);
	console.log(`Author: ${metaTags.author || 'NOT FOUND'}`);
	console.log(`Robots: ${metaTags.robots || 'NOT FOUND'}`);

	// Open Graph Tags
	console.log('\n📱 OPEN GRAPH (Facebook/LinkedIn):');
	console.log('-'.repeat(40));
	console.log(`og:title: ${metaTags['og:title'] || 'NOT FOUND'}`);
	console.log(`og:description: ${metaTags['og:description'] || 'NOT FOUND'}`);
	console.log(`og:type: ${metaTags['og:type'] || 'NOT FOUND'}`);
	console.log(`og:url: ${metaTags['og:url'] || 'NOT FOUND'}`);
	console.log(`og:image: ${metaTags['og:image'] || 'NOT FOUND'}`);
	console.log(`og:site_name: ${metaTags['og:site_name'] || 'NOT FOUND'}`);

	// Twitter Cards
	console.log('\n🐦 TWITTER CARDS:');
	console.log('-'.repeat(40));
	console.log(`twitter:card: ${metaTags['twitter:card'] || 'NOT FOUND'}`);
	console.log(`twitter:title: ${metaTags['twitter:title'] || 'NOT FOUND'}`);
	console.log(`twitter:description: ${metaTags['twitter:description'] || 'NOT FOUND'}`);
	console.log(`twitter:image: ${metaTags['twitter:image'] || 'NOT FOUND'}`);
	console.log(`twitter:creator: ${metaTags['twitter:creator'] || 'NOT FOUND'}`);

	// Article specific (for blogs)
	console.log('\n📝 ARTICLE META (Blog Specific):');
	console.log('-'.repeat(40));
	console.log(`article:published_time: ${metaTags['article:published_time'] || 'NOT FOUND'}`);
	console.log(`article:modified_time: ${metaTags['article:modified_time'] || 'NOT FOUND'}`);
	console.log(`article:author: ${metaTags['article:author'] || 'NOT FOUND'}`);
	console.log(`article:section: ${metaTags['article:section'] || 'NOT FOUND'}`);

	console.log('\n' + '=' * 80);
}

// Main execution
const url = process.argv[2];
if (!url) {
	console.log('Usage: node check-meta.js <URL>');
	process.exit(1);
}

checkMetaTags(url)
	.then(html => {
		const metaTags = extractMetaTags(html);
		displayMetaTags(metaTags, url);
	})
	.catch(error => {
		console.error('Error fetching URL:', error.message);
		process.exit(1);
	});
