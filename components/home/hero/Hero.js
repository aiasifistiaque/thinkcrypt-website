import React from 'react';
import { Heading, Flex, Box, Center, Text as BText } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { colors, breakpoints } from '../../lib/constants';
import { colors as clr } from '../../../theme/styles';
import Link from 'next/link';
import Marquee from './Marquee';
import ScrollValue from '../../sidebar-new/ScrollValue';
import { fonts, padding } from '../../../lib/constants';

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
	font-family: 'Michroma', sans-serif;
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
	background-color: ${clr?.background?.dark};
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
	background-color: transparent;
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
					flex='5'
					pt='128px'>
					<Flex
						maxW='100vw'
						px={{ base: padding.baseBody, lg: padding.lgBody }}
						flexDir='column'
						justify='flex-end'>
						<Heading
							color={clr?.text?.dark}
							fontFamily='Bebas Neue'
							fontSize={{ base: '3rem', md: '8rem' }}
							textTransform='uppercase'
							lineHeight='1'
							letterSpacing='2px'
							fontWeight={600}>
							design. build.
							<br /> scale. repeat.
						</Heading>
						<Divider />
						<Text
							color={clr?.textSecondary?.blue}
							fontFamily={fonts?.primary}
							textTransform='uppercase'
							fontSize={{ base: '14px', md: '14px' }}
							fontWeight='500'
							lineHeight='1.5'
							letterSpacing='0'
							maxW={{ md: '35%' }}>
							{/* {`From initial concept to user-tested MVPs and final product launch using the MERN stack, we're your partner in creating exceptional value and transformative outcomes.`} */}
							We build innovative, easy-to-use digital solutions that help startups and enterprises
							grow faster, work better & thrive in the digital landscape.
						</Text>
						{/* <Link href='https://thinkcrypt-get-a-quote-deployed.vercel.app/'>
							<ThinkButton>
								<ButtonText>Get A Quote</ButtonText>
							</ThinkButton>
						</Link> */}
					</Flex>
					<Flex w='300px'>
						<ScrollValue
							py='0'
							fontSize='10px'
							fontWeight={400}
							align='flex-start'
							color={clr?.text?.dark}
						/>
					</Flex>
				</Flex>
				<Marquee />
			</Overlay>
		</Container>
	);
};

export default Hero;
