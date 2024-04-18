import React from 'react';
import { Heading, Flex, Box, Center, Text as BText } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { colors, breakpoints } from '../../lib/constants';
import Link from 'next/link';

const ThinkButton = styled(Center)`
	cursor: pointer;
	margin: 32px 0;
	height: 50px;
	width: 220px;
	background-color: ${colors.primary};
	transition: 0.2s;
	&:hover {
		@media (min-width: ${breakpoints.desktop}) {
			background-color: ${colors.primary};
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
const Container = styled(Flex)`
	flex: 1;
	background-image: url('/home/main-hero section.svg');
	background-position: center center;
	background-size: cover;
	@media (max-width: ${breakpoints.tab}) {
		background-image: url('/home/phone hero section.svg');
	}
`;

const Overlay = styled(Flex)`
	padding: 0 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	height: 100vh;
	// background-color: rgba(0, 0, 0, 0.4);
	// color: white;
	@media (min-width: ${breakpoints.desktop}) {
		padding: 0 128px;
	}
`;

const Title = styled(Heading)`
	font-weight: 800;
	line-height: 1.2;
`;

const Text = styled(Heading)`
	font-weight: 400;
	max-width: 1000px;
	line-height: 1.6;
`;

const Divider = styled(Box)`
	background-color: ${colors.primary};
	height: 0.5rem;
	width: 207px;
	margin-top: 16px;
	margin-bottom: 32px;
`;

const Hero = () => {
	return (
		<Container>
			<Overlay>
				<Title size='3xl' fontWeight={800}>
					We Build
					<br /> Digital Experience
				</Title>
				<Divider />
				<Text size='md'>
					At thinkcrypt.io, we offer a complete range of services that build up
					business value, from the initial idea and formulation of product
					strategy, through building a prototype and testing it with users,
					right to the creation of the product itself.
				</Text>
				<Link href='https://thinkcrypt-get-a-quote-deployed.vercel.app/'>
					<ThinkButton>
						<ButtonText>Get A Quote</ButtonText>
					</ThinkButton>
				</Link>
			</Overlay>
		</Container>
	);
};

export default Hero;
