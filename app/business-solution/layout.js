import { pageMetadata } from '@/lib/mintSeo';

// SEO for /business-solution comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/business-solution');

export default function Layout({ children }) {
	return children;
}
