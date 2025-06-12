'use client';

import React from 'react';
import BootcampScheduleSection from '../bootcamp-schedule/BootcampScheduleSection.jsx';
import { courseData } from '../../../lib/courseData.js';
import CourseHeroSection from '../heros-section/CourseHeroSection.jsx';
import Column from '../../util/Column.jsx';
import AboutProgram from '../about-program/AboutProgram.jsx';
import BecomeInstructor from '../become-instructor/BecomeInstructor.jsx';
import Technology from '../tools & technology/Technology.jsx';
import Learnings from '../learnings/Learnings.jsx';
import BootcampDetailsSection from '../bootcamp-details/BootcampDetailsSection.jsx';
import BenefitsOfBootcampSection from '../benefits-of-bootcamp/BenefitsOfBootcampSection.jsx';
import FaqSection from '../faq/FaqSection.jsx';
import QuoteSection from '../quote/QuoteSection.jsx';
import Page from '../../util/Page/Page.js';
import { Flex } from '@chakra-ui/react';

import EligibilitySection from '../eligibility/EligibilitySection.jsx';

const SingleCoursePage = () => {
	return (
		<Page>
			<Column
				gap={{ base: 10, lg: '4rem' }}
				w='full'>
				<Flex
					h={'0.5rem'}
					w='100vw'></Flex>
				<CourseHeroSection data={courseData} />
				<AboutProgram data={courseData?.aboutProgram} />
				<BecomeInstructor />
				<Learnings data={courseData?.learnings} />
				<BootcampDetailsSection bootcampDetails={courseData.bootcampDetails} />
				<Technology data={courseData?.techStack} />
				<BootcampScheduleSection bootcampSchedule={courseData.bootcampSchedule} />
				<QuoteSection data={courseData} />
				<BenefitsOfBootcampSection benefitsOfBootcamp={courseData.benefitsOfBootcamp} />
				<EligibilitySection data={courseData.eligibility} />
				<FaqSection data={courseData} />
			</Column>
		</Page>
	);
};

export default SingleCoursePage;
