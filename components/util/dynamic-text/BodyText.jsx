import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';
import { fonts } from '../../../lib/constants';
import useCustomColors from '../../../hooks/useCustomColors';


const BodyText= ({ children, ...props }) => {
	const { textColor } = useCustomColors();
	return (
		<Text
			fontFamily={fonts.body}
			color={textColor}
			fontSize={{ base: '0.825rem', md: '1rem', lg: '1.5rem' }}
			{...props}
		>
			{children && children}
		</Text>
	);
};

export default BodyText;
