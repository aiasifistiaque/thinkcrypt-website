import { pageMetadata } from '@/lib/mintSeo';

// SEO for /blog comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/blog');

export default function Layout({ children }) {
	return children;
}
