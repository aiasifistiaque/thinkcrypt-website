import { Stack } from '@chakra-ui/react';
import React from 'react';
import EachScheduleHead from './EachScheduleHead.jsx';
import EachScheduleChildren from './EachScheduleChildren.jsx';

const EachSchedule = ({ schedule, scheduleID }) => {
	return (
		<Stack w='full' spacing={0}>
			<EachScheduleHead schedule={schedule} scheduleID={scheduleID} />
			<EachScheduleChildren schedule={schedule} />
		</Stack>
	);
};

export default EachSchedule;
