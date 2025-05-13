import React from 'react';
import Hero from './hero/Hero';
import Page from '../util/Page/Page';
import SectionHeading from './sectionheading/SectionHeading';
import Projects from './projects/Projects';
import Service from './services/Service';
import Testimonial from './testimonial/Testimonial';

import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import ServicesNew from './services/ServicesNew';
import Clients from './clients/Clients';
import AboutUsSection from './about-us/AboutUsSection';
import RegisterPlan from './plan/RegisterPlan';
import PlanSection from './plan/PlanSection';
import MintRegisterSection from './plan/MintRegisterSection';
import Servicesv2 from './services/ServiceV2';
import NewsletterSection from './Newsletter/Newsletter';

const Container = styled(Flex)`
	flex: 1;
	flex-direction: column;
	width: 100%;
`;

const container = {
	flex: 1,
	flexDirection: 'column',
	width: '100%',
};

const Homepage = () => {
	return (
		<Page>
			<Container>
				<Hero />
				<AboutUsSection />
				{/* <Service /> */}
				<Servicesv2 />
				<SectionHeading
					heading='Featured Projects'
					subHeading='Meticulously Designed Projects'
					btnText='View Our Portfolio'
					href='/portfolio'>
					Discover our portfolio: From innovative apps to robust enterprise solutions, each project
					highlights our dedication to excellence. Explore case studies that demonstrate our
					approach to overcoming challenges and surpassing expectations. Join us in shaping the
					future with impactful software.
				</SectionHeading>
				<Projects />
				{/* <SectionHeading
					heading='A symphony of look and function'
					subHeading='Our Services'>
					Our designs must not only look beautiful, but they must also function
					beautifully. A great design not only entices you to touch, but it must
					be intuitive and simple to understand.
				</SectionHeading> */}
				{/* <Services /> */}
				{/* <RegisterPlan /> */}
				<MintRegisterSection
					heading={'Inventory Management System'}
					subHeading={''}
					btnText='Learn More'
					href='/mint'>
					A simple and feature-rich inventory and e-commerce solution that integrates seamlessly
					with your business operations. Built by our trusted partner, MINT is a cutting-edge
					application designed to streamline inventory management, invoicing, billing, and customer
					engagement—all in one platform
				</MintRegisterSection>
				{/* <PlanSection /> */}

				<Clients />
				<Testimonial />
				<SectionHeading
					heading='Let’s design your next project'
					subHeading='Contact Us'
					btnText='Contact Us Today'
					to='/https://docs.google.com/forms/d/e/1FAIpQLSeu0GxkeIBfjuAXlPALET-5S1Dxs6JASbV2CSjv2Yv4YA1vZQ/viewform?usp=sf_link'
					href='/contact'>
					{`We're`} passionate about design, innovation, brilliant ideas and the execution that
					brings it all together in one beautiful experience. If you are too, call or send us an
					email to get started.
				</SectionHeading>
				<NewsletterSection />
			</Container>
		</Page>
	);
};

export default Homepage;
