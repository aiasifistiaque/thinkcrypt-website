import { notFound } from 'next/navigation';
import EasyCommercePage from '../../components/easy-commerce/EasyCommercePage';
import { pageMetadata } from '@/lib/mintSeo';
import { pageSections } from '@/lib/pageContents';
import { getDemos } from '@/lib/ecDemos';

// Easy Instant Commerce: a ready React/Next.js store with its own commerce panel, live in under a week.
// The words are the Mint panel's page "/easy-instant-commerce" (Contents); the demo stores are its EC demos,
// and the estimate form sends EC leads (app/api/ec-lead).
export const revalidate = 60;

export const generateMetadata = () => pageMetadata('/easy-instant-commerce');

export default async function EasyInstantCommerce() {
	const [sections, demos] = await Promise.all([pageSections('/easy-instant-commerce'), getDemos()]);
	if (!sections.length) notFound();
	return (
		<EasyCommercePage
			sections={sections}
			demos={demos}
		/>
	);
}
