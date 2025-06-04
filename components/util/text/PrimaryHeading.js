import { Heading, useColorMode } from '@chakra-ui/react';
import { fonts } from '../../../lib/constants';
import { colors } from '../../../theme/styles';

const PrimaryHeading = ({ children, ...props }) => {
	const { colorMode } = useColorMode();
	const color = colorMode === 'dark' ? colors?.text?.dark : colors?.text?.light;
	return (
		<Heading
			fontFamily={fonts?.title}
			color={color}
			{...props}>
			{children && children}
		</Heading>
	);
};

export default PrimaryHeading;
