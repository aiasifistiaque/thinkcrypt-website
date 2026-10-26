import { pageMetadata } from '@/lib/mintSeo';

// SEO for /services comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/services');

export default function Layout({ children }) {
	return children;
}
