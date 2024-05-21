import { useColorModeValue } from '@chakra-ui/react';

const useCustomColors = () => {
	const textGray = useColorModeValue('grey-text.light', 'grey-text.dark');
	const greyBackground = useColorModeValue(
		'grey-background.light',
		'grey-background.dark'
	);
	const textColor = useColorModeValue('textColor.light', 'textColor.dark');
	const textColorInvert = useColorModeValue(
		'textColor.dark',
		'textColor.light'
	);
	const orange = useColorModeValue('orange.light', 'orange.dark');
	const borderColor = useColorModeValue('#DEDEE0', '#DEDEE0');
	const colors = {
		textGray,
		greyBackground,
		textColor,
		textColorInvert,
		borderColor,
		orange,
	};

	return colors;
};

export default useCustomColors;
