import Homepage from '../components/home/Homepage';
import { defaultSEO, getKeywordsByCategory } from '../lib/seoKeywords';

export const metadata = {
	title: defaultSEO.title,
	description: defaultSEO.description,
	keywords: getKeywordsByCategory(['primary', 'services', 'technologies']),
	authors: [{ name: defaultSEO.author }],
	creator: defaultSEO.author,
	publisher: defaultSEO.siteName,
	openGraph: {
		title: defaultSEO.title,
		description: defaultSEO.description,
		url: defaultSEO.siteUrl,
		siteName: defaultSEO.siteName,
		images: [
			{
				url: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				width: 1260,
				height: 750,
				alt: 'Thinkcrypt Software Development Team - MVP, Web & Mobile App Development',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: defaultSEO.title,
		description: defaultSEO.description,
		images: [
			'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		],
		creator: '@thinkcrypt',
		site: '@thinkcrypt',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico',
	},
	// verification: {
	// 	google: 'your-google-verification-code', // Add your actual verification code
	// },
};

export default function Home() {
	return <Homepage />;
}
