import React from 'react';
import SectionHeading from '../home/sectionheading/SectionHeading';
import Page from '../util/Page/Page';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import PortfolioItemSkeleton from './PortfolioItem/PortfolioSkeleton';
import { Heading, Stack, Flex, Grid, Wrap, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styles } from '../../theme/styles';
import { useGetAllQuery } from '../../store';
import CaseItem from './PortfolioItem/CaseItem';

const img =
	'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const BORDER = styles.border.light;

const CaseStudyPage = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'portfolios',
		limit: 99,
		sort: '-priority',
		filters: { status: 'published' },
	});

	const industries = [
		'ecommerce',
		'healthcare',
		'education',
		'finance',
		'real estate',
		'travel',
		'food & beverage',
		'entertainment',
	];

	return (
		<Page
			image={img}
			title={`Our Work – Real Projects, Real Impact | Thinkcrypt`}
			description={`Explore Thinkcrypt’s portfolio of SaaS, eCommerce, and web solutions built with the MERN stack. Real-world impact, scalable systems, and startup-ready MVPs.`}>
			<Stack
				spacing={4}
				pt='48px'>
				<SectionHeading
					containerProps={{ pb: '32px' }}
					heading='All of Our Work'
					subHeading='Our Projects'>
					Explore our portfolio of successful projects and innovative solutions across various
					industries and technologies.
				</SectionHeading>

				<Flex flexDir='column'>
					<Flex {...titleContainer}>
						{/* <Heading
							fontFamily='Michroma'
							size='xl'>
							Our Work
						</Heading> */}
						<Flex>
							<Flex
								gap={6}
								flexDir='column'>
								<Heading
									textTransform='uppercase'
									fontFamily='Michroma'
									size='md'>
									Filter By Industry
								</Heading>
								<Wrap>
									{industries?.map((item, i) => (
										<Flex
											cursor='pointer'
											p={2}
											border={BORDER}
											key={i}>
											<Text textTransform='uppercase'>{item}</Text>
										</Flex>
									))}
								</Wrap>
							</Flex>
						</Flex>
					</Flex>
					<Grid {...itemGrid}>
						<Grid {...itemContainer}>
							{isFetching
								? [...Array(2)].map((_, i) => <PortfolioItemSkeleton key={i} />)
								: data?.doc?.map((item, i) => (
										<CaseItem
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
	gap: 4,
};

export default CaseStudyPage;
