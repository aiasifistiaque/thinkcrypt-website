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
	desc: `Find the perfect technology solutions tailored to your industry's unique challenges and objectives.`,
};

const BusinessSolution = () => {
	return (
		<ServicePage
			meta={meta}
			hero={hero}>
			<RightSolutionPage />
		</ServicePage>
	);
};

export default BusinessSolution;
