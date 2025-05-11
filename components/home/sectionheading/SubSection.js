import React from 'react';
import Link from 'next/link';
import { Subtitle, Text, Row } from './styles';

import { Flex, Text as BText, Center, Link as CLink, Grid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints, colors, links } from '../../lib/constants';
import { styles } from '../../../theme/styles';

const Divider = styled(Flex)`
	height: 10px;
	width: 80px;
	background-color: ${colors.charcole};
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
	background-color: ${colors.charcole};
	transition: 0.2s;
	&:hover {
		@media (min-width: ${breakpoints.desktop}) {
			background-color: ${colors.orange};
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

const SubSection = ({ subHeading, heading, children, btnText, href, to, F, ...props }) => {
	const top = (
		<Flex
			{...leftCss}
			w='100%'
			flexDir={{ base: 'column', md: 'column' }}>
			<Subtitle fontFamily='Michroma'>{subHeading}</Subtitle>

			<Text {...titleCss}>{heading}</Text>
		</Flex>
	);

	const cotactButtom = (
		<CLink
			isExternal
			href={links.contact}>
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
				pt='24px'>
				<Text pr='24px'>{children}</Text>
				{to ? cotactButtom : btn}
			</Flex>
		</>
	);

	return (
		<Grid
			mt='24px'
			w='100%'
			pb='64px'
			borderBottom={BORDER}>
			<Flex
				px='24px'
				border={BORDER}
				{...props}>
				<Flex
					w='full'
					py='64px'
					flexDir={{ base: 'column', md: 'row' }}
					borderRight={BORDER}
					borderLeft={BORDER}
					pl='24px'>
					{top}
					{bottom}
				</Flex>
			</Flex>
		</Grid>
	);
};

const titleCss = {
	fontSize: { base: '2rem', md: '2.5rem !important' },
	fontFamily: 'Michroma',
	lineHeight: { base: '2.5rem', md: '5rem' },
	letterSpacing: '2px',
	marginTop: '0.5rem',
	fontWeight: 800,
};

export default SubSection;
