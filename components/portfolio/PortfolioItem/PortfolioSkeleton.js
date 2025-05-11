import React from 'react';
import styled from '@emotion/styled';
import { Flex, Skeleton, SkeletonText } from '@chakra-ui/react';

import { styles } from '../../../theme/styles';

const Container = styled(Flex)`
	flex: 1;
	cursor: pointer;
	flex-direction: column;
`;

const BORDER = styles.border.light;
const PortfolioItemSkeleton = () => {
	return (
		<Container border={BORDER}>
			<Flex
				p={{ base: '12px', md: '16px' }}
				justify='center'
				w='100%'>
				<Skeleton
					h={{ base: '300px', md: '350px' }}
					w={{ base: '100%', md: '100%' }}
					borderRadius='inherit'
					startColor='gray.200'
					endColor='gray.300'
				/>
			</Flex>

			<Flex
				flexDir='column'
				p={{ base: '12px', md: '16px' }}
				gap={2}
				borderTop={BORDER}>
				<SkeletonText
					noOfLines={2}
					maxW='60%'
				/>
			</Flex>
		</Container>
	);
};

export default PortfolioItemSkeleton;
