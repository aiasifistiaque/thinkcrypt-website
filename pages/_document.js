import { Html, Head, Main, NextScript } from 'next/document';
import { FB_PIXEL_ID } from '../lib/fpixel';

import { gtag } from '../lib/googleAnalytics.js';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
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
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
