import Clientpage from '../components/portfolio/Clientpage';

const CaseStudies = ({ initialData }) => {
	return <Clientpage initialData={initialData} />;
};

export async function getServerSideProps(context) {
	try {
		// Construct the API URL for clients
		const apiUrl = `${process.env.BACKEND_URL}/tcclients`;

		// Set up query parameters to match RTK Query structure
		const params = new URLSearchParams({
			limit: '99',
			sort: '-priority',
			status: 'published',
		});

		const finalUrl = `${apiUrl}?${params.toString()}`;

		// Fetch data from the API
		const response = await fetch(finalUrl, {
			headers: {
				authorization: process.env.API_TOKEN,
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
			},
		};
	} catch (error) {
		console.log('Error fetching clients data:', error);
		console.error('Error fetching clients data:', error);

		// Return empty data on error to prevent page crash
		return {
			props: {
				initialData: {
					doc: [],
					totalCount: 0,
				},
			},
		};
	}
}

export default CaseStudies;
