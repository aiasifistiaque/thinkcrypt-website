import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import { BORDER, layout } from '../../../lib/constants.js';

const BorderContainer = ({ children }) => {
	return (
		<Flex w='full' h="fit-content" borderTop={BORDER} borderBottom={BORDER}>
			<Stack w='full' maxW={layout.MAX_W} mx='auto' borderLeft={BORDER}>
				{children}
			</Stack>
		</Flex>
	);
};

export default BorderContainer;