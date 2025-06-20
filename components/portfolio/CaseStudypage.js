'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Page from '../util/Page/Page';
import PortfolioItemSkeleton from './PortfolioItem/PortfolioSkeleton';
import { Heading, Stack, Flex, Grid, Wrap, Text, useColorMode } from '@chakra-ui/react';
import { colors, styles } from '../../theme/styles';
import { useGetAllQuery } from '../../store';
import CaseItem from './PortfolioItem/CaseItem';
import TitleSection from '../home/about-us/TitleSection';
import { fonts, padding } from '../../lib/constants';
import SelectItem from './SelectItem';

// const colorMode = 'dark';

const img =
	'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const CaseStudyPage = () => {
	const { colorMode } = useColorMode();

	const BORDER = colorMode == 'dark' ? styles.border.dark : styles.border.light;
	const router = useRouter();
	// const searchParams = useSearchParams();

	// Get current category from URL parameters
	// const currentCategory = searchParams.get('category') || '';
	const [cat, setCat] = useState('');

	// Update category state when URL changes
	// useEffect(() => {
	// 	setCat(searchParams.get('category') || '');
	// }, [searchParams]);

	const onCategoryChange = value => {
		setCat(value);
		// Update URL without page refresh for better UX
		// const newUrl = value ? `/portfolio?category=${value}` : '/portfolio';
		// router.push(newUrl);
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
	// const data = fetchedData;

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
					titleTop='Real Projects'
					titleBottom='Real Impact'>
					{`Explore Thinkcrypt’s portfolio of SaaS, eCommerce, and web solutions built with the MERN stack. Real-world impact, scalable systems, and startup-ready MVPs.`}
				</TitleSection>

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
											selected={cat === item?.value}
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
								: fetchedData?.doc?.map((item, i) => (
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
