import React from 'react';
import Page from '../../util/Page/Page';
import Head from 'next/head';
import CircleFollow from '../../util/CircleFollow';
import Header from '../../util/Header/Header';
import Scroll from '../../scroll/Scroll';
import BootcampScheduleSection from '../bootcamp-schedule/BootcampScheduleSection.jsx';
import { courseData } from '../../../lib/courseData.js';
import PageLayout from '../../util/Page/PageLayout.jsx';

const SingleCoursePage = () => {
	return (
		<PageLayout>
			<BootcampScheduleSection bootcampSchedule={courseData.bootcampSchedule} />
		</PageLayout>
	);
};

export default SingleCoursePage;
