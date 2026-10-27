import { notFound } from 'next/navigation';
import WebsiteDevelopmentPage from '../../components/website-development/WebsiteDevelopmentPage';
import { pageMetadata } from '@/lib/mintSeo';
import { getSite } from '@/lib/mint';
import { pageSections } from '@/lib/pageContents';
import { aboutJsonLd, ldScript } from '@/lib/jsonLd';

// About us: who we are, what we do, what we build. Every word and picture is the Mint panel's
// (Contents → page "/about"), and its SEO is Website → SEO. Until the page is published in the
// panel there's nothing to show.
export const revalidate = 60;

export const generateMetadata = () => pageMetadata('/about');

export default async function About() {
	const [site, sections] = await Promise.all([getSite(), pageSections('/about')]);
	if (!sections.length) notFound();
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={ldScript(aboutJsonLd(site, sections))}
			/>
			<WebsiteDevelopmentPage sections={sections} />
		</>
	);
}
