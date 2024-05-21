import { Stack } from '@chakra-ui/react';
import React from 'react';
import EachScheduleHead from './EachScheduleHead.jsx';
import EachScheduleChildren from './EachScheduleChildren.jsx';

const EachSchedule = ({ schedule, scheduleID, isLast }) => {
	return (
		<Stack w='full' spacing={0}>
			<EachScheduleHead schedule={schedule} scheduleID={scheduleID} />
			<EachScheduleChildren schedule={schedule} isLast={isLast} />
		</Stack>
	);
};

export default EachSchedule;
