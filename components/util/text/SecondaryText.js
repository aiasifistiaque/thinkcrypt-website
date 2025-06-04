import { Text, useColorMode } from '@chakra-ui/react';
import { fonts } from '../../../lib/constants';
import { colors } from '../../../theme/styles';

const SecondaryText = ({ children, ...props }) => {
	const { colorMode } = useColorMode();
	const color = colorMode === 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;
	return (
		<Text
			fontFamily={fonts?.primary}
			color={color}
			{...props}>
			{children && children}
		</Text>
	);
};

export default SecondaryText;
