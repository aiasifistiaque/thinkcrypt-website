import React from 'react';
import { Box, VStack, HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react';

const BlogSkeleton = ({ colorMode }) => {
	return (
		<Box
			bg={colorMode === 'dark' ? 'gray.800' : 'white'}
			borderRadius='lg'
			overflow='hidden'
			border='1px'
			borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}>
			{/* Featured Image Skeleton */}
			<Skeleton
				h={{ base: '200px', md: '240px' }}
				w='100%'
				startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
				endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
			/>

			{/* Content Skeleton */}
			<VStack
				align='stretch'
				p='20px'
				spacing='16px'>
				{/* Title and Excerpt */}
				<VStack
					align='stretch'
					spacing='8px'>
					{/* Title skeleton - 2 lines */}
					<Skeleton
						h='20px'
						w='90%'
						startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
						endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
					/>
					<Skeleton
						h='20px'
						w='75%'
						startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
						endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
					/>

					{/* Excerpt skeleton - 3 lines */}
					<Skeleton
						h='14px'
						w='100%'
						mt='8px'
						startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
						endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
					/>
					<Skeleton
						h='14px'
						w='95%'
						startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
						endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
					/>
					<Skeleton
						h='14px'
						w='60%'
						startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
						endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
					/>
				</VStack>

				{/* Tags skeleton */}
				<HStack spacing='6px'>
					{[1, 2, 3].map((_, index) => (
						<Skeleton
							key={index}
							h='20px'
							w='60px'
							borderRadius='md'
							startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
							endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
						/>
					))}
				</HStack>

				{/* Author and Meta skeleton */}
				<VStack
					align='stretch'
					spacing='12px'>
					{/* Author skeleton */}
					<HStack spacing='12px'>
						<SkeletonCircle
							size='32px'
							startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
							endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
						/>
						<VStack
							align='start'
							spacing='4px'
							flex='1'>
							<Skeleton
								h='14px'
								w='120px'
								startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
								endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
							/>
							<Skeleton
								h='12px'
								w='180px'
								startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
								endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
							/>
						</VStack>
					</HStack>

					{/* Meta information skeleton */}
					<HStack justify='space-between'>
						<HStack spacing='16px'>
							<Skeleton
								h='12px'
								w='60px'
								startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
								endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
							/>
							<Skeleton
								h='12px'
								w='80px'
								startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
								endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
							/>
						</HStack>
						<HStack spacing='12px'>
							<Skeleton
								h='12px'
								w='40px'
								startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
								endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
							/>
							<Skeleton
								h='12px'
								w='30px'
								startColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
								endColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
							/>
						</HStack>
					</HStack>
				</VStack>
			</VStack>
		</Box>
	);
};

export default BlogSkeleton;
