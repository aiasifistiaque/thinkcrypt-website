import { Text, useColorMode } from '@chakra-ui/react';
import { fonts } from '../../../lib/constants';
import { colors } from '../../../theme/styles';

const PrimaryText = ({ children, ...props }) => {
	const { colorMode } = useColorMode();
	const color = colorMode === 'dark' ? colors?.text?.dark : colors?.text?.light;
	return (
		<Text
			fontFamily={fonts?.primary}
			color={color}
			{...props}>
			{children && children}
		</Text>
	);
};

export default PrimaryText;
