import '../styles/styles.css';
import '../locomotive-scroll.css';
import { ColorModeScript } from '@chakra-ui/react';
import Script from 'next/script';
import ChakraProviderWrapper from './chakra-provider-wrapper';
import { siteMetadata } from '../lib/mintSeo';
import { MINT_KEY, MINT_ORIGIN, getSite } from '../lib/mint';
import { ldScript, siteJsonLd } from '../lib/jsonLd';
import { getSiteInfo } from '../lib/siteInfo';
import { SiteInfoProvider } from '../components/site/SiteInfo';
import WhatsAppButton from '../components/site/WhatsAppButton';

// Default SEO for every page comes from the Mint panel (Site setup → SEO)
export const generateMetadata = siteMetadata;

export default async function RootLayout({ children }) {
	const [site, info] = await Promise.all([getSite(), getSiteInfo()]);
	return (
		<html lang='en'>
			<head>
				<ColorModeScript initialColorMode='dark' />

				{/* Font Preloads for better performance */}
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Michroma&family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				<ChakraProviderWrapper>
					{/* The footer and the WhatsApp button read the panel's contact, social, product and WhatsApp details */}
					<SiteInfoProvider value={info}>
						{children}
						<WhatsAppButton />
					</SiteInfoProvider>
				</ChakraProviderWrapper>

				{/* Structured data: Thinkcrypt as an organization and its services, and the website */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={ldScript(siteJsonLd(site))}
				/>

				{/* Mint analytics — also loads the tags set in Site setup → Tracking (GA4, Meta Pixel…) */}
				{MINT_ORIGIN && MINT_KEY && (
					<Script
						src={`${MINT_ORIGIN}/public/track.js`}
						data-key={MINT_KEY}
						strategy='afterInteractive'
					/>
				)}
			</body>
		</html>
	);
}
