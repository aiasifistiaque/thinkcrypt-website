import React from 'react';
import { Flex, Grid, Text, Heading, Button, Box } from '@chakra-ui/react';
import { colors, layout } from '../../../theme/styles';
import { fonts, padding } from '../../../lib/constants';
import RobotoText from '../../util/text/RobotoText';
import Column from '../../util/Column';
import { styles } from '../../../theme/styles';
import Link from 'next/link';

const TitleSection = ({
	index = '01',
	heading,
	title,
	titleTop,
	titleBottom,
	multiParagraph,
	top,
	btn,
	href,
	colorMode = 'dark',
	children,
	...props
}) => {
	const bg = colorMode == 'dark' ? colors?.background?.dark : colors?.background?.light;
	const textColor = colorMode == 'dark' ? colors?.text?.dark : colors?.text?.light;
	const secondaryColor =
		colorMode == 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;
	return (
		<Flex
			{...containerCss}
			pt={top ? '0' : '92px'}
			bg={bg}
			{...props}>
			<Flex
				{...visionContainerCss}
				borderTop={top ? 'none' : '1px solid'}>
				<Text
					color={textColor}
					fontFamily={fonts.body}>
					{index}
				</Text>
				<RobotoText
					color={textColor}
					fontSize={'0.875rem'}>
					{heading || title}
				</RobotoText>
			</Flex>

			<Column
				{...bodyCss}
				borderColor={colorMode == 'dark' ? colors.background.light : colors.border.light}>
				<Grid
					flex={1}
					gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
					gap={5}>
					<Heading
						{...headingCss}
						color={textColor}>
						{titleTop}
						<br />
						{titleBottom}
					</Heading>

					<Flex
						align='flex-end'
						justify='flex-end'>
						<Flex
							gap={8}
							flexDir='column'
							maxW={{ base: '100%', md: '70%' }}>
							{!multiParagraph && (
								<RobotoText
									{...bodyTextCss}
									color={secondaryColor}>
									{children}
								</RobotoText>
							)}
							{multiParagraph && children}
							{btn && (
								<Link href={href || '#'}>
									<Box>
										<Button
											_hover={{
												bg: 'transparent',
												color: textColor,
											}}
											p={6}
											borderColor={secondaryColor}
											color={textColor}
											textTransform='uppercase'
											variant='outline'
											borderRadius='none'>
											{btn}
										</Button>
									</Box>
								</Link>
							)}
						</Flex>
					</Flex>
				</Grid>
			</Column>
		</Flex>
	);
};

const containerCss = {
	direction: 'column',
	gap: { base: 8, md: 16 },
	pb: { base: '3rem', md: '8rem' },
	px: { base: padding.baseBody, lg: padding.lgBody },
	mx: 'auto',

	// maxW: layout.MAX_W,
};

const visionContainerCss = {
	borderTop: '1px solid',
	borderColor: colors?.background?.light,
	pt: '92px',
	w: 'full',
	justify: 'space-between',
};

const bodyCss = {
	borderBottom: '1px solid',
	borderColor: colors?.background?.light,
	gap: 5,
	minH: '80vh',
	pb: '64px',
	flex: 5,
};

const headingCss = {
	fontFamily: 'Bebas Neue',
	fontSize: { base: '4rem', md: '8rem' },
	fontWeight: '600',
	lineHeight: '1',
	letterSpacing: '2px',
	color: colors?.text?.dark,
};

const bodyTextCss = {
	color: colors?.text?.dark,
	fontSize: { base: '14px', lg: '16px' },
	letterSpacing: { base: '0px', md: '0px' },
	lineHeight: { base: '1.5', md: '1.6' },
	fontFamily: fonts.primary,
	textTransform: 'uppercase',
};

export default TitleSection;
