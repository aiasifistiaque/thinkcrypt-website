import React from 'react';
import dynamic from 'next/dynamic';
import CaseStudyPage from '../components/portfolio/CaseStudyPage';

const CaseStudies = ({ initialData, category }) => {
	// Add defensive checks for props
	// const safeInitialData = initialData || { doc: [], totalCount: 0 };
	// const safeCategory = category || '';

	return (
		<CaseStudyPage
		// initialData={safeInitialData}
		// initialCategory={safeCategory}
		/>
	);
};

// export async function getServerSideProps(context) {
// 	try {
// 		// Use server-side environment variables (without NEXT_PUBLIC_ prefix for server-side)
// 		const backendUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND;
// 		const authToken = process.env.API_TOKEN || process.env.NEXT_PUBLIC_TOKEN;

// 		// Validate required environment variables
// 		if (!backendUrl) {
// 			console.error('Missing BACKEND_URL or NEXT_PUBLIC_BACKEND environment variable');
// 			throw new Error('Backend URL not configured');
// 		}

// 		// Construct the API URL (corrected endpoint)
// 		const apiUrl = `${backendUrl}/portfolios`;

// 		// Set up query parameters to match RTK Query structure
// 		const params = new URLSearchParams({
// 			limit: '99',
// 			sort: '-priority',
// 			status: 'published', // Direct filter params, not nested
// 		});

// 		// Add category filter if provided in query - safely handle context
// 		const category = context?.query?.category;
// 		if (category && typeof category === 'string' && category !== '' && category !== 'all') {
// 			params.set('category', category);
// 		}

// 		// Prepare headers - only add authorization if token exists
// 		const headers = {
// 			'Content-Type': 'application/json',
// 		};

// 		if (authToken) {
// 			headers.authorization = authToken;
// 		}

// 		// Fetch data from the API with timeout and better error handling
// 		const controller = new AbortController();
// 		const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout for Vercel

// 		try {
// 			const response = await fetch(`${apiUrl}?${params.toString()}`, {
// 				headers,
// 				signal: controller.signal,
// 				// Add these options for better Vercel compatibility
// 				method: 'GET',
// 				cache: 'no-cache',
// 			});

// 			clearTimeout(timeoutId);

// 			if (!response.ok) {
// 				const errorText = await response.text().catch(() => 'Unknown error');
// 				console.error(`API Error: ${response.status} - ${errorText}`);
// 				throw new Error(`API request failed with status: ${response.status}`);
// 			}

// 			const data = await response.json();

// 			// Validate response structure
// 			if (!data || typeof data !== 'object') {
// 				throw new Error('Invalid response format from API');
// 			}

// 			return {
// 				props: {
// 					initialData: data,
// 					category: category && typeof category === 'string' ? category : '',
// 				},
// 			};
// 		} catch (fetchError) {
// 			clearTimeout(timeoutId);
// 			throw fetchError;
// 		}
// 	} catch (error) {
// 		console.error('Error fetching portfolio data:', error.message || error);

// 		// Return empty data on error to prevent page crash
// 		return {
// 			props: {
// 				initialData: {
// 					doc: [],
// 					totalCount: 0,
// 				},
// 				category:
// 					context?.query?.category && typeof context.query.category === 'string'
// 						? context.query.category
// 						: '',
// 			},
// 		};
// 	}
// }

export default CaseStudies;
