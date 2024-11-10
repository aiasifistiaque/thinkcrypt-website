import React from 'react';
import { styles } from '../../../theme/styles';
import { breakpoints } from '../../lib/constants';
import Column from '../../util/Column';
import { fonts } from '../../../lib/constants';
import { colors } from '../../lib/constants';
import {
	AspectRatio,
	Box,
	Center,
	Flex,
	Grid,
	GridItem,
	Image,
	Text,
	useMediaQuery,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

const P = styled(Text)`
	@media (min-width: ${breakpoints.desktop}) {
		font-size: 1.2rem;
		line-height: 1.6;
		max-width: 50vw;
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

const ButtonText = styled(Text)`
	line-height: 0;
	color: white;
	font-weight: bold;
	letter-spacing: 0.75px;
	font-size: 1rem;
`;

const BORDER = styles.border.light;

const MintSections = ({ text, subText, paraText, image, reverse = false }) => {
	const [isMobile] = useMediaQuery('(max-width: 768px)');

	const videoStyles = {
		width: isMobile ? '250px' : '469px',
		height: isMobile ? '250px' : '326px',
		borderRadius: isMobile ? '4px' : '8px',
	};
	return (
		<Column
			mt='60px'
			px={{ base: 6, md: 16, lg: 32 }}
			borderTop={BORDER}
			borderBottom={BORDER}
		>
			<Flex
				w='full'
				// maxW={layout.MAX_W}
				mx='auto'
				borderLeft={BORDER}
				borderRight={BORDER}
				px={{ base: '16px', md: '24px', lg: '128px' }}
				py={{ base: '24px', md: '128px' }}
				//my='60px'
			>
				<Grid
					templateColumns={{ base: '1fr', lg: '1fr', xl: '1fr 1fr' }}
					gap={12}
					alignItems='center'
				>
					{reverse ? (
						<>
							<GridItem order={{ base: 2, lg: 2 }}>
								<Flex
									w={{ base: 'full', md: 'full', lg: 'full', xl: '800px' }}
									h={{ base: 'auto', md: 'auto', lg: 'auto', xl: '485px' }}
									justifyContent='center'
									position='relative'
								>
									<Image
										src={image}
										alt='Banner'
										w={{ base: '200px', md: '400px', lg: '600px', xl: '800px' }}
										h={{ base: '123px', md: '241px', lg: '308px', xl: 'auto' }}
									/>

									<Box
										position='absolute'
										top={{ base: '11px', md: '22px', lg: '30px', xl: '47px' }}
										left={{ md: '23vw', lg: '106px', xl: ' 166px ' }}
										//borderRadius='lg'
									>
										<Box
											width={{
												base: '121px',
												md: '237px',
												lg: '29.5vw',
												xl: '470px',
											}}
											// height={{ lg: '325px', xl: '325px' }}
											// bg='red.200'
										>
											<video
												src='./e-mint/emint-v2.mp4'
												autoPlay
												// width='469'
												// height='325'
												width='full'
												height='full'
												muted
												loop
												playsInline
												//controls
												style={{
													borderRadius: '6px',
												}}
											/>
										</Box>
									</Box>
								</Flex>
							</GridItem>
							<GridItem order={{ base: 1, lg: 1 }}>
								<Column
									gap={{ base: 2, md: 4, lg: 8 }}
									justifyItems='center'
									alignItems={{ base: 'center', lg: 'start' }}
								>
									<P fontFamily={fonts.Suisse}>{text}</P>
									<Text
										fontFamily='Bebas Neue'
										fontSize={{
											base: '1.5rem',
											md: '1.75rem',
											lg: '2rem',
											xl: '2.25rem',
										}}
										lineHeight={1}
									>
										{subText}
									</Text>
									<P fontFamily={fonts.Suisse}>{paraText}</P>

									<ThinkButton>
										<ButtonText>Book a Demo</ButtonText>
									</ThinkButton>
								</Column>
							</GridItem>
						</>
					) : (
						<>
							<GridItem order={{ base: 2, lg: 2 }}>
								<Column
									gap={{ base: 2, md: 4, lg: 8 }}
									justifyItems='center'
									alignItems={{ base: 'center', lg: 'start' }}
								>
									<P fontFamily={fonts.Suisse}>{text}</P>
									<Text
										fontFamily='Bebas Neue'
										fontSize={{
											base: '1.5rem',
											md: '1.75rem',
											lg: '2rem',
											xl: '2.25rem',
										}}
										lineHeight={1}
									>
										{subText}
									</Text>
									<P fontFamily={fonts.Suisse}>{paraText}</P>

									<ThinkButton>
										<ButtonText>Book a Demo</ButtonText>
									</ThinkButton>
								</Column>
							</GridItem>
							<GridItem order={{ base: 1, lg: 1 }}>
								<Flex
									w={{ base: 'full', md: 'full', lg: 'full', xl: '800px' }}
									h={{ base: 'auto', md: 'auto', lg: 'auto', xl: '485px' }}
									justifyContent='center'
									position='relative'
								>
									<Image
										src={image}
										alt='Banner'
										w={{ base: '200px', md: '400px', lg: '600px', xl: '800px' }}
										h={{ base: '123px', md: '241px', lg: '308px', xl: 'auto' }}
									/>

									<Box
										position='absolute'
										top={{ base: '11px', md: '22px', lg: '30px', xl: '47px' }}
										left={{ md: '23vw', lg: '106px', xl: ' 166px ' }}
										//borderRadius='lg'
									>
										<Box
											width={{
												base: '121px',
												md: '237px',
												lg: '29.5vw',
												xl: '470px',
											}}
											// height={{ lg: '325px', xl: '325px' }}
											// bg='red.200'
										>
											<video
												src='./e-mint/emint-v2.mp4'
												autoPlay
												// width='469'
												// height='325'
												width='full'
												height='full'
												muted
												loop
												playsInline
												//controls
												style={{
													borderRadius: '6px',
												}}
											/>
										</Box>
									</Box>
								</Flex>
							</GridItem>
						</>
					)}
				</Grid>
			</Flex>
		</Column>
	);
};

export default MintSections;
