import useCustomColors from '@/hooks/useCustomColors';

import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { fonts } from '../../../lib/constants';

const HeaderText = ({ children, ...props }) => {
	const { textColor } = useCustomColors();
	return (
		<Text
			fontFamily={fonts.heading}
			color={textColor}
			fontSize={{ base: '1.5rem', md: '3rem' }}
			lineHeight='normal'
			{...props}
		>
			{children && children}
		</Text>
	);
};

export default HeaderText;
