import React from 'react';
import { styles } from '../../../theme/styles';
import { breakpoints } from '../../lib/constants';
import Column from '../../util/Column';
import { fonts } from '../../../lib/constants';

import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const P = styled(Text)`
	@media (min-width: ${breakpoints.desktop}) {
		font-size: 1.2rem;
		line-height: 1.6;
		max-width: 50vw;
	}
`;

const BORDER = styles.border.light;

const MintSections = ({
	text,
	subText,
	paraText,
	image,
	reverse = false,
	video,
}) => {
	return (
		<Column
			mt='60px'
			px={{ base: 6, md: 16, lg: 16, xl: 32 }}
			borderTop={BORDER}
			borderBottom={BORDER}
		>
			<Flex
				w='full'
				// maxW={layout.MAX_W}
				mx='auto'
				borderLeft={BORDER}
				borderRight={BORDER}
				px={{
					base: '16px',
					md: '16px',
					lg: '20px',
					xl: '32px',
				}}
				py={{ base: '24px', xl: '40px' }}
				//my='60px'
			>
				<Grid
					templateColumns={{
						base: '1fr',
						md: '1fr 1fr',
						lg: '1fr 1fr',
						xl: '1fr 1fr',
					}}
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
										w={{ base: '400px', md: '400px', lg: '600px', xl: '800px' }}
										h={{ base: '190px', md: '168px', lg: '244px', xl: 'auto' }}
									/>

									<Box
										position='absolute'
										top={{ base: '18px', md: '15px', lg: '22px', xl: '47px' }}
										left={{
											base: '58px',
											md: '56px',
											lg: '82px',
											xl: ' 166px ',
										}}
									>
										<Box
											width={{
												base: '184px',
												md: '167px',
												lg: '240px',
												xl: '470px',
											}}
										>
											<video
												src={`${video}`}
												autoPlay
												// width='469'
												//height='325'
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
							<GridItem order={{ base: 1, lg: 1 }} mb={{ base: 0, xl: 36 }}>
								<Column
									gap={{ base: 2, md: 4, lg: 5 }}
									justifyItems='center'
									alignItems={{ base: 'start', lg: 'start' }}
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
								</Column>
							</GridItem>
						</>
					) : (
						<>
							<GridItem order={{ base: 2, lg: 2 }} mb={36}>
								<Column
									gap={{ base: 2, md: 4, lg: 5 }}
									justifyItems='center'
									alignItems={{ base: 'start', lg: 'start' }}
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
										w={{ base: '400px', md: '400px', lg: '600px', xl: '800px' }}
										h={{ base: '190px', md: '168px', lg: '244px', xl: 'auto' }}
									/>

									<Box
										position='absolute'
										top={{ base: '18px', md: '15px', lg: '22px', xl: '47px' }}
										left={{
											base: '58px',
											md: '56px',
											lg: '82px',
											xl: ' 166px ',
										}}
									>
										<Box
											width={{
												base: '184px',
												md: '167px',
												lg: '240px',
												xl: '470px',
											}}
										>
											<video
												src={`${video}`}
												autoPlay
												// width='469'
												//height='325'
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
