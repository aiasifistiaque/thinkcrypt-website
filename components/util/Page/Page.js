import React, { useEffect } from 'react';
import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styled from '@emotion/styled';
import { CgMenuRound } from 'react-icons/cg';
import CircleFollow from '../CircleFollow';
import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { usePostMutation } from '../../../store';

import dynamic from 'next/dynamic';
import ScrollYProgtess from './ScrollProgress';
import { colors } from '../../../theme/styles';
import { defaultSEO, getAllKeywords } from '../../../lib/seoKeywords';
// import ScrollContainer from '../../home/ScrollContainer';

const Scroll = dynamic(() => import('../../scroll/Scroll'));
const ScrollContainer = dynamic(() => import('../../home/ScrollContainer'));

const Page = ({ children, title, description, colorMode, image, theme, slug }) => {
	const router = useRouter();

	// Use imported SEO data with fallbacks
	const pageTitle = title || defaultSEO?.title;
	const pageDescription = description || defaultSEO?.description;
	const pageImage = image || defaultSEO?.image;
	const pageKeywords = getAllKeywords();

	// Get current route information
	const currentPath = router.asPath; // Full path with query params
	const currentRoute = router.pathname; // Clean route without query params

	// Create page slug from route (remove leading slash and replace slashes with dashes)
	const pageSlug =
		slug || currentRoute === '/' ? 'home' : currentRoute.substring(1).replace(/\//g, '-');

	// Build full URL (use current domain in production, fallback for development)
	const baseUrl = 'https://thinkcrypt.dev';
	const fullPageUrl = `${baseUrl}${currentPath}`;

	const [trigger, result] = usePostMutation();

	useEffect(() => {
		// Only track if we have a valid route
		if (router.isReady) {
			const {
				r, // Referrer parameter
				utm_source,
				utm_medium,
				utm_campaign,
				utm_term,
				utm_content,
				fbclid,
				gclid,
				user_id,
				email,
			} = router.query;
			trigger({
				path: '/views',
				body: {
					pageSlug: pageSlug,
					pageTitle: pageTitle,
					pageUrl: fullPageUrl,
					ref: r || '',
				},
			});
		}
	}, [router.isReady, pageSlug, pageTitle, fullPageUrl]);

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta
					property='title'
					content={pageTitle}
				/>
				<meta
					name='keywords'
					content={pageKeywords}
				/>
				<meta
					name='description'
					content={pageDescription}
				/>
				<meta
					name='author'
					content={defaultSEO?.author}
				/>
				<meta
					name='robots'
					content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
				/>
				<meta
					name='googlebot'
					content='index, follow'
				/>
				<meta
					name='language'
					content='English'
				/>
				<meta
					name='geo.region'
					content='BD-13'
				/>
				<meta
					name='geo.placename'
					content='Dhaka'
				/>
				<meta
					name='geo.position'
					content='23.8103;90.4125'
				/>
				<meta
					name='ICBM'
					content='23.8103, 90.4125'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
				<link
					rel='canonical'
					href={`${defaultSEO?.siteUrl}${
						typeof window !== 'undefined' ? window.location.pathname : ''
					}`}
				/>

				{/* Open Graph Tags */}
				<meta
					property='og:title'
					content={pageTitle}
					key='ogtitle'
				/>
				<meta
					property='og:description'
					content={pageDescription}
					key='ogdesc'
				/>
				<meta
					property='og:type'
					content='website'
				/>
				<meta
					property='og:url'
					content={`${defaultSEO.siteUrl}${
						typeof window !== 'undefined' ? window.location.pathname : ''
					}`}
				/>
				<meta
					property='og:image'
					content={pageImage}
					key='ogimage'
				/>
				<meta
					property='og:image:width'
					content='1200'
				/>
				<meta
					property='og:image:height'
					content='630'
				/>
				<meta
					property='og:site_name'
					content={defaultSEO.siteName}
					key='ogsitename'
				/>
				<meta
					property='og:locale'
					content='en_US'
				/>

				{/* Twitter Card Tags */}
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content={pageTitle}
				/>
				<meta
					name='twitter:description'
					content={pageDescription}
				/>
				<meta
					name='twitter:image'
					content={pageImage}
				/>

				{/* Business/Organization Schema */}
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
							foundingDate: '2020',
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

				{/* WebSite Schema */}
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
			</Head>
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
