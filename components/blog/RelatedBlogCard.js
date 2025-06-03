import React from 'react';
import { Box, color, Text, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from '../../theme/styles';
import { fonts } from '../../lib/constants';

const RelatedBlogCard = ({ item }) => {
	const { colorMode } = useColorMode();
	const textColor = colorMode === 'dark' ? colors?.text?.dark : colors?.text?.light;
	const cardColor = colorMode == 'dark' ? colors?.card?.dark : colors?.card?.light;
	const secondary =
		colorMode == 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;

	return (
		<Link href={`/blog/${item?.id}`}>
			<Box
				{...relatedCardStyles}
				bg={cardColor}>
				<Image
					src={item?.featuredImage}
					alt={item?.title}
					{...relatedImageStyles}
				/>
				<Box {...relatedContentStyles}>
					<Text
						{...relatedCategoryStyles}
						color={secondary}>
						{item?.category}
					</Text>
					<Text
						{...relatedTitleStyles}
						color={textColor}>
						{item?.title}
					</Text>
				</Box>
			</Box>
		</Link>
	);
};

const relatedCardStyles = {
	borderRadius: 'md',
	overflow: 'hidden',

	boxShadow: 'sm',
	_hover: { boxShadow: 'md', transform: 'translateY(-1px)' },
	transition: 'all 0.2s',
	display: 'block',
	borderRadius: '12px',
};
const relatedImageStyles = {
	w: '100%',
	h: '160px',
	objectFit: 'cover',
};
const relatedContentStyles = {
	p: 4,
};
const relatedCategoryStyles = {
	fontSize: 'xs',
	mb: 2,
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
	letterSpacing: '0.5px',
};
const relatedTitleStyles = {
	fontWeight: '600',
	fontSize: 'sm',
	noOfLines: 2,
	fontFamily: fonts?.primary,
	lineHeight: 1.4,
};

export default RelatedBlogCard;
