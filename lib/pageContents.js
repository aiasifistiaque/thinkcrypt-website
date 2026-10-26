import { getPage, mint } from './mint';

// A page's sections from the Mint panel (Contents): its published, visible contents in the panel's
// order, each as { id, slug, type, data } where data is the typed content's fields (hero, cards,
// faq, section, list…). Reordering, hiding or editing a content in the panel changes the page.
const toSection = c => ({
	id: c._id,
	slug: c.slug,
	type: String(c.type || '').replace(/^content\./, ''),
	data: c.block?.[0] || {},
});

// A List content's conditions as the public API's filters (`field=value`, `field_gt=value`…)
const OPS = { is: '', not: '_ne', in: '_in', contains: '_contains', gt: '_gt', gte: '_gte', lt: '_lt', lte: '_lte' };
const conditionsOf = when =>
	(when || [])
		.filter(w => w?.field && w.op in OPS && w.value !== undefined && w.value !== '')
		.map(w => `&${encodeURIComponent(w.field + OPS[w.op])}=${encodeURIComponent(w.value)}`)
		.join('');

// A List content shows a panel model's records: fetch them with the section
const withRecords = async section => {
	if (section.type !== 'list' || !section.data.source) return section;
	const d = section.data;
	const path = `/${encodeURIComponent(d.source)}?limit=${d.limit || 6}&sort=${encodeURIComponent(d.sort || '-createdAt')}${conditionsOf(d.when)}`;
	return { ...section, records: (await mint(path))?.doc || [] };
};

// `seed` is shown only when the panel can't be reached
export async function pageSections(path, seed = []) {
	const page = await getPage(path);
	if (!page) return seed;
	return Promise.all((page.contents || []).filter(c => c.block?.length).map(toSection).map(withRecords));
}

// One section of a page by slug; null when the panel has it hidden or removed
export async function pageSection(path, slug, seed = null) {
	const page = await getPage(path);
	if (!page) return seed;
	const c = (page.contents || []).find(c => c.slug === slug && c.block?.length);
	return c ? withRecords(toSection(c)) : null;
}
