import React from 'react';
import { Skeleton, Flex, Box } from '@chakra-ui/react';

const ClientSkeleton = ({ colorMode }) => {
	return (
		<Flex
			flexDir='column'
			align='center'
			p={4}
			gap={3}>
			{/* Icon Skeleton */}
			<Skeleton
				h='120px'
				w='120px'
				borderRadius='md'
				startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
				endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
			/>

			{/* Title Skeleton */}
			<Skeleton
				h={{ base: '10px', md: '28px' }}
				w='80px'
				startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
				endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
			/>
		</Flex>
	);
};

export default ClientSkeleton;
