import { Stack } from '@chakra-ui/react';
import React from 'react';
import EachSchedule from './EachSchedule.jsx';

const BootcampSchedules = ({ bootcampSchedule }) => {
	return (
		<Stack w='full' spacing={0} px={{ base: 4, md: 4 }} py={6} zIndex={-10}>
			{bootcampSchedule?.schedules?.map((schedule, index) => {
				return (
					<EachSchedule
						key={index}
						isLast={index === bootcampSchedule.schedules.length - 1}
						scheduleID={index + 1}
						schedule={schedule}
					/>
				);
			})}
		</Stack>
	);
};

export default BootcampSchedules;
