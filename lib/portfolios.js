import { cache } from 'react';
import { mint } from './mint';

// Portfolio projects come from the Mint panel (Website → Portfolios, route `portfolios`) —
// copied field for field from the old content API's Portfolio model on 2026-11-09.
// Only Published projects show on the site; higher priority first.

export const getPortfolios = cache(async () =>
	((await mint('/portfolios?limit=500&sort=-priority'))?.doc || []).filter(p => p?.status === 'published')
);

// The home page's Featured Projects: the six featured ones with the highest priority
export const getFeaturedPortfolios = cache(async () =>
	(await getPortfolios()).filter(p => p.isFeatured).slice(0, 6)
);

// A case study by its slug — or by its old content-API id (oldId) or panel id, so links made
// before the move keep working (the page sends those on to the slug)
export const getPortfolio = cache(async id =>
	(await getPortfolios()).find(p => p.slug === id || p.oldId === id || p._id === id) || null
);

export const caseStudyPath = item => `/case-study/${item?.slug || item?._id}`;

// Where a project card goes: its case study when that's switched on, else its live site
export const portfolioHref = item =>
	item?.showCaseStudy ? caseStudyPath(item) : item?.liveUrl || '#';
