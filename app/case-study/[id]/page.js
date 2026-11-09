import { notFound, permanentRedirect } from 'next/navigation';
import CaseStudyDetail from '@/components/portfolio/CaseStudyDetail';
import { getPortfolio } from '@/lib/portfolios';

// Case studies come from the panel (Website → Portfolios) and refresh within a minute.
// Old links by the content API's id (or the panel id) are sent on to the slug.
export const revalidate = 60;

export default async function CaseStudy({ params }) {
	const { id } = await params;
	const data = await getPortfolio(id);
	if (!data) notFound();
	if (data.slug && data.slug !== id) permanentRedirect(`/case-study/${data.slug}`);
	return <CaseStudyDetail data={data} />;
}
