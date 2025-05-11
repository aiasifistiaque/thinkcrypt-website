import React from 'react';
import Link from 'next/link';
import { Subtitle, Text, Row } from './styles';

import { Flex, Text as BText, Center, Link as CLink, Text as ChakraText } from '@chakra-ui/react';
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
};

const BORDER = styles.border.light;

const rightCss = {
	flexDir: 'column',
	flex: 1,
	paddingBottom: 6,

	paddingTop: { base: 0, md: 6 },
};

const ColumnSection = ({
	subHeading,
	heading,
	children,
	btnText,
	href,
	to,
	F,
	notText,
	...props
}) => {
	const top = (
		<Flex
			w='100%'
			flexDir={{ base: 'column', md: 'row' }}>
			<Flex
				{...leftCss}
				borderRight={{ base: 'none', md: BORDER }}>
				<Subtitle fontFamily='Michroma'>{subHeading}</Subtitle>
			</Flex>
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
			<Flex {...leftCss}>
				<Text {...titleCss}>{heading}</Text>
			</Flex>
			<Flex {...rightCss}>
				{notText ? (
					children
				) : (
					<ChakraText
						pt={{ base: '24px', md: '0' }}
						pr='32px'
						lineHeight={{ base: '1.4', md: '1.6' }}
						fontSize={{ base: '1rem', md: '1.2rem' }}>
						{children}
					</ChakraText>
				)}
				{to ? cotactButtom : btn}
			</Flex>
		</>
	);

	return (
		<Flex
			mt='24px'
			w='100%'
			borderBottom={BORDER}>
			<Flex
				px='24px'
				border={BORDER}
				{...props}>
				<Flex
					py='64px'
					flexDir='column'
					borderRight={BORDER}
					borderLeft={BORDER}
					pl='24px'>
					{top}
					{bottom}
				</Flex>
			</Flex>
		</Flex>
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

export default ColumnSection;
