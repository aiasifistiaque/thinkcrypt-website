import React, { useState } from 'react';
import SectionHeading from '../home/sectionheading/SectionHeading';
import Page from '../util/Page/Page';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import PortfolioItemSkeleton from './PortfolioItem/PortfolioSkeleton';
import { Heading, Stack, Flex, Grid, Wrap, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { colors, styles } from '../../theme/styles';
import { useGetAllQuery } from '../../store';
import CaseItem from './PortfolioItem/CaseItem';

const colorMode = 'dark';
const textColor = colorMode == 'dark' ? colors?.text?.dark : colors?.text?.light;
const BORDER = colorMode == 'dark' ? styles.border.dark : styles.border.light;

const img =
	'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const CaseStudyPage = () => {
	const [cat, setCat] = useState('');

	const onCategoryChange = value => {
		setCat(value);
	};

	const { data, isFetching } = useGetAllQuery({
		path: 'portfolios',
		limit: 99,
		sort: '-priority',
		filters: { status: 'published', category: cat || '' },
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

	return (
		<Page
			colorMode={colorMode}
			image={img}
			title={`Our Work – Real Projects, Real Impact | Thinkcrypt`}
			description={`Explore Thinkcrypt’s portfolio of SaaS, eCommerce, and web solutions built with the MERN stack. Real-world impact, scalable systems, and startup-ready MVPs.`}>
			<Stack
				spacing={4}
				pt='64px'>
				<SectionHeading
					colorMode={colorMode}
					containerProps={{ pb: '32px' }}
					heading='All of Our Work'
					subHeading='Our Projects'>
					Explore our portfolio of successful projects and innovative solutions across various
					industries and technologies.
				</SectionHeading>

				<Flex flexDir='column'>
					<Flex {...titleContainer}>
						<Flex>
							<Flex
								gap={6}
								flexDir='column'>
								<Heading
									textTransform='uppercase'
									size='md'
									color={textColor}>
									Filter By Industry
								</Heading>
								<Wrap>
									{industries?.map((item, i) => (
										<Flex
											onClick={() => onCategoryChange(item?.value)}
											cursor='pointer'
											p={2}
											bg={
												cat === item?.value
													? colorMode == 'dark'
														? '#fafafa'
														: 'black'
													: 'transparent'
											}
											border={BORDER}
											key={i}>
											<Text
												color={
													cat === item?.value
														? colorMode == 'dark'
															? 'black'
															: 'white'
														: colorMode == 'dark'
														? colors?.textSecondary?.dark
														: '#737373'
												}
												textTransform='uppercase'>
												{item?.title}
											</Text>
										</Flex>
									))}
								</Wrap>
							</Flex>
						</Flex>
					</Flex>
					<Grid {...itemGrid}>
						<Grid {...itemContainer}>
							{isFetching
								? [...Array(6)].map((_, i) => <PortfolioItemSkeleton key={i} />)
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
	px: { base: 4, md: 6 },
	borderLeft: BORDER,
	borderRight: BORDER,
};

const itemGrid = {
	templateColumns: {
		base: '1fr',
	},
	mt: '24px',
	px: { base: 4, md: 6 },
	border: BORDER,
	py: '24px',
};

const itemContainer = {
	gridTemplateColumns: {
		base: '1fr',
		md: 'repeat(3, 1fr)',
	},
	pb: '64px',
	gap: 4,
};

export default CaseStudyPage;
