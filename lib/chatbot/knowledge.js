// What the chatbot knows, put together on the server and kept for 5 minutes:
// - the articles in the Mint panel (Thinkcrypt Website → Chatbot → Chatbot knowledge): edit them to teach the bot
// - Thinkcrypt's products (Products) and contact details (Site setup)
// - Easy Instant Commerce prices (lib/easyCommerce.js)
// - Commerce OS live from its own project: features, plans, build options and demo stores
import { mint } from '../mint';
import { getSiteInfo } from '../siteInfo';
import { PLANS, DESIGNS, BUILD_MAX, taka } from '../easyCommerce';
import { SERVICES } from '../jsonLd';
import { knowledgeArticles, storeReady } from './store';

const CO_API = process.env.COMMERCE_OS_API;
const CO_KEY = process.env.COMMERCE_OS_API_KEY;
const TTL = 5 * 60 * 1000;
let cached = { at: 0, text: '' };

const plain = html =>
	String(html || '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/\s+/g, ' ')
		.trim();

async function commerceOs(route) {
	if (!CO_API || !CO_KEY) return [];
	const all = [];
	for (let page = 1; page <= 5; page++) {
		const res = await fetch(`${CO_API}/${route}?apiKey=${CO_KEY}&limit=100&page=${page}&sort=order`, { cache: 'no-store' }).catch(() => null);
		const out = res?.ok ? await res.json().catch(() => null) : null;
		all.push(...(out?.doc || []));
		if (!out || page >= (out.totalPages || 1)) break;
	}
	return all.filter(d => d.isActive !== false);
}

async function commerceOsText() {
	const [features, plans, builds, demos] = await Promise.all(
		['features', 'plans', 'build-options', 'demo-stores'].map(r => commerceOs(r).catch(() => [])),
	);
	if (!features.length && !plans.length) return '';
	const lines = ['## Commerce OS (website: https://commerce.tcrypt.site — sells Instant Commerce, a ready online store)'];
	if (plans.length) {
		lines.push('### Hosting plans (per month, domain not included)');
		for (const p of plans)
			lines.push(`- ${p.name}: ${taka(p.pricePerMonth)} BDT/month. ${p.products ? `${p.products} products, ${p.images} images.` : 'No limits.'} ${p.note || ''}`.trim());
	}
	if (builds.length) {
		lines.push('### One-time website build');
		for (const b of builds)
			lines.push(`- ${b.label}: ${taka(b.price)}${b.priceMax ? ` to ${taka(b.priceMax)}` : ''} BDT. ${b.note || ''}`.trim());
	}
	if (features.length) {
		lines.push('### Features');
		for (const f of features)
			lines.push(`- ${f.name}${f.tagline ? ` (${f.tagline})` : ''}: ${plain(f.summary)}${f.points?.length ? ` Points: ${f.points.join(', ')}.` : ''}`);
	}
	if (demos.length) {
		lines.push('### Demo stores (live sites people can try)');
		for (const d of demos)
			lines.push(`- ${d.name} (${d.kind}): ${d.siteUrl}. ${plain(d.summary)}${d.demoUrl ? ` Try the store panel: ${d.demoUrl}` : ''}`);
	}
	return lines.join('\n');
}

async function build() {
	const [articles, site, products, co] = await Promise.all([
		storeReady() ? knowledgeArticles().catch(() => []) : [],
		getSiteInfo().catch(() => null),
		mint('/products?sort=order&limit=20').catch(() => null),
		commerceOsText().catch(() => ''),
	]);
	const parts = [];
	const byTopic = topic => articles.filter(a => (a.topic || 'thinkcrypt') === topic);

	const rules = byTopic('rules');
	if (rules.length) parts.push(`## Extra rules from the team\n${rules.map(a => `### ${a.title}\n${a.content}`).join('\n\n')}`);

	parts.push(
		`## Thinkcrypt services (www.thinkcrypt.dev, an AI-first software agency in Dhaka, Bangladesh)\n${SERVICES.map(([n, d]) => `- ${n}: ${d}`).join('\n')}`,
	);
	const prods = products?.doc || [];
	if (prods.length)
		parts.push(
			`## Thinkcrypt's own products\n${prods
				.map(p => `- ${p.name}${p.tagline ? ` (${p.tagline})` : ''}: ${plain(p.summary)}${p.features?.length ? ` Features: ${p.features.map(f => (typeof f === 'string' ? f : f?.title || f?.name || '')).filter(Boolean).join(', ')}.` : ''}${p.productUrl ? ` Link: ${p.productUrl}` : p.pagePath ? ` Page: https://www.thinkcrypt.dev${p.pagePath}` : ''}`)
				.join('\n')}`,
		);

	parts.push(
		[
			'## Easy Instant Commerce (on www.thinkcrypt.dev/easy-instant-commerce; the same offer as Commerce OS)',
			'Hosting a month: ' + PLANS.map(p => `${p.name} ${taka(p.price)} BDT (${p.products === Infinity ? 'unlimited products and images' : `${p.products} products, ${p.images} images`})`).join('; ') + '. Domain not included.',
			'Website build (one time): ' + DESIGNS.map(d => `${d.name || d.label}: ${taka(d.price)} BDT${d.note ? ` — ${d.note}` : ''}`).join('; ') + `. Custom work goes up to ${taka(BUILD_MAX)} BDT.`,
		].join('\n'),
	);
	if (co) parts.push(co);

	for (const [topic, title] of [
		['thinkcrypt', 'More about Thinkcrypt'],
		['mint', 'About Mint'],
		['commerce', 'More about Commerce OS'],
		['company', 'Company'],
	]) {
		const list = byTopic(topic);
		if (list.length) parts.push(`## ${title}\n${list.map(a => `### ${a.title}\n${a.content}`).join('\n\n')}`);
	}

	if (site)
		parts.push(
			`## Contact\nPhone and WhatsApp: ${site.whatsapp?.number || site.phone}\nEmail: ${site.email}\nOffice: ${site.address}\nContact form: https://www.thinkcrypt.dev/contact${site.socials?.length ? `\nSocials: ${site.socials.map(s => `${s.name} ${s.href}`).join(', ')}` : ''}`,
		);
	return parts.join('\n\n');
}

export async function getKnowledge() {
	if (cached.text && Date.now() - cached.at < TTL) return cached.text;
	const text = await build();
	cached = { at: Date.now(), text };
	return text;
}
