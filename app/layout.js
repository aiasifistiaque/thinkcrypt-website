import '../styles/styles.css';
import '../locomotive-scroll.css';
import { ColorModeScript } from '@chakra-ui/react';
import Script from 'next/script';
import ChakraProviderWrapper from './chakra-provider-wrapper';
import { defaultSEO } from '../lib/seoKeywords';
import { siteMetadata } from '../lib/mintSeo';
import { MINT_KEY, MINT_ORIGIN } from '../lib/mint';

// Default SEO for every page comes from the Mint panel (Site setup → SEO)
export const generateMetadata = siteMetadata;

export default function RootLayout({ children }) {
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
				<ChakraProviderWrapper>{children}</ChakraProviderWrapper>

				{/* Structured Data - Organization Schema */}
				<Script
					id='organization-schema'
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: defaultSEO.siteName,
							url: defaultSEO.siteUrl,
							logo: `${defaultSEO.siteUrl}/logo.png`,
							description: defaultSEO.description,
							address: {
								'@type': 'PostalAddress',
								addressCountry: 'BD',
								addressRegion: 'Dhaka',
								addressLocality: 'Dhaka',
							},
							contactPoint: {
								'@type': 'ContactPoint',
								contactType: 'customer service',
								areaServed: 'BD',
								availableLanguage: ['English', 'Bengali'],
							},
							foundingDate: '2017',
							numberOfEmployees: '10-50',
							slogan: 'Transform Your Ideas Into Digital Reality',
							services: [
								'Software Development',
								'MVP Development',
								'Ecommerce Development',
								'Web Application Development',
								'Mobile App Development',
								'CMS Development',
								'ERP Development',
								'Inventory Management Systems',
							],
							technology: [
								'Node.js',
								'React',
								'Next.js',
								'MongoDB',
								'Laravel',
								'Express.js',
								'JavaScript',
								'TypeScript',
							],
						}),
					}}
				/>

				{/* Structured Data - Website Schema */}
				<Script
					id='website-schema'
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebSite',
							name: defaultSEO.siteName,
							url: defaultSEO.siteUrl,
							potentialAction: {
								'@type': 'SearchAction',
								target: `${defaultSEO.siteUrl}/search?q={search_term_string}`,
								'query-input': 'required name=search_term_string',
							},
						}),
					}}
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
