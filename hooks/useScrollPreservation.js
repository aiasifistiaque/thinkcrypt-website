import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const useScrollPreservation = () => {
	const router = useRouter();
	const scrollPositions = useRef({});
	const isBack = useRef(false);

	useEffect(() => {
		const saveScrollPos = url => {
			scrollPositions.current[url] = window.scrollY;
		};

		const restoreScrollPos = url => {
			const savedPosition = scrollPositions.current[url];
			if (savedPosition !== undefined) {
				setTimeout(() => {
					window.scrollTo(0, savedPosition);
				}, 100);
			}
		};

		const handleRouteChangeStart = url => {
			saveScrollPos(router.asPath);
		};

		const handleRouteChangeComplete = url => {
			if (isBack.current) {
				restoreScrollPos(url);
			}
			isBack.current = false;
		};

		const handleBeforePopState = () => {
			isBack.current = true;
			return true;
		};

		router.events.on('routeChangeStart', handleRouteChangeStart);
		router.events.on('routeChangeComplete', handleRouteChangeComplete);
		router.beforePopState = handleBeforePopState;

		return () => {
			router.events.off('routeChangeStart', handleRouteChangeStart);
			router.events.off('routeChangeComplete', handleRouteChangeComplete);
			router.beforePopState = () => true;
		};
	}, [router]);

	return null;
};

export default useScrollPreservation;
