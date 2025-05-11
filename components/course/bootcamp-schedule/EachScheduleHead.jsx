import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import MichromaText from '../../util/dynamic-text/MichromaText.jsx';
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
				<MichromaText fontSize={'2rem'} color={'white'}>
					{schedule.id}
				</MichromaText>
			</Flex>
			<Stack
				flex={1}
				px={2}
				py={3}
				spacing={0}
				bgColor={'white'}
				border={BORDER}
				position={'relative'}
			>
				<HeaderText fontSize={'1.25rem'} noOfLines={1}>{schedule.title}</HeaderText>
				<MichromaText fontSize={'.75rem'} color={'#888888'}>
					{schedule.subline}
				</MichromaText>
				<Flex
					justify={'center'}
					align={'center'}
					bgColor={'#A9A9A9'}
					borderRadius={'6px'}
					px={1}
					py={0}
					h='fit-content'
					position={'absolute'}
					bottom={2}
					right={{ base: '16px', md: '24px' }}
				>
					<MichromaText
						fontSize={{ base: '.75rem', md: '.875rem' }}
						color={'white'}
					>
						{schedule.duration}
					</MichromaText>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default EachScheduleHead;
