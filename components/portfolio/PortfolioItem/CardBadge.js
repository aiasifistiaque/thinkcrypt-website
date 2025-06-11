import { fonts } from '../../../lib/constants';
import { useColorMode } from '@chakra-ui/react';
import { colors } from '../../../theme/styles';
import { Flex } from '@chakra-ui/react';

const CardBadge = ({ children, alt }) => {
	const { colorMode } = useColorMode();
	const bg = colorMode == 'dark' ? colors?.background?.dark : colors?.background?.light;
	const altClr = colorMode == 'dark' ? colors?.card?.dark : colors?.card?.light;

	return (
		<Flex
			{...badgeCss}
			bg={alt ? altClr : bg}>
			{children}
		</Flex>
	);
};

const badgeCss = {
	fontFamily: fonts?.primary,
	fontSize: '10px',
	fontWeight: '500',
	size: 'sm',
	textTransform: 'uppercase',
	px: 3,
	borderRadius: '99px',
	py: 1,
	fontSize: '12px',
};

export default CardBadge;
