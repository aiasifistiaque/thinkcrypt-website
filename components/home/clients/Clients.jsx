import { Box, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { breakpoints, fonts, layout } from "../../lib/constants";
import { partnerLogos } from "../../../data/data";
import styled from "@emotion/styled";

const Container = styled(Stack)`
	margin: 24px 0;
	@media (min-width: ${breakpoints.desktop}) {
		margin: 32px 128px;
	}
`;

const EachItem = ({ children, ...props }) => {
	return (
		<Flex
			flex={1}
			justify={'center'}
			align={'center'}
			bg='#ffffff'
			h={{ base: '100px', md: '130px' }}
		>
			<Box w={{ base: 'auto', md: 'auto' }} p={{base: 8, md: 14}}>
				<Image w='full' h='auto' objectFit='cover' src={children} alt='logo' />
			</Box>
		</Flex>
	);
};

const Clients = () => {
  return (
		<Container spacing={0}>
			<Flex>
				<Flex
					w='full'
					maxW={layout.MAX_W}
					mx='auto'
					borderTop='1px solid #DEDEE0'
					borderBottom='1px solid #DEDEE0'
					mt='40px'
					mb='40px'
				>
					<Flex
						flex={1}
						// ml={{ base: 0, md: 20 }}
						flexDir='column'
						borderLeft={{ base: 'none', md: '1px solid #DEDEE0' }}
						borderRight='1px solid #DEDEE0'
					>
						<Flex
							flex={1}
							justify='center'
							align='center'
							px={{ base: 4, md: 8, lg: 16 }}
							py={{ base: 4, md: 8, lg: 8 }}
							borderBottom='1px solid #DEDEE0'
						>
							<Stack spacing={0} w='full' gap={4}>
								<Text
									fontSize={{ base: '1.5rem', md: '3rem' }}
									fontWeight={700}
									fontFamily={fonts.heading}
									color='textDarkGray.light'
								>
									Trusted By The Best
								</Text>
								<Text
									fontSize={{ base: '1rem', md: '1.5rem' }}
									fontWeight={400}
									fontFamily={fonts.body}
									color='textDarkGray.light'
								>
									Companies ranging from early-stage startups to Fortune 500
									enterprises partner with us to develop game-changing growth
									solutions.
								</Text>
							</Stack>
						</Flex>
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
			</Flex>
		</Container>
	);
};

export default Clients;
