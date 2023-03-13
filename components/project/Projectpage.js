import React from 'react';
import styles from './Projectpage.module.css';
import Top from './top/Top';
import Cover from './cover/Cover';
import Description from './description/Description';
import Slider from './slider/Slider';
import BottomDescription from './description/BottomDescription';
import Feedback from './feedback/Feedback';
import Page from '../util/Page/Page';

const data = {
	name: `Vincent's Sphere`,
	heading:
		'One of the most successful Shopify Plus brands enlists Avex for UX Design and E-commerce Strategy.',
	link: 'https://vincentsphere.com',
	image: '/projects/cover.jpg',

	services: [
		'UI/UX Design',
		'Backend server',
		'Database design',
		'Frontend Design',
		'Deployment into cloud',
	],
	stack: [
		'Node.js with Express',
		'MongoDb',
		'AWS s3 cloud storage',
		'React.js',
		'Next.js',
		'Heroku',
		'Vercel',
	],
	ask: [
		'Established in 2011, KITH is one of the most prominent streetwear brands on the market today. A multifunctional lifestyle brand for men, women, and kids, KITH is also a progressive retail establishment.',
		'Over the years, the brand has seen tremendous growth on Shopify Plus. During this time, Avex was enlisted to provide an e-commerce audit and strategy, prior to supporting their user-experience design needs for both their e-commerce website and iOS mobile app.',
	],
	solution: [
		'Avex worked very closely with the team at KITH and their development team to provide UX support. Our process involved an audit and CRO recommendations for their previous website.',
		'The first engagement revolved around a basic refresh and website updates. After the refresh, KITH wanted to dive into a complete redesign. Avex provided additional support to reimagine the design and UX of the Shopify Plus website',
		`KITH’s “Monday Program” is a huge part of their business. The brand wanted to use these limited edition drops and to engage with customers, using a mobile app. Avex designed the entire UX and UI for the iOS app, which utilized Shopify Plus for the backend.`,
	],
	duration: ['3 Months'],
	remarks: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	],
	slider: '/projects/slider.jpg',
	feedback: {
		client: 'Umar Muhammad',
		project: 'Arewa Books Publishers',
		feedback:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		image: '/pp.png',
	},
};

const Projectpage = () => {
	return (
		<Page>
			<div className={styles.container}>
				<Top data={data} />
				<Cover src={data.image} />
				<Description data={data} />
				<Slider src={data.slider} />
				<BottomDescription data={data} />
				<Feedback data={data.feedback} />
			</div>
		</Page>
	);
};

export default Projectpage;
