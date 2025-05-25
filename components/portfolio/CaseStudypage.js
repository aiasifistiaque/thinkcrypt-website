import React, { useState } from 'react';
import SectionHeading from '../home/sectionheading/SectionHeading';
import Page from '../util/Page/Page';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import PortfolioItemSkeleton from './PortfolioItem/PortfolioSkeleton';
import { Heading, Stack, Flex, Grid, Wrap, Text, useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { colors, styles } from '../../theme/styles';
import { useGetAllQuery } from '../../store';
import CaseItem from './PortfolioItem/CaseItem';
import TitleSection from '../home/about-us/TitleSection';
import { fonts } from '../../lib/constants';
import SelectItem from './SelectItem';

const colorMode = 'dark';
const textColor = colorMode == 'dark' ? colors?.text?.dark : colors?.text?.light;
const BORDER = colorMode == 'dark' ? styles.border.dark : styles.border.light;

const img =
	'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const CaseStudyPage = () => {
	const { colorMode } = useColorMode();
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
					pb={0}
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
											selected={cat == item?.value}
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
};

const itemGrid = {
	templateColumns: {
		base: '1fr',
	},
	mt: '24px',
	px: { base: 4, md: 6 },
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
