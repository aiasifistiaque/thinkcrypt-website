import { notFound } from 'next/navigation';
import WebsiteDevelopmentPage from '../../components/website-development/WebsiteDevelopmentPage';
import { pageMetadata } from '@/lib/mintSeo';
import { getSite } from '@/lib/mint';
import { pageSections } from '@/lib/pageContents';
import { productsJsonLd, ldScript } from '@/lib/jsonLd';

// Thinkcrypt's own products. The page's words are the Mint panel's (Contents → page "/products");
// its List content shows the panel's Products, one section each, so a product added there
// shows here. Until the page is published in the panel there's nothing to show.
export const revalidate = 60;

export const generateMetadata = () => pageMetadata('/products');

export default async function Products() {
	const [site, sections] = await Promise.all([getSite(), pageSections('/products')]);
	if (!sections.length) notFound();
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={ldScript(productsJsonLd(site, sections))}
			/>
			<WebsiteDevelopmentPage sections={sections} />
		</>
	);
}
