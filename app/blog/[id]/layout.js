import React from 'react';
import { getBlogByIdServerSideProps } from '../../../lib/blogServerSide';
import { defaultSEO, getKeywordsByCategory } from '../../../lib/seoKeywords';

export async function generateMetadata({ params }) {
	const { id } = params;

	// Convert the context format for the server-side function
	const context = {
		params: { id },
	};

	try {
		const result = await getBlogByIdServerSideProps(context);

		const { blogData } = result.props;
		const blogKeywords = getKeywordsByCategory('blog');

		// Extract blog data for metadata
		const title = blogData?.name || 'Blog Post';
		const description =
			blogData?.excerpt ||
			`Read ${title} on Thinkcrypt blog. Expert insights on software development, web development, and technology trends.`;

		// Create a clean excerpt for meta description
		const metaDescription =
			description.length > 160 ? description.substring(0, 157) + '...' : description;

		// Generate blog post URL
		const blogUrl = `${defaultSEO.siteUrl}/blog/${id}`;

		// Use blog featured image or default
		const blogImage = blogData.image || blogData.coverImage || defaultSEO.image;
		const imageUrl = blogImage.startsWith('http') ? blogImage : `${defaultSEO.siteUrl}${blogImage}`;

		return {
			title: title, // This will use the template from the root layout.js
			description: metaDescription,
			keywords: [...defaultSEO.keywords, ...blogKeywords, title.toLowerCase()],
			authors: [{ name: blogData?.author || defaultSEO.author }],

			openGraph: {
				type: 'article',
				locale: 'en_US',
				url: blogUrl,
				siteName: defaultSEO.siteName,
				title: title,
				description: metaDescription,
				images: [
					{
						url: imageUrl,
						width: 1200,
						height: 630,
						alt: title,
					},
				],
				publishedTime: blogData?.publishedAt,
				modifiedTime: blogData?.updatedAt,
				section: blogData?.category || 'Technology',
				tags: blogData?.tags || ['software development', 'web development', 'technology'],
			},

			twitter: {
				title: title,
				description: metaDescription,
				images: [imageUrl],
			},

			alternates: {
				canonical: blogUrl,
			},
		};
	} catch (error) {
		console.error('Error generating blog metadata:', error);

		// Fallback metadata
		return {
			title: 'Blog Post | Thinkcrypt',
			description: 'Read our latest insights on software development and technology.',
			keywords: defaultSEO.keywords,
		};
	}
}

const BlogByIdLayout = ({ children }) => {
	return <>{children}</>;
};

export default BlogByIdLayout;
