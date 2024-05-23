import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { GoDotFill } from 'react-icons/go';
import SuisseText from '../../util/dynamic-text/SuisseText.jsx';
import useCustomColors from '../../../hooks/useCustomColors.jsx';
const EachBenefitsOfBootcamp = ({ item }) => {
	const { textColor } = useCustomColors();
	return (
		<Flex gap={2}>
			<Icon as={GoDotFill} w='24px' h='24px' color={textColor} />
			<SuisseText fontSize={{ base: '1rem', md: '1.5rem' }} fontWeight={400}>
				<b>{item?.point}</b>: {item?.body}
			</SuisseText>
		</Flex>
	);
};

export default EachBenefitsOfBootcamp;
