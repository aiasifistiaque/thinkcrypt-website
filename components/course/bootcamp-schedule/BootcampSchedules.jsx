import { Stack } from '@chakra-ui/react';
import React from 'react';
import EachSchedule from './EachSchedule.jsx';

const BootcampSchedules = ({ bootcampSchedule }) => {
	return (
		<Stack w='full' spacing={0} px={{ base: 4, md: 4 }} py={6}>
			{bootcampSchedule?.schedules?.map((schedule, index) => {
				return (
					<EachSchedule
						key={index}
						scheduleID={index + 1}
						schedule={schedule}
					/>
				);
			})}
		</Stack>
	);
};

export default BootcampSchedules;
