import { getSite } from '@/lib/mint';
import { pageMetadata } from '@/lib/mintSeo';
import { ldScript, mintJsonLd } from '@/lib/jsonLd';

// SEO for /mint comes from the Mint panel (Website → SEO); the structured data describes Mint as software
export const generateMetadata = () => pageMetadata('/mint');

export default async function Layout({ children }) {
	const site = await getSite();
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={ldScript(mintJsonLd(site))}
			/>
			{children}
		</>
	);
}
