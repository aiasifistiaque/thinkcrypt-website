'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PortfolioItemSkeleton from '../../components/portfolio/PortfolioItem/PortfolioSkeleton';

// Dynamically import the CaseStudyPage component to avoid SSR issues
const CaseStudyPage = dynamic(() => import('../../components/portfolio/CaseStudypage'), {
	ssr: false,
	loading: () => <PortfolioItemSkeleton />,
});

function PortfolioPageContent() {
	return (
		<CaseStudyPage
		// initialData={safeInitialData}
		// initialCategory={safeCategory}
		/>
	);
}

export default function Portfolio() {
	return (
		<Suspense fallback={<PortfolioItemSkeleton />}>
			<PortfolioPageContent />
		</Suspense>
	);
}
