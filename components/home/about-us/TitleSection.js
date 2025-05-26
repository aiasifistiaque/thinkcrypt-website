import React, { useRef } from 'react';
import { Flex, Grid, Text, Heading, Button, Box } from '@chakra-ui/react';
import { colors, layout } from '../../../theme/styles';
import { fonts, padding } from '../../../lib/constants';
import RobotoText from '../../util/text/RobotoText';
import Column from '../../util/Column';
import { styles } from '../../../theme/styles';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
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

	const container = useRef();
	const headingRef = useRef();

	useGSAP(() => {
		// const split = new SplitType(headingRef.current, {
		// 	types: 'lines, words',
		// 	lineClass: 'line-zero',
		// });

		// gsap.from('.line-zero', {
		// 	scrollTrigger: {
		// 		trigger: '.line-zero',
		// 		scrub: true,
		// 		start: 'top bottom',
		// 		end: 'top top',
		// 	},
		// 	scaleX: 0,
		// 	transformOrigin: 'left center',
		// 	ease: 'none',
		// });

		gsap.from('.line-zero', {
			scrollTrigger: {
				trigger: '.line-zero',
				start: 'top bottom', // Starts animation when line is 80% from viewport top
				end: 'top 20%', // Ends animation when line is 20% from viewport top
				scrub: 0.5, // Smooth animation with 1 second delay
				markers: false, // Set to true for debugging
				toggleActions: 'play none none reverse',
			},
			scaleX: 0, // Start from width 0
			transformOrigin: 'left center',
			duration: 0.5, // Animation duration
			ease: 'power1.out', // Smooth easing function
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
				borderTop={top ? 'none' : '1px solid'}
				borderColor={textColor}>
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
			<Flex
				mt='-64px'
				h='1px'
				className='line-zero'
				w='full'
				bg={textColor}></Flex>
		</Flex>
	);
};

const containerCss = {
	direction: 'column',
	gap: { base: 8, md: 16 },
	// pb: { base: '3rem', md: '8rem' },
	pb: 0,
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
