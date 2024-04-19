import React, { useEffect, useState, useRef } from 'react';
import { Flex } from '@chakra-ui/react';
import { motion, useTransform } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

const Scroll = ({ children }) => {
	const containerRef = useRef(null);

	return (
		<Flex
			as={LocomotiveScrollProvider}
			style={{ zIndex: 99 }}
			options={{
				multiplier: 0.9,
				lerp: 0.2,
				smooth: false,
				// ... all available Locomotive Scroll instance options
			}}
			containerRef={containerRef}>
			<Flex
				zIndex={99}
				data-scroll-container
				ref={containerRef}>
				{children}
			</Flex>
		</Flex>
	);
};

export default Scroll;
