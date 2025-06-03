import React from 'react';
import styled from '@emotion/styled';
import { Flex, Skeleton, SkeletonText, Box, Wrap } from '@chakra-ui/react';

import { colors, styles } from '../../../theme/styles';

const Container = styled(Flex)`
	flex: 1;
	cursor: pointer;
	flex-direction: column;
	border-radius: 12px;
`;

const IMAGE_HEIGHT = { md: '240px', '2xl': '360px' };

const PortfolioItemSkeleton = ({ colorMode }) => {
	const BORDER = colorMode == 'dark' ? styles.border.dark : styles.border.light;
	const textColor = colorMode == 'dark' ? colors.text.dark : colors.text.light;
	const cardBg = colorMode == 'dark' ? colors.card.dark : colors.card.light;
	const bg = colorMode == 'dark' ? colors.background.dark : colors.background.light;

	return (
		<Container bg={cardBg}>
			{/* Image Skeleton */}
			<Skeleton
				h={IMAGE_HEIGHT}
				w='100%'
				borderTopRadius='12px'
				startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
				endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
			/>

			{/* Content Skeleton */}
			<Flex
				flexDir='column'
				p={{ base: '12px', md: '16px' }}
				gap={2}
				borderTop={BORDER}
				flex={1}>
				{/* Category Skeleton */}
				<Skeleton
					h='16px'
					w='60px'
					startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
					endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
				/>

				{/* Title Skeleton */}
				<Skeleton
					h={{ base: '20px', md: '44px' }}
					w='85%'
					startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
					endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
					mb={1}
				/>

				{/* Description Skeleton */}
				<SkeletonText
					noOfLines={3}
					spacing='2'
					skeletonHeight='15px'
					startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
					endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
					mb={4}
				/>

				{/* Tags Skeleton */}
				<Wrap spacing={1}>
					{[1, 2, 3].map((_, i) => (
						<Skeleton
							key={i}
							h='24px'
							w={`${60 + i * 20}px`}
							borderRadius='99px'
							startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
							endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
						/>
					))}
				</Wrap>
			</Flex>
		</Container>
	);
};

export default PortfolioItemSkeleton;
