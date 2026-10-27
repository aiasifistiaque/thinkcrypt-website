'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import * as fbq from '../lib/fpixel';
import { gtag } from '../lib/googleAnalytics.js';

// Every page opens at its top: the smooth scroll (Lenis, components/home/ScrollContainer) keeps its own
// position across pages, so on a new address both it and the window go back to 0. A link to an anchor
// (#section) keeps its place.
const toTop = () => {
	window.__lenis?.scrollTo(0, { immediate: true, force: true });
	window.scrollTo(0, 0);
};

export default function ClientWrapper({ children }) {
	const pathname = usePathname();
	const first = useRef(true);

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

	useEffect(() => {
		if (first.current) {
			first.current = false;
			return;
		}
		if (window.location.hash) return;
		// Again once the new page's smooth scroll has started (it loads after the page)
		toTop();
		const frame = requestAnimationFrame(toTop);
		const later = setTimeout(toTop, 150);
		return () => {
			cancelAnimationFrame(frame);
			clearTimeout(later);
		};
	}, [pathname]);

	return <>{children}</>;
}
