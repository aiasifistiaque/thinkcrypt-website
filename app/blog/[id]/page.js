import BlogClient from './blog-client';
import { notFound } from 'next/navigation';
import { blogJsonLd, blogMetadata, getBlog, getBlogs } from '@/lib/blog';
import { ldScript } from '@/lib/jsonLd';

// Every published post is prerendered at build; edits in the panel show within a minute,
// and a post published later renders on its first visit and is kept from then on.
export const revalidate = 60;

export async function generateStaticParams() {
	return (await getBlogs()).map(post => ({ id: post.slug }));
}

export async function generateMetadata({ params }) {
	const { id } = await params;
	const post = await getBlog(id);
	if (!post) return { title: 'Blog post not found', robots: { index: false } };
	return blogMetadata(post);
}

export default async function BlogPost({ params }) {
	const { id } = await params;
	const post = await getBlog(id);
	if (!post) notFound();
	const jsonLd = await blogJsonLd(post);

	return (
		<>
			{jsonLd && (
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={ldScript(jsonLd)}
				/>
			)}
			<BlogClient blogData={post} />
		</>
	);
}
