import React from 'react';
import WebsiteImportance from '../../components/services/website/WebsiteImportance';
import ServicePage from '../../components/util/Page/ServicePage';
import WebsiteUseCases from '../../components/services/website/WebsiteUseCases';
import WebsiteAdvanceFeatures from '../../components/services/website/WebsiteAdvancedFeatures';
import CMSFeatures from '../../components/services/website/CMSFeatures';
import WebsiteFeatures from '../../components/services/website/WebsiteFeatures';

export default function WebDevelopment() {
	return (
		<ServicePage>
			<WebsiteImportance />
			<WebsiteFeatures />
			<WebsiteUseCases />
			<WebsiteAdvanceFeatures />
			<CMSFeatures />
		</ServicePage>
	);
}
