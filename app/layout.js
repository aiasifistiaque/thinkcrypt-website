import '../styles/styles.css';
import '../locomotive-scroll.css';
import { ColorModeScript } from '@chakra-ui/react';
import Script from 'next/script';
import { FB_PIXEL_ID } from '../lib/fpixel';
import { gtag } from '../lib/googleAnalytics.js';
import ChakraProviderWrapper from './chakra-provider-wrapper';

export const metadata = {
	title: 'ThinkCrypt - Digital Solutions',
	description: 'Digital solutions and web development services',
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
