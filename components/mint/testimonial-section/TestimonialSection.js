import { Avatar, AvatarGroup, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Column from '../../util/Column';
import { styles } from '../../../theme/styles';

const BORDER = styles.border.light;

const TestimonialSection = () => {
	return (
		<Column
			px={{ base: 6, lg: 10 }}
			py={10}
			borderTop={BORDER}
			borderBottom={BORDER}
			bg='sectionBg.light'
		>
			<Text fontFamily='Suisse' fontSize='2rem' textAlign='center'>
				See what all the hype is about
			</Text>

			<Grid
				templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
				px={{ base: '12px', md: '44px', xl: '124px' }}
				py={{ base: '20px', xl: '40px' }}
				gap={6}
				mt={4}
			>
				<Flex
					flexDir='column'
					bg='white'
					gap={4}
					borderRadius={16}
					overflow='hidden'
				>
					<Column bg='#373f51' alignItems='center' p={6} gap={2}>
						<Text fontSize='1.8rem' fontFamily='Suisse' textColor='white'>
							14+ Projects
						</Text>
						<Text
							fontSize='1.5rem'
							textColor='white'
							fontFamily='Suisse'
							fontWeight={300}
						>
							completed on mint
						</Text>
					</Column>

					<Column p={6} gap={6}>
						<Flex alignItems='center' gap={1}>
                            <AvatarGroup>

							<Avatar
								name='Random User'
								src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04'
								shape='full'
								size='lg'
							/>
							<Avatar
								name='Random User'
								src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04'
								shape='full'
								size='lg'
							/>
                            </AvatarGroup>

							<Column gap={2} ml={4}>
								<Text fontSize='1.2rem'>John Doe</Text>
								<Text fontSize='1.2rem'>Framer</Text>
							</Column>
						</Flex>

						<Text fontSize='1.2rem' lineHeight={1.5}>
							Contra not only helps us find those people with specialized
							skills, the one-stop-shop solution allows us to manage projects
							end-to-end.
						</Text>
					</Column>
				</Flex>
			</Grid>
		</Column>
	);
};

export default TestimonialSection;
