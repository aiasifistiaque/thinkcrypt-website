import { notFound } from 'next/navigation';
import WebsiteDevelopmentPage from '../../../components/website-development/WebsiteDevelopmentPage';
import { pageMetadata } from '@/lib/mintSeo';
import { getSite, mint } from '@/lib/mint';
import { pageSections } from '@/lib/pageContents';
import { productPageJsonLd, ldScript } from '@/lib/jsonLd';

// /products/<slug>: a product's own page (e.g. /products/mint-cms). Its words and pictures are the
// Mint panel's page at this path (Website → Pages, Contents); the product itself is the Products
// record with that slug, linked from /products by its "Page on this site". A product page added in
// the panel shows here without a code change.
export const revalidate = 60;

const pathOf = slug => `/products/${slug}`;

export const generateMetadata = async ({ params }) => pageMetadata(pathOf((await params).slug));

export default async function ProductPage({ params }) {
	const { slug } = await params;
	const path = pathOf(slug);
	const [site, sections, products] = await Promise.all([
		getSite(),
		pageSections(path),
		mint(`/products?slug=${encodeURIComponent(slug)}&limit=1`),
	]);
	if (!sections.length) notFound();
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={ldScript(productPageJsonLd(site, sections, products?.doc?.[0], path))}
			/>
			<WebsiteDevelopmentPage sections={sections} />
		</>
	);
}
