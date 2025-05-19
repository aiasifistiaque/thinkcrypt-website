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

const PortfolioContainer = styled(Flex)`
	min-height: 100vh;
	flex-direction: column;
`;

const BORDER = styles.border.light;

const CaseStudyPage = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'portfolios',
		limit: 99,
		sort: '-priority',
		filters: { status: 'published' },
	});

	const dataOne = data?.doc?.filter((_, index) => index % 2 === 0) || [];
	const dataTwo = data?.doc?.filter((_, index) => index % 2 !== 0) || [];

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
		<Page>
			<Stack
				spacing={4}
				pt='48px'>
				<SectionHeading
					heading='All of Our Work'
					subHeading='Our Projects'>
					Explore our portfolio of successful projects and innovative solutions across various
					industries and technologies.
				</SectionHeading>

				<PortfolioContainer>
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
						<Flex
							{...itemContainer}
							borderLeft={BORDER}>
							{isFetching
								? [...Array(2)].map((_, i) => <PortfolioItemSkeleton key={i} />)
								: dataOne?.map((item, i) => (
										<CaseItem
											item={item}
											key={i}
										/>
								  ))}
						</Flex>
						<Flex {...itemContainer}>
							{isFetching
								? [...Array(2)].map((_, i) => <PortfolioItemSkeleton key={i} />)
								: dataTwo?.map((item, i) => (
										<CaseItem
											item={item}
											key={i}
										/>
								  ))}
						</Flex>
					</Grid>
				</PortfolioContainer>
			</Stack>
		</Page>
	);
};

const titleContainer = {
	pt: 4,
	px: 8,
	borderLeft: BORDER,
	borderRight: BORDER,
};

const itemGrid = {
	templateColumns: {
		base: '1fr',
		md: '5fr 5fr',
	},
	mt: '24px',
	px: '24px',
	border: BORDER,
};

const itemContainer = {
	flexDir: 'column',
	gap: 4,
};

export default CaseStudyPage;
