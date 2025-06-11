'use client';

import React from 'react';
import Projectpage from '../../components/project/Projectpage';
import { defaultSEO } from '@/lib/seoKeywords';

export const metadata = {
	metadataBase: new URL(defaultSEO.siteUrl),
	title: {
		default: defaultSEO.title,
		template: `%s | ${defaultSEO.siteName}`,
	},
	description: defaultSEO.description,
	keywords: defaultSEO.keywords,
	authors: [{ name: defaultSEO.author }],
	creator: defaultSEO.author,
	publisher: defaultSEO.siteName,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: defaultSEO.siteUrl,
		siteName: defaultSEO.siteName,
		title: defaultSEO.title,
		description: defaultSEO.description,
		images: [
			{
				url: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				width: 1260,
				height: 750,
				alt: 'Thinkcrypt Software Development Team',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: defaultSEO.title,
		description: defaultSEO.description,
		creator: '@thinkcrypt',
		images: [
			'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		],
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
};

export default function Project() {
	return <Projectpage />;
}
