import React, { useState } from 'react';
import Column from '../../util/Home/Column';
import { Box, Center, Flex, Grid, Image, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import { howWeWorkPic1, howWeWorkPic2 } from '../../../data/data';
import { fonts } from '../../lib/constants';

import { styles } from '../../../theme/styles';
import { useGetAllQuery } from '../../../store';

const BORDER = styles.border.light;

const Servicesv2 = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'services',
		limit: 9,
		sort: '-priority',
		filters: {
			isActive: true,
		},
	});

	return (
		<Column
			bg='black'
			py={24}
			px={{ base: 4, md: 8 }}
			gap={16}>
			<Center
				flexDir='column'
				color='white'
				gap={4}
				mx='auto'
				maxW={{ base: '100%', md: '60vw' }}
				textAlign='center'
				w='full'>
				<Text
					lineHeight={1.4}
					color='white'
					fontSize={{ base: '32px', md: '48px' }}
					fontFamily={fonts.heading}>
					Our Digital Expertise
				</Text>
				<Text
					fontSize='16px'
					color={styles?.color?.textDarker || 'white'}
					fontFamily={fonts.heading}>
					We combine strategic thinking, design excellence, and technical mastery to create digital
					experiences that exceed expectations.
				</Text>
			</Center>

			<Grid
				w='full'
				templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
				gap={6}>
				{isFetching
					? [...Array(10)].map((_, i) => (
							<SeriveItemLgSkeleton
								key={i}
								index={i}
							/>
					  ))
					: data?.doc?.map((item, i) => (
							<SeriveItemLg
								item={item}
								index={i}
								key={i}
							/>
					  ))}
			</Grid>
		</Column>
	);
};

const SeriveItemLg = ({ item, index }) => (
	<Column {...itemCss}>
		<Text
			color='white'
			fontSize={{ base: '16px', md: '18px' }}
			fontWeight='800'
			textTransform={'uppercase'}
			fontFamily={fonts.heading}>
			{item?.name}
		</Text>
		<Text
			color='#b3b3b3'
			fontFamily='Michroma'
			fontSize='14px'
			lineHeight={1.5}
			fontWeight='600'
			overflow='hidden'>
			{item?.description}
		</Text>
	</Column>
);

const SeriveItemLgSkeleton = ({ index }) => (
	<Column
		{...itemCss}
		gridColumn={index === 0 || index == 9 ? 'span 2' : 'auto'}>
		<Skeleton>
			<Text
				color='white'
				fontSize='18px'
				fontWeight='800'
				fontFamily={fonts.heading}>
				NAME OF ITEM
			</Text>
		</Skeleton>
		<SkeletonText noOfLines={4} />
	</Column>
);

const itemCss = {
	p: 8,
	gap: 4,
	border: '1px solid #333',
	bgColor: 'black',
};

export default Servicesv2;
