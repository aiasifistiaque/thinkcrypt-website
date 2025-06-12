'use client';

import Clientpage from '../../components/portfolio/Clientpage';
import { defaultSEO } from '../../lib/seoKeywords';

const title = `Trusted by Innovators Worldwide | Our Clients & Partners – Thinkcrypt`;
const image =
	'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const desc =
	'Discover the startups, enterprises, and global brands that trust Thinkcrypt for custom software, SaaS, and web development. See how we’ve helped clients succeed with modern tech solutions.';

// export const metadata = {
// 	metadataBase: new URL(defaultSEO.siteUrl),
// 	title: {
// 		default: title,
// 		template: `%s | ${defaultSEO.siteName}`,
// 	},
// 	description: desc,
// 	keywords: defaultSEO.keywords,
// 	authors: [{ name: defaultSEO.author }],
// 	creator: defaultSEO.author,
// 	publisher: defaultSEO.siteName,
// 	formatDetection: {
// 		email: false,
// 		address: false,
// 		telephone: false,
// 	},
// 	openGraph: {
// 		type: 'website',
// 		locale: 'en_US',
// 		url: defaultSEO.siteUrl,
// 		siteName: defaultSEO.siteName,
// 		title: title,
// 		description: desc,
// 		images: [
// 			{
// 				url: image,
// 				width: 1260,
// 				height: 750,
// 				alt: 'Thinkcrypt Software Development Team',
// 			},
// 		],
// 	},
// 	twitter: {
// 		card: 'summary_large_image',
// 		title: title,
// 		description: desc,
// 		creator: '@thinkcrypt',
// 		images: [image],
// 	},
// 	robots: {
// 		index: true,
// 		follow: true,
// 		googleBot: {
// 			index: true,
// 			follow: true,
// 			'max-video-preview': -1,
// 			'max-image-preview': 'large',
// 			'max-snippet': -1,
// 		},
// 	},
// 	icons: {
// 		icon: '/favicon.ico',
// 		shortcut: '/favicon.ico',
// 		apple: '/favicon.ico',
// 	},
// };

const Clients = () => {
	return <Clientpage />;
};

export default Clients;
