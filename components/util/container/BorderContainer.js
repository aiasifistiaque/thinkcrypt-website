import { Flex, Grid, Stack } from '@chakra-ui/react';
import React from 'react';
import { BORDER, layout } from '../../../lib/constants.js';
import Column from '../Column.jsx';

const BorderContainer = ({ children, ...props }) => {
	return (
		<Flex
			w='full'
			h='fit-content'
			borderTop={BORDER}
			borderBottom={BORDER}
			{...props}
		>
			<Stack w='full' maxW={layout.MAX_W} mx='auto'>
				<Flex w='full'>
					<Flex w={{ base: '16px', lg: '60px' }} borderRight={BORDER}></Flex>
					<Column w='full'>{children}</Column>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default BorderContainer;
