import React from 'react';
import {
	WebsiteImportance,
	ServicePage,
	WebsiteUseCases,
	WebsiteAdvanceFeatures,
	CMSFeatures,
} from '../components';
import WebsiteFeatures from '../components/services/website/WebsiteFeatures';
import RightSolutionPage from '../components/home/services/RightSolutionPage';
import { useColorMode } from '@chakra-ui/react';

const img =
	'https://images.pexels.com/photos/5475779/pexels-photo-5475779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const meta = {
	image: img,
	title: 'Custom Software & Web Solutions by Industry | Thinkcrypt',
	desc: 'Discover industry-specific software, websites, and mobile apps tailored to your business. Choose your sector and see how Thinkcrypt builds smart digital solutions that scale.',
};

const hero = {
	image: img,
	title: 'DIGITAL SOLUTIONS FOR EVERY BUSINESS',
	desc: `Find the perfect technology solutions tailored to your industry's unique challenges and objectives. \n\n At Thinkcrypt, we don't believe in one-size-fits-all. We build smart, modern digital solutions designed specifically for your industry. From powerful eCommerce platforms and booking systems to CRMs, POS, or inventory tools — we help you turn ideas into action and challenges into opportunities`,
};

const BusinessSolution = () => {
	const { colorMode } = useColorMode();
	return (
		<ServicePage
			hero={hero}
			theme={colorMode}
			meta={meta}>
			<RightSolutionPage theme={colorMode} />
		</ServicePage>
	);
};

export default BusinessSolution;
