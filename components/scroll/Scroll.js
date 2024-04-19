import React, { useEffect, useState, useRef } from 'react';
import { Flex } from '@chakra-ui/react';
import { motion, useTransform } from 'framer-motion';

const Scroll = ({ children }) => {
	const containerRef = useRef(null);

	return (
		<Flex
			zIndex={99}
			ref={containerRef}>
			{children}
		</Flex>
	);
};

export default Scroll;
