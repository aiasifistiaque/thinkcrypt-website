import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import { BORDER, BORDERDARK } from '../../../lib/constants.js';
import HeaderText from '../../util/dynamic-text/HeaderText.jsx';
import SuisseText from '../../util/dynamic-text/SuisseText.jsx';

const EachScheduleChildren = ({ schedule }) => {
	return (
		<Flex w='full'>
			<Flex w='64px' h='full' borderRight={BORDERDARK}></Flex>
			<Stack flex={1} my={3} spacing={2}>
				{schedule?.items?.map((item, index) => {
					return (
						<Flex key={1} align={'center'}>
							<Box w='10px' h='2px' bgColor='#424242'></Box>
							<Stack
								key={index}
								spacing={0}
								bgColor={'white'}
								px={2}
								py={2}
								minH='72px'
								border={BORDER}
								w='full'
							>
								<HeaderText fontSize={'1rem'}>{item.title}</HeaderText>
								<SuisseText fontSize={'.75rem'}>{item.subline}</SuisseText>
							</Stack>
						</Flex>
					);
				})}
			</Stack>
		</Flex>
	);
};

export default EachScheduleChildren;
