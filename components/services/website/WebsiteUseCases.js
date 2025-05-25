import React from 'react';
import {
	Clock,
	Search,
	Activity,
	Shield,
	Mail,
	MessageCircle,
	Globe,
	Moon,
	Smartphone,
	Accessibility,
	Cookie,
} from 'lucide-react';
import LightIItemCard from '../card/LightIItemCard';
import CardSection from './CardSection';

const data = [
	{
		title: 'Zero Loading Time',
		description: 'SSR and optimized frontend deliver instant experiences.',
		icon: <Clock size={24} />,
	},
	{
		title: 'SEO Optimization',
		description: 'Optimized page structure and metadata ensure better Google ranking.',
		icon: <Search size={24} />,
	},
	{
		title: 'Real-time Analytics',
		description: 'Track user behavior, heatmaps, and traffic live.',
		icon: <Activity size={24} />,
	},
	{
		title: 'Enterprise-Grade Security',
		description: 'HTTPS, input sanitization, authentication, and more.',
		icon: <Shield size={24} />,
	},
	{
		title: 'Contact & Lead Capture Forms',
		description: 'Built-in forms with CRM or email automation integration.',
		icon: <Mail size={24} />,
	},
	{
		title: 'Live Chat Integration',
		description: 'Connect with your visitors instantly.',
		icon: <MessageCircle size={24} />,
	},
	{
		title: 'Multi-language Support',
		description: 'Go global with a localized experience.',
		icon: <Globe size={24} />,
	},
	{
		title: 'Dark Mode',
		description: 'Optional sleek visual experience for modern users.',
		icon: <Moon size={24} />,
	},
	{
		title: 'PWA Ready',
		description: 'Make your site installable like an app.',
		icon: <Smartphone size={24} />,
	},
	{
		title: 'Accessibility Compliance',
		description: 'Inclusive design for all users.',
		icon: <Accessibility size={24} />,
	},
	{
		title: 'GDPR & Cookie Compliance',
		description: 'Built-in privacy features to protect your business.',
		icon: <Cookie size={24} />,
	},
];

const WebsiteUseCases = ({ colorMode }) => {
	return (
		<CardSection
			title='Fully Loaded with Features That Matter'
			grid={3}
			colorMode={colorMode}>
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
