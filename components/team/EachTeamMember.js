import React from 'react';
import { Stack, Image, Center } from '@chakra-ui/react';
import { Text as ChakraText, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../lib/constants.js';
import { styles } from '../../theme/styles.js';

const NameText = styled(ChakraText)`
	font-family: 'Bebas Neue', sans-serif;
	letter-spacing: 1px;
	font-size: 1rem;
	line-height: 1;
	font-weight: 600;
	//text-align: center;

	@media (min-width: ${breakpoints.desktop}) {
		letter-spacing: 2px;
		line-height: 1;
		font-size: 1.5rem;
		max-width: 650px;
	}
`;

const DesignationText = styled(ChakraText)`
	font-family: 'Bebas Neue', sans-serif;
	font-size: 0.725rem;
	letter-spacing: 1px;
	line-height: 1.4;
	font-weight: 400;
	//text-align: center;

	@media (min-width: ${breakpoints.desktop}) {
		letter-spacing: 2px;
		line-height: 1.2;
		font-size: 1rem;
		max-width: 650px;
	}
`;
const BORDER = styles.border.light;
const EachTeamMember = ({ img, name, designation }) => {
	return (
		<Flex
			borderBottom={BORDER}
			flexDir='column'
			borderRight={BORDER}
			w='full'>
			<Image
				p={{ base: '12px', md: '24px' }}
				//borderRadius='full'
				objectFit='cover'
				src={img}
				alt={name}
				w={{ base: '140px', md: '320px' }}
				h={{ base: '140px', md: '320px' }}
			/>
			<Stack
				borderTop={BORDER}
				p={{ base: '12px', md: '24px' }}
				pb='16x'
				w='full'
				pt={4}
				spacing={0}>
				<NameText
					fontSize={'2rem'}
					fontWeight={600}>
					{name}
				</NameText>
				<DesignationText>{designation}</DesignationText>
			</Stack>
		</Flex>
	);
};

export default EachTeamMember;
