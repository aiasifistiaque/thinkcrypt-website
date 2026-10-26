'use client';

import BlogByIdPage from '../../../components/blog/BlogByIdPage';

export default function BlogClient({ blogData }) {
	return <BlogByIdPage data={blogData} />;
}
