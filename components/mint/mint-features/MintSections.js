import React from 'react';
import { styles } from '../../../theme/styles';
import { breakpoints } from '../../lib/constants';
import Column from '../../util/Column';
import { fonts } from '../../../lib/constants';
import { colors } from '../../lib/constants';
import { Center, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
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

const MintSections = ({ text, subText, paraText, image }) => {
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
					templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
					gap={12}
					alignItems='center'
				>
					<GridItem>
						<Column
							gap={{ base: 2, md: 4, lg: 8 }}
							justifyItems='center'
							alignItems={{ base: 'center', lg: 'start' }}
						>
							<P fontFamily={fonts.Suisse}>{text}</P>
							<Text
								fontFamily='Bebas Neue'
								fontSize={{ base: '1.5rem', md: '2rem', lg: '3rem' }}
							>
								{subText}
							</Text>
							<P fontFamily={fonts.Suisse}>{paraText}</P>

							<ThinkButton>
								<ButtonText>Book a Demo</ButtonText>
							</ThinkButton>
						</Column>
					</GridItem>
					<GridItem>
						<Flex
							w={{ base: 'full', md: 'full', lg: '600px' }}
							h={{ base: 'auto', md: 'auto', lg: '400px' }}
							justifyContent='center'
						>
							<Image
								src={image}
								alt='Banner'
								w={{ base: '200px', md: '400px', lg: '400px' }}
								h='auto'
							/>
						</Flex>
					</GridItem>
				</Grid>
			</Flex>
		</Column>
	);
};

export default MintSections;
