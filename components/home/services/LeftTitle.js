import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { colors, styles } from '../../../theme/styles';

const LeftTitle = ({ title, children }) => {
	return (
		<Flex {...headingContainerCss}>
			<Text {...headingCss}>{title}</Text>
			<Text {...subHeadingCss}>{children}</Text>
		</Flex>
	);
};

const headingContainerCss = {
	flexDir: 'column',
	gap: 4,
	w: 'full',
};

const headingCss = {
	lineHeight: 1,
	color: colors?.text?.dark,
	fontSize: { base: '44px', md: '8rem' },
	fontFamily: fonts.title,
	textTransform: 'uppercase',
};

const subHeadingCss = {
	fontSize: { base: '14px', md: '16px' },
	color: colors?.text?.blue || 'white',
	fontFamily: fonts.heading,
	textTransform: 'uppercase',
	fontFamily: fonts.primary,
	maxW: { base: '100%', md: '70%' },
};

export default LeftTitle;
