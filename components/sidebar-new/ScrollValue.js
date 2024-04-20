import React from 'react';
import { Flex, Grid } from '@chakra-ui/react';
import usePointerPosition from '../../hooks/usePointerPosition';
import RobotoText from '../util/text/RobotoText';
import Column from '../util/Column';

const SpringValue = ({ children, pos, ...props }) => (
	<Grid
		gridTemplateColumns='1fr 1fr'
		w='60px'>
		<RobotoText
			fontFamily='Suisse'
			fontSize='12px'
			fontWeight='300'
			letterSpacing='4px'
			lineHeight='1.2'
			color='white'
			{...props}>
			{`${pos}. `}
		</RobotoText>
		<RobotoText
			fontFamily='Suisse'
			fontSize='12px'
			fontWeight='300'
			letterSpacing='4px'
			lineHeight='1.2'
			color='white'
			{...props}>
			{`${children}`}
		</RobotoText>
	</Grid>
);

const ScrollValue = ({ py = '2rem', ...props }) => {
	const { x, y } = usePointerPosition();

	return (
		<Flex
			display={{ base: 'none', lg: 'inline-flex' }}
			flex={1}
			align='flex-end'
			flexDirection='column'
			py={py}
			px='2rem'>
			<SpringValue
				pos='X'
				{...props}>
				{x}
			</SpringValue>
			<SpringValue
				pos='Y'
				{...props}>
				{y}
			</SpringValue>
		</Flex>
	);
};

export default ScrollValue;
