import React from 'react';
import { Heading, Flex, Box, Center, Text as BText, Image, Grid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { colors, breakpoints } from '../../lib/constants';
import Link from 'next/link';
import Marquee from './Marquee';
import ScrollValue from '../../sidebar-new/ScrollValue';
import Column from '../../util/Column';

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
	background-image: url('/home/mint-hero_section.png');
	background-position: center center;
	background-size: cover;
	@media (max-width: ${breakpoints.tab}) {
		background-image: url('/home/mint-phone_hero_section.png');
	}
`;

const Overlay = styled(Flex)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	min-height: 100vh;
`;

const Title = styled(Heading)`
	//font-weight: 800;
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

const MintHero = () => {
	return (
		<Container>
			<Overlay>
				<Grid
					templateColumns={{ base: '1fr', lg: '3fr 2fr' }}
					pt='128px'>
					<Flex
						px='24px'
						flexDir='column'
						justify='center'>
						<Title
							fontFamily='Michroma'
							size='2xl'
							fontWeight={800}>
							MINT
						</Title>
						<Title
							fontFamily='Michroma'
							fontSize='1.5rem'
							fontWeight={300}>
							Crafting Brands
						</Title>
						<Divider />
						<Text
							fontFamily='Michroma'
							size={{ base: 'lg', md: 'xl' }}
							fontWeight='600'
							letterSpacing='.2px'
							// maxW={{ md: '60%' }}
						>
							{`Transform your online business with our powerful E-commerce CMS, integrated POS, and fully customizable themes designed for growth and flexibility!`}
						</Text>
						<Text
							fontFamily='Michroma'
							size={{ base: 'lg', md: 'xl', lg: 'md' }}
							fontWeight='600'
							letterSpacing='.2px'
							// maxW={{ md: '60%' }}
							mt={4}>
							From website to inventory management to marketing, ALL IN ONE!
						</Text>
						<Link href='https://thinkcrypt-get-a-quote-deployed.vercel.app/'>
							<ThinkButton>
								<ButtonText>Request a Demo</ButtonText>
							</ThinkButton>
						</Link>
					</Flex>

					<Column>
						<Flex
							w='300px'
							alignSelf='flex-end'>
							<ScrollValue
								py='0'
								fontWeight={400}
								align='flex-start'
								color='text.800'
							/>
						</Flex>
						<Flex>
							<Image
								src='./e-mint/mint-illustrationv5.png'
								alt='mint-illustration'
								w='full'
							/>
						</Flex>
					</Column>
				</Grid>
				<Marquee />
			</Overlay>
		</Container>
	);
};

export default MintHero;
