import ContactPage from '../../components/contact/ContactPage';
import { pageMetadata } from '@/lib/mintSeo';
import { MINT_KEY, MINT_ORIGIN, getSite } from '@/lib/mint';
import { pageSections } from '@/lib/pageContents';
import { getContactFields } from '@/lib/contact';
import { getWebsiteTypes } from '@/lib/websiteTypes';

// /contact — every word is the Mint panel's (Contents → page "/contact"), the form's fields are its
// "Contact us" model, and the address, email and phone are Site setup's. Enquiries land in the panel.
export const revalidate = 60;

export const generateMetadata = () => pageMetadata('/contact');

export default async function Contact() {
	const [site, sections, fields, types] = await Promise.all([
		getSite(),
		pageSections('/contact'),
		getContactFields(),
		getWebsiteTypes(),
	]);
	return (
		<ContactPage
			sections={sections}
			fields={fields}
			types={types.map(t => ({ _id: t._id, name: t.name, slug: t.slug }))}
			settings={site?.settings || {}}
			api={MINT_ORIGIN ? `${MINT_ORIGIN}/public/api` : ''}
			apiKey={MINT_KEY || ''}
		/>
	);
}
