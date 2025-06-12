import { Flex } from '@chakra-ui/react';
import React from 'react';

const Align = ({ children, ...props }) => {
	return (
		<Flex
			align='center'
			{...props}>
			{children && children}
		</Flex>
	);
};

export default Align;
