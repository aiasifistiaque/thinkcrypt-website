import React from 'react';
import data from './data.js';
import { Accordion, Flex, Grid, Show } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../../lib/constants';
import Project from './Project.js';
import { styles } from '../../../theme/styles.js';
import ProjectSmall from './ProjectSmall.js';
import { useGetAllQuery } from '../../../store/index.js';
import CaseItem from '../../portfolio/PortfolioItem/CaseItem.js';
import PortfolioItemSkeleton from '../../portfolio/PortfolioItem/PortfolioSkeleton.js';

const Section = styled(Grid)`
	grid-template-columns: 1fr;
`;

const BORDER = styles.border.light;

const Projects = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'portfolios',
		limit: 12,
		sort: '-priority',
		filters: { status: 'published', isFeatured: true },
	});
	return (
		<Flex
			borderBottom={BORDER}
			px={{ base: '16px', md: '24px' }}
			w='100%'>
			<Section
				w='100%'
				borderLeft={BORDER}
				borderRight={BORDER}>
				<Grid {...itemContainer}>
					{isFetching
						? [...Array(6)].map((_, i) => <PortfolioItemSkeleton key={i} />)
						: data?.doc?.map((item, i) => (
								<CaseItem
									item={item}
									key={i}
								/>
						  ))}
				</Grid>
				{/* <Show above='md'>
					{data?.doc?.map((item, i) => (
						<Project
							index={i}
							item={item}
							key={i}
						/>
					))}
				</Show>

				<Show below='md'>
					<Accordion defaultIndex={[0]}>
						{data?.doc?.map((item, i) => (
							<ProjectSmall
								index={i}
								item={item}
								key={i}
							/>
						))}
					</Accordion>
				</Show> */}
			</Section>
		</Flex>
	);
};

const itemContainer = {
	gridTemplateColumns: {
		base: '1fr',
		md: 'repeat(3, 1fr)',
	},
	pb: '64px',
	gap: 4,
};

export default Projects;
