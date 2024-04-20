import React from 'react';
import { Heading, Flex, Box, Center, Text as BText } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { colors, breakpoints } from '../../lib/constants';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const ThinkButton = styled(Center)`
	cursor: pointer;
	margin: 32px 0;
	height: 50px;
	width: 220px;
	background-color: #060508;
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	height: 100vh;
`;

const Title = styled(Heading)`
	font-weight: 800;
	line-height: 1.2;
`;

const Text = styled(Heading)`
	font-weight: 400;
	max-width: 1000px;
	line-height: 1.4;
`;

const Divider = styled(Box)`
	background-color: #060508;
	height: 0.5rem;
	width: 207px;
	margin-top: 16px;
	margin-bottom: 32px;
`;

const Hero = () => {
	return (
		<Container>
			<Overlay>
				<Flex
					px='24px'
					flex='4'
					flexDir='column'
					justify='center'
					pt='128px'>
					<Title
						fontFamily='Suisse'
						size='2xl'
						fontWeight={800}>
						We Build
						<br /> Digital Experience
					</Title>
					<Divider />
					<Text
						fontFamily='Suisse'
						size={{ base: 'lg', md: 'xl' }}
						fontWeight='600'
						letterSpacing='.2px'
						maxW={{ md: '60%' }}>
						{`From strategic inception
					to user-tested prototypes and final product creation, we're your partner in delivering
					exceptional value and transformative results.`}
					</Text>
					<Link href='https://thinkcrypt-get-a-quote-deployed.vercel.app/'>
						<ThinkButton>
							<ButtonText>Get A Quote</ButtonText>
						</ThinkButton>
					</Link>
				</Flex>
				<Flex
					align='flex-end'
					justify='flex-end'
					letterSpacing='2px'
					py={2}
					flex='1'>
					<Marquee>
						<BText
							fontFamily='Suisse'
							fontSize='.9rem'>
							{`Unleash the Future: Building Bold, Brilliant Software That Transforms Ideas into
							Reality. | Where Innovation Meets Excellence: Join Us on the Journey to Redefine
							What's Possible. | Experience Cutting-Edge Development: Your Dreams, Engineered by Our
							Expertise. | Step Into Tomorrow with Software Crafted to Elevate Your Business Beyond
							the Horizon.`}
						</BText>
					</Marquee>
				</Flex>
			</Overlay>
		</Container>
	);
};

export default Hero;
