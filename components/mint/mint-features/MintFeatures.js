import { Box, Center, Flex, Grid, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { breakpoints, fonts, layout } from '../../lib/constants';
import { featureLogos, logoTexts, partnerLogos } from '../../../data/data';
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

const EachItem = ({ children, text, ...props }) => {
	return (
		<Center
			flex={1}
			bg='white'
			textAlign='center'
			alignItems='center'
			h={{ base: '140px', md: '200px' }}>
			<Box
				p={{ base: 2, md: 4 }}
				maxW={200}>
				<Image
					w='auto'
					h={{ base: '64px', md: '84px' }}
					objectFit='contain'
					src={children}
					alt='logo'
					justifySelf='center'
				/>

				<Text mt={2}>{text}</Text>
			</Box>
		</Center>
	);
};

const MintFeatures = () => {
	return (
		<Flex
			w='full'
			// maxW={layout.MAX_W}
			mx='auto'
			borderTop={BORDER}
			borderBottom={BORDER}
			px='24px'
			pl={{ base: '24px', md: '64px', lg: '128px' }}
			mt='60px'>
			<Flex
				flex={1}
				flexDir='column'
				borderLeft={{ base: BORDER, md: BORDER }}
				borderRight={BORDER}>
				<Center
					px={{ base: 4, md: 8, lg: 16 }}
					py={{ base: 4, md: 8, lg: 8 }}
					borderBottom={BORDER}>
					<Stack
						py='16px'
						spacing={0}
						w='full'
						gap={4}>
						<Text
							fontSize={{ base: '1.5rem', md: '3rem' }}
							fontWeight={700}
							fontFamily={fonts.heading}
							color='black.800'>
							Key Features
						</Text>
						<Text
							fontSize={{ base: '1rem', md: '1.5rem' }}
							fontWeight={400}
							letterSpacing='-.2px'
							lineHeight='1.5'
							fontFamily='Michroma'
							color='black.800'>
							{`MINT offers seamless inventory, sales, POS, and delivery management, with customizable themes, reports, and multi-user roles, enhancing e-commerce efficiency.`}
						</Text>
					</Stack>
				</Center>
				<Grid
					flex={1}
					templateColumns={{
						base: '1fr 1fr',
						md: '1fr 1fr',
						lg: '1fr 1fr 1fr 1fr 1fr',
					}}
					gap='1px'
					bg={'#DEDEE0'}>
					{featureLogos.map((logo, index) => (
						<EachItem
							key={index}
							text={logoTexts[index]}>
							{logo}
						</EachItem>
					))}
				</Grid>
			</Flex>
		</Flex>
		// </Flex>
		// </Container>
	);
};

export default MintFeatures;
