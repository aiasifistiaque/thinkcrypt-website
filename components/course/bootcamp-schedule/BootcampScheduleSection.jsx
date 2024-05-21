import React from 'react';
import GridSystemContainer from '../../util/container/GridSystemContainer.js';
import BootcampScheduleHeader from './BootcampScheduleHeader.jsx';
import BorderContainer from '../../util/container/BorderContainer.js';
import BootcampSchedules from './BootcampSchedules.jsx';

const BootcampScheduleSection = ({ bootcampSchedule }) => {
	return (
		<BorderContainer color={'#424242'}>
			<BootcampScheduleHeader bootcampSchedule={bootcampSchedule} />
			<BootcampSchedules bootcampSchedule={bootcampSchedule} />
		</BorderContainer>
	);
};

export default BootcampScheduleSection;
