import React from 'react';
import Link from 'next/link';
import { Subtitle, Text, Row } from './styles';

import { Flex, Text as BText, Center, Link as CLink, Grid, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints, links } from '../../lib/constants';
import { styles, colors } from '../../../theme/styles';
import { fonts, padding } from '../../../lib/constants';

const Divider = styled(Flex)`
	height: 10px;
	width: 80px;
	// background-color: ${colors.charcole};
	margin: 1rem 0 1.5rem 0;
	@media (min-width: ${breakpoints.desktop}) {
		margin-bottom: 2rem;
	}
`;

const ThinkButton = styled(Center)`
	cursor: pointer;
	margin: 32px 0;
	height: 50px;
	width: 220px;
	// background-color: ${colors.charcole};
	transition: 0.2s;
	&:hover {
		@media (min-width: ${breakpoints.desktop}) {
			// background-color: ${colors.orange};
		}
	}
	&:active {
		background-color: black.800;
	}
`;

const ButtonText = styled(BText)`
	line-height: 0;
	font-family: 'Michroma', sans-serif;
	color: white;
	font-weight: bold;
	letter-spacing: 0.75px;
	font-size: 1rem;
`;

const leftCss = {
	flex: 1,
	alignSelf: { base: 'flex-start', md: 'center' },
	width: '100%',
	height: '100%',
	pt: { base: '0', md: '64px' },
};

const BORDER = styles.border.light;

const rightCss = {
	flexDir: 'column',
	flex: 2,

	paddingBottom: 6,

	paddingTop: { base: 0, md: 6 },
};

const SubSection = ({ subHeading, theme, heading, children, btnText, href, to, F, ...props }) => {
	const colorMode = theme;
	const bg = colorMode == 'dark' ? colors.background.dark : colors.background.light;
	const text = colorMode == 'dark' ? colors.text.dark : colors.text.light;
	const secondary = colorMode == 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;
	const blue = colorMode == 'dark' ? colors.text.blue : colors.text.darkBlue;
	const card = colorMode == 'dark' ? colors.card.dark : colors.card.light;
	const top = (
		<Flex
			{...leftCss}
			w='100%'
			flexDir={{ base: 'column', md: 'column' }}>
			<Heading
				{...titleCss}
				lineHeight={1}
				color={text}>
				{heading}
			</Heading>
		</Flex>
	);

	const cotactButtom = (
		<CLink href={links.contact}>
			<ThinkButton>
				<ButtonText>{btnText}</ButtonText>
			</ThinkButton>
		</CLink>
	);

	const btn = href && (
		<Link href={href}>
			<ThinkButton>
				<ButtonText>{btnText}</ButtonText>
			</ThinkButton>
		</Link>
	);

	const bottom = (
		<>
			<Flex
				{...rightCss}
				gap={6}
				maxW={{
					base: '100%',
					md: '40%',
				}}
				justify='center'
				pt='24px'>
				<Subtitle
					fontSize={{
						base: '2rem',
						md: '4rem',
					}}
					fontWeight={600}
					color={blue}>
					{subHeading}
				</Subtitle>
				<Text
					pr='24px'
					color={secondary}>
					{children}
				</Text>
				{to ? cotactButtom : btn}
			</Flex>
		</>
	);

	return (
		<Grid
			w='100%'
			py='32px'
			pb={8}
			bg={bg}>
			<Flex
				px={{
					base: padding?.baseBody,
					md: padding?.lgBody,
				}}
				{...props}>
				<Flex
					w='full'
					py='64px'
					flexDir={{ base: 'column', md: 'row' }}>
					{top}
					{bottom}
				</Flex>
			</Flex>
		</Grid>
	);
};

const titleCss = {
	fontSize: { base: '2rem', md: '8rem' },
	fontFamily: fonts?.title,
	lineHeight: 1,
	letterSpacing: '1px',
	marginTop: '0',
	fontWeight: 800,
};

export default SubSection;
