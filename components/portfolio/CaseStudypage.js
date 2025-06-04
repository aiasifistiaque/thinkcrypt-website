import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Page from '../util/Page/Page';
import PortfolioItemSkeleton from './PortfolioItem/PortfolioSkeleton';
import { Heading, Stack, Flex, Grid, Wrap, Text, useColorMode } from '@chakra-ui/react';
import { colors, styles } from '../../theme/styles';
import { useGetAllQuery } from '../../store';
import CaseItem from './PortfolioItem/CaseItem';
import TitleSection from '../home/about-us/TitleSection';
import { fonts, padding } from '../../lib/constants';
import SelectItem from './SelectItem';
import useScrollPreservation from '../../hooks/useScrollPreservation';

const colorMode = 'dark';
const textColor = colorMode == 'dark' ? colors?.text?.dark : colors?.text?.light;
const BORDER = colorMode == 'dark' ? styles.border.dark : styles.border.light;

const img =
	'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const CaseStudyPage = ({ initialData, initialCategory = '' }) => {
	const { colorMode } = useColorMode();
	const router = useRouter();

	// Get current category from URL parameters
	const currentCategory = router.query.category || '';
	const [cat, setCat] = useState(currentCategory);

	// Update category state when URL changes
	useEffect(() => {
		setCat(router.query.category || '');
	}, [router.query.category]);

	const onCategoryChange = value => {
		setCat(value);
		// Update URL without page refresh for better UX
		const newUrl = value ? `/portfolio?category=${value}` : '/portfolio';
		router.push(newUrl, undefined, { shallow: true });
	};

	// Use RTK Query only when a specific category is selected (not for "All projects")
	// Skip if no category is selected (use SSR data for "All projects")
	const shouldSkip = !cat || cat === '';

	const { data: fetchedData, isFetching } = useGetAllQuery(
		{
			path: 'portfolios',
			limit: 99,
			sort: '-priority',
			filters: { status: 'published', category: cat },
		}
		// {
		// 	skip: shouldSkip,
		// }
	);

	// Use SSR data when no category is selected, otherwise use fetched data
	const data = shouldSkip ? initialData : fetchedData;

	console.log('Portfolio Debug:', {
		currentCategory,
		cat,
		shouldSkip,
		isFetching,
		usingSSRData: shouldSkip,
		dataCount: data?.doc?.length || 0,
	});

	const industries = [
		{ title: 'All projects', value: '' },
		{ title: 'E-commerce', value: 'e-commerce' },
		{ title: 'Website', value: 'website' },
		{ title: 'SAAS', value: 'saas' },
		{ title: 'MVP', value: 'mvp' },
		{ title: 'Travel', value: 'travel' },
		{ title: 'Inventory', value: 'inventory' },
		{ title: 'Healthcare', value: 'healthcare' },
	];

	const bg = colorMode == 'dark' ? colors.background.dark : colors.background.light;
	const text = colorMode == 'dark' ? colors.text.dark : colors.text.light;
	const secondary = colorMode == 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;
	const blue = colorMode == 'dark' ? colors.text.blue : colors.text.darkBlue;

	return (
		<Page
			theme={colorMode}
			colorMode={colorMode}
			image={img}
			title={`Our Work – Real Projects, Real Impact | Thinkcrypt`}
			description={`Explore Thinkcrypt’s portfolio of SaaS, eCommerce, and web solutions built with the MERN stack. Real-world impact, scalable systems, and startup-ready MVPs.`}>
			<Stack spacing={0}>
				<TitleSection
					colorMode={colorMode}
					top
					pb='64px'
					title='Our Work'
					titleTop='Real Prjects'
					titleBottom='Real Impact'>
					{`Explore Thinkcrypt’s portfolio of SaaS, eCommerce, and web solutions built with the MERN stack. Real-world impact, scalable systems, and startup-ready MVPs.`}
				</TitleSection>
				{/* <SectionHeading
					colorMode={colorMode}
					containerProps={{ pb: '32px' }}
					heading='All of Our Work'
					subHeading='Our Projects'>
					Explore our portfolio of successful projects and innovative solutions across various
					industries and technologies.
				</SectionHeading> */}

				<Flex
					flexDir='column'
					bg={bg}>
					<Flex {...titleContainer}>
						<Flex>
							<Flex
								gap={6}
								flexDir='column'>
								<Heading
									textTransform='uppercase'
									fontFamily={fonts?.title}
									fontSize={{
										base: '1.5rem',
										md: '3rem',
									}}>
									Filter By Industry
								</Heading>
								<Wrap>
									{industries?.map((item, i) => (
										<SelectItem
											selected={currentCategory === item?.value}
											onClick={() => onCategoryChange(item?.value)}
											border={BORDER}
											key={i}>
											{item?.title}
										</SelectItem>
									))}
								</Wrap>
							</Flex>
						</Flex>
					</Flex>
					<Grid {...itemGrid}>
						<Grid {...itemContainer}>
							{isFetching
								? [...Array(6)].map((_, i) => (
										<PortfolioItemSkeleton
											colorMode={colorMode}
											key={i}
										/>
								  ))
								: data?.doc?.map((item, i) => (
										<CaseItem
											colorMode={colorMode}
											item={item}
											key={i}
										/>
								  ))}
						</Grid>
					</Grid>
				</Flex>
			</Stack>
		</Page>
	);
};

const titleContainer = {
	pt: 4,
	px: { base: padding?.baseBody, md: padding?.lgBody },
};

const itemGrid = {
	templateColumns: {
		base: '1fr',
	},
	mt: '24px',
	px: { base: padding?.baseBody, md: padding?.lgBody },
	py: '24px',
};

const itemContainer = {
	gridTemplateColumns: {
		base: '1fr',
		md: 'repeat(3, 1fr)',
	},
	pb: '64px',
	gap: 6,
};

export default CaseStudyPage;
