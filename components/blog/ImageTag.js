import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import { colors } from '../../theme/styles';

const ImageTag = ({ children }) => {
	const { colorMode } = useColorMode();
	const cardBg = colorMode === 'dark' ? colors?.card?.dark : colors?.card?.light;
	const textColor = colorMode === 'dark' ? colors?.text?.dark : colors?.text?.light;
	return (
		<Box
			position='absolute'
			top='12px'
			right='12px'
			bg={cardBg}
			color={textColor}
			px='8px'
			py='4px'
			textTransform='uppercase'
			borderRadius='md'
			fontSize='xs'
			fontWeight='medium'>
			{children}
		</Box>
	);
};

export default ImageTag;
