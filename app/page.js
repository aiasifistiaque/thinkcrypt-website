import Homepage from '../components/home/Homepage';
import { pageMetadata } from '../lib/mintSeo';

// SEO for / comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/');

export default function Home() {
	return <Homepage />;
}
