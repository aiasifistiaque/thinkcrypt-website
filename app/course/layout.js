import { pageMetadata } from '@/lib/mintSeo';

// SEO for /course comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/course');

export default function Layout({ children }) {
	return children;
}
