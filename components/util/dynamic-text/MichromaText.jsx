// import useCustomColors from '@/hooks/useCustomColors';

import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';
import { fonts } from '../../../lib/constants.js';
import useCustomColors from '../../../hooks/useCustomColors.jsx';

const MichromaText = ({ children, ...props }) => {
	const { textColor } = useCustomColors();
	return (
		<Text
			fontFamily={fonts.Michroma}
			color={textColor}
			fontSize={{ base: '1rem', lg: '1.5rem' }}
			fontWeight={'400'}
			{...props}>
			{children}
		</Text>
	);
};

export default MichromaText;
