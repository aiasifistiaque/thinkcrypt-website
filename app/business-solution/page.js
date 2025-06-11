'use client';

import React from 'react';
import {
	WebsiteImportance,
	ServicePage,
	WebsiteUseCases,
	WebsiteAdvanceFeatures,
	CMSFeatures,
} from '../../components';
import WebsiteFeatures from '../../components/services/website/WebsiteFeatures';
import RightSolutionPage from '../../components/home/services/RightSolutionPage';
import { useColorMode } from '@chakra-ui/react';

export default function BusinessSolution() {
	const { colorMode } = useColorMode();

	return (
		<RightSolutionPage colorMode={colorMode}>
			<WebsiteImportance />
			<WebsiteFeatures />
			<WebsiteUseCases />
			<WebsiteAdvanceFeatures />
			<CMSFeatures />
		</RightSolutionPage>
	);
}
