import { Center, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { breakpoints } from '../../lib/constants';
import { colors } from '../../../theme/styles';
import { fonts } from '../../../lib/constants';

const Container = styled(Center)`
	padding: 128px 24px;
	display: flex;
	flex-direction: column;

	padding-bottom: 92px;
`;

const P = styled(Text)`
	text-transform: uppercase;
	@media (min-width: ${breakpoints.desktop}) {
		max-width: 80vw;
	}
`;

const Testimonial = () => {
	return (
		<Container bg={colors?.background?.dark}>
			<Center
				flexDir='column'
				gap={4}
				mb={4}>
				<Heading
					size='xl'
					fontFamily={fonts?.title}
					fontSize={{ base: '1.5rem', md: '6rem' }}
					color={colors?.text?.dark}>
					What our clients are saying about us
				</Heading>
				<P
					textAlign='center'
					color={colors?.text?.dark}
					fontSize={{ base: '1rem', md: '1.2rem' }}
					fontFamily={fonts?.primary}>
					I am really thankful to the thinkcrypt team for making this amazing website and app for
					our business. Thinkcrypt has fulfilled all of our demands and queries. They have a very
					strong team of developers. We will surely be working with thinkcrypt team for future
					colaborations. We wish all the best to ThinkCrypt Team.
				</P>
			</Center>

			<Flex
				my='2rem'
				align='center'
				gap={4}>
				<Image
					h='100px'
					w='100px'
					objectFit='cover'
					src='/pp.jpeg'
					borderRadius='full'
				/>
				<Stack
					align='start'
					spacing={3}>
					<P
						fontSize='3rem'
						fontFamily={fonts?.title}
						color={colors?.text?.dark}>
						Shahbaz Amin Bhuiyan
					</P>
					<Heading
						fontFamily={fonts?.title}
						size='md'
						color={colors?.text?.blue}>
						Vincent{`'`}s Sphere
					</Heading>
				</Stack>
			</Flex>
		</Container>
	);
};

export default Testimonial;
