import BlogPage from '../components/blog/BlogPage';
import { blogData } from '../data/blogData';

const Blog = ({ initialData, category }) => {
	return (
		<BlogPage
			initialData={initialData}
			initialCategory={category}
		/>
	);
};

export async function getServerSideProps(context) {
	try {
		// In a real app, you would fetch from your API
		// For now, we'll use the static blog data and simulate category filtering
		const { category } = context.query;

		let filteredData = { ...blogData };

		// If category is provided, filter the blog posts
		if (category && category !== '' && category !== 'all') {
			filteredData.doc = blogData.doc.filter(
				blog => blog.category.toLowerCase() === category.toLowerCase()
			);
			filteredData.totalCount = filteredData.doc.length;
		}

		return {
			props: {
				initialData: filteredData,
				category: category || '', // Pass the category to the component
			},
		};
	} catch (error) {
		console.error('Error loading blog data:', error);

		// Return empty data on error to prevent page crash
		return {
			props: {
				initialData: {
					doc: [],
					totalCount: 0,
					categories: [],
				},
				category: '',
			},
		};
	}
}

export default Blog;
