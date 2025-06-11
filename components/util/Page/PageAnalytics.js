'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePostMutation } from '../../../store';

function PageAnalytics({ pageSlug, pageTitle, fullPageUrl }) {
	const searchParams = useSearchParams();
	const [trigger] = usePostMutation();

	useEffect(() => {
		// Track page view with search params
		const r = searchParams.get('r');
		const utm_source = searchParams.get('utm_source');
		const utm_medium = searchParams.get('utm_medium');
		const utm_campaign = searchParams.get('utm_campaign');
		const utm_term = searchParams.get('utm_term');
		const utm_content = searchParams.get('utm_content');
		const fbclid = searchParams.get('fbclid');
		const gclid = searchParams.get('gclid');
		const user_id = searchParams.get('user_id');
		const email = searchParams.get('email');

		// Get the actual document referrer
		const documentReferrer = typeof document !== 'undefined' ? document.referrer : 'direct';

		trigger({
			path: '/views',
			body: {
				pageSlug: pageSlug,
				pageTitle: pageTitle,
				pageUrl: fullPageUrl,
				customRef: r || '',
				referrer: documentReferrer,
				timestamp: new Date().toISOString(),
				// Include UTM and tracking parameters
				// utmSource: utm_source || '',
				// utmMedium: utm_medium || '',
				// utmCampaign: utm_campaign || '',
				// utmTerm: utm_term || '',
				// utmContent: utm_content || '',
				// fbclid: fbclid || '',
				// gclid: gclid || '',
				// userId: user_id || '',
				// email: email || '',
			},
		});
	}, [pageSlug, pageTitle, fullPageUrl, searchParams, trigger]);

	return null;
}

export default PageAnalytics;
