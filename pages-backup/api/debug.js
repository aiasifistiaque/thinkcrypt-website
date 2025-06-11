// Debug endpoint to test backend connectivity
export default async function handler(req, res) {
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
		return res.status(500).json({
			error: 'No backend URL configured',
			env: envInfo,
		});
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

		console.log('Testing connection to:', testUrl);

		const response = await fetch(`${testUrl}/blogs`, {
			method: 'GET',
			headers,
		});

		const responseData = {
			status: response.status,
			statusText: response.statusText,
			headers: Object.fromEntries(response.headers.entries()),
		};

		console.log('Response:', responseData);

		if (!response.ok) {
			return res.status(response.status).json({
				error: 'Backend connection failed',
				response: responseData,
				env: envInfo,
				testUrl: `${testUrl}/blogs`,
			});
		}

		const data = await response.text();

		return res.status(200).json({
			success: true,
			message: 'Backend connection successful',
			response: responseData,
			dataLength: data.length,
			env: envInfo,
			testUrl: `${testUrl}/blogs`,
		});
	} catch (error) {
		console.error('Connection test failed:', error);

		return res.status(500).json({
			error: 'Connection test failed',
			message: error.message,
			stack: error.stack,
			env: envInfo,
			testUrl,
		});
	}
}
