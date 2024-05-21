'use client';

import React from 'react';
import SingleCoursePage from '../components/course/page/SingleCoursePage';

const course = ({ params }) => {
	const { id } = params;
	return <SingleCoursePage />;
};

export default course;
