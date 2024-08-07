import { Stack } from '@chakra-ui/react';
import React from 'react';
import HeaderText from '../../util/dynamic-text/HeaderText.jsx';
import SuisseText from '../../util/dynamic-text/SuisseText.jsx';
import { BORDER } from '../../../lib/constants.js';

const BootcampScheduleHeader = ({ bootcampSchedule }) => {
	return (
		<Stack
			w='full'
			px={{ base: '16px', md: '10px' }}
			py={{ base: 2, md: 8 }}
			spacing={0}
			borderBottom={BORDER}
		>
			<HeaderText>BOOTCAMP SCHEDULE</HeaderText>
			<SuisseText fontSize={{ base: '1rem', md: '1.25rem' }}>
				{bootcampSchedule?.description}
			</SuisseText>
		</Stack>
	);
};

export default BootcampScheduleHeader;
