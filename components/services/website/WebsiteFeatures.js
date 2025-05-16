import React from 'react';
import { Database, Terminal, Code, Shield, TrendingUp } from 'lucide-react';
import CardSection from './CardSection';
import LightIItemCard from '../card/LightIItemCard';

const data = [
	{
		title: 'MongoDB (Database)',
		description:
			'Flexible, scalable NoSQL database that grows with your business and handles complex data easily.',
		icon: <Database size={24} />,
	},
	{
		title: 'Express.js (Backend)',
		description:
			'Lightweight and fast backend framework that makes API development clean and efficient.',
		icon: <Terminal size={24} />,
	},
	{
		title: 'React.js (Frontend)',
		description:
			'Dynamic, lightning-fast frontend experience with reusable components and rich UI.',
		icon: <Code size={24} />,
	},
	{
		title: 'Node.js (Runtime)',
		description:
			'Handles high-concurrency with ease and allows building full-stack JavaScript apps for better performance and faster development.',
		icon: <Code size={24} />,
	},
	{
		title: 'Full JavaScript Stack',
		description:
			'Seamless integration between frontend and backend — faster build, fewer bugs, smoother deployments.',
		icon: <Code size={24} />,
	},
	{
		title: 'High Performance & Scalability',
		description: 'Perfect for growing businesses and high-traffic websites.',
		icon: <TrendingUp size={24} />,
	},
	{
		title: 'Secure Architecture',
		description: 'Built-in security layers and best practices across the stack.',
		icon: <Shield size={24} />,
	},
	{
		title: 'Developer Ecosystem & Community',
		description: 'Constant updates, huge libraries, and faster innovation.',
		icon: <Code size={24} />,
	},
];

const WebsiteFeatures = () => {
	return (
		<CardSection
			bg='whitesmoke'
			title='Why Nodejs & Nextjs Is the Backbone of Modern Web Development'>
			{data?.map((item, i) => (
				<LightIItemCard
					item={item}
					key={i}
				/>
			))}
		</CardSection>
	);
};

export default WebsiteFeatures;
