import { IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';



const CustomIconButton = ({ icon, ...props }) => {
	return (
		<IconButton
			as={motion.button}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			boxSize={{ base: '50px', lg: '100px' }}
			zIndex={100}
			borderRadius={0}
			bg={'orange.light'}
			// p={{ base: '16px', lg: '32px' }}
			icon={icon}
			_hover={{}}
			{...props}
		/>
	);
};

export default CustomIconButton;
