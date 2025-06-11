// Next.js API route support: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

export async function GET(request) {
	return Response.json({ name: 'John Doe' });
}

export async function POST(request) {
	return Response.json({ name: 'John Doe' });
}
