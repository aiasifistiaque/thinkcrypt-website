import { pageMetadata } from '@/lib/mintSeo';

// SEO for /privacy-policy comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/privacy-policy');

export default function Layout({ children }) {
	return children;
}
