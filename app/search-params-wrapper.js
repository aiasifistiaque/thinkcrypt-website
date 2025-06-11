'use client';

import { Suspense } from 'react';

function SearchParamsWrapper({ children }) {
	return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

export default SearchParamsWrapper;
