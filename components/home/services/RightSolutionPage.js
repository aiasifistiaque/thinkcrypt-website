'use client';

import React from 'react';
import Column from '../../util/Home/Column';
import { Grid, Image, useColorMode } from '@chakra-ui/react';
import SolutionCard from './SolutionCard';
import { colors } from '../../../theme/styles';

// /business-solution: every card of the Mint panel's content "solutions" on the home page
const RightSolutionPage = ({ section }) => {
	const { colorMode: theme } = useColorMode();
	const items = (section?.data?.items || []).filter(i => i?.title);

	const bg = theme == 'dark' ? colors?.background?.dark : colors?.background?.light;

	return (
		<Column
			{...containerCss}
			bg={bg}>
			<Grid {...gridCss}>
				{items.map((item, i) => (
					<SolutionCard
						colorMode={theme}
						href={item.url}
						icon={
							item.image && (
								<Image
									w='48px'
									h='48px'
									objectFit='contain'
									src={item.image}
									alt={item.title}
								/>
							)
						}
						key={i}
						title={item.title}
						description={item.description}
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
