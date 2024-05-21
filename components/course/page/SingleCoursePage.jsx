import React from 'react';
import Page from '../../util/Page/Page';
import Head from 'next/head';
import CircleFollow from '../../util/CircleFollow';
import Header from '../../util/Header/Header';
import Scroll from '../../scroll/Scroll';
import PageLayout from '../../util/Page/PageLayout';
import BootcampScheduleSection from '../bootcamp-schedule/BootcampScheduleSection.jsx';

const SingleCoursePage = () => {
	return (
		<PageLayout>
			<BootcampScheduleSection />
		</PageLayout>
	);
};

export default SingleCoursePage;
