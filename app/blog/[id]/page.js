import { getBlogByIdServerSideProps } from '../../../lib/blogServerSide';
import BlogClient from './blog-client';
import { notFound } from 'next/navigation';
import { defaultSEO, getKeywordsByCategory } from '../../../lib/seoKeywords';

// Generate metadata for the blog post

export default async function BlogPost({ params }) {
	const { id } = params;

	// Convert the context format for the server-side function
	const context = {
		params: { id },
	};

	const result = await getBlogByIdServerSideProps(context);
	// Handle notFound case
	if (result.notFound) {
		notFound();
	}
	const { blogData: data, error } = result.props;

	// Pass data to client component for interactive features
	return (
		<BlogClient
			blogData={data}
			error={error}
		/>
	);
}
