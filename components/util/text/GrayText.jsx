import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import useCustomColors from '../../../hooks/useCustomColors';



const GrayText = ({ children, ...props }) => {
	// api

	// hooks
	const { textGray } = useCustomColors();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Text fontSize={{ base: '16px', md: '20px' }} color={textGray} fontWeight='600' {...props}>
			{children}
		</Text>
	);
};

export default GrayText;
