import '../styles/styles.css';
import '../locomotive-scroll.css';
import { ColorModeScript } from '@chakra-ui/react';
import Script from 'next/script';
import { FB_PIXEL_ID } from '../lib/fpixel';
import { gtag } from '../lib/googleAnalytics.js';
import ChakraProviderWrapper from './chakra-provider-wrapper';
import { defaultSEO } from '../lib/seoKeywords';

export const metadata = {
	metadataBase: new URL(defaultSEO.siteUrl),
	title: {
		default: defaultSEO.title,
		template: `%s | ${defaultSEO.siteName}`,
	},
	description: defaultSEO.description,
	keywords: defaultSEO.keywords,
	authors: [{ name: defaultSEO.author }],
	creator: defaultSEO.author,
	publisher: defaultSEO.siteName,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: defaultSEO.siteUrl,
		siteName: defaultSEO.siteName,
		title: defaultSEO.title,
		description: defaultSEO.description,
		images: [
			{
				url: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				width: 1260,
				height: 750,
				alt: 'Thinkcrypt Software Development Team',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: defaultSEO.title,
		description: defaultSEO.description,
		creator: '@thinkcrypt',
		images: [
			'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico',
	},
};

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

				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${gtag}', {
								page_path: window.location.pathname,
							});
						`,
					}}
				/>
				<noscript>
					<img
						height='1'
						width='1'
						style={{ display: 'none' }}
						src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
					/>
				</noscript>

				{/* Structured Data - Organization Schema */}
				<script
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
				<script
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
			</head>
			<body>
				<ChakraProviderWrapper>{children}</ChakraProviderWrapper>

				{/* Google Analytics */}
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
					strategy='afterInteractive'
				/>
				<Script
					id='google-analytics'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){window.dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${gtag}');
						`,
					}}
				/>

				{/* Facebook Pixel */}
				<Script
					id='fb-pixel'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
							!function(f,b,e,v,n,t,s)
							{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
							n.callMethod.apply(n,arguments):n.queue.push(arguments)};
							if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
							n.queue=[];t=b.createElement(e);t.async=!0;
							t.src=v;s=b.getElementsByTagName(e)[0];
							s.parentNode.insertBefore(t,s)}(window, document,'script',
							'https://connect.facebook.net/en_US/fbevents.js');
							fbq('init', ${FB_PIXEL_ID});
						`,
					}}
				/>
			</body>
		</html>
	);
}
