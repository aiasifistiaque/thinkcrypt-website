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

const headingCss = {
	lineHeight: 1,
	color: colors?.text?.dark,
	fontSize: { base: '32px', md: '8rem' },
	fontFamily: fonts.title,
	textTransform: 'uppercase',
};

const subHeadingCss = {
	fontSize: '20px',
	color: styles?.color?.textDarker || 'white',
	fontFamily: fonts.heading,
	textTransform: 'uppercase',
	fontFamily: fonts.primary,
	maxW: { base: '100%', md: '70%' },
};

const containerCss = {
	bg: colors?.background?.dark,
	py: { base: 4, md: 4 },
	px: { base: padding?.baseBody, md: padding?.lgBody },
	gap: 16,
};

const headingContainerCss = {
	flexDir: 'column',
	gap: 0,
	w: 'full',
};

const gridCss = {
	gap: 6,
	w: 'full',
	gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
};

const itemCss = {
	p: 8,
	gap: 4,
	border: '1px solid #333',
	bgColor: colors?.card?.dark,
};

const titleCss = {
	color: colors?.text?.dark,
	fontSize: { base: '16px', md: '3rem' },
	fontWeight: '800',
	lineHeight: 1,
	fontFamily: fonts.title,
	textTransform: 'uppercase',
};

const bodyTextCss = {
	color: colors?.text?.dark,
	fontFamily: fonts.primary,
	fontSize: '16px',
	lineHeight: 1.5,
	fontWeight: '400',
	textTransform: 'uppercase',
};

export default SectionOne;
