import React from 'react';
import WebsiteImportance from '../../components/services/website/WebsiteImportance';
import ServicePage from '../../components/util/Page/ServicePage';
import WebsiteUseCases from '../../components/services/website/WebsiteUseCases';
import WebsiteAdvanceFeatures from '../../components/services/website/WebsiteAdvancedFeatures';
import CMSFeatures from '../../components/services/website/CMSFeatures';
import WebsiteFeatures from '../../components/services/website/WebsiteFeatures';

export default function WebDevelopment() {
	return (
		<ServicePage
			hero={{
				heading: 'Web Development',
				titleTop: 'Web Development',
				titleBottom: 'That Sells',
				desc: 'Fast, SEO-ready websites and web apps built with Next.js, React and Node.js, with a CMS, analytics, security and AI features built in.',
			}}>
			<WebsiteImportance />
			<WebsiteFeatures />
			<WebsiteUseCases />
			<WebsiteAdvanceFeatures />
			<CMSFeatures />
		</ServicePage>
	);
}
