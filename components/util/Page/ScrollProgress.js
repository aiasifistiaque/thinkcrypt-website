import React from 'react';
import { Flex } from '@chakra-ui/react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollYProgtess = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 20,
	});
	return (
		<Flex
			//backdropFilter='invert(100%)'
			as={motion.div}
			top={0}
			zIndex={9999}
			position='fixed'
			left={0}
			height='4px'
			width='100%'
			backgroundColor='#fefefe'
			transformOrigin='0%'
			style={{ scaleX: scaleX }}
		/>
	);
};

export default ScrollYProgtess;
