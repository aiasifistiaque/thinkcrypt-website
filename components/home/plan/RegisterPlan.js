import React from 'react';
import { styles } from '../../../theme/styles';
import { breakpoints, layout } from '../../lib/constants';
import Column from '../../util/Column';
import { fonts } from '../../../lib/constants';
import { colors } from '../../lib/constants';
import {
	Button,
	Center,
	Flex,
	Grid,
	GridItem,
	Image,
	Text,
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

const RegisterPlan = () => {
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
				px={{ base: '16px', md: '24px' }}
				py={{ base: '24px', md: '128px' }}
				//my='60px'
			>
				<Grid
					templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
					gap={12}
					alignItems='center'
				>
					<GridItem>
						<Flex
							w={{ base: 'full', md: 'full', lg: '600px' }}
							h={{ base: 'auto', md: 'auto', lg: '400px' }}
							justifyContent='center'
						>
							<Image
								src='./logo/customImage1.svg'
								alt='Banner'
								w={{ base: '200px', md: '400px', lg: 'full' }}
								h='auto'
							/>
						</Flex>
					</GridItem>
					<GridItem>
						<Column
							gap={{ base: 2, md: 4, lg: 8 }}
							justifyItems='center'
							alignItems={{ base: 'center', lg: 'start' }}
						>
							<Text
								fontSize={{ base: '1.5rem', md: '2rem', lg: '3rem' }}
								fontFamily='Bebas Neue'
							>
								e-Mint store coming soon
							</Text>
							<P fontFamily={fonts.Suisse}>
								A simple and feature-rich inventory and e-commerce solution that
								integrates seamlessly with your business operations. Built by
								our trusted partner, MINT is a cutting-edge application designed
								to streamline inventory management, invoicing, billing, and
								customer engagement—all in one platform
							</P>
							<P fontFamily={fonts.Suisse}>
								Click below to receive the latest updates.
							</P>
							<P fontFamily={fonts.Suisse}>
								Want to know more? Join our pre-launch phase!
							</P>
							<ThinkButton>
								<ButtonText>Register your Interest</ButtonText>
							</ThinkButton>
						</Column>
					</GridItem>
				</Grid>
			</Flex>
		</Column>
	);
};

export default RegisterPlan;
