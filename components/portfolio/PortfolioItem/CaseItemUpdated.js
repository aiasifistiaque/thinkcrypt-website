import React from 'react';
import styled from '@emotion/styled';
import { Badge, Button, Flex, Image, Link, Text, Wrap, Box } from '@chakra-ui/react';
import { colors, styles } from '../../../theme/styles';
import { fonts } from '../../../lib/constants';

import { ArrowUpRight } from 'lucide-react';

const Container = styled(Flex)`
	flex: 1;
	cursor: pointer;
	flex-direction: column;
	height: 100%;
`;

const CaseItemUpdated = ({ item, colorMode }) => {
	const BORDER = colorMode == 'dark' ? styles.border.dark : styles.border.light;
	const textColor = colorMode == 'dark' ? colors.text.dark : colors.text.light;
	const cardBg = colorMode == 'dark' ? colors.card.dark : colors.card.light;
	const secondaryColor =
		colorMode == 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;
	return (
		<Link
			flex={1}
			_hover={{
				textDecoration: 'none',
			}}
			isExternal={item?.showCaseStudy ? false : true}
			href={item?.showCaseStudy ? `/case-study/${item?._id}` : item?.liveUrl ? item?.liveUrl : '#'}>
			<Container
				mb='8px'
				borderBottom='1px solid'
				borderColor={cardBg}
				flex={1}>
				<Image
					{...imgCss}
					src={`${item?.image}`}
					alt={item?.name}
				/>
				<Flex
					{...cardCss}
					flex={1}>
					<Text
						{...catText}
						fontSize='12px'
						fontFamily={fonts?.primary}
						color={colorMode == 'dark' ? colors.text.blue : colors.text.darkBlue}>
						{item?.category}
					</Text>
					<Text
						{...titleCss}
						color={textColor}>
						{item?.name}
					</Text>
					{/* <Text
						{...catText}
						color={colorMode == 'dark' ? colors.text.blue : colors.text.darkBlue}>
						{item?.category}
					</Text> */}
					<Text
						{...descCss}
						color={secondaryColor}>
						{item?.shortDescription}
					</Text>
					<Flex
						flex={1}
						align='flex-end'
						pb='16px'>
						<Wrap spacing={1}>
							{item?.tags?.map(
								(tag, i) =>
									i < 5 && (
										<Flex
											key={i}
											p={0.5}
											px={3.5}
											bg={cardBg}
											borderColor={cardBg}
											borderRadius={'full'}
											borderWidth='1px'>
											<Text
												{...badgeCss}
												color={secondaryColor}>
												{tag}
											</Text>
										</Flex>
									)
							)}
						</Wrap>
					</Flex>

					{/* <Flex
					justify='flex-end'
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
							rightIcon={
								<ArrowUpRight
									strikeWidth={3}
									color={colors?.text?.dark}
								/>
							}
							{...btnCss}>
							{item?.showCaseStudy ? 'View case Study' : 'Visit Project'}
						</Button>
					</Link>
				</Flex> */}
				</Flex>
			</Container>
		</Link>
	);
};

{
	/* <ArrowUpRight
	color='#FAF8F1'
	strokeWidth={3}
/>; */
}

const catText = {
	fontFamily: fonts?.title,
	fontSize: '22px',
	letterSpacing: '1px',
	textTransform: 'uppercase',
	color: colors?.text?.blue,
	mb: '-4px',
};

const imgCss = {
	width: '100%',
	height: { base: '300px', md: '320px' },
	objectFit: 'cover',
	borderRadius: '8px',
};

const descCss = {
	fontFamily: fonts?.primary,
	fontSize: '14px',
	textTransform: 'uppercase',
	noOfLines: 3,
	lineHeight: 1.4,
	mt: '8px',
	maxW: '340px',
};

const btnCss = {
	bg: 'transparent',
	border: 'none',
	variant: 'link',
	size: 'lg',
	borderRadius: 'none',
	color: colors.text.dark,
	fontFamily: fonts?.title,
	textTransform: 'uppercase',
	fontSize: '22px',
	px: 0,
	// borderBottom: '3px solid',
	// borderColor: colors.text.dark,
};

const cardCss = {
	flexDir: 'column',
	py: { base: '12px', md: '16px' },
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
	fontSize: '13px',
	fontWeight: '400',
	textTransform: 'uppercase',
};

export default CaseItemUpdated;
