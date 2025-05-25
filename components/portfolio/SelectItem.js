import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { colors, styles } from '../../theme/styles';
import { fonts } from '../../lib/constants';

const BORDER = styles.border.light;

const SelectItem = ({ children, selected, colorMode, ...props }) => {
	const text = colorMode === 'dark' ? colors?.text?.dark : colors?.text?.light;
	return (
		<Flex
			onClick={() => onCategoryChange('')}
			cursor='pointer'
			p={2}
			borderRadius='99px'
			px={4}
			bg={
				selected
					? colorMode === 'dark'
						? colors?.card?.light
						: colors?.card?.dark
					: colorMode === 'dark'
					? colors?.background?.dark
					: 'white'
			}
			border={BORDER}
			{...props}>
			<Text
				fontWeight='500'
				color={selected ? (colorMode === 'dark' ? colors?.text?.light : colors?.text?.dark) : text}
				fontFamily={fonts?.primary}
				textTransform='uppercase'>
				{children}
			</Text>
		</Flex>
	);
};

export default SelectItem;
