import React from 'react';
import BorderContainer from '../../util/container/BorderContainer';
import { Box, Flex, Grid, Image } from '@chakra-ui/react';
import Column from '../../util/Column';
import HeaderText from '../../util/dynamic-text/HeaderText';
import BodyText from '../../util/dynamic-text/BodyText';
import { BORDER } from '../../../lib/constants';
import SquareButton from '../../util/buttons/SquareButton';
import SuisseText from '../../util/dynamic-text/SuisseText';

const CourseHeroSection = ({ data }) => {
	return (
		<BorderContainer>
			<Grid
				templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
				w='full'
				h={{ base: 'auto', lg: '86vh' }}
			>
				<Column
					gap={{ base: 5, md: 10 }}
					p={4}
					order={{ base: 2, lg: 1 }}
					h='full'
					justify='space-between'
				>
					<Column gap={3}>
						<HeaderText
							fontSize={{ base: '2.25rem', md: '3rem' }}
							pb={4}
							borderBottom={BORDER}
						>
							{data?.title}
						</HeaderText>
						<SuisseText fontSize={{ base: '1rem', md: '1.25rem' }}>
							{data?.shortDescription}
						</SuisseText>
					</Column>
					<Flex gap={{ base: 3, md: 6 }} wrap='wrap'>
						<SquareButton w={{ base: '155px', md: '270px' }}>
							Pre-Registration
						</SquareButton>
						<SquareButton w={{ base: '155px', md: '270px' }}>
							CV Review
						</SquareButton>
						<SquareButton w={{ base: '155px', md: '270px' }}>
							Apply
						</SquareButton>
					</Flex>
					<Column gap={{ base: 2, md: 3 }}>
						{data?.courseInfo?.map((info, index) => (
							<Flex gap={{ base: 2, md: 4 }} key={index}>
								<HeaderText fontSize={{ base: '1.25rem', md: '1.5rem' }}>
									{info?.title}:
								</HeaderText>
								<BodyText fontSize={{ base: '1.25rem', md: '1.5rem' }}>
									{info?.value}
								</BodyText>
							</Flex>
						))}
					</Column>
				</Column>
				<Box
					h={{ base: '350px', lg: 'full' }}
					w='full'
					order={{ base: 1, lg: 2 }}
					pr={{ base: 4, lg: 0 }}
				>
					<Image
						h={'100%'}
						w={'100%'}
						objectFit='cover'
						src='/course/course.png'
						alt='hero image'
					/>
				</Box>
			</Grid>
		</BorderContainer>
	);
};

export default CourseHeroSection;
