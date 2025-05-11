import React from 'react';
import styled from '@emotion/styled';
import { Flex, Image, Link, Text } from '@chakra-ui/react';
import { breakpoints } from '../../lib/constants';
import { styles } from '../../../theme/styles';
import NextLink from 'next/link';

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
const PortfolioItem = ({ item }) => {
	return (
		<Link
			isExternal
			href={item?.showCaseStudy ? `/case-study/${item?._id}` : item?.liveUrl ? item?.liveUrl : '#'}>
			<Container border={BORDER}>
				<ImageBox
					p={{ base: '12px', md: '16px' }}
					src={`${item?.image}`}
					alt={item?.name}
				/>
				<Flex
					flexDir='column'
					p={{ base: '12px', md: '16px' }}
					gap={2}
					borderTop={BORDER}>
					<Text
						lineHeight={1.2}
						noOfLines={2}
						fontFamily='Michroma'
						fontSize={32}
						fontWeight='600'>
						{item?.name}
					</Text>
					<Text
						fontFamily='Michroma'
						fontSize='20px'>
						{item?.category}
					</Text>
				</Flex>
			</Container>
		</Link>
	);
};

export default PortfolioItem;
