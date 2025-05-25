import React from 'react';
import styled from '@emotion/styled';
import { Badge, Button, Flex, Image, Link, Text, Wrap, Box } from '@chakra-ui/react';
import { colors, styles } from '../../../theme/styles';
import { fonts } from '../../../lib/constants';

const Container = styled(Flex)`
	flex: 1;
	cursor: pointer;
	flex-direction: column;
`;

const CaseItem = ({ item, colorMode }) => {
	const BORDER = colorMode == 'dark' ? styles.border.dark : styles.border.light;
	const textColor = colorMode == 'dark' ? colors.text.dark : colors.text.light;
	const cardBg = colorMode == 'dark' ? colors.card.dark : colors.card.light;
	const blue = colorMode == 'dark' ? colors.text.blue : colors.text.darkBlue;
	return (
		<Container
			border={BORDER}
			bg={cardBg}>
			<Image
				{...imgCss}
				src={`${item?.image}`}
				alt={item?.name}
			/>
			<Flex
				{...cardCss}
				borderTop={BORDER}
				flex={1}>
				<Text
					{...titleCss}
					color={textColor}>
					{item?.name}
				</Text>
				<Text
					{...catText}
					color={blue}>
					{item?.category}
				</Text>
				<Text
					{...descCss}
					color={textColor}>
					{item?.shortDescription}
				</Text>
				<Wrap
					mb={4}
					spacing={1}>
					{item?.tags?.map((tag, i) => (
						<Badge
							borderRadius='none'
							{...badgeCss}
							bg={colorMode == 'dark' ? '#ebebeb' : '#f2f2f2'}
							key={i}>
							{tag}
						</Badge>
					))}
				</Wrap>

				<Flex
					align='flex-end'
					flex={1}>
					<Link
						_hover={{
							textDecoration: 'none',
						}}
						isExternal
						href={
							item?.showCaseStudy ? `/case-study/${item?._id}` : item?.liveUrl ? item?.liveUrl : '#'
						}>
						<Button
							{...btnCss}
							bg={colorMode == 'dark' ? '#ebebeb' : 'black'}
							color={colorMode == 'dark' ? 'black' : 'white'}>
							{item?.showCaseStudy ? 'View case Study' : 'Visit Project'}
						</Button>
					</Link>
				</Flex>
			</Flex>
		</Container>
	);
};

const catText = {
	fontFamily: fonts?.primary,
	fontSize: '16px',
	textTransform: 'uppercase',
	color: colors?.text?.blue,
};

const imgCss = {
	width: '100%',
	height: { base: '300px', md: '320px' },
	objectFit: 'cover',
	borderRadius: 'inherit',
	p: { base: '12px', md: '16px' },
};

const descCss = {
	fontFamily: fonts?.primary,
	fontSize: '16px',
	textTransform: 'uppercase',
	noOfLines: 3,
	mb: 4,
};

const btnCss = {
	bg: 'black',
	borderRadius: 'none',
	color: 'white',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
	fontSize: '14px',
};

const cardCss = {
	flexDir: 'column',

	p: { base: '12px', md: '16px' },
	gap: 2,
};

const titleCss = {
	lineHeight: 1,
	fontFamily: fonts?.title,
	fontSize: { base: '20px', md: '44px' },
	fontWeight: '600',
	noOfLines: 2,
	textTransform: 'uppercase',
};

const badgeCss = {
	fontFamily: fonts?.primary,
	fontSize: '10px',
	fontWeight: '500',
	p: 1,
	size: 'sm',
	bg: '#f2f2f2',
	textTransform: 'uppercase',
};

export default CaseItem;
