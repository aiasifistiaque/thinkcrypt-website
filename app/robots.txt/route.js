import { mintText } from '@/lib/mint';

// robots.txt from the Mint panel (Site setup → SEO)
export const revalidate = 300;

export async function GET() {
	const text = (await mintText('/site/robots.txt')) || 'User-agent: *\nAllow: /\n';
	return new Response(text, { headers: { 'Content-Type': 'text/plain' } });
}
