import Homepage from '../components/home/Homepage';
import { pageMetadata } from '../lib/mintSeo';
import { pageSection } from '../lib/pageContents';
import { homeWebsiteSeed } from '../lib/content/websiteDevelopment';
import { homeAboutSeed } from '../lib/content/home';
import { getFeaturedPortfolios } from '../lib/portfolios';

// SEO for / comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/');

// The panel's contents for / (the about us, website development and business tools sections)
// and the featured projects (Website → Portfolios) refresh within a minute
export const revalidate = 60;

export default async function Home() {
	const [aboutSection, websiteSection, businessSection, projects] = await Promise.all([
		pageSection('/', 'about-us', homeAboutSeed),
		pageSection('/', 'website-development', homeWebsiteSeed),
		pageSection('/', 'business-tools'),
		getFeaturedPortfolios(),
	]);
	return (
		<Homepage
			aboutSection={aboutSection}
			websiteSection={websiteSection}
			businessSection={businessSection}
			projects={projects}
		/>
	);
}
