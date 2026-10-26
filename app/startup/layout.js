import { pageMetadata } from '@/lib/mintSeo';

// SEO for /startup comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/startup');

export default function Layout({ children }) {
	return children;
}
