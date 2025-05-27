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
import ViewMoreButton from '../services/ViewMoreButton.js';

const Section = styled(Grid)`
	grid-template-columns: 1fr;
`;

const BORDER = styles.border.light;

const Projects = ({ theme }) => {
	const { data, isFetching } = useGetAllQuery({
		path: 'portfolios',
		limit: 6,
		sort: '-priority',
		filters: { status: 'published', isFeatured: true },
	});

	const bg = theme === 'dark' ? colors?.background?.dark : colors?.background?.light;

	return (
		<Flex
			flexDir='column'
			bg={bg}>
			{/* <Divider /> */}
			<Flex>
				<SectionOne
					theme={theme}
					title='Featured Projects'
					// subTitle='See what we’ve built — smart apps, powerful tools, real results. Dive into success stories that show how we turn bold ideas into better software. Let’s build the future, together.'
				>
					<Grid {...itemContainer}>
						{isFetching
							? [...Array(6)].map((_, i) => <PortfolioItemSkeleton key={i} />)
							: data?.doc?.map((item, i) => (
									<CaseItem
										colorMode={theme}
										item={item}
										key={i}
									/>
							  ))}
					</Grid>
				</SectionOne>
			</Flex>

			<ViewMoreButton
				mt='-32px'
				theme={theme}
				href='/portfolio'>
				View more projects
			</ViewMoreButton>
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
	gap: 6,
};

export default Projects;
