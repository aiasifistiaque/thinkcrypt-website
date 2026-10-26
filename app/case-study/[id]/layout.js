import { backend } from '@/lib/backend';

// Each case study gets its own title and description from the portfolio record
export async function generateMetadata({ params }) {
	const { id } = await params;
	const data = await backend(`portfolios/${id}`);
	if (!data?.name) return { title: 'Case Study', alternates: { canonical: `/case-study/${id}` } };

	const title = `${data.name} Case Study`;
	const text = data.overview || data.companyDescription || data.solutionDescription || '';
	const description = (
		text ||
		`How Thinkcrypt designed and built ${data.name}${data.companyName ? ` for ${data.companyName}` : ''}: the challenge, our approach, the solution and the tech stack.`
	)
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
		.slice(0, 160);
	const images = data.coverImage ? [{ url: data.coverImage, alt: title }] : undefined;

	return {
		title,
		description,
		alternates: { canonical: `/case-study/${id}` },
		openGraph: { type: 'article', url: `/case-study/${id}`, title, description, images },
		twitter: { card: 'summary_large_image', title, description, images: data.coverImage ? [data.coverImage] : undefined },
	};
}

export default function Layout({ children }) {
	return children;
}
