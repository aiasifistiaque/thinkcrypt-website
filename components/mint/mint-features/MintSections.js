import React from 'react';
import { styles } from '../../../theme/styles';
import Column from '../../util/Column';
import { fonts } from '../../../lib/constants';

import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';

const BORDER = styles.border.light;

const MintSections = ({ text, subText, paraText, image, reverse = false }) => {
	return (
		<Column
			mt='60px'
			px={{ base: 6, md: 16, lg: 16, xl: 32 }}
			borderTop={BORDER}
			borderBottom={BORDER}>
			<Flex
				w='full'
				mx='auto'
				borderLeft={BORDER}
				borderRight={BORDER}
				px={{
					base: '16px',
					md: '16px',
					lg: '20px',
					xl: '32px',
				}}
				py={{ base: '24px', xl: '40px' }}>
				<Grid
					templateColumns={{
						base: '1fr',
						md: '1fr 1fr',
						lg: '1fr 1fr',
						xl: '1fr 1fr',
					}}
					gap={12}
					alignItems='center'>
					{reverse ? (
						<>
							<GridItem order={{ base: 1, md: 2 }}>
								<Flex
									w={{ base: 'full', md: 'full', lg: 'full' }}
									h={{ base: 'auto', md: 'auto', lg: 'auto' }}
									justifyContent='center'>
									<Image
										src={image}
										alt='Banner'
									/>
								</Flex>
							</GridItem>
							<GridItem order={{ base: 2, md: 1 }}>
								<Column
									gap={{ base: 2, md: 2, lg: 5 }}
									justifyItems='center'
									alignItems={{ base: 'start', lg: 'start' }}>
									<Text
										fontSize={{ base: '14px', lg: '1.25rem' }}
										fontFamily={fonts.Michroma}>
										{text}
									</Text>
									<Text
										fontFamily='Michroma'
										fontSize={{
											base: '1.5rem',
											md: '1.3rem',
											lg: '1.75rem',
											// xl: "2.25rem",
										}}
										lineHeight={1.6}>
										{subText}
									</Text>
									<Text
										fontSize={{
											base: '12px',
											lg: '1rem',
											//  xl: "1.25rem"
										}}
										fontFamily={fonts.Michroma}
										lineHeight={{ xl: 1.6 }}>
										{paraText}
									</Text>
								</Column>
							</GridItem>
						</>
					) : (
						<>
							<GridItem order={{ base: 2, md: 2 }}>
								<Column
									gap={{ base: 2, md: 4, lg: 5 }}
									justifyItems='center'
									alignItems={{ base: 'start', lg: 'start' }}>
									<Text
										fontSize={{ base: '14px', lg: '1.25rem' }}
										lineHeight={{ xl: 1 }}
										fontFamily={fonts.Michroma}>
										{text}
									</Text>
									<Text
										fontFamily='Michroma'
										fontSize={{
											base: '1.5rem',
											md: '1.3rem',
											lg: '1.75rem',
											// xl: "2.25rem",
										}}
										lineHeight={1}>
										{subText}
									</Text>
									<Text
										fontSize={{
											base: '12px',
											lg: '1rem',
											// xl: "1.25rem"
										}}
										lineHeight={{ xl: 1.6 }}
										fontFamily={fonts.Michroma}>
										{paraText}
									</Text>
								</Column>
							</GridItem>
							<GridItem order={{ base: 1, md: 1 }}>
								<Flex
									w={{ base: 'full', md: 'full', lg: 'full' }}
									h={{ base: 'auto', md: 'auto', lg: 'auto' }}
									justifyContent='center'>
									<Image
										src={image}
										alt='Banner'
									/>
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
