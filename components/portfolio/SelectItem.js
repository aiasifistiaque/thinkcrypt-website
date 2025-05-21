import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { styles } from '../../theme/styles';

const BORDER = styles.border.light;

const SelectItem = ({ children, selected, ...props }) => {
	return (
		<Flex
			onClick={() => onCategoryChange('')}
			cursor='pointer'
			p={2}
			bg={selected ? 'black' : 'white'}
			border={BORDER}
			{...props}>
			<Text
				color={selected ? 'white' : '#737373'}
				textTransform='uppercase'>
				{children}
			</Text>
		</Flex>
	);
};

export default SelectItem;
