import React from 'react';
import styled from '@emotion/styled';
import { Badge, Button, Flex, Image, Link, Text, Wrap, Box } from '@chakra-ui/react';
import { colors, styles } from '../../../theme/styles';
import { fonts } from '../../../lib/constants';
import NextLink from 'next/link';

const Container = styled(Flex)`
	flex: 1;
	cursor: pointer;
	flex-direction: column;
	border-radius: 12px;
`;

const CaseItem = ({ item, colorMode }) => {
	const BORDER = colorMode == 'dark' ? styles.border.dark : styles.border.light;
	const textColor = colorMode == 'dark' ? colors.text.dark : colors.text.light;
	const cardBg = colorMode == 'dark' ? colors.card.dark : colors.card.light;
	const blue = colorMode == 'dark' ? colors.text.blue : colors.text.darkBlue;
	const bg = colorMode == 'dark' ? colors.background.dark : colors.background.light;
	return (
		<Link
			_hover={{
				textDecoration: 'none',
			}}
			isExternal={item?.showCaseStudy ? false : true}
			href={item?.showCaseStudy ? `/case-study/${item?._id}` : item?.liveUrl ? item?.liveUrl : '#'}>
			<Container bg={cardBg}>
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
						{...catText}
						color={blue}>
						{item?.category}
					</Text>
					<Text
						{...titleCss}
						color={textColor}>
						{item?.name}
					</Text>

					<Text
						{...descCss}
						color={textColor}>
						{item?.shortDescription}
					</Text>
					<Wrap
						// mb={4}
						spacing={1}>
						{item?.tags?.map((tag, i) => (
							<Flex
								{...badgeCss}
								bg={bg}
								px={3}
								borderRadius='99px'
								py={1}
								fontSize='12px'
								textTransform='uppercase'
								key={i}>
								{tag}
							</Flex>
						))}
					</Wrap>

					{/* <Flex
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
							// bg={colorMode == 'dark' ? '#ebebeb' : 'black'}
							color={textColor}
							border='1px solid'
							borderColor={textColor}>
							{item?.showCaseStudy ? 'View case Study' : 'Visit Project'}
						</Button>
					</Link>
				</Flex> */}
				</Flex>
			</Container>
		</Link>
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
	height: { base: '300px', md: '280px' },
	objectFit: 'cover',
	borderRadius: '0',
	borderTopRadius: '12px',
	// p: { base: '12px', md: '16px' },
};

const descCss = {
	fontFamily: fonts?.primary,
	fontSize: '15px',
	textTransform: 'uppercase',
	noOfLines: 3,
	lineHeight: '1.4',
	mb: 4,
};

const btnCss = {
	borderRadius: 'full',
	color: 'white',
	size: 'sm',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
	fontSize: '14px',
	bg: 'transparent',
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
