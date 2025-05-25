import React, { useState } from 'react';
import SectionHeading from '../home/sectionheading/SectionHeading';
import Page from '../util/Page/Page';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import PortfolioItemSkeleton from './PortfolioItem/PortfolioSkeleton';
import { Heading, Stack, Flex, Grid, Wrap, Text, Image, useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styles } from '../../theme/styles';
import { useGetAllQuery } from '../../store';
import CaseItem from './PortfolioItem/CaseItem';
import CardSection from '../services/website/CardSection';
import StackCard from '../home/services/StackCard';
import TitleSection from '../home/about-us/TitleSection';

const img =
	'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const BORDER = styles.border.light;

const TechstackPage = () => {
	const [cat, setCat] = useState('');

	const onCategoryChange = value => {
		setCat(value);
	};

	const { data, isFetching } = useGetAllQuery({
		path: 'techstacks',
		limit: 99,
		sort: '-priority',
		filters: { status: 'published' },
	});

	const industries = [
		{ title: 'All projects', value: '' },
		{ title: 'E-commerce', value: 'e-commerce' },
		{ title: 'Website', value: 'website' },
		{ title: 'SAAS', value: 'saas' },
		{ title: 'MVP', value: 'mvp' },
		{ title: 'Travel', value: 'travel' },
		{ title: 'Inventory', value: 'inventory' },
		{ title: 'Healthcare', value: 'healthcare' },
	];
	const { colorMode } = useColorMode();
	const theme = colorMode;

	return (
		<Page
			theme={theme}
			image={img}
			title={`Our Technology Stacks for Web & Mobile Development | MERN Experts - Thinkcrypt`}
			description={`Explore the powerful technology stacks used by Thinkcrypt, including the MERN stack, to deliver scalable web and mobile applications. From MVPs to enterprise solutions, we build future-ready software.`}>
			<Stack spacing={0}>
				<TitleSection
					top
					title='Technology Stacks'
					colorMode={theme}
					titleBottom='For Scalable Solutions'
					titleTop='Our Tech Stacks'
					subHeading='Technology Stacks'>
					At Thinkcrypt, we use cutting-edge technologies like MongoDB, Express.js, React, and
					Node.js to build fast, scalable, and secure web and mobile applications. Our full stack
					expertise drives product success from MVP to enterprise-grade platforms.
				</TitleSection>

				<CardSection
					pt={0}
					colorMode={theme}
					title='What we use for development'>
					{data &&
						data?.doc?.map((item, i) => (
							<StackCard
								colorMode={theme}
								icon={
									<Image
										src={item?.icon}
										h='44px'
										w='44px'
										objectFit='contain'
									/>
								}
								tags={item?.tags}
								title={item?.name}
								description={item?.shortDescription}
								key={i}
							/>
						))}
				</CardSection>
			</Stack>
		</Page>
	);
};

const titleContainer = {
	pt: 4,
	px: { base: 4, md: 6 },
	borderLeft: BORDER,
	borderRight: BORDER,
};

const itemGrid = {
	templateColumns: {
		base: '1fr',
	},
	mt: '24px',
	px: { base: 4, md: 6 },
	border: BORDER,
	py: '24px',
};

const itemContainer = {
	gridTemplateColumns: {
		base: '1fr',
		md: 'repeat(3, 1fr)',
	},
	pb: '64px',
	gap: 4,
};

export default TechstackPage;
