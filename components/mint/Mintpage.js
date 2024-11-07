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
					image={'./logo/customImage1.svg'}
					paraText={
						'Choose from multiple themes and customize every detail! Our platform lets you personalize your homepage, colors, sections, and more—creating a website that reflects your brand perfectly.'
					}
				/>
				<MintSections
					text={'Marketing Made Easy: Email & SMS'}
					subText={'Boost Your Sales & Engagement'}
					image={'./logo/sectionImage2.png'}
					paraText={
						'Drive engagement with powerful email and SMS marketing tools. Instantly reach your customers with bulk messages or targeted campaigns, all from one platform.'
					}
				/>
				<RegisterPlan />
				<PlanSection />
			</Container>
		</Page>
	);
};

export default Mintpage;
