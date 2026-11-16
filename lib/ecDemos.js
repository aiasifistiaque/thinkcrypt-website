import { mint } from './mint';

// The panel's "EC demos" shown on the site, in their order
export const getDemos = async () =>
	((await mint('/ec-demos?isActive=true&sort=order&limit=50'))?.doc || []).filter(d => d.siteUrl);
