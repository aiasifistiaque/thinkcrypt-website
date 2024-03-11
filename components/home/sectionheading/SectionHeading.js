import React from 'react';
import Link from 'next/link';
import { Title, Subtitle, Text, Container, Row, Right, Left } from './styles';

import { Flex, Text as BText, Center, Link as CLink } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints, colors, links } from '../../lib/constants';

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
			background-color: ${colors.charcole};
		}
	}
	&:active {
		background-color: ${colors.primaryLight};
	}
`;

const ButtonText = styled(BText)`
	line-height: 0;
	color: white;
	font-weight: bold;
	letter-spacing: 0.75px;
	font-size: 1rem;
`;

const SectionHeading = ({
	subHeading,
	heading,
	children,
	btnText,
	href,
	to,
	F,
	...props
}) => {
	const top = (
		<>
			<Left>
				<Subtitle>{subHeading}</Subtitle>
			</Left>
			<Right>
				<Title>{heading}</Title>
				<Divider />
			</Right>
		</>
	);

	const cotactButtom = (
		<CLink isExternal href={links.contact}>
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
			<Right>
				<Text>{children}</Text>
				{to ? cotactButtom : btn}
			</Right>
		</>
	);

	return (
		<Container {...props}>
			<Row>{top}</Row>
			<Row>{bottom}</Row>
		</Container>
	);
};

export default SectionHeading;
