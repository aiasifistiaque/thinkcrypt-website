'use client';
import SingleCoursePage from '@/components/academy-courses/SingleCoursePage';
import React from 'react';

const course = ({ params }) => {
	const { id } = params;
	return <SingleCoursePage id={id} />;
};

export default course;
