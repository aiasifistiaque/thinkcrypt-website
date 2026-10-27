'use client';

import Hero from './hero/Hero';
import Page from '../util/Page/Page';
import Projects from './projects/Projects';
import { Flex, useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Clients from './clients/Clients';
import AboutUsSection from './about-us/AboutUsSection';
import Servicesv2 from './services/ServiceV2';
import NewsletterSection from './Newsletter/Newsletter';
import RightBusinessSolution from './services/RightBusinessSolution';
import HomeStacks from './services/HomeStacks';
import ViewOurWork from './about-us/ViewOurWork';
import TitleSection from './about-us/TitleSection';
import WebsiteDevelopmentSection from './WebsiteDevelopmentSection';
import BusinessToolsSection from './BusinessToolsSection';

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

// const theme = 'light';

const img =
	'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const Homepage = ({ aboutSection, websiteSection, businessSection }) => {
	const { colorMode } = useColorMode();
	const theme = colorMode;

	return (
		<Page
			slug='thinkcrypt-home'
			theme={theme}
			image={img}
			title='Thinkcrypt – Your Tech Partner for Smarter, Scalable Growth'
			description='We help impact-driven startups and SMEs grow with custom software, business tools, and analytics. Cut costs, boost efficiency, and scale faster with Thinkcrypt.'>
			<Container>
				<Hero theme={theme} />
				<AboutUsSection
					theme={theme}
					section={aboutSection}
				/>

				<Servicesv2 theme={theme} />
				<HomeStacks theme={theme} />
				<WebsiteDevelopmentSection
					theme={theme}
					section={websiteSection}
				/>

				<ViewOurWork theme={theme} />
				<Projects theme={theme} />
				<RightBusinessSolution theme={theme} />
				<BusinessToolsSection
					theme={theme}
					section={businessSection}
				/>

				<Clients />
				{/* <Testimonial /> */}
				<TitleSection
					colorMode={theme}
					top
					clickEvent={{
						elementType: 'contact',
						elementName: 'Contact Us',
						elementId: 'cta-contact-us-home',
						elementSlug: `cta-contact-us-home`,
						elementText: 'Contact Us',
						elementHref: '/contact',
						clickType: 'click',
					}}
					btn='Contact Us'
					href='/contact'
					title='Contact Us'
					titleTop='Let’s design'
					titleBottom='your project'>
					{`We're passionate about design, innovation, brilliant ideas and the execution that
					brings it all together in one beautiful experience. If you are too, call or send us an
					email to get started.`}
				</TitleSection>

				<NewsletterSection theme={theme} />
			</Container>
		</Page>
	);
};

export default Homepage;
