import { notFound } from 'next/navigation';
import EasyCommercePage from '../../../components/easy-commerce/EasyCommercePage';
import { pageMetadata } from '@/lib/mintSeo';
import { pageSections } from '@/lib/pageContents';
import { getDemos } from '@/lib/ecDemos';

// Easy Instant Commerce → Get started: the estimate and lead form, and the demo stores to pick a design from.
// Its words are the Mint panel's page "/easy-instant-commerce/get-started".
export const revalidate = 60;

const PATH = '/easy-instant-commerce/get-started';

export const generateMetadata = () => pageMetadata(PATH);

export default async function GetStarted() {
	const [sections, demos] = await Promise.all([pageSections(PATH), getDemos()]);
	if (!sections.length) notFound();
	return (
		<EasyCommercePage
			sections={sections}
			demos={demos}
		/>
	);
}
