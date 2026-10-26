import { pageMetadata } from '@/lib/mintSeo';

// SEO for /team comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/team');

export default function Layout({ children }) {
	return children;
}
