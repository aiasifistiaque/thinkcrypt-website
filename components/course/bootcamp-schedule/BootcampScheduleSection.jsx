import React from 'react';
import GridSystemContainer from '../../util/container/GridSystemContainer.js';
import BootcampScheduleHeader from './BootcampScheduleHeader.jsx';
import BorderContainer from '../../util/container/BorderContainer.js';

const BootcampScheduleSection = ({ bootcampSchedule }) => {
	return (
		<BorderContainer>
			<BootcampScheduleHeader bootcampSchedule={bootcampSchedule} />
		</BorderContainer>
	);
};

export default BootcampScheduleSection;
