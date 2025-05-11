import React from 'react';
import Link from 'next/link';
import { Title, Subtitle, Text, Container, Row, Right, Left } from './styles';

import { Flex, Text as BText, Center, Link as CLink, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints, colors, links } from '../../lib/constants';
import { styles } from '../../../theme/styles';
import { howWeWorkPic1, mintSectionImage, mintSectionImage2 } from '../../../data/data';

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
	font-family: Michroma, sans-serif;
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
	color: white;
	font-weight: bold;
	letter-spacing: 0.75px;
	font-size: 1rem;
	font-family: Michroma, sans-serif;
`;

const BORDER = styles.border.light;

const MintRegisterSection = ({ subHeading, heading, children, btnText, href, to, F, ...props }) => {
	const CustomImage = ({ children, w, h }) => {
		return (
			<Flex
				w={w}
				h={h}>
				<Image
					src={children}
					alt='image'
					objectFit='cover'
					w='full'
					h='auto'
				/>
			</Flex>
		);
	};

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

	const top = (
		<>
			<Flex
				w='100%'
				flexDir={{ base: 'column', md: 'row' }}
				pt={{ base: '16px', md: '0' }}>
				<Left>
					{/* <Subtitle fontFamily="Michroma"> {subHeading}</Subtitle> */}
					<CustomImage
						w='full'
						h={{ base: '322px', lg: '466px' }}>
						{mintSectionImage2}
					</CustomImage>
				</Left>
				<Right
					borderBottom={BORDER}
					borderLeft={{ base: 'none', md: BORDER }}
					pl={{ base: '0px', md: '24px' }}>
					<Title fontFamily='Michroma'>{heading}</Title>
					<Divider />
					<Text
						fontFamily='Michroma'
						pr='24px'>
						{children}
					</Text>
					{to ? cotactButtom : btn}
				</Right>
			</Flex>
		</>
	);

	const bottom = (
		<>
			<Left />
			<Right
				pt='24px'
				borderLeft={{ base: 'none', md: BORDER }}>
				<Text
					pr='24px'
					fontFamily='Michroma'>
					{children}
				</Text>
				{to ? cotactButtom : btn}
			</Right>
		</>
	);

	return (
		<Flex
			mt='64px'
			w='100%'
			pb='64px'
			borderBottom={BORDER}>
			<Flex
				px='24px'
				border={BORDER}
				{...props}>
				<Flex
					flexDir='column'
					borderRight={BORDER}
					borderLeft={BORDER}
					pl='24px'>
					<Row>{top}</Row>
					{/* <Row>{bottom}</Row> */}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default MintRegisterSection;
