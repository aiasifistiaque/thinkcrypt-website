import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';
import useCustomColors from '../../../../hooks/useCustomColors';


const RoundedButton = ({ children, ...props }) => {
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
		<Button
			bg='transparent'
			border='2px solid'
			borderColor='#877676'
			color={textGray}
			borderRadius='30px'
			px={{ base: 4, lg: 14 }}
			py={{ base: 4, lg: 6 }}
			{...props}
		>
			{children}
		</Button>
	);
};

export default RoundedButton;
