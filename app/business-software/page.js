import { notFound } from 'next/navigation';
import WebsiteDevelopmentPage from '../../components/website-development/WebsiteDevelopmentPage';
import { pageMetadata } from '@/lib/mintSeo';
import { getSite } from '@/lib/mint';
import { pageSections } from '@/lib/pageContents';
import { businessSoftwareJsonLd, ldScript } from '@/lib/jsonLd';

// ERP, CRM, dashboards and business tools. Every word is the Mint panel's (Contents → page
// "/business-software"), and its SEO is Website → SEO; drawn like /website-development.
// Until the page is published in the panel there's nothing to show.
export const revalidate = 60;

export const generateMetadata = () => pageMetadata('/business-software');

export default async function BusinessSoftware() {
	const [site, sections] = await Promise.all([getSite(), pageSections('/business-software')]);
	if (!sections.length) notFound();
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={ldScript(businessSoftwareJsonLd(site, sections))}
			/>
			<WebsiteDevelopmentPage sections={sections} />
		</>
	);
}
