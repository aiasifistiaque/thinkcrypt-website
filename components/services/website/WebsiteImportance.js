import React from 'react';
import { Clock, Shield, TrendingUp } from 'lucide-react';
import CardSection from './CardSection';
import LightIItemCard from '../card/LightIItemCard';

const data = [
	{
		title: 'First Impressions Matter',
		description:
			'Visitors judge your brand within seconds. We ensure it reflects quality and professionalism.',
		icon: <Clock size={24} />,
	},
	{
		title: 'Available 24/7',
		description:
			'Your digital office never closes. Capture leads and engage users anytime, anywhere.',
		icon: <Clock size={24} />,
	},
	{
		title: 'Credibility Builder',
		description: 'A well-designed website makes your business look established and trustworthy.',
		icon: <Shield size={24} />,
	},
	{
		title: 'Sales Engine',
		description: "It's more than just a brochure — your website can actively drive conversions.",
		icon: <TrendingUp size={24} />,
	},
];

const WebsiteImportance = () => {
	return (
		<CardSection title='Your Website Is Your Digital Headquarters'>
			{data?.map((item, i) => (
				<LightIItemCard
					item={item}
					key={i}
				/>
			))}
		</CardSection>
	);
};

export default WebsiteImportance;
