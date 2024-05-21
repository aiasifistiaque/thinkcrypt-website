import React from 'react';
import BootcampScheduleSection from '../bootcamp-schedule/BootcampScheduleSection.jsx';
import { courseData } from '../../../lib/courseData.js';
import PageLayout from '../../util/Page/PageLayout.jsx';
import CourseHeroSection from '../heros-section/CourseHeroSection.jsx';
import Column from '../../util/Column.jsx';
import BootcampDetailsSection from '../bootcamp-details/BootcampDetailsSection.jsx';

const SingleCoursePage = () => {
	return (
		<PageLayout>
			<Column gap={{ base: 10, lg: '4rem' }} w='full'>
				<CourseHeroSection data={courseData} />
				<BootcampDetailsSection bootcampDetails={courseData.bootcampDetails} />
				<BootcampScheduleSection
					bootcampSchedule={courseData.bootcampSchedule}
				/>
			</Column>
		</PageLayout>
	);
};

export default SingleCoursePage;
