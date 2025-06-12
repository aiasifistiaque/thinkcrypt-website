'use client';

import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CircleFollow from '../CircleFollow';
import { Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { usePostMutation } from '../../../store';

import dynamic from 'next/dynamic';
import { colors } from '../../../theme/styles';
import { defaultSEO } from '../../../lib/seoKeywords';

const Scroll = dynamic(() => import('../../scroll/Scroll'));
const ScrollContainer = dynamic(() => import('../../home/ScrollContainer'));

const Page = ({ children, title, description, colorMode, image, theme, slug }) => {
	const pathname = usePathname();

	// Use a client-side only approach for search params
	const [searchParams, setSearchParams] = useState(null);

	useEffect(() => {
		// Only set search params on client side
		if (typeof window !== 'undefined') {
			try {
				const params = new URLSearchParams(window.location.search);
				setSearchParams(params);
			} catch (error) {
				console.warn('Failed to get search params:', error);
			}
		}
	}, []);

	// Use imported SEO data with fallbacks
	const pageTitle = title || defaultSEO?.title;

	// Get current route information
	const currentPath = pathname; // Full path
	const currentRoute = pathname; // Clean route

	// Create page slug from route (remove leading slash and replace slashes with dashes)
	const pageSlug =
		slug || currentRoute === '/' ? 'home' : currentRoute.substring(1).replace(/\//g, '-');

	// Build full URL (use current domain in production, fallback for development)
	const baseUrl = 'https://thinkcrypt.dev';
	const fullPageUrl = `${baseUrl}${currentPath}`;

	const [trigger, result] = usePostMutation();

	useEffect(() => {
		// Track page view with search params - only if searchParams is available
		if (!searchParams) return;

		const r = searchParams.get('r');
		const utm_source = searchParams.get('utm_source');
		const utm_medium = searchParams.get('utm_medium');
		const utm_campaign = searchParams.get('utm_campaign');
		const utm_term = searchParams.get('utm_term');
		const utm_content = searchParams.get('utm_content');
		const fbclid = searchParams.get('fbclid');
		const gclid = searchParams.get('gclid');
		const user_id = searchParams.get('user_id');
		const email = searchParams.get('email');

		// Get the actual document referrer
		const documentReferrer = typeof document !== 'undefined' ? document.referrer : 'direct';

		trigger({
			path: '/views',
			body: {
				pageSlug: pageSlug,
				pageTitle: pageTitle,
				pageUrl: fullPageUrl,
				customRef: r || '',
				referrer: documentReferrer,
			},
		});
	}, [pageSlug, pageTitle, fullPageUrl, searchParams]);

	return (
		<>
			<CircleFollow />
			<Header />
			<Scroll>
				<ScrollContainer>
					<Flex
						bg={colorMode == 'dark' ? colors?.background?.dark : colors}
						maxW='100vw'
						minH='100vh'
						flex={1}>
						{children}
					</Flex>
				</ScrollContainer>
			</Scroll>
			<Footer theme={theme || 'dark'} />
		</>
	);
};

export default Page;
