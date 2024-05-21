import { Flex } from '@chakra-ui/react';
import React from 'react';
import { BORDER, layout } from '../../../lib/constants';
import Column from '../../util/Column';
import BodyText from '../../util/dynamic-text/BodyText';
import HeaderText from '../../util/dynamic-text/HeaderText';
import SquareButton from '../../util/buttons/SquareButton';

const BecomeInstructor = () => {
	return (
		<Flex w='full' p={4} borderY={BORDER}>
			<Flex
				flexDir={{ base: 'column', md: 'row' }}
				w={'full'}
				justify={{ base: 'start', md: 'space-between' }}
				maxW={layout.MAX_W}
				mx='auto'
				align='center'
				gap={4}
			>
				<Column gap={3} w='full'>
					<BodyText>Are you an Expert</BodyText>
					<HeaderText fontSize={{ base: '3rem', md: '2.25rem' }}>
						become an instructor!
					</HeaderText>
				</Column>
				<SquareButton w={{ base: 'full', md: '270px' }} variant='solid'>
					Apply
				</SquareButton>
			</Flex>
		</Flex>
	);
};

export default BecomeInstructor;
