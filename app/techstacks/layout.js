import { pageMetadata } from '@/lib/mintSeo';

// SEO for /techstacks comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/techstacks');

export default function Layout({ children }) {
	return children;
}
