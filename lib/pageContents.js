import { getPage } from './mint';

// A page's sections from the Mint panel (Contents): its published, visible contents in the panel's
// order, each as { id, slug, type, data } where data is the typed content's fields (hero, cards,
// faq, section…). Reordering, hiding or editing a content in the panel changes the page.
const toSection = c => ({
	id: c._id,
	slug: c.slug,
	type: String(c.type || '').replace(/^content\./, ''),
	data: c.block?.[0] || {},
});

// `seed` is shown only when the panel can't be reached
export async function pageSections(path, seed = []) {
	const page = await getPage(path);
	if (!page) return seed;
	return (page.contents || []).filter(c => c.block?.length).map(toSection);
}

// One section of a page by slug; null when the panel has it hidden or removed
export async function pageSection(path, slug, seed = null) {
	const page = await getPage(path);
	if (!page) return seed;
	const c = (page.contents || []).find(c => c.slug === slug && c.block?.length);
	return c ? toSection(c) : null;
}
