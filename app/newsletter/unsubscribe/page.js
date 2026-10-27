import UnsubscribePage from '../../../components/newsletter/UnsubscribePage';
import { findByCode } from '@/lib/newsletter';

// /newsletter/unsubscribe?code=… — where the welcome email's unsubscribe link lands. It names the address and asks
// for one click (a link opened by a mail scanner unsubscribes nobody); the click marks it Unsubscribed in the panel.
export const dynamic = 'force-dynamic';

export const metadata = {
	title: 'Unsubscribe from the newsletter | Thinkcrypt',
	robots: { index: false, follow: false },
};

export default async function Unsubscribe({ searchParams }) {
	const code = String((await searchParams)?.code || '').trim().slice(0, 100);
	const found = code ? await findByCode(code) : null;
	return (
		<UnsubscribePage
			code={found ? code : ''}
			email={found?.email || ''}
			already={found?.status === 'unsubscribed'}
			failed={found === undefined}
		/>
	);
}
