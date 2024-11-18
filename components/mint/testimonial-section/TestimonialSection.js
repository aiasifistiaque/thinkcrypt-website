import { Avatar, AvatarGroup, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Column from '../../util/Column';
import { styles } from '../../../theme/styles';
import { testimonialData } from '../../../data/data';
import styled from '@emotion/styled';
import { breakpoints } from '../../lib/constants';

const BORDER = styles.border.light;

const P = styled(Text)`
	@media (min-width: ${breakpoints.desktop}) {
		font-size: 1.25rem;
		line-height: 1.6;
		max-width: 50vw;
		fontfamily: 'Suisse';
	}
`;

const TestimonialSection = () => {
	return (
		<Column
			my='60px'
			px={{ base: 6, xl: 24 }}
			py={12}
			borderTop={BORDER}
			borderBottom={BORDER}
			bg='sectionBg.light'
		>
			<Text
				fontFamily='Bebas Neue'
				fontSize={{ base: '1.5rem', md: '2rem', lg: '3rem' }}
				textAlign='center'
			>
				See what all the hype is about
			</Text>

			<Grid
				templateColumns={{ base: '1fr', md: '1fr 1fr', xl: '1fr 1fr 1fr' }}
				p={{ base: 4, md: 16, xl: 28 }}
				justifyContent='space-between'
				gap={6}
				mt={4}
			>
				{testimonialData.map(testimonial => (
					<Flex
						flexDir='column'
						bg='#EBE5D7'
						gap={4}
						borderRadius={16}
						overflow='hidden'
						key={testimonial?.id}
					>
						<Column
							bg='#373f51'
							alignItems='center'
							textAlign='center'
							p={6}
							gap={2}
						>
							<Text
								fontFamily='Suisse'
								fontSize={{ base: '1rem', md: '1.1rem', lg: '1.5rem' }}
								textColor='white'
							>
								{testimonial?.heading}
							</Text>
							<Text
								fontFamily='Suisse'
								fontSize={{ base: '1rem', md: '1.1rem', lg: '1.4rem' }}
								textColor='white'
								fontWeight={300}
							>
								{testimonial?.subHeading}
							</Text>
						</Column>

						<Column p={6} gap={6}>
							<Flex alignItems='center' gap={1}>
								<AvatarGroup>
									<Avatar
										name={`${testimonial?.user}`}
										src={`${testimonial?.userImage}`}
										shape='full'
										size='lg'
									/>
									<Avatar
										name={`${testimonial?.company}`}
										src={`${testimonial?.companyImage}`}
										shape='full'
										size='lg'
									/>
								</AvatarGroup>

								<Column gap={2} ml={4}>
									<P>{testimonial?.user}</P>
									<P>{testimonial?.company}</P>
								</Column>
							</Flex>

							<P>{testimonial?.userDescription}</P>
						</Column>
					</Flex>
				))}
			</Grid>
		</Column>
	);
};

export default TestimonialSection;
