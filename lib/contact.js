import { cache } from 'react';
import { mint } from './mint';

// The contact form follows the Mint panel's "Contact us" model (route `contact-requests`): its fields, labels,
// required ones and choices come from the public API's project info, so a field added or renamed in the panel
// shows on the form. Status and notes are the team's (read-only to the API) and never shown.
export const CONTACT_ROUTE = 'contact-requests';
export { MAX_FILES, MAX_TOTAL_MB } from './contactLimits';

// Only used if the panel can't be reached: the four the form can't do without
const FALLBACK = [
	{ key: 'name', label: 'Name', kind: 'text', required: true },
	{ key: 'email', label: 'Email', kind: 'email', required: true },
	{ key: 'phone', label: 'Phone', kind: 'text', required: true },
	{ key: 'message', label: 'Message', kind: 'textarea', required: true },
];

// Filled in by the form itself, not the visitor
const HIDDEN = ['page'];

// A panel model's form fields, as the public API's project info gives them: what a visitor may write
export const getFormFields = cache(async (route, fallback = [], hidden = []) => {
	const model = (await mint('/'))?.models?.find(m => m.route === route);
	const fields = model?.fields || fallback;
	return fields.filter(f => !f.readOnly && !hidden.includes(f.key));
});

export const getContactFields = () => getFormFields(CONTACT_ROUTE, FALLBACK, HIDDEN);

// A product page's sign-up form: the panel's "Product interest" model. The product and the page are filled
// in by the site, never by the visitor.
export const INTEREST_ROUTE = 'product-interests';
const INTEREST_FALLBACK = [
	{ key: 'name', label: 'Name', kind: 'text', required: true },
	{ key: 'email', label: 'Work email', kind: 'email', required: true },
	{ key: 'website', label: 'Your website', kind: 'url', required: true },
	{ key: 'message', label: 'What would you like to track or improve?', kind: 'textarea' },
];
export const getInterestFields = () => getFormFields(INTEREST_ROUTE, INTEREST_FALLBACK, ['page', 'product']);
