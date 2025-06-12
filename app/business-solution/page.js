'use client';

import WebsiteImportance from '../../components/services/website/WebsiteImportance';
import WebsiteUseCases from '../../components/services/website/WebsiteUseCases';
import WebsiteAdvanceFeatures from '../../components/services/website/WebsiteAdvancedFeatures';
import CMSFeatures from '../../components/services/website/CMSFeatures';
import WebsiteFeatures from '../../components/services/website/WebsiteFeatures';
import RightSolutionPage from '../../components/home/services/RightSolutionPage';

const BusinessSolution = () => {
	return (
		<RightSolutionPage>
			<WebsiteImportance />
			<WebsiteFeatures />
			<WebsiteUseCases />
			<WebsiteAdvanceFeatures />
			<CMSFeatures />
		</RightSolutionPage>
	);
};

export default BusinessSolution;
