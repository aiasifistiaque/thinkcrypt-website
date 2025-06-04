import { Flex, useColorMode } from '@chakra-ui/react';
import { colors } from '../../../theme/styles';

const Card = ({ children, ...props }) => {
	const { colorMode } = useColorMode();
	const cardBg = colorMode === 'dark' ? colors?.card?.dark : colors?.card?.light;
	return (
		<Flex
			{...cardCss}
			bg={cardBg}
			{...props}>
			{children}
		</Flex>
	);
};

const cardCss = {
	flexDir: 'column',
	borderRadius: '12px',
};

export default Card;
