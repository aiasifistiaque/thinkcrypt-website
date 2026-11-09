// The home page's second section as the Mint panel was seeded with it (content "about-us" on "/").
// The site shows it only when the panel can't be reached; the panel's own copy wins otherwise.
export const homeAboutSeed = {
	slug: 'about-us',
	type: 'section',
	data: {
		eyebrow: 'Our vision',
		heading: 'We started\nback in 2017_',
		text: 'Thinkcrypt was founded in 2017 to help entrepreneurs turn their ideas into reality using modern technology. We aimed to bridge the gap between vision and execution by delivering smart, cost-efficient digital solutions.\n\nToday, we build scalable platforms and custom tools that streamline workflows and drive growth. From MVPs to full systems, we handle the tech so businesses can focus on reaching their goals.',
		buttonLabel: 'About us',
		buttonUrl: '/about',
	},
};

// The "Our Digital Expertise" section as the Mint panel was seeded with it (content "expertise" on
// "/": heading, text, items = the cards: title + description).
export const homeExpertiseSeed = {
	slug: 'expertise',
	type: 'cards',
	data: {
		heading: 'Our Digital Expertise',
		text: 'Six kinds of software we design, build and look after. Each one comes with its own admin panel, so your team runs it after launch.',
		items: [
			{ title: 'E-commerce & POS', description: 'Online stores that sell around the clock: catalogue, cart, checkout and couriers, plus a till for your counter, all on one stock.' },
			{ title: 'Business websites', description: 'Fast, custom websites that turn visitors into enquiries, with SEO on every page and a panel to change every word and picture yourself.' },
			{ title: 'Web apps & portals', description: 'Member portals, booking systems and SaaS with sign-in, roles and dashboards, built to grow with your business.' },
			{ title: 'AI agents & automation', description: 'Assistants that read your data and act on it, and workflows that send the emails, update the records and end the copy-paste.' },
			{ title: 'ERP, CRM & dashboards', description: 'Sales, stock, accounts and people in one system, shaped around how your team already works, with reports you can trust.' },
			{ title: 'Mobile apps', description: 'iOS and Android apps on the same backend as your website and panel, so orders, customers and stock stay in sync.' },
		],
	},
};
