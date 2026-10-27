import WebsiteDevelopmentPage from '../../components/website-development/WebsiteDevelopmentPage';
import Servicepage from '../../components/portfolio/Servicepage';
import { getSite } from '@/lib/mint';
import { pageSections } from '@/lib/pageContents';
import { servicesJsonLd, ldScript } from '@/lib/jsonLd';

// Everything we do, one row per service with its picture and its own page. Every word is the Mint panel's
// (Contents → page "/services") and its SEO is Website → SEO (layout.js); drawn like /business-software.
// The old services list shows only while the panel can't be reached.
export const revalidate = 60;

export default async function Services() {
	const [site, sections] = await Promise.all([getSite(), pageSections('/services')]);
	if (!sections.length) return <Servicepage />;
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={ldScript(servicesJsonLd(site, sections))}
			/>
			<WebsiteDevelopmentPage sections={sections} />
		</>
	);
}
