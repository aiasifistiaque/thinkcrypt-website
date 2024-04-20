import { Center, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { breakpoints, colors } from '../../lib/constants';

const Container = styled(Center)`
	padding: 128px 24px;
	display: flex;
	flex-direction: column;
	text-align: center;
	font-family: Suisse;
	margin-bottom: 32px;
`;

const P = styled(Text)`
	@media (min-width: ${breakpoints.desktop}) {
		font-size: 1.2rem;
		line-height: 1.6;
		max-width: 50vw;
	}
`;

const Testimonial = () => {
	return (
		<Container bg='black.800'>
			<Stack
				spacing={4}
				mb={4}>
				<Heading
					fontFamily='Suisse'
					size='xl'
					color={'white'}>
					What our clients are saying about us
				</Heading>
				<P
					color={'white'}
					fontFamily='Suisse'>
					I am really thankful to the thinkcrypt team for making this amazing website and app for
					our business. Thinkcrypt has fulfilled all of our demands and queries. They have a very
					strong team of developers. We will surely be working with thinkcrypt team for future
					colaborations. We wish all the best to ThinkCrypt Team.
				</P>
			</Stack>

			<Flex
				my='2rem'
				gap={4}>
				<Image
					h='60px'
					w='60px'
					objectFit='cover'
					src='/pp.jpeg'
					borderRadius='full'
				/>
				<Stack
					align='start'
					spacing={0}>
					<P
						fontFamily='Suisse'
						color={'white'}>
						Shahbaz Amin Bhuiyan
					</P>
					<Heading
						fontFamily='Suisse'
						size='sm'
						color='#d63384'>
						Vincent{`'`}s Sphere
					</Heading>
				</Stack>
			</Flex>
		</Container>
	);
};

export default Testimonial;
