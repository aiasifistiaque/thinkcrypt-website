import { pageMetadata } from '@/lib/mintSeo';

// SEO for /web-development comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/web-development');

export default function Layout({ children }) {
	return children;
}
