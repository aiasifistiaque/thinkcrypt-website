import React from 'react';
import {
	WebsiteImportance,
	ServicePage,
	WebsiteUseCases,
	WebsiteAdvanceFeatures,
	CMSFeatures,
} from '../components';
import WebsiteFeatures from '../components/services/website/WebsiteFeatures';

const img =
	'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const meta = {
	image: img,
	title: 'Modern Website Development Services with MERN Stack | Thinkcrypt',
	desc: 'Build blazing-fast, secure, and scalable websites with Thinkcrypt. Our MERN stack development services include SSR, custom CMS, SEO optimization, real-time analytics & top-tier security — designed for startups, businesses, and portfolios.',
};

const hero = {
	image: img,
	title: 'Websites That Work — Fast, Secure, Scalable',
	desc: `Built with the power of the MERN stack and designed for growth. From business websites to startup platforms — we've got you covered.`,
};

const WebDevelopment = () => {
	return (
		<ServicePage
			meta={meta}
			hero={hero}>
			<WebsiteImportance />
			<WebsiteFeatures />
			<CMSFeatures />
			<WebsiteUseCases />
			<WebsiteAdvanceFeatures />
		</ServicePage>
	);
};

export default WebDevelopment;
