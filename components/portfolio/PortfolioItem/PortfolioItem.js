import React from 'react';
import styled from '@emotion/styled';
import { Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { breakpoints } from '../../lib/constants';

const Container = styled(Flex)`
	flex: 1;
	cursor: pointer;
	background-color: white;
	box-shadow: 2px 2px 10px rgba(153, 140, 140, 0.2);
	border-radius: 8px;
	//padding: 0.5rem;
	flex-direction: column;
	gap: 0;
`;

const ImageBox = styled(Image)`
	img {
		width: 100%;
		height: 300px;
		object-fit: contain;
		border-radius: inherit;
		background-color: whitesmoke;

		@media (min-width: ${breakpoints.desktop}) {
			width: 500px;
			height: 350px;
			object-fit: contain;
		}
	}
`;

const PortfolioItem = ({ item, href }) => {
	return (
		<Link isExternal href={item.href}>
			<Container>
				<ImageBox src={`${item.src}`} alt={item.name} borderTopRadius='.5rem' />
				<Stack p={'1.5rem 1rem'}>
					<Text fontSize={24} fontWeight='600'>
						{item.name}
					</Text>
					<Text>{item.type}</Text>
				</Stack>
			</Container>
		</Link>
	);
};

export default PortfolioItem;
