import RightSolutionPage from '../../components/home/services/RightSolutionPage';
import { pageSection } from '../../lib/pageContents';

// The solution cards are the Mint panel's content "solutions" on the home page
export const revalidate = 60;

export default async function BusinessSolution() {
	const section = await pageSection('/', 'solutions');
	return <RightSolutionPage section={section} />;
}
