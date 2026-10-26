import { notFound } from 'next/navigation';
import WebsiteTypePage from '../../../components/website-development/WebsiteTypePage';
import { getWebsiteType, getWebsiteTypes, websiteTypeJsonLd, websiteTypeMetadata } from '@/lib/websiteTypes';
import { pageSection } from '@/lib/pageContents';
import { ldScript } from '@/lib/jsonLd';

// One page per published website type in the Mint panel (Website types). Prerendered at build;
// a type published later renders on its first visit, and panel edits show within a minute.
export const revalidate = 60;

export async function generateStaticParams() {
	return (await getWebsiteTypes()).filter(t => t.slug).map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const type = await getWebsiteType(slug);
	if (!type) return { title: 'Website type not found', robots: { index: false } };
	return websiteTypeMetadata(type);
}

export default async function WebsiteType({ params }) {
	const { slug } = await params;
	const [type, all, cta] = await Promise.all([
		getWebsiteType(slug),
		getWebsiteTypes(),
		pageSection('/website-development', 'cta'),
	]);
	if (!type) notFound();
	const jsonLd = await websiteTypeJsonLd(type);
	const others = all.filter(o => o.slug && o.slug !== slug).slice(0, 6);

	return (
		<>
			{jsonLd && (
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={ldScript(jsonLd)}
				/>
			)}
			<WebsiteTypePage
				type={type}
				others={others}
				cta={cta}
			/>
		</>
	);
}
