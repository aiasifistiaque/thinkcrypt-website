import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import SuisseText from '../../util/dynamic-text/SuisseText.jsx';
import HeaderText from '../../util/dynamic-text/HeaderText.jsx';
import { BORDER, BORDERDARK } from '../../../lib/constants.js';

const EachScheduleHead = ({ schedule, scheduleId }) => {
	return (
		<Flex w='full' h='72px'>
			<Flex
				w='64px'
				h='full'
				py={2}
				bgColor='#424242'
				justify={'center'}
				align={'center'}
				borderRight={BORDERDARK}
			>
				<SuisseText fontSize={'2rem'} color={'white'}>
					{schedule.id}
				</SuisseText>
			</Flex>
			<Stack
				flex={1}
				px={2}
				py={3}
				spacing={0}
				bgColor={'white'}
				border={BORDER}
			>
				<HeaderText fontSize={'1.25rem'}>{schedule.title}</HeaderText>
				<SuisseText fontSize={'.75rem'}>{schedule.subline}</SuisseText>
			</Stack>
		</Flex>
	);
};

export default EachScheduleHead;