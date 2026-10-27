import Homepage from '../components/home/Homepage';
import { pageMetadata } from '../lib/mintSeo';
import { pageSection } from '../lib/pageContents';
import { homeWebsiteSeed } from '../lib/content/websiteDevelopment';
import { homeAboutSeed } from '../lib/content/home';

// SEO for / comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/');

// The panel's contents for / (the about us, website development and business tools sections)
// refresh within a minute
export const revalidate = 60;

export default async function Home() {
	const [aboutSection, websiteSection, businessSection] = await Promise.all([
		pageSection('/', 'about-us', homeAboutSeed),
		pageSection('/', 'website-development', homeWebsiteSeed),
		pageSection('/', 'business-tools'),
	]);
	return (
		<Homepage
			aboutSection={aboutSection}
			websiteSection={websiteSection}
			businessSection={businessSection}
		/>
	);
}
