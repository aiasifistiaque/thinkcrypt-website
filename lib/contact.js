import { cache } from 'react';
import { mint } from './mint';

// The contact form follows the Mint panel's "Contact us" model (route `contact-requests`): its fields, labels,
// required ones and choices come from the public API's project info, so a field added or renamed in the panel
// shows on the form. Status and notes are the team's (read-only to the API) and never shown.
export const CONTACT_ROUTE = 'contact-requests';

// Only used if the panel can't be reached: the four the form can't do without
const FALLBACK = [
	{ key: 'name', label: 'Name', kind: 'text', required: true },
	{ key: 'email', label: 'Email', kind: 'email', required: true },
	{ key: 'phone', label: 'Phone', kind: 'text', required: true },
	{ key: 'message', label: 'Message', kind: 'textarea', required: true },
];

// Filled in by the form itself, not the visitor
const HIDDEN = ['page'];

export const getContactFields = cache(async () => {
	const model = (await mint('/'))?.models?.find(m => m.route === CONTACT_ROUTE);
	const fields = model?.fields || FALLBACK;
	return fields.filter(f => !f.readOnly && !HIDDEN.includes(f.key));
});
