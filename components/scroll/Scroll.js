import React, { useRef } from 'react';
import { Flex } from '@chakra-ui/react';

const Scroll = ({ children }) => {
	const containerRef = useRef(null);

	return (
		<Flex
			style={{ zIndex: 99 }}
			options={{
				multiplier: 0.9,
				lerp: 0.2,
				smooth: false,
				// ... all available Locomotive Scroll instance options
			}}
			containerRef={containerRef}></Flex>
	);
};

export default Scroll;
