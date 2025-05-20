import React from 'react';
import Link from 'next/link';
import { Title, Subtitle, Text, Container, Row, Right, Left } from './styles';

import { Flex, Text as BText, Center, Link as CLink } from '@chakra-ui/react';
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
	background-color: black;
	transition: 0.2s;
	&:hover {
		@media (min-width: ${breakpoints.desktop}) {
			background-color: ${colors.orange};
		}
	}
	&:active {
		background-color: black;
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

const BORDER = styles.border.light;

const rightCss = {
	flexDir: 'column',
	flex: 2.25,
	paddingBottom: 6,
	paddingLeft: { base: 0, md: 6 },
	paddingTop: { base: 0, md: 6 },
};

const SectionHeading = ({
	subHeading,
	heading,
	children,
	btnText,
	href,
	to,
	F,
	containerProps,
	...props
}) => {
	const top = (
		<Flex
			w='100%'
			flexDir={{ base: 'column', md: 'row' }}
			pt={{ base: '16px', md: '0' }}>
			<Left borderRight={{ base: 'none', md: BORDER }}>
				<Subtitle fontFamily='Michroma'>{subHeading}</Subtitle>
			</Left>
			<Flex
				{...rightCss}
				borderBottom={BORDER}
				pl={{ base: '0px', md: '24px' }}>
				<Title>{heading}</Title>
				<Divider />
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
			<Left />
			<Flex
				{...rightCss}
				pt='24px'
				borderLeft={{ base: 'none', md: BORDER }}>
				<Text pr='24px'>{children}</Text>
				{to ? cotactButtom : btn}
			</Flex>
		</>
	);

	return (
		<Flex
			mt='24px'
			w='100%'
			pb='64px'
			borderBottom={BORDER}
			{...containerProps}>
			<Flex
				{...props}
				px={{ base: '16px', md: '24px' }}
				border={BORDER}>
				<Flex
					flexDir='column'
					borderRight={BORDER}
					borderLeft={BORDER}
					pl='24px'>
					<Row>{top}</Row>
					<Row>{bottom}</Row>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SectionHeading;
