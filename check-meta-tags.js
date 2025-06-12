const { chromium } = require('playwright');

async function checkMetaTags(url) {
	const browser = await chromium.launch();
	const page = await browser.newPage();

	try {
		await page.goto(url, { waitUntil: 'networkidle' });

		// Get all meta tags
		const metaTags = await page.evaluate(() => {
			const tags = {};

			// Standard meta tags
			const title = document.querySelector('title')?.textContent;
			if (title) tags.title = title;

			// Meta tags
			const metaElements = document.querySelectorAll('meta');
			metaElements.forEach(meta => {
				if (meta.name) {
					tags[`meta:${meta.name}`] = meta.content;
				} else if (meta.property) {
					tags[`property:${meta.property}`] = meta.content;
				} else if (meta.httpEquiv) {
					tags[`http-equiv:${meta.httpEquiv}`] = meta.content;
				}
			});

			// Link tags
			const linkElements = document.querySelectorAll('link[rel]');
			linkElements.forEach(link => {
				if (link.rel === 'canonical') {
					tags['canonical'] = link.href;
				} else if (link.rel === 'icon' || link.rel === 'shortcut icon') {
					tags['favicon'] = link.href;
				}
			});

			return tags;
		});

		console.log('\n=== SEO ANALYSIS ===');
		console.log(`URL: ${url}\n`);

		// Core SEO elements
		console.log('📝 BASIC SEO:');
		console.log(`Title: ${metaTags.title || 'NOT SET'}`);
		console.log(`Description: ${metaTags['meta:description'] || 'NOT SET'}`);
		console.log(`Keywords: ${metaTags['meta:keywords'] || 'NOT SET'}`);
		console.log(`Canonical: ${metaTags.canonical || 'NOT SET'}`);

		// OpenGraph
		console.log('\n📱 OPENGRAPH:');
		console.log(`og:title: ${metaTags['property:og:title'] || 'NOT SET'}`);
		console.log(`og:description: ${metaTags['property:og:description'] || 'NOT SET'}`);
		console.log(`og:image: ${metaTags['property:og:image'] || 'NOT SET'}`);
		console.log(`og:url: ${metaTags['property:og:url'] || 'NOT SET'}`);
		console.log(`og:type: ${metaTags['property:og:type'] || 'NOT SET'}`);

		// Twitter Cards
		console.log('\n🐦 TWITTER:');
		console.log(`twitter:card: ${metaTags['meta:twitter:card'] || 'NOT SET'}`);
		console.log(`twitter:title: ${metaTags['meta:twitter:title'] || 'NOT SET'}`);
		console.log(`twitter:description: ${metaTags['meta:twitter:description'] || 'NOT SET'}`);
		console.log(`twitter:image: ${metaTags['meta:twitter:image'] || 'NOT SET'}`);

		// Article specific (for blog posts)
		console.log('\n📰 ARTICLE:');
		console.log(`article:author: ${metaTags['property:article:author'] || 'NOT SET'}`);
		console.log(
			`article:published_time: ${metaTags['property:article:published_time'] || 'NOT SET'}`
		);
		console.log(
			`article:modified_time: ${metaTags['property:article:modified_time'] || 'NOT SET'}`
		);
		console.log(`article:section: ${metaTags['property:article:section'] || 'NOT SET'}`);

		// Technical SEO
		console.log('\n⚙️ TECHNICAL:');
		console.log(`viewport: ${metaTags['meta:viewport'] || 'NOT SET'}`);
		console.log(`robots: ${metaTags['meta:robots'] || 'NOT SET'}`);
		console.log(`charset: ${metaTags['http-equiv:content-type'] || 'NOT SET'}`);

		console.log('\n=== END ANALYSIS ===\n');
	} catch (error) {
		console.error('Error checking meta tags:', error);
	} finally {
		await browser.close();
	}
}

const url = process.argv[2];
if (!url) {
	console.log('Usage: node check-meta-tags.js <URL>');
	process.exit(1);
}

checkMetaTags(url);
