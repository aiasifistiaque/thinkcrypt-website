import { cache } from 'react';

/**
 *
 * Server-side functions for blog pages
 */

/**
 * Fetches blog data by ID/slug for server-side rendering
 * @param {Object} context - Next.js context object containing params, query, etc.
 * @returns {Object} Props object for the page component
 */
const getBlogByIdServerSideProps = cache(async context => {
	const { id } = context.params;
	const isProduction = process.env.NODE_ENV === 'production';

	try {
		// Prepare headers with authentication token
		const headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		};

		// Add authentication token if available
		if (process.env.API_TOKEN) {
			headers['Authorization'] = process.env.API_TOKEN;
		}

		const backendUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND;
		const apiUrl = `${backendUrl}/blogs/g/slug/${id}`;

		// Make API request with authentication
		const response = await fetch(apiUrl, {
			method: 'GET',
			headers,
		});

		if (!response.ok) {
			const errorText = await response.text().catch(() => 'Unable to read error response');

			const error = {
				type: 'API_ERROR',
				message: `API request failed`,
				details: {
					status: response.status,
					statusText: response.statusText,
					url: apiUrl,
					headers: Object.keys(headers),
					responseBody: errorText.substring(0, 1000), // Limit response body size
				},
				timestamp: new Date().toISOString(),
			};

			// Return 404 for not found
			if (response.status === 404) {
				return {
					notFound: true,
				};
			}

			// Return error details for debugging
			return {
				props: {
					blogData: null,
					error: JSON.stringify(error, null, 2),
				},
			};
		}

		const blogData = await response.json();

		return {
			props: {
				blogData,
				error: null,
			},
		};
	} catch (error) {
		const errorInfo = {
			type: 'EXCEPTION',
			message: error.message,
			timestamp: new Date().toISOString(),
		};

		return {
			props: {
				blogData: null,
				error: JSON.stringify(errorInfo, null, 2),
			},
		};
	}
});

export { getBlogByIdServerSideProps };
export default getBlogByIdServerSideProps;
