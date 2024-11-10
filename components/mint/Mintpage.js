import React from 'react';
import Page from '../util/Page/Page';
import MintHero from '../home/hero/MintHero';
import RegisterPlan from '../home/plan/RegisterPlan';
import PlanSection from '../home/plan/PlanSection';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import MintFeatures from './mint-features/MintFeatures';
import MintSections from './mint-features/MintSections';

const Container = styled(Flex)`
	flex: 1;
	flex-direction: column;
	width: 100%;
`;

const Mintpage = () => {
	return (
		<Page>
			<Container>
				<MintHero />
				<MintFeatures />
				<MintSections
					text={'Fully Customizable Website Themes'}
					subText={'Tailored Website Customization'}
					image={'./e-mint/mint-illustration.png'}
					paraText={
						'Choose from multiple themes and customize every detail! Our platform lets you personalize your homepage, colors, sections, and more—creating a website that reflects your brand perfectly.'
					}
					reverse={false}
				/>
				<MintSections
					text={'Marketing Made Easy: Email & SMS'}
					subText={'Boost Your Sales & Engagement'}
					image={'./e-mint/mint-illustration.png'}
					paraText={
						'Drive engagement with powerful email and SMS marketing tools. Instantly reach your customers with bulk messages or targeted campaigns, all from one platform.'
					}
					reverse={true}
				/>
				<MintSections
					text={'Top Products & Customer Insights'}
					subText={'Real-Time Analytics for Growth'}
					paraText={
						'Make data-driven decisions with real-time reports. Track top-selling products and analyze your top customers to optimize your sales strategies.'
					}
					image='./e-mint/mint-illustration.png'
					reverse={false}
				/>
				<MintSections
					text={'Role-Based Admin Panel'}
					subText={'Complete Control with Role-Based Access'}
					paraText={
						'Manage your team efficiently with a secure role-based admin panel. Assign roles, control access, and ensure smooth operations across your business.'
					}
					image={'./e-mint/mint-illustration.png'}
					reverse={true}
				/>
				{/* <RegisterPlan /> */}
				<PlanSection />
			</Container>
		</Page>
	);
};

export default Mintpage;
