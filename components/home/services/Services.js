import React from 'react';
import data from './data.js';

import {
	Flex,
	Image as CImage,
	Stack,
	Heading,
	Text,
	Box,
	Grid,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../../lib/constants';

const Container = styled(Flex)`
	margin: 24px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	flex-direction: column;
	gap: 2rem;
	@media (min-width: ${breakpoints.desktop}) {
		margin: 32px 128px;
	}
`;

const CustomGrid = styled(Grid)`
	grid-template-columns: 1fr;
	gap: 1rem;
	@media (min-width: ${breakpoints.desktop}) {
		grid-template-columns: 1fr 1fr;
	}
`;

const Services = () => {
	return (
		<Container>
			<CustomGrid>
				<Service item={data[0]} />
				<Service item={data[1]} />
			</CustomGrid>

			<CustomGrid>
				<Service item={data[2]} />
				<Service item={data[3]} />
			</CustomGrid>

			<CustomGrid>
				<Service item={data[4]} />
				<Service item={data[5]} />
			</CustomGrid>
		</Container>
	);
};

const Item = styled(Box)`
	margin-bottom: 3rem;
	flex-direction: column;
`;

const Image = styled(CImage)`
	width: 100%;
	height: 220px;
	object-fit: cover;
	margin-bottom: 0.25rem;
	border-radius: 2px;
	@media (min-width: ${breakpoints.tab}) {
		height: 300px;
	}
	@media (min-width: ${breakpoints.desktop}) {
		height: 350px;
	}
`;

const Service = ({ item }) => {
	return (
		<Item>
			<Image src={`${item.src}.jpg`} alt={item.name} />
			<Stack mt={4} spacing={2} px='4px'>
				<Heading
					mb={0.5}
					fontFamily='Poppins, sans-serif'
					fontWeight='600'
					size='md'>
					{item.name}
				</Heading>
				<Text>{item.details}</Text>
			</Stack>
		</Item>
	);
};

export default Services;
