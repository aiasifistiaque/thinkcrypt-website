import React, { useState } from 'react';
import SectionHeading from '../home/sectionheading/SectionHeading';
import Page from '../util/Page/Page';

import { Stack, Image, Link, useColorMode } from '@chakra-ui/react';

import { styles } from '../../theme/styles';
import { useGetAllQuery } from '../../store';
import CardSection from '../services/website/CardSection';
import StackCard from '../home/services/StackCard';
import TitleSection from '../home/about-us/TitleSection';
import ClientSkeleton from './ClientSkeleton';

const img =
	'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const BORDER = styles.border.light;

const Clientpage = ({ initialData }) => {
	// Use RTK Query as fallback when no initial data
	//const shouldSkip = initialData && initialData.doc && initialData.doc.length > 0;
	const shouldSkip = false;

	const { data: fetchedData, isFetching } = useGetAllQuery(
		{
			path: 'tcclients',
			limit: 99,
			sort: '-priority',
			filters: { status: 'published' },
		},
		{
			skip: shouldSkip,
		}
	);

	// Use SSR data when available, otherwise use fetched data
	const data = shouldSkip ? initialData : fetchedData;
	const isLoading = !shouldSkip && isFetching && !data;

	console.log('Clients Debug:', {
		hasInitialData: !!initialData?.doc,
		initialDataLength: initialData?.doc?.length || 0,
		shouldSkip,
		isFetching,
		isLoading,
		usingSSRData: shouldSkip,
		finalDataCount: data?.doc?.length || 0,
	});

	const URLContainer = ({ item, children }) => {
		return (
			<Link
				_hover={{ textDecoration: 'none' }}
				isExternal={item?.url ? true : false}
				href={item?.url || '#'}>
				{children}
			</Link>
		);
	};

	const { colorMode } = useColorMode();

	return (
		<Page
			theme={colorMode}
			image={img}
			title={`Trusted by Innovators Worldwide | Our Clients & Partners – Thinkcrypt`}
			description={`Discover the startups, enterprises, and global brands that trust Thinkcrypt for custom software, SaaS, and web development. See how we’ve helped clients succeed with modern tech solutions.`}>
			<Stack spacing={0}>
				<TitleSection
					top
					colorMode={colorMode}
					title='Stakeholders'
					titleTop='Our Clients'
					titleBottom='& Partners'>
					{`Discover the startups, enterprises, and global brands that trust Thinkcrypt for custom software, SaaS, and web development. See how we’ve helped clients succeed with modern tech solutions.`}
				</TitleSection>

				<CardSection
					colorMode={colorMode}
					columns={{ base: 2, md: 4, lg: 4 }}
					title='Trusted by Innovators Worldwide'
					pt={{
						base: '64px',
						md: '92px',
					}}>
					{isLoading
						? // Show 8 skeleton loaders
						  Array.from({ length: 8 }, (_, i) => (
								<ClientSkeleton
									key={i}
									colorMode={colorMode}
								/>
						  ))
						: data &&
						  data?.doc?.map((item, i) => (
								<URLContainer
									item={item}
									key={i}>
									<StackCard
										align='center'
										colorMode={'dark'}
										headingStyle={{ fontSize: { base: '10px', md: '28px' }, lineHeight: 1 }}
										icon={
											<Image
												src={item?.icon}
												h='120px'
												w='120px'
												objectFit='contain'
											/>
										}
										title={item?.name}
									/>
								</URLContainer>
						  ))}
				</CardSection>
			</Stack>
		</Page>
	);
};

export default Clientpage;
