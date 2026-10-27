import { cache } from 'react';
import { getSite, mint } from './mint';

// What every page shares, from the Mint panel: the contact details and social links (Site setup), the
// products (Products — their own page here, or their website) and the WhatsApp button (the content
// "whatsapp" under Contents → Site: its link is the number, its text the message the chat starts with,
// its heading the button's label; hide it in the panel and the button goes). Read by the footer and the
// WhatsApp button through SiteInfoProvider.
const SOCIALS = [
	['facebook', 'Facebook'],
	['instagram', 'Instagram'],
	['linkedin', 'LinkedIn'],
	['x', 'X'],
	['youtube', 'YouTube'],
	['tiktok', 'TikTok'],
	['pinterest', 'Pinterest'],
];

// Shown only when the panel can't be reached
const seed = {
	phone: '+8801828398225',
	email: 'connect@thinkcrypt.dev',
	address: 'Flat 5B, House 88, Road 17/A, Block E, Banani, Dhaka 1213, Bangladesh',
	socials: [
		{ name: 'Facebook', href: 'https://www.facebook.com/thinkcrypt/' },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/thinkcrypt-io/' },
	],
	products: [],
	whatsapp: { number: '+8801828398225', message: '', label: 'Chat with us on WhatsApp' },
};

export const getSiteInfo = cache(async () => {
	const [site, products, whatsapp] = await Promise.all([
		getSite(),
		mint('/products?sort=order&limit=20'),
		mint('/web-contents/by-slug/whatsapp'),
	]);
	if (!site?.settings) return seed;
	const s = site.settings;
	const w = whatsapp?.isVisible !== false ? whatsapp?.block?.[0] : null;
	const number = w?.buttonUrl || (w && s.whatsapp);
	return {
		phone: s.phone || '',
		email: s.email || '',
		address: s.address || '',
		socials: SOCIALS.filter(([key]) => s[key]).map(([key, name]) => ({ name, href: s[key] })),
		products: (products?.doc || [])
			.filter(p => p.pagePath || p.productUrl)
			.map(p => ({ name: p.name, href: p.pagePath || p.productUrl })),
		whatsapp: number ? { number, message: w.text || '', label: w.heading || w.buttonLabel || 'WhatsApp' } : null,
	};
});
