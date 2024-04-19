import '../styles/styles.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import * as fbq from '../lib/fpixel';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';
import { gtag } from '../lib/googleAnalytics.js';
import { Provider } from 'react-redux';
import { store } from '../store';
import { colors as clrs } from '../theme/colors.theme.js';
import '../locomotive-scroll.css';

const colors = {
	pink: { 200: '#FB2E7E' },
	facebook: { 200: '#1B74E4' },
	gray: { 200: '#7A86A1' },
	...clrs,
};

const components = {
	Heading: { baseStyle: { fontFamily: 'Montserrat, sans-serif' } },
	Text: { baseStyle: { color: '#000' } },
	Checkbox: { baseStyle: { color: '#7A86A1' } },
};

const theme = extendTheme({ colors, components });

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		//# This pageview only triggers the first time (it's important for Pixel to have real information)
		fbq.pageview();

		const handleRouteChange = url => {
			fbq.pageview();
			window?.gtag &&
				window.gtag('config', gtag, {
					page_path: url,
				});
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	// useEffect(() => {
	// 	const handleRouteChange = (url) => {
	// 		window?.gtag &&
	// 			window.gtag('config', gt.GA_TRACKING_ID, {
	// 				page_path: url,
	// 			});
	// 	};
	// 	// const handleRouteChange = url => {
	// 	// 	gtag.pageview(url);
	// 	// };
	// 	router.events.on('routeChangeComplete', handleRouteChange);
	// 	return () => {
	// 		router.events.off('routeChangeComplete', handleRouteChange);
	// 	};
	// }, [router.events]);
	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
					strategy='afterInteractive'
				/>
				<Script
					id='google-analytics'
					strategy='afterInteractive'>
					{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag}');
        `}
				</Script>
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
		fbq('init', ${fbq.FB_PIXEL_ID});
		`,
					}}
				/>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
}

export default MyApp;
