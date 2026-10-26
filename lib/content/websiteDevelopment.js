import { links } from '../constants';

// The words and pictures of /website-development and of the home page's section about it.
// They live in the Mint panel (Contents, pages "/website-development" and "/"), one typed content
// per section, found by slug. This copy is what the panel was seeded with; the site shows it only
// when the panel can't be reached.

const IMG = 'https://arewabooks.s3.us-east-2.amazonaws.com/';

export const websiteDevelopmentSeed = [
	{
		slug: 'hero',
		type: 'hero',
		data: {
			eyebrow: 'Website development',
			heading: 'Websites you\nrun yourself',
			text: 'We design and build fast, SEO-ready websites, then hand you your own CMS to run them: edit any word live, rearrange sections, build forms, track every visit and let AI update your content.',
			image: `${IMG}1793003907625_photo-1498050108023-c5249f4df085.webp`,
			imageAlt: 'A laptop showing website code on a bright desk',
			buttonLabel: 'Start your website',
			buttonUrl: links.contact,
			secondaryLabel: 'See the features',
			secondaryUrl: '#features',
			items: [
				{ title: 'CMS', subTitle: 'Your own, built in' },
				{ title: 'MCP', subTitle: 'AI edits your content' },
				{ title: '< 1 min', subTitle: 'From publish to live' },
			],
		},
	},
	{
		slug: 'what-you-get',
		type: 'cards',
		data: {
			eyebrow: 'What you get',
			heading: 'One build.\nEverything to run it.',
			text: 'Every website we deliver comes with the tools to keep it current, without calling a developer.',
			items: [
				{
					title: 'A website made for you',
					subTitle: 'Design + development',
					description:
						'A custom design in your brand, built on Next.js and React, fast on every phone and ready for Google from day one.',
				},
				{
					title: 'Your own CMS',
					subTitle: 'Run it without us',
					description:
						'Every word, picture, page and form is editable from your panel. Day-to-day changes never wait on a developer.',
				},
				{
					title: 'AI that can edit it',
					subTitle: 'MCP server built in',
					description:
						'Connect Claude or ChatGPT and ask for a new page, a rewrite or fresh SEO. Changes land as drafts for you to approve.',
				},
			],
		},
	},
	{
		slug: 'features',
		type: 'cards',
		data: {
			eyebrow: 'CMS features',
			heading: 'Everything in\nyour CMS',
			text: 'The tools big content teams use, built into every website we deliver.',
			items: [
				{
					title: 'Visual editor',
					subTitle: 'See it as you edit',
					description:
						'Edit right on the page: click a heading, change it, swap a picture and see the result before anyone else does.',
					image: `${IMG}1793003908920_photo-1586717791821-3f44a563fa4c.webp`,
				},
				{
					title: 'Live content changes',
					subTitle: 'No redeploy, no waiting',
					description:
						'Publish and the site updates within a minute. Save drafts, preview them, schedule them and roll back when you need to.',
					image: `${IMG}1793003910180_photo-1486312338219-ce68d2c6f44d.webp`,
				},
				{
					title: 'Rearrange sections',
					subTitle: 'Drag, drop, reorder',
					description:
						'Move sections up or down, hide one for a season, or add a new block (hero, cards, FAQ, gallery, video) without touching code.',
					image: `${IMG}1793003911517_photo-1531403009284-440f080d1e12.webp`,
				},
				{
					title: 'MCP server for AI content',
					subTitle: 'Your AI, your content',
					description:
						'Your CMS speaks MCP, so Claude, ChatGPT or Cursor can read and update your pages, blog posts and SEO from a plain-language request. Every change stays a draft until you publish it.',
					image: `${IMG}1793003912841_photo-1677442136019-21780ecad995.webp`,
				},
				{
					title: 'Analytics',
					subTitle: 'Know what works',
					description:
						'Page views, visitors, sources, UTM campaigns and button clicks in your own dashboard, plus Google Analytics and Meta Pixel when you want them.',
					image: `${IMG}1793003914204_photo-1460925895917-afdab827c52f.webp`,
				},
				{
					title: 'Dynamic forms',
					subTitle: 'Any form, no code',
					description:
						'Build contact, quote, booking or application forms with your own fields. Submissions land in your panel, email your team and can start automations.',
					image: `${IMG}1793003915857_photo-1484480974693-6ca0a78fb36b.webp`,
				},
				{
					title: 'SEO on every page',
					subTitle: 'Built to rank',
					description:
						'Titles, descriptions, share images, canonical links, structured data and a sitemap that updates itself, set for every page and every blog post.',
					image: `${IMG}1793003917117_photo-1551288049-bebda4e38f71.webp`,
				},
			],
		},
	},
	{
		slug: 'more-features',
		type: 'cards',
		data: {
			eyebrow: 'More features',
			heading: 'And everything\nelse you need',
			text: 'Turn on what your business needs today and add the rest as you grow.',
			items: [
				{ title: 'Media library', description: 'Folders for every image, video and document, reusable across the site.' },
				{ title: 'Blog & news', description: 'Posts with categories, cover images, view counts and their own SEO.' },
				{ title: 'Drafts & publishing', description: 'Work on changes privately, then publish now or at a set time.' },
				{ title: 'Roles & permissions', description: 'Give editors, marketers and admins exactly the access they need.' },
				{ title: 'Automations', description: 'When a form is sent or a record changes: email, notify, call a webhook or update data.' },
				{ title: 'Branded emails', description: 'Send emails from your own domain, in your own design.' },
				{ title: 'Shop & checkout', description: 'Products, cart, checkout and order history when you want to sell online.' },
				{ title: 'Customer accounts', description: 'Sign-in and sign-up for your customers, with a login for each customer type.' },
				{ title: 'Your own API', description: 'Every list on the site is available over a secure API for apps and partners.' },
				{ title: 'Dashboards', description: 'Build the dashboard your team needs from your own data.' },
				{ title: 'Invoices & PDFs', description: 'Design invoices, receipts and quotations and send them as PDFs.' },
				{ title: 'Secure by default', description: 'Two-factor sign-in, session control and a history of every change.' },
			],
		},
	},
	{
		slug: 'process',
		type: 'cards',
		data: {
			eyebrow: 'Process',
			heading: 'How we\nbuild it',
			text: 'From the first call to a site your team runs on its own.',
			items: [
				{ title: 'Discover', description: 'We learn your business, your customers and what the site has to achieve.' },
				{ title: 'Design', description: 'Wireframes, then a design in your brand that you approve page by page.' },
				{ title: 'Build', description: 'We build it in Next.js and React and connect every word to your CMS.' },
				{ title: 'Launch', description: 'Speed, SEO and analytics checks, then we go live on your domain.' },
				{ title: 'Hand over', description: 'We train your team on the CMS and stay on call for support.' },
			],
		},
	},
	{
		slug: 'tech',
		type: 'cards',
		data: {
			eyebrow: 'Tech stack',
			heading: 'Built on a modern stack',
			items: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Vercel', 'AWS', 'MCP'].map(title => ({ title })),
		},
	},
	{
		slug: 'faq',
		type: 'faq',
		data: {
			eyebrow: 'FAQ',
			heading: 'Questions',
			items: [
				{
					title: 'Can I change the website myself after launch?',
					description:
						'Yes. Every word, image, section and form is in your CMS. You can edit, rearrange, preview and publish without a developer.',
				},
				{
					title: 'What is the MCP server for?',
					description:
						'MCP lets AI assistants like Claude or ChatGPT work with your CMS. Ask one to write a blog post, update a page or improve your SEO, and the change waits as a draft until you approve it.',
				},
				{
					title: 'Do I need a separate CMS like WordPress or Webflow?',
					description:
						'No. Your website comes with its own CMS, set up for your content, with no plugins to keep updated.',
				},
				{
					title: 'Will the website be good for SEO?',
					description:
						'Yes. Pages are rendered on the server and load fast, with titles, descriptions, structured data and a sitemap you control from the CMS.',
				},
				{
					title: 'Can the website grow into a shop or a web app?',
					description:
						'Yes. The same CMS handles products, checkout, customer accounts, forms and automations, so you can add them when you need them.',
				},
			],
		},
	},
	{
		slug: 'cta',
		type: 'section',
		data: {
			eyebrow: 'Contact',
			heading: 'Let’s build\nyour website',
			text: 'Tell us about your business and what the site needs to do. We’ll come back with a plan and a quote.',
			image: `${IMG}1793003920131_photo-1541746972996-4e0b0f43e02a.webp`,
			imageAlt: 'A team working together in an office',
			buttonLabel: 'Contact us',
			buttonUrl: links.contact,
		},
	},
];

// The home page's section that leads to /website-development
export const homeWebsiteSeed = {
	slug: 'website-development',
	type: 'section',
	data: {
		eyebrow: 'Website development',
		heading: 'Websites you\ncan run yourself',
		text: 'Every website we build comes with its own CMS: a visual editor, live content changes, drag-and-drop sections, dynamic forms, analytics and an MCP server so AI can update your content.',
		image: `${IMG}1793003918899_photo-1522542550221-31fd19575a2d.webp`,
		imageAlt: 'Website wireframes sketched in colour',
		buttonLabel: 'Explore website development',
		buttonUrl: '/website-development',
		items: ['Visual editor', 'Live content changes', 'Rearrange sections', 'Dynamic forms', 'Analytics', 'MCP server for AI'].map(
			title => ({ title })
		),
	},
};
