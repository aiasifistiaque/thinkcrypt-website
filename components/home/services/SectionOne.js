import React from 'react';
import Column from '../../util/Home/Column';
import { Center, Flex, Grid, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { colors, styles } from '../../../theme/styles';
import { useGetAllQuery } from '../../../store';
import { padding } from '../../../lib/constants';

const SectionOne = ({ title, subTitle, children, ...props }) => {
	const { data, isFetching } = useGetAllQuery({
		path: 'services',
		limit: 6,
		sort: '-priority',
		filters: {
			isActive: true,
		},
	});

	return (
		<Column
			{...containerCss}
			{...props}>
			<Flex {...headingContainerCss}>
				<Text {...headingCss}>{title}</Text>
				<Text {...subHeadingCss}>{subTitle}</Text>
			</Flex>

			{children}
		</Column>
	);
};

const containerCss = {
	bg: colors?.background?.dark,
	py: { base: 4, md: 4 },
	px: { base: padding?.baseBody, md: padding?.lgBody },
	gap: 16,
};

const headingContainerCss = {
	flexDir: 'column',
	gap: 4,
	w: 'full',
};

const headingCss = {
	lineHeight: 1,
	color: colors?.text?.dark,
	fontSize: { base: '44px', md: '8rem' },
	fontFamily: fonts.title,
	textTransform: 'uppercase',
};

const subHeadingCss = {
	fontSize: { base: '14px', md: '16px' },
	color: colors?.text?.blue || 'white',
	fontFamily: fonts.heading,
	textTransform: 'uppercase',
	fontFamily: fonts.primary,
	maxW: { base: '100%', md: '70%' },
};

export default SectionOne;
