import React from 'react';
import { Stack, Image } from '@chakra-ui/react';
import { Text as ChakraText, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../lib/constants.js';

const NameText = styled(ChakraText)`
	font-family: 'Poppins', sans-serif;
	letter-spacing: 1px;
	font-size: 1rem;
	line-height: 1;
	font-weight: 600;
	text-align: center;

	@media (min-width: ${breakpoints.desktop}) {
		letter-spacing: 2px;
		line-height: 1.8;
		font-size: 1.5rem;
		max-width: 650px;
	}
`;

const DesignationText = styled(ChakraText)`
	font-family: 'Poppins', sans-serif;
	font-size: 0.725rem;
	letter-spacing: 1px;
	line-height: 1.6;
	font-weight: 400;
	text-align: center;

	@media (min-width: ${breakpoints.desktop}) {
		letter-spacing: 2px;
		line-height: 1.8;
		font-size: 1rem;
		max-width: 650px;
	}
`;
const EachTeamMember = ({ img, name, designation }) => {
	return (
		<Stack
			w='full'
			align={'center'}
			justify={'center'}
			spacing={{ base: 1, md: 0 }}
		>
			<Image
				borderRadius='full'
				objectFit='cover'
				src={img}
				alt={name}
				w={{ base: '120px', md: '220px' }}
				h={{ base: '120px', md: '220px' }}
			/>
			<NameText fontSize={'2rem'} fontWeight={600}>
				{name}
			</NameText>
			<DesignationText>{designation}</DesignationText>
		</Stack>
	);
};

export default EachTeamMember;
