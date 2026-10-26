import Homepage from '../components/home/Homepage';
import { pageMetadata } from '../lib/mintSeo';
import { pageSection } from '../lib/pageContents';
import { homeWebsiteSeed } from '../lib/content/websiteDevelopment';

// SEO for / comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/');

// The panel's contents for / (the website development section) refresh within a minute
export const revalidate = 60;

export default async function Home() {
	const websiteSection = await pageSection('/', 'website-development', homeWebsiteSeed);
	return <Homepage websiteSection={websiteSection} />;
}
