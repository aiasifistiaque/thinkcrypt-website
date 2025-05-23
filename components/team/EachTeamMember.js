import React from 'react';
import { Stack, Image } from '@chakra-ui/react';
import { Text, Flex } from '@chakra-ui/react';
import { colors, styles } from '../../theme/styles.js';
import { fonts } from '../../lib/constants.js';

const EachTeamMember = ({ img, name, designation }) => {
	return (
		<Flex
			flexDir='column'
			w='full'>
			<Image
				{...imageCss}
				src={img}
				alt={name}
			/>
			<Stack {...bodyCss}>
				<Text {...nameText}>{name}</Text>
				<Text {...designationText}>{designation}</Text>
			</Stack>
		</Flex>
	);
};

const nameText = {
	fontFamily: fonts?.title,
	letterSpacing: '0.5px',
	fontSize: { base: '1.5rem', md: '2.5rem' },

	lineHeight: 1,
	fontWeight: 600,
	color: colors?.text.dark,
};

const designationText = {
	fontFamily: fonts?.primary,
	letterSpacing: '0.5px',
	fontSize: { base: '0.8rem', md: '1rem' },
	lineHeight: 1,
	fontWeight: 400,
	color: colors?.text?.blue,
	textTransform: 'uppercase',
};

const imageCss = {
	p: { base: '12px', md: '24px' },
	objectFit: 'cover',
	w: { base: '140px', md: '320px' },
	h: { base: '140px', md: '320px' },
};

const bodyCss = {
	p: { base: '12px', md: '24px' },
	pb: '32px',
	w: 'full',
	pt: 4,
	spacing: 2,
};

export default EachTeamMember;
