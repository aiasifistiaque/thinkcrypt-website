import React from 'react';
import data from './data.js';
import { Accordion, Flex, Grid, Heading, Show } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../../lib/constants';
import Project from './Project.js';
import { colors, styles } from '../../../theme/styles.js';
import ProjectSmall from './ProjectSmall.js';
import { useGetAllQuery } from '../../../store/index.js';
import CaseItem from '../../portfolio/PortfolioItem/CaseItem.js';
import PortfolioItemSkeleton from '../../portfolio/PortfolioItem/PortfolioSkeleton.js';
import SectionOne from '../services/SectionOne.js';
import { padding } from '../../../lib/constants.js';
import CaseItemUpdated from '../../portfolio/PortfolioItem/CaseItemUpdated.js';

const Section = styled(Grid)`
	grid-template-columns: 1fr;
`;

const BORDER = styles.border.light;

const Projects = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'portfolios',
		limit: 6,
		sort: '-priority',
		filters: { status: 'published', isFeatured: true },
	});

	return (
		<Flex
			flexDir='column'
			bg={colors?.background?.dark}>
			{/* <Divider /> */}
			<Flex>
				<SectionOne
					title='Featured Projects'
					subTitle='See what we’ve built — smart apps, powerful tools, real results. Dive into success stories that show how we turn bold ideas into better software. Let’s build the future, together.'>
					<Grid {...itemContainer}>
						{isFetching
							? [...Array(6)].map((_, i) => <PortfolioItemSkeleton key={i} />)
							: data?.doc?.map((item, i) => (
									<CaseItemUpdated
										colorMode='dark'
										item={item}
										key={i}
									/>
							  ))}
					</Grid>
				</SectionOne>
			</Flex>
			{/* <Heading>View All Our Work</Heading> */}
		</Flex>
	);
};

const itemContainer = {
	gridTemplateColumns: {
		base: '1fr',
		md: 'repeat(3, 1fr)',
	},
	pb: '64px',
	gap: 8,
};

export default Projects;
