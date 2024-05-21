import { Flex, Grid, GridProps } from '@chakra-ui/react';
// import { GridProps } from '@chakra-ui/styled-system';
import React from 'react';

const GridSystemContainer = ({
	children,
	isBorderRight = true,
	isBorderLeft = false,
	isborderY = false,
	isBorderBottom = false,
	isBorderTop = false,
	...props
}) => {
	return (
		<Grid
			templateColumns={{ base: '0.2fr 3fr 0fr', md: '1fr 8fr 1fr' }}
			w='full'
			borderTop={
				isborderY || isBorderTop ? '1px solid #DEDEE0' : '1px solid transparent'
			}
			borderBottom={
				isborderY || isBorderBottom
					? '1px solid #DEDEE0'
					: '1px solid transparent'
			}
			{...props}
		>
			<Flex
				borderRight={
					isBorderLeft ? '1px solid #DEDEE0' : '1px solid transparent'
				}
			></Flex>
			{children}
			<Flex
				borderLeft={
					isBorderRight ? '1px solid #DEDEE0' : '1px solid transparent'
				}
			></Flex>
		</Grid>
	);
};

export default GridSystemContainer;
