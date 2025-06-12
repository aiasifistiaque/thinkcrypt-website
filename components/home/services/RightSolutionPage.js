'use client';

import React from 'react';
import Column from '../../util/Home/Column';
import { Grid, Image, useColorMode } from '@chakra-ui/react';
import { useGetAllQuery } from '../../../store';
import SolutionCard, { Skeleton } from './SolutionCard';
import { colors } from '../../../theme/styles';

const RightSolutionPage = () => {
	const { colorMode: theme } = useColorMode();
	const { data, isFetching } = useGetAllQuery({
		path: 'solutions',
		limit: 99,
		sort: '-priority',
		filters: {
			isFeatured: true,
			status: 'published',
		},
	});

	const bg = theme == 'dark' ? colors?.background?.dark : colors?.background?.light;

	return (
		<Column
			{...containerCss}
			bg={bg}>
			<Grid {...gridCss}>
				{isFetching && [...Array(3)].map((_, i) => <Skeleton key={i} />)}
				{data &&
					data?.doc?.map((item, i) => (
						<SolutionCard
							colorMode={theme}
							href={item?.toStaticPage ? item?.staticPageUrl : `/businesses/${item?._id}`}
							icon={
								<Image
									w='48px'
									h='48px'
									objectFit='contain'
									src={item?.icon}
								/>
							}
							key={i}
							title={item?.name}
							description={item?.shortDescription}
							btnText='Learn More'
						/>
					))}
			</Grid>
		</Column>
	);
};

const containerCss = {
	bg: colors?.background?.dark,
	py: { base: 16, md: 16 },
	px: { base: 4, md: 8 },
	gap: 12,
};

const gridCss = {
	gap: 6,
	w: 'full',
	gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
};

export default RightSolutionPage;
