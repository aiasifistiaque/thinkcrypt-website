import React from 'react';
import Column from '../../util/Home/Column';
import { Center, Grid, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { styles } from '../../../theme/styles';
import { useGetAllQuery } from '../../../store';

const Servicesv2 = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'services',
		limit: 6,
		sort: '-priority',
		filters: {
			isActive: true,
		},
	});

	return (
		<Column {...containerCss}>
			<Center {...headingContainerCss}>
				<Text {...headingCss}>Our Digital Expertise</Text>
				<Text {...subHeadingCss}>
					We combine strategic thinking, design excellence, and technical mastery to create digital
					experiences that exceed expectations.
				</Text>
			</Center>

			<Grid {...gridCss}>
				{isFetching
					? [...Array(6)].map((_, i) => <SeriveItemLgSkeleton key={i} />)
					: data?.doc?.map((item, i) => (
							<SeriveItemLg
								item={item}
								key={i}
							/>
					  ))}
			</Grid>
		</Column>
	);
};

const headingCss = {
	lineHeight: 1.4,
	color: 'white',
	fontSize: { base: '32px', md: '48px' },
	fontFamily: fonts.heading,
};

const subHeadingCss = {
	fontSize: '16px',
	color: styles?.color?.textDarker || 'white',
	fontFamily: fonts.heading,
};

const containerCss = {
	bg: 'black',
	py: { base: 16, md: 24 },
	px: { base: 4, md: 8 },
	gap: 16,
};

const headingContainerCss = {
	flexDir: 'column',
	gap: 4,
	mx: 'auto',
	maxW: { base: '100%', md: '60vw' },
	textAlign: 'center',
	w: 'full',
};

const gridCss = {
	gap: 6,
	w: 'full',
	gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
};

const SeriveItemLg = ({ item }) => (
	<Column {...itemCss}>
		<Text {...titleCss}>{item?.name}</Text>
		<Text {...bodyTextCss}>{item?.description}</Text>
	</Column>
);

const SeriveItemLgSkeleton = () => (
	<Column {...itemCss}>
		<Skeleton>
			<Text
				{...titleCss}
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

const titleCss = {
	color: 'white',
	fontSize: { base: '16px', md: '18px' },
	fontWeight: '800',
	fontFamily: fonts.heading,
	textTransform: 'uppercase',
};

const bodyTextCss = {
	color: '#b3b3b3',
	fontFamily: 'Michroma',
	fontSize: '14px',
	lineHeight: 1.5,
	fontWeight: '600',
};

export default Servicesv2;
