import React from 'react';
import data from './data.js';
import { Grid, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../../lib/constants';
import Project from './Project.js';

const Container = styled(Stack)`
	margin: 24px 0;
	@media (min-width: ${breakpoints.desktop}) {
		margin: 32px 128px;
	}
`;

const Section = styled(Grid)`
	grid-template-columns: 1fr;
	gap: 0.5rem;
	@media (min-width: ${breakpoints.tab}) {
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: ${breakpoints.desktop}) {
		gap: 1rem;
	}
`;

const Projects = () => {
	return (
		<Container spacing={0}>
			<Section>
				{data.map((item, i) => (
					<Project item={item} key={i} />
				))}
			</Section>
		</Container>
	);
};

export default Projects;
