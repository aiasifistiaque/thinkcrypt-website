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
import { useColorMode } from '@chakra-ui/react';

export default function WebDevelopment() {
	const { colorMode } = useColorMode();

	return (
		<ServicePage colorMode={colorMode}>
			<WebsiteImportance />
			<WebsiteFeatures />
			<WebsiteUseCases />
			<WebsiteAdvanceFeatures />
			<CMSFeatures />
		</ServicePage>
	);
}
