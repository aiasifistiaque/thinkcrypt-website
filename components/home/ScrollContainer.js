import { useEffect } from 'react';
import Lenis from 'lenis';

export default function ScrollContainer({ children }) {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 2.5,
			easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
			smooth: true,
			gestureOrientation: 'vertical',
			// smoothTouch: true,
			smoothWheel: true,
			smoothTouch: true,
			easing: t => 1 - Math.pow(1 - t, 5), // Smoother easeOutQuint easing
			touchMultiplier: 2.0, // Adjust this value to control touch sensitivity
			wheelMultiplier: 1.0, // Adjust this value to control wheel sensitivity
			lerp: 0.1,
			touchInertiaMultiplier: 2.0,

			// infinite: true,
		});

		let frame;
		const raf = time => {
			lenis.raf(time);
			frame = requestAnimationFrame(raf);
		};

		frame = requestAnimationFrame(raf);
		// For ScrollToTop: a new page opens at its top
		window.__lenis = lenis;

		return () => {
			if (window.__lenis === lenis) window.__lenis = null;
			cancelAnimationFrame(frame);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
