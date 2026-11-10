import Homepage from '../components/home/Homepage';
import { pageMetadata } from '../lib/mintSeo';
import { pageSection } from '../lib/pageContents';
import { homeWebsiteSeed } from '../lib/content/websiteDevelopment';
import { homeAboutSeed, homeExpertiseSeed } from '../lib/content/home';
import { getFeaturedPortfolios } from '../lib/portfolios';
import { mint } from '../lib/mint';

// SEO for / comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/');

// The panel's contents for / (the about us, expertise, tech stack, website development, solutions, business tools,
// products and clients sections),
// the products (Website → Products) and the featured projects (Website → Portfolios) refresh within a minute
export const revalidate = 60;

export default async function Home() {
	const [
		aboutSection,
		expertiseSection,
		websiteSection,
		businessSection,
		productsSection,
		products,
		projects,
		stackSection,
		solutionsSection,
		clientsSection,
	] = await Promise.all([
		pageSection('/', 'about-us', homeAboutSeed),
		pageSection('/', 'expertise', homeExpertiseSeed),
		pageSection('/', 'website-development', homeWebsiteSeed),
		pageSection('/', 'business-tools'),
		pageSection('/', 'products'),
		mint('/products?limit=12&sort=order').then(r => r?.doc || []),
		getFeaturedPortfolios(),
		pageSection('/', 'tech-stack'),
		pageSection('/', 'solutions'),
		pageSection('/', 'clients'),
	]);
	return (
		<Homepage
			aboutSection={aboutSection}
			expertiseSection={expertiseSection}
			websiteSection={websiteSection}
			businessSection={businessSection}
			productsSection={productsSection}
			products={products}
			projects={projects}
			stackSection={stackSection}
			solutionsSection={solutionsSection}
			clientsSection={clientsSection}
		/>
	);
}
