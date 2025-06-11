import { Flex } from '@chakra-ui/react';
import React from 'react';

const FlexEnd = ({ children, ...props }) => {
	return (
		<Flex
			align='flex-end'
			justify='flex-end'
			{...props}>
			{children && children}
		</Flex>
	);
};

export default FlexEnd;
