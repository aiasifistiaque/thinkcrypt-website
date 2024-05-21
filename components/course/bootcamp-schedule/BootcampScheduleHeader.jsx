import { Stack } from '@chakra-ui/react';
import React from 'react';
import HeaderText from '../../util/dynamic-text/HeaderText.jsx';

const BootcampScheduleHeader = ({ bootcampSchedule }) => {
	return (
		<Stack w='full'>
			<HeaderText>{bootcampSchedule.title}</HeaderText>
		</Stack>
	);
};

export default BootcampScheduleHeader;
