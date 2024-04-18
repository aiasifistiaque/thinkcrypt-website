import { Flex } from "@chakra-ui/react";
import React from "react";

const Column = ({ children, ...props }) => {
	return (
		<Flex direction='column' {...props}>
			{children && children}
		</Flex>
	);
};

export default Column;
