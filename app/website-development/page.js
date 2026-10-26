import WebsiteDevelopmentPage from '../../components/website-development/WebsiteDevelopmentPage';
import { pageMetadata } from '@/lib/mintSeo';
import { getSite } from '@/lib/mint';
import { pageSections } from '@/lib/pageContents';
import { websiteDevelopmentJsonLd, ldScript } from '@/lib/jsonLd';
import { websiteDevelopmentSeed } from '@/lib/content/websiteDevelopment';

// Every word and picture is the Mint panel's (Contents → page "/website-development"), and its SEO
// is Website → SEO. Prerendered; panel changes show within a minute.
export const revalidate = 60;

export const generateMetadata = () => pageMetadata('/website-development');

export default async function WebsiteDevelopment() {
	const [site, sections] = await Promise.all([getSite(), pageSections('/website-development', websiteDevelopmentSeed)]);
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={ldScript(websiteDevelopmentJsonLd(site, sections))}
			/>
			<WebsiteDevelopmentPage sections={sections} />
		</>
	);
}
