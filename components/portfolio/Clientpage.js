import React, { useState } from 'react';
import SectionHeading from '../home/sectionheading/SectionHeading';
import Page from '../util/Page/Page';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import PortfolioItemSkeleton from './PortfolioItem/PortfolioSkeleton';
import { Heading, Stack, Flex, Grid, Wrap, Text, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styles } from '../../theme/styles';
import { useGetAllQuery } from '../../store';
import CaseItem from './PortfolioItem/CaseItem';
import CardSection from '../services/website/CardSection';
import StackCard from '../home/services/StackCard';

const img =
	'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const BORDER = styles.border.light;

const Clientpage = () => {
	const [cat, setCat] = useState('');

	const onCategoryChange = value => {
		setCat(value);
	};

	const { data, isFetching } = useGetAllQuery({
		path: 'tcclients',
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

	return (
		<Page
			image={img}
			title={`Trusted by Innovators Worldwide | Our Clients & Partners – Thinkcrypt`}
			description={`Discover the startups, enterprises, and global brands that trust Thinkcrypt for custom software, SaaS, and web development. See how we’ve helped clients succeed with modern tech solutions.`}>
			<Stack
				spacing={0}
				pt='48px'>
				<SectionHeading
					containerProps={{ pb: '32px' }}
					heading='Our Clients & Partners'
					subHeading='Our Partners'>
					{`Discover the startups, enterprises, and global brands that trust Thinkcrypt for custom software, SaaS, and web development. See how we’ve helped clients succeed with modern tech solutions.`}
				</SectionHeading>

				<CardSection
					columns={{ base: 2, md: 4, lg: 4 }}
					title='Trusted by Innovators Worldwide'
					pt='44px'>
					{data &&
						data?.doc?.map((item, i) => (
							<StackCard
								headingStyle={{ fontSize: { base: '10px', md: '18px' } }}
								icon={
									<Image
										src={item?.icon}
										h='120px'
										w='120px'
										objectFit='contain'
									/>
								}
								title={item?.name}
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

export default Clientpage;
