import CaseStudyPage from '@/components/portfolio/CaseStudypage';
import { pageMetadata } from '@/lib/mintSeo';

// SEO for /portfolio comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/portfolio');

export default function Portfolio() {
	return <CaseStudyPage />;
}
