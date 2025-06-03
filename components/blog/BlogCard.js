import React from 'react';
import {
	Box,
	Image,
	Text,
	Heading,
	VStack,
	HStack,
	Tag,
	Avatar,
	Link,
	Flex,
	Icon,
	Wrap,
} from '@chakra-ui/react';
import { colors } from '../../theme/styles';
import { FiClock, FiEye, FiHeart } from 'react-icons/fi';
import NextLink from 'next/link';
import ImageTag from './ImageTag';
import { fonts } from '../../lib/constants';
import CardBadge from '../portfolio/PortfolioItem/CardBadge';

const BlogCard = ({ blog, colorMode }) => {
	const cardBg = colorMode === 'dark' ? colors?.card?.dark : colors?.card?.light;
	const textColor = colorMode === 'dark' ? colors?.text?.dark : colors?.text?.light;
	const secondaryColor =
		colorMode === 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;

	const formatDate = dateString => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	return (
		<Box
			bg={cardBg}
			borderRadius='12px'
			cursor='pointer'>
			<NextLink
				href={`/blog/${blog?.id}`}
				passHref>
				<Link _hover={{ textDecoration: 'none' }}>
					{/* Featured Image */}
					<Box
						position='relative'
						overflow='hidden'>
						<Image
							borderTopRadius='12px'
							src={blog.featuredImage}
							alt={blog.title}
							w='100%'
							h={{ base: '200px', md: '240px' }}
							objectFit='cover'
						/>
						{blog?.isFeatured && <ImageTag>Featured</ImageTag>}
						<ImageTag>{blog?.category}</ImageTag>
					</Box>

					{/* Content */}
					<VStack
						align='stretch'
						p='20px'
						spacing='16px'>
						<VStack
							align='stretch'
							spacing='8px'>
							<Heading
								{...titleCss}
								color={textColor}>
								{blog?.title}
							</Heading>
							<Text
								{...descCss}
								color={secondaryColor}
								noOfLines={3}
								minH='60px'>
								{blog?.excerpt}
							</Text>
						</VStack>

						{/* Tags */}
						<Wrap spacing='4px'>
							{blog?.tags?.slice(0, 3)?.map((tag, i) => (
								<CardBadge key={i}>{tag}</CardBadge>
							))}
							{blog?.tags?.length > 3 && <CardBadge size='sm'>+{blog?.tags?.length - 3}</CardBadge>}
						</Wrap>

						{/* Author and Meta Info */}
						<VStack
							align='stretch'
							spacing='12px'>
							{/* Author */}
							<HStack spacing='12px'>
								<Avatar
									fontFamily={fonts?.primary}
									size='sm'
									src={blog?.authorImage}
									name={blog?.author}
								/>
								<VStack
									align='start'
									spacing='0'
									flex='1'>
									<Text
										{...authorText}
										color={textColor}>
										{blog?.author}
									</Text>
									<Text
										fontFamily={fonts?.primary}
										color={secondaryColor}
										fontSize='sm'
										lineHeight='1.2'>
										{blog?.authorBio}
									</Text>
								</VStack>
							</HStack>

							{/* Meta Information */}
							<HStack
								justify='space-between'
								wrap='wrap'
								spacing='12px'>
								<HStack
									spacing='16px'
									fontFamily={fonts?.primary}>
									<HStack spacing='4px'>
										<Icon
											as={FiClock}
											color={secondaryColor}
											boxSize='14px'
										/>
										<Text
											fontFamily={fonts?.primary}
											color={secondaryColor}
											fontSize='sm'>
											{blog?.readTime}
										</Text>
									</HStack>
								</HStack>
								<Text
									fontFamily={fonts?.primary}
									color={secondaryColor}
									fontSize='sm'>
									{formatDate(blog?.publishedAt)}
								</Text>
								{/* <HStack spacing='12px'>
									<HStack spacing='4px'>
										<Icon
											as={FiEye}
											color={secondaryColor}
											boxSize='14px'
										/>
										<Text
											color={secondaryColor}
											fontSize='xs'>
											{blog.views.toLocaleString()}
										</Text>
									</HStack>
									<HStack spacing='4px'>
										<Icon
											as={FiHeart}
											color={secondaryColor}
											boxSize='14px'
										/>
										<Text
											color={secondaryColor}
											fontSize='xs'>
											{blog.likes}
										</Text>
									</HStack>
								</HStack> */}
							</HStack>
						</VStack>
					</VStack>
				</Link>
			</NextLink>
		</Box>
	);
};

const titleCss = {
	lineHeight: 1,
	fontFamily: fonts?.title,
	fontSize: { base: '20px', md: '34px' },
	fontWeight: '600',
	noOfLines: 2,
	textTransform: 'uppercase',
};

const authorText = {
	textTransform: 'uppercase',
	fontFamily: fonts?.primary,
	fontSize: 'md',
	fontWeight: 'medium',
	lineHeight: '1.2',
};

const descCss = {
	fontFamily: fonts?.primary,
	fontSize: '15px',
	textTransform: 'uppercase',
	noOfLines: 3,
	lineHeight: '1.4',
	mb: 4,
};

export default BlogCard;
