'use client';

import { Briefcase, FileText, Rocket } from 'lucide-react';
import LightIItemCard from '../card/LightIItemCard';
import CardSection from './CardSection';
import { useColorMode } from '@chakra-ui/react';

const data = [
	{
		title: 'Corporate Websites',
		description: 'Professional, fast-loading company presence.',
		icon: <Briefcase size={24} />,
	},
	{
		title: 'Startup Sites',
		description: 'Rapid MVPs and agile iterations.',
		icon: <Rocket size={24} />,
	},
	{
		title: 'Business Portfolios',
		description: 'Showcase projects and team with elegance.',
		icon: <Briefcase size={24} />,
	},
	{
		title: 'Product Landing Pages',
		description: 'Conversion-optimized for launches and ads.',
		icon: <Rocket size={24} />,
	},
	{
		title: 'Personal Portfolios',
		description: 'Visually rich and easy-to-update.',
		icon: <FileText size={24} />,
	},
	{
		title: 'Blogs & Media',
		description: 'Optimized for content publishing and engagement.',
		icon: <FileText size={24} />,
	},
];

const WebsiteUseCases = () => {
	const { colorMode } = useColorMode();
	return (
		<CardSection
			colorMode={colorMode}
			title='Build for Every Purpose'
			grid={3}>
			{data?.map((item, i) => (
				<LightIItemCard
					colorMode={colorMode}
					heading='inline'
					align='start'
					item={item}
					key={i}
				/>
			))}
		</CardSection>
	);
};
export default WebsiteUseCases;
