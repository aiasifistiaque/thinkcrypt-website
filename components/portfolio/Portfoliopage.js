import React from 'react';
import SectionHeading from '../home/sectionheading/SectionHeading';
import Page from '../util/Page/Page';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import { Heading, Stack, Flex, Grid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styles } from '../../theme/styles';
import { useGetAllQuery } from '../../store';

const PortfolioContainer = styled(Flex)`
	min-height: 100vh;
	flex-direction: column;
`;

const BORDER = styles.border.light;

const Portfoliopage = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'portfolios',
		limit: 99,
		sort: '-priority',
		filters: { status: 'published' },
	});

	const dataOne = data?.doc?.filter((_, index) => index % 2 === 0) || [];
	const dataTwo = data?.doc?.filter((_, index) => index % 2 !== 0) || [];

	return (
		<Page>
			<Stack
				spacing={4}
				pt='48px'>
				<SectionHeading
					heading='All of Our Work'
					subHeading='Our Projects'>
					We{`'`}re passionate about design, innovation, brilliant ideas and the execution that
					brings it all together in one beautiful experience. If you are too, call or send us an
					email to get started.
				</SectionHeading>
				<PortfolioContainer>
					<Flex {...titleContainer}>
						<Heading
							fontFamily='Suisse'
							size='xl'>
							Our Work
						</Heading>
					</Flex>
					<Grid {...itemGrid}>
						<Flex
							{...itemContainer}
							borderLeft={BORDER}>
							{dataOne?.map((item, i) => (
								<PortfolioItem
									item={item}
									key={i}
								/>
							))}
						</Flex>
						<Flex {...itemContainer}>
							{dataTwo?.map((item, i) => (
								<PortfolioItem
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

export default Portfoliopage;
