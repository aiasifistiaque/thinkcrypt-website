import { pageMetadata } from '@/lib/mintSeo';

// SEO for /mint comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/mint');

export default function Layout({ children }) {
	return children;
}
