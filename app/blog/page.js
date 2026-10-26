import BlogPageClient from '../../components/blog/BlogPageClient';
import { blogListJsonLd, getBlogs } from '@/lib/blog';
import { ldScript } from '@/lib/jsonLd';

// Prerendered from the Mint panel's published posts; refreshed at most a minute after a change
export const revalidate = 60;

export default async function BlogPage() {
	const blogs = await getBlogs();
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={ldScript(await blogListJsonLd(blogs))}
			/>
			<BlogPageClient blogs={blogs} />
		</>
	);
}
