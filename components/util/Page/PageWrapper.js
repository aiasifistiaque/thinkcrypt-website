'use client';

import { Suspense } from 'react';
import Page from './Page';

function PageContent(props) {
	return <Page {...props} />;
}

export default function PageWrapper(props) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<PageContent {...props} />
		</Suspense>
	);
}
