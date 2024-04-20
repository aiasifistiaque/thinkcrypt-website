import React from 'react';
import styled from '@emotion/styled';
import { Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { breakpoints } from '../../lib/constants';
import { styles } from '../../../theme/styles';

const Container = styled(Flex)`
	flex: 1;
	cursor: pointer;

	flex-direction: column;
`;

const ImageBox = styled(Image)`
	img {
		width: 100%;
		height: 300px;
		object-fit: contain;
		border-radius: inherit;

		@media (min-width: ${breakpoints.desktop}) {
			width: 500px;
			height: 350px;
			object-fit: contain;
		}
	}
`;

const BORDER = styles.border.light;
const PortfolioItem = ({ item, href }) => {
	return (
		<Link
			isExternal
			href={item.href}>
			<Container border={BORDER}>
				<ImageBox
					p={{ base: '12px', md: '24px' }}
					src={`${item.src}`}
					alt={item.name}
				/>
				<Flex
					mt='12px'
					flexDir='column'
					p={{ base: '12px', md: '24px' }}
					gap={2}
					borderTop={BORDER}>
					<Text
						lineHeight={1.2}
						noOfLines={2}
						fontFamily='Bebas Neue'
						fontSize={32}
						fontWeight='600'>
						{item.name}
					</Text>
					<Text
						fontFamily='Bebas Neue'
						fontSize='24px'>
						{item.type}
					</Text>
				</Flex>
			</Container>
		</Link>
	);
};

export default PortfolioItem;
