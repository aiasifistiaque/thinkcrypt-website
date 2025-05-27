import React, { useRef } from 'react';
import { Flex, Grid, Text, Heading, Button, Box } from '@chakra-ui/react';
import { colors, layout } from '../../../theme/styles';
import { fonts, padding } from '../../../lib/constants';
import RobotoText from '../../util/text/RobotoText';
import Column from '../../util/Column';

import Link from 'next/link';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

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
	paragraph,
	...props
}) => {
	const bg = colorMode == 'dark' ? colors?.background?.dark : colors?.background?.light;
	const textColor = colorMode == 'dark' ? colors?.text?.dark : colors?.text?.light;
	const secondaryColor =
		colorMode == 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;

	const lineRef = useRef();

	useGSAP(() => {
		gsap.set(lineRef.current, {
			scaleX: 0,
			transformOrigin: 'left center',
		});

		gsap.to(lineRef.current, {
			scrollTrigger: {
				trigger: lineRef.current,
				start: 'top 90%',
				end: 'top 90%',
				toggleActions: 'play none none reverse',
			},
			scaleX: 1,
			duration: 1,
			ease: 'power2.inOut',
		});

		return () => {
			ScrollTrigger?.getAll()?.forEach(trigger => trigger?.kill());
		};
	}, []);

	return (
		<Flex
			{...containerCss}
			pt={top ? '0' : '92px'}
			bg={bg}
			{...props}>
			<Flex
				{...visionContainerCss}
				borderColor={textColor}
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
				border='none'
				borderColor={colorMode == 'dark' ? colors.background.light : colors.border.light}>
				<Grid {...gridCss}>
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
								<>
									<RobotoText
										{...bodyTextCss}
										color={secondaryColor}>
										{children}
									</RobotoText>
									<RobotoText
										{...bodyTextCss}
										color={secondaryColor}>
										{paragraph}
									</RobotoText>
								</>
							)}
							{multiParagraph && children}
							{btn && (
								<Link href={href || '#'}>
									<Box>
										<Button
											borderColor={secondaryColor}
											_hover={{
												bg: 'transparent',
												color: textColor,
											}}
											color={textColor}
											{...btnCss}>
											{btn}
										</Button>
									</Box>
								</Link>
							)}
						</Flex>
					</Flex>
				</Grid>
			</Column>
			<Flex
				ref={lineRef}
				{...bottomLineCss}
				bg={textColor}></Flex>
		</Flex>
	);
};

const bottomLineCss = {
	mt: '-64px',
	h: '1px',

	w: 'full',
};

const gridCss = {
	flex: 1,
	gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
	gap: 5,
};

const btnCss = {
	textTransform: 'uppercase',
	variant: 'outline',
	fontWeight: '300',
	fontSize: '14px',
	size: 'md',
	borderRadius: '99px',
};

const containerCss = {
	direction: 'column',
	gap: { base: 8, md: 16 },
	pb: 0,
	px: { base: padding.baseBody, lg: padding.lgBody },
	mx: 'auto',
	pb: { base: '32px', md: '92px' },
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
	lineHeight: { base: '1.4', md: '1.4' },
	fontFamily: fonts.primary,
	textTransform: 'uppercase',
};

export default TitleSection;
