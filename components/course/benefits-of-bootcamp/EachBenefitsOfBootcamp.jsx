import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { GoDotFill } from 'react-icons/go';
import SuisseText from '../../util/dynamic-text/SuisseText.jsx';
import useCustomColors from '../../../hooks/useCustomColors.jsx';
import Column from '../../util/Column.jsx';
const EachBenefitsOfBootcamp = ({ item }) => {
	const { textColor } = useCustomColors();
	return (
		<Column>
			<Flex gap={2}>
				<Icon as={GoDotFill} w='18px' h='18px' color={textColor} />
				<SuisseText fontSize={{ base: '1rem', md: '1.25rem' }} fontWeight={700}>
					{item?.point}:
				</SuisseText>
			</Flex>
			<SuisseText ml={6} fontSize={{ base: '1rem', md: '1.25rem' }} fontWeight={400}>
				{item?.body}
			</SuisseText>
		</Column>
	);
};

export default EachBenefitsOfBootcamp;
