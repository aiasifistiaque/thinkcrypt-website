import CaseStudyPage from '@/components/portfolio/CaseStudypage';
import { pageMetadata } from '@/lib/mintSeo';
import { getPortfolios } from '@/lib/portfolios';

// SEO for /portfolio comes from the Mint panel (Website → SEO); the projects from
// Website → Portfolios, refreshed within a minute
export const generateMetadata = () => pageMetadata('/portfolio');
export const revalidate = 60;

export default async function Portfolio() {
	return <CaseStudyPage projects={await getPortfolios()} />;
}
