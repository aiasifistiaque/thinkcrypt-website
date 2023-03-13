import React from 'react';
import { Heading, Flex, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { colors, breakpoints } from '../../lib/constants';

const Container = styled(Flex)`
	flex: 1;
	background-image: url('/hero.jpeg');
	background-position: center center;
	background-size: cover;
`;

const Overlay = styled(Flex)`
	padding: 0 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	color: white;
	@media (min-width: ${breakpoints.desktop}) {
		padding: 0 128px;
	}
`;

const Title = styled(Heading)`
	font-weight: 300;
	line-height: 1.2;
`;

const Text = styled(Heading)`
	font-weight: 400;
	max-width: 1000px;
	line-height: 1.6;
`;

const Divider = styled(Box)`
	background-color: ${colors.primary};
	height: 0.5rem;
	width: 207px;
	margin-top: 16px;
	margin-bottom: 32px;
`;

const Hero = () => {
	return (
		<Container>
			<Overlay>
				<Title size='3xl'>
					We Build
					<br /> Digital Experience
				</Title>
				<Divider />
				<Text size='md'>
					At thinkcrypt.io, we offer a complete range of services that build up
					business value, from the initial idea and formulation of product
					strategy, through building a prototype and testing it with users,
					right to the creation of the product itself.
				</Text>
			</Overlay>
		</Container>
	);
};

export default Hero;
