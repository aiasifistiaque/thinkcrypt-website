// Easy Instant Commerce prices, shared by the page, the estimate form and /api/ec-lead (which works the
// estimate out again on the server, so a lead in the panel always carries the real numbers).

// Hosting a month, by how many products and images the store holds. Domain not included.
export const PLANS = [
	{ value: 'starter', name: 'Starter', price: 500, products: 100, images: 200 },
	{ value: 'growth', name: 'Growth', price: 1500, products: 500, images: 1000 },
	{ value: 'unlimited', name: 'Unlimited', price: 2500, products: Infinity, images: Infinity },
];

// The build, paid once
export const DESIGNS = [
	{
		value: 'prebuilt',
		label: 'Ready design',
		price: 25000,
		note: 'Pick one of our demo stores. We add your logo, colours, products and pages.',
	},
	{
		value: 'branded',
		label: 'Ready design in my brand',
		price: 45000,
		note: 'One of our designs reworked for your brand: fonts, colours, home page and banners.',
	},
	{
		value: 'custom',
		label: 'My own design',
		price: 75000,
		note: 'Show us how you want your website to look. We design and build it for you.',
	},
];

export const BUILD_MAX = 100000;

const count = v => {
	const n = Math.floor(Number(v));
	return Number.isFinite(n) && n > 0 ? Math.min(n, 1_000_000) : 0;
};

export const planFor = (products, images) =>
	PLANS.find(p => count(products) <= p.products && count(images) <= p.images) || PLANS[PLANS.length - 1];

// { plan, monthly, build, buildMax } — buildMax is more than build when the price depends on custom work
export const estimate = ({ productCount, imageCount, design, customFeatures }) => {
	const plan = planFor(productCount, imageCount);
	const d = DESIGNS.find(x => x.value === design) || DESIGNS[0];
	const custom = customFeatures === true || customFeatures === 'true' || customFeatures === 'on';
	return {
		plan,
		design: d,
		monthly: plan.price,
		build: d.price,
		buildMax: custom || d.value === 'custom' ? BUILD_MAX : d.price,
		customFeatures: custom,
	};
};

// 100000 → "1,00,000" (lakh grouping, as people write it in Bangladesh)
// Indian grouping (1,00,000) by hand: toLocaleString can differ between the server and the browser
export const taka = n => {
	const [whole, frac] = String(Math.round(Number(n || 0) * 100) / 100).split('.');
	const neg = whole.startsWith('-');
	const d = neg ? whole.slice(1) : whole;
	const head = d.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ',');
	const out = head ? `${head},${d.slice(-3)}` : d;
	return `${neg ? '-' : ''}${out}${frac ? `.${frac}` : ''}`;
};

export const limitText = n => (n === Infinity ? 'Unlimited' : taka(n));
