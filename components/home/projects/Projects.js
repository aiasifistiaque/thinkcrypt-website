import React from 'react';
import data from './data.js';
import { Accordion, Flex, Grid, Show, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../../lib/constants';
import Project from './Project.js';
import { styles } from '../../../theme/styles.js';
import ProjectSmall from './ProjectSmall.js';

const Section = styled(Grid)`
	grid-template-columns: 1fr;

	@media (min-width: ${breakpoints.tab}) {
		grid-template-columns: 1fr 1fr;
	}
`;

const BORDER = styles.border.light;

const Projects = () => {
	return (
		<Flex
			borderBottom={BORDER}
			px='24px'
			pl={{ base: '24px', md: '128px' }}
			w='100%'>
			<Section
				w='100%'
				borderLeft={BORDER}
				borderRight={BORDER}>
				<Show above='md'>
					{data.map((item, i) => (
						<>
							<Project
								index={i}
								item={item}
								key={i}
							/>
						</>
					))}
				</Show>

				<Show below='md'>
					<Accordion defaultIndex={[0]}>
						{data.map((item, i) => (
							<ProjectSmall
								index={i}
								item={item}
								key={i}
							/>
						))}
					</Accordion>
				</Show>
			</Section>
		</Flex>
	);
};

export default Projects;
