import { Text } from '@chakra-ui/react';
import usePointerEvents from '../../../hooks/usePointerPosition';
import { fonts } from '../../../lib/constants';


const RobotoText = ({ children, ...props }) => {
	const { handleMouseEnter, handleMouseLeave } = usePointerEvents();
	return (
		<Text
			fontFamily={fonts?.primary}
			fontSize={{ base: '1rem', md: '1.625rem' }}
			fontWeight='400'
			lineHeight='150%'
			color='textColor.light'
			textTransform='uppercase'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			{children && children}
		</Text>
	);
};

export default RobotoText;
