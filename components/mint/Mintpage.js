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
					image={'./e-mint/mint-illustrationv3.png'}
					paraText={
						'Choose from various themes and customize every detail to match your brand. Our platform allows you to personalize your homepage, colors, sections, and more, giving you full control to create a website that truly reflects your unique identity and stands out to your audience.'
					}
					reverse={false}
					video='./e-mint/emint-v2.mp4'
				/>
				<MintSections
					text={'Marketing Made Easy: Email & SMS'}
					subText={'Boost Your Sales & Engagement'}
					image={'./e-mint/mint-illustrationv3.png'}
					paraText={
						'Boost engagement with robust email and SMS marketing tools. Reach customers instantly through bulk messaging or targeted campaigns—all from a single platform, making it easy to connect and drive results effectively.'
					}
					reverse={true}
					video='./e-mint/mint-v5.mp4'
				/>
				<MintSections
					text={'Top Products & Customer Insights'}
					subText={'Real-Time Analytics for Growth'}
					paraText={
						'Make informed decisions with real-time analytics. Track best-selling products and identify top customers to refine and enhance your sales strategies. Our platform’s reporting tools provide the insights you need to optimize performance and boost results, helping you stay ahead in a competitive market.'
					}
					image='./e-mint/mint-illustrationv3.png'
					reverse={false}
					video='./e-mint/mint-v4.mp4'
				/>
				<MintSections
					text={'Role-Based Admin Panel'}
					subText={'Complete Control with Role-Based Access'}
					paraText={
						'Efficiently manage your team with a secure, role-based admin panel. Assign roles, control access levels, and maintain smooth operations across your business. This streamlined approach enhances team collaboration while safeguarding sensitive information, giving you complete control over permissions and workflow management.'
					}
					image={'./e-mint/mint-illustrationv3.png'}
					reverse={true}
					video='./e-mint/mint-v3.mp4'
				/>
				{/* <RegisterPlan /> */}
				<PlanSection />
			</Container>
		</Page>
	);
};

export default Mintpage;
