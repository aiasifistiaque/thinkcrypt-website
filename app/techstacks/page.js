import TechstackPage from '../../components/portfolio/Techstackpage';
import { pageSection } from '../../lib/pageContents';

// The tech stack cards are the Mint panel's content "tech-stack" on the home page
export const revalidate = 60;

export default async function Techstacks() {
	const section = await pageSection('/', 'tech-stack');
	return <TechstackPage section={section} />;
}
