import { getBlogByIdServerSideProps } from '../../../lib/blogServerSide';
import BlogClient from './blog-client';
import { notFound } from 'next/navigation';
import { defaultSEO, getKeywordsByCategory } from '../../../lib/seoKeywords';

// Generate metadata for the blog post
export async function generateMetadata({ params }) {
	const { id } = params;

	// Convert the context format for the server-side function
	const context = {
		params: { id },
	};

	try {
		const result = await getBlogByIdServerSideProps(context);

		// Handle notFound case
		if (result.notFound || !result.props?.blogData) {
			return {
				title: 'Blog Post Not Found | Thinkcrypt',
				description: 'The requested blog post could not be found.',
			};
		}

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
			metadataBase: new URL(defaultSEO.siteUrl),
			title: {
				default: `${title} | ${defaultSEO.siteName}`,
				template: `%s | ${defaultSEO.siteName}`,
			},
			description: metaDescription,
			keywords: [...defaultSEO.keywords, ...blogKeywords, title.toLowerCase()],
			authors: [{ name: blogData.author || defaultSEO.author }],
			creator: blogData.author || defaultSEO.author,
			publisher: defaultSEO.siteName,
			formatDetection: {
				email: false,
				address: false,
				telephone: false,
			},
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
				publishedTime: blogData.createdAt || blogData.publishedAt,
				modifiedTime: blogData.updatedAt || blogData.modifiedAt,
				authors: [blogData.author || defaultSEO.author],
				section: blogData.category || 'Technology',
				tags: blogData.tags || ['software development', 'web development', 'technology'],
			},
			twitter: {
				card: 'summary_large_image',
				title: title,
				description: metaDescription,
				creator: '@thinkcrypt',
				images: [imageUrl],
			},
			robots: {
				index: true,
				follow: true,
				googleBot: {
					index: true,
					follow: true,
					'max-video-preview': -1,
					'max-image-preview': 'large',
					'max-snippet': -1,
				},
			},
			alternates: {
				canonical: blogUrl,
			},
			icons: {
				icon: '/favicon.ico',
				shortcut: '/favicon.ico',
				apple: '/favicon.ico',
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
