import { Text } from '@chakra-ui/react';
import React from 'react';
import usePointerEvents from '../../../hooks/usePointerPosition';


const RobotoText = ({ children, ...props }) => {
	const { handleMouseEnter, handleMouseLeave } = usePointerEvents();
	return (
		<Text
			fontFamily='Michroma'
			fontSize={{ base: '1rem', md: '1.625rem' }}
			fontWeight='400'
			lineHeight='150%'
			color='textColor.light'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			{children && children}
		</Text>
	);
};

export default RobotoText;
