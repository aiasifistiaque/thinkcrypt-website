import { pageMetadata } from '@/lib/mintSeo';

// SEO for /clients comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/clients');

export default function Layout({ children }) {
	return children;
}
