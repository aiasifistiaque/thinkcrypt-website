import { Box, Center, Flex, Grid, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { breakpoints, fonts, layout } from '../../lib/constants';
import { partnerLogos } from '../../../data/data';
import styled from '@emotion/styled';
import { styles } from '../../../theme/styles';

const Container = styled(Stack)`
	padding: 24px 0;
	@media (min-width: ${breakpoints.desktop}) {
		padding: 32px 0;
		borderbottom: ${styles.border.light};
	}
`;

const BORDER = styles.border.light;

const EachItem = ({ children, ...props }) => {
	return (
		<Center flex={1} bg='white' h={{ base: '140px', md: '200px' }}>
			<Box p={{ base: 2, md: 24 }}>
				<Image
					w='auto'
					h={{base: '64px', md: '84px'}}
					objectFit='contain'
					src={children}
					alt='logo'
				/>
			</Box>
		</Center>
	);
};

const Clients = () => {
	return (
		<Flex
			w='full'
			// maxW={layout.MAX_W}
			mx='auto'
			borderTop={BORDER}
			borderBottom={BORDER}
			px='24px'
			pl={{ base: '24px', md: '128px' }}
			my='60px'
		>
			<Flex
				flex={1}
				flexDir='column'
				borderLeft={{ base: BORDER, md: BORDER }}
				borderRight={BORDER}
			>
				<Center
					px={{ base: 4, md: 8, lg: 16 }}
					py={{ base: 4, md: 8, lg: 8 }}
					borderBottom={BORDER}
				>
					<Stack py='16px' spacing={0} w='full' gap={4}>
						<Text
							fontSize={{ base: '1.5rem', md: '3rem' }}
							fontWeight={700}
							fontFamily={fonts.heading}
							color='black.800'
						>
							Trusted By The Best
						</Text>
						<Text
							fontSize={{ base: '1rem', md: '1.5rem' }}
							fontWeight={400}
							letterSpacing='-.2px'
							lineHeight='1.5'
							fontFamily='Suisse'
							color='black.800'
						>
							{`
We provide services to a wide array of companies, including startups, small and medium-sized enterprises (SMEs), and large corporations, offering tailored solutions that drive innovative growth and transformative results. Our partnerships span various industries and sectors, enabling us to deliver impactful, customized solutions that propel businesses forward in their respective markets.`}
						</Text>
					</Stack>
				</Center>
				<Grid
					flex={1}
					templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
					gap='1px'
					bg={'#DEDEE0'}
				>
					{partnerLogos.map((logo, index) => (
						<EachItem key={index}>{logo}</EachItem>
					))}
				</Grid>
			</Flex>
		</Flex>
		// </Flex>
		// </Container>
	);
};

export default Clients;
