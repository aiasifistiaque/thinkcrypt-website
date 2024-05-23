import { Flex } from '@chakra-ui/react';
import React from 'react';
import { layout } from '../../../lib/constants';
import useCustomColors from '../../../hooks/useCustomColors';
import HeaderText from '../../util/dynamic-text/HeaderText';

const QuoteSection = ({ data }) => {
	const { orange } = useCustomColors();
	return (
		<Flex px={{ base: 4, md: 6 }} w='full' maxW={layout.MAX_W} mx='auto'>
			<Flex p={5} bg={orange}>
				<HeaderText
					color='white'
					fontSize={{ base: '1.25rem', md: '1.5rem' }}
				>{`${data?.quote?.quoteText} - by ${data?.quote?.author}`}</HeaderText>
			</Flex>
		</Flex>
	);
};

export default QuoteSection;
