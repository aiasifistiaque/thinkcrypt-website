import { useEffect, useState, useCallback } from 'react';

const MOBILE_BREAKPOINT = 800;
const DEBOUNCE_DELAY = 200;

function debounce(func, wait) {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
}

const useIsMobile = () => {
	const getIsMobile = () =>
		typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false;

	const [isMobile, setIsMobile] = useState(getIsMobile);

	const handleResize = useCallback(
		debounce(() => {
			setIsMobile(getIsMobile());
		}, DEBOUNCE_DELAY),
		[]
	);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		// Set initial value
		setIsMobile(getIsMobile());

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	return isMobile;
};

export default useIsMobile;
