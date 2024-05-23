import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import { BORDER, BORDERDARK } from '../../../lib/constants.js';
import HeaderText from '../../util/dynamic-text/HeaderText.jsx';
import SuisseText from '../../util/dynamic-text/SuisseText.jsx';

const EachScheduleChildren = ({ schedule, isLast }) => {
	return (
		<Flex w='full'>
			<Flex
				w='64px'
				// h={{
				// 	base: isLast
				// 		? `${
				// 				(100 / schedule?.items?.length) *
				// 					(schedule?.items?.length - 1) +
				// 				100 / schedule?.items?.length / 2
				// 		  }%`
				// 		: 'full',
				// 	md: isLast
				// 		? `${
				// 				(100 / schedule?.items?.length) *
				// 					(schedule?.items?.length - 1) +
				// 				100 / schedule?.items?.length / 2 -
				// 				1.5
				// 		  }%`
				// 		: 'full',
				// }}
				h="full"
				borderRight={BORDERDARK}
			></Flex>
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
								position={'relative'}
							>
								<HeaderText fontSize={'1rem'}>{item.title}</HeaderText>
								<SuisseText fontSize={'.875rem'} color={'#888888'} maxW='90%'>
									{item.subline}
								</SuisseText>

								<SuisseText fontSize={'.75rem'}>{item.time}</SuisseText>
								{/* <Flex
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
									<SuisseText
										fontSize={{ base: '.75rem', md: '.875rem' }}
										color={'white'}
									>
										{item.duration}
									</SuisseText>
								</Flex> */}
							</Stack>
						</Flex>
					);
				})}
			</Stack>
		</Flex>
	);
};

export default EachScheduleChildren;
