import React from 'react';
import Link from 'next/link';
import { Subtitle, Text, Row } from './styles';

import { Flex, Text as BText, Center, Link as CLink, Text as ChakraText } from '@chakra-ui/react';
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

const UpdatedColumn = ({
	subHeading,
	heading,
	children,
	btnText,
	href,
	theme,
	to,
	F,
	notText,
	...props
}) => {
	const bg = theme == 'dark' ? colors.background.dark : colors.background.light;
	const text = theme == 'dark' ? colors.text.dark : colors.text.light;
	const secondary = theme == 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;
	const blue = theme == 'dark' ? colors.text.blue : colors.text.darkBlue;
	const top = (
		<Flex
			w='100%'
			flexDir={{ base: 'column', md: 'row' }}>
			<Flex
				{...leftCss}
				borderRight={{ base: 'none', md: BORDER }}>
				<Subtitle color={text}>{subHeading}</Subtitle>
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
				<ChakraText
					{...titleCss}
					color={text}>
					{heading}
				</ChakraText>
			</Flex>
			<Flex {...rightCss}>
				{notText ? (
					children
				) : (
					<ChakraText
						pt={{ base: '24px', md: '0' }}
						pr='32px'
						color={text}
						lineHeight={1}
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
			py='64px'
			w='100%'
			{...props}
			px={{ base: padding?.baseBody, md: padding.lgBody }}
			bg={bg}>
			<Flex>
				<Flex flexDir='column'>
					{top}
					{bottom}
				</Flex>
			</Flex>
		</Flex>
	);
};

const titleCss = {
	fontSize: { base: '2rem', md: '5rem' },
	fontFamily: fonts.title,
	lineHeight: 1,
	letterSpacing: '2px',
	marginTop: '0.5rem',
	fontWeight: 800,
};

export default UpdatedColumn;
