'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ClientSkeleton from '../../components/portfolio/ClientSkeleton';

// Dynamically import the Clientpage component to avoid SSR issues
const Clientpage = dynamic(() => import('../../components/portfolio/Clientpage'), {
	ssr: false,
	loading: () => <ClientSkeleton />,
});

function ClientPageContent() {
	return <Clientpage initialData={{}} />;
}

export default function Clients() {
	return (
		<Suspense fallback={<ClientSkeleton />}>
			<ClientPageContent />
		</Suspense>
	);
}
