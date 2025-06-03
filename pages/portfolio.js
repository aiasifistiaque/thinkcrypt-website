import React from 'react';
import CaseStudyPage from '../components/portfolio/CaseStudypage';

const CaseStudies = ({ initialData, category }) => {
	return (
		<CaseStudyPage
			initialData={initialData}
			initialCategory={category}
		/>
	);
};

export async function getServerSideProps(context) {
	try {
		// Construct the API URL (corrected endpoint)
		const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND}/portfolios`;

		// Set up query parameters to match RTK Query structure
		const params = new URLSearchParams({
			limit: '99',
			sort: '-priority',
			status: 'published', // Direct filter params, not nested
		});

		// Add category filter if provided in query
		const { category } = context.query;
		if (category && category !== '' && category !== 'all') {
			params.set('category', category);
		}

		// Fetch data from the API
		const response = await fetch(`${apiUrl}?${params.toString()}`, {
			headers: {
				authorization: process.env.NEXT_PUBLIC_TOKEN, // Use correct header format
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`API request failed with status: ${response.status}`);
		}

		const data = await response.json();

		return {
			props: {
				initialData: data,
				category: category || '', // Pass the category to the component
			},
		};
	} catch (error) {
		console.error('Error fetching portfolio data:', error);

		// Return empty data on error to prevent page crash
		return {
			props: {
				initialData: {
					doc: [],
					totalCount: 0,
				},
				category: context.query.category || '',
			},
		};
	}
}

export default CaseStudies;
