/**
 * Server-side functions for blog pages
 */

/**
 * Fetches blog data by ID/slug for server-side rendering
 * @param {Object} context - Next.js context object containing params, query, etc.
 * @returns {Object} Props object for the page component
 */
export async function getBlogByIdServerSideProps(context) {
	const { id } = context.params;
	const isProduction = process.env.NODE_ENV === 'production';

	console.log('Fetching blog with ID:', id);

	try {
		// Validate environment variables
		if (!process.env.BACKEND_URL && !process.env.NEXT_PUBLIC_BACKEND) {
			const error = {
				type: 'MISSING_ENV_VAR',
				message: 'Backend URL not configured',
				details: {
					BACKEND_URL: !!process.env.BACKEND_URL,
					NEXT_PUBLIC_BACKEND: !!process.env.NEXT_PUBLIC_BACKEND,
					NODE_ENV: process.env.NODE_ENV,
				},
				timestamp: new Date().toISOString(),
			};

			console.error('Environment error:', error);

			return {
				props: {
					blogData: null,
					error: JSON.stringify(error, null, 2),
				},
			};
		}

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

		console.log('Making request to:', apiUrl);
		console.log('Headers:', Object.keys(headers));

		// Make API request with authentication
		const response = await fetch(apiUrl, {
			method: 'GET',
			headers,
		});

		console.log('Response status:', response.status);

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

			console.log('Blog not found or error fetching data:', error);

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
		console.log('Successfully fetched blog data:', blogData?.name);

		// Validate required data
		if (!blogData || !blogData.name) {
			const error = {
				type: 'INVALID_DATA',
				message: 'Invalid blog data structure',
				details: {
					hasData: !!blogData,
					dataKeys: blogData ? Object.keys(blogData) : [],
					url: apiUrl,
				},
				timestamp: new Date().toISOString(),
			};

			console.error('Invalid blog data received:', error);

			return {
				props: {
					blogData: null,
					error: JSON.stringify(error, null, 2),
				},
			};
		}

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
			details: {
				name: error.name,
				stack: error.stack,
				url: `${process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND}/blogs/g/slug/${id}`,
				blogId: id,
			},
			timestamp: new Date().toISOString(),
		};

		console.error('Error fetching blog data:', errorInfo);

		return {
			props: {
				blogData: null,
				error: JSON.stringify(errorInfo, null, 2),
			},
		};
	}
}
