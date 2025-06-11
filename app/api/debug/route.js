// Debug endpoint to test backend connectivity
export async function GET(request) {
	console.log('=== DEBUG API CALLED ===');

	const envInfo = {
		NODE_ENV: process.env.NODE_ENV,
		BACKEND_URL: process.env.BACKEND_URL,
		NEXT_PUBLIC_BACKEND: process.env.NEXT_PUBLIC_BACKEND,
		API_TOKEN: !!process.env.API_TOKEN,
		NEXT_PUBLIC_TOKEN: !!process.env.NEXT_PUBLIC_TOKEN,
	};

	console.log('Environment variables:', envInfo);

	// Test basic connectivity
	const testUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND;

	if (!testUrl) {
		return Response.json(
			{
				error: 'No backend URL configured',
				env: envInfo,
			},
			{ status: 500 }
		);
	}

	try {
		// Test a simple request to your backend
		const headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		};

		if (process.env.API_TOKEN) {
			headers['Authorization'] = process.env.API_TOKEN;
		}

		const response = await fetch(`${testUrl}/health`, {
			method: 'GET',
			headers,
		});

		const result = {
			success: true,
			status: response.status,
			statusText: response.statusText,
			headers: Object.fromEntries(response.headers.entries()),
			env: envInfo,
		};

		if (response.ok) {
			try {
				const data = await response.text();
				result.data = data;
			} catch (e) {
				result.data = 'Could not parse response';
			}
		}

		console.log('Test result:', result);
		return Response.json(result);
	} catch (error) {
		console.error('Error testing backend:', error);
		return Response.json(
			{
				error: error.message,
				stack: error.stack,
				env: envInfo,
			},
			{ status: 500 }
		);
	}
}
