'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as fbq from '../lib/fpixel';
import { gtag } from '../lib/googleAnalytics.js';

export default function ClientWrapper({ children }) {
	const pathname = usePathname();

	useEffect(() => {
		// This pageview only triggers the first time (it's important for Pixel to have real information)
		fbq.pageview();

		const handleRouteChange = url => {
			fbq.pageview();
			window?.gtag &&
				window.gtag('config', gtag, {
					page_path: url,
				});
		};

		// In App Router, we track route changes using pathname
		handleRouteChange(pathname);
	}, [pathname]);

	return <>{children}</>;
}
