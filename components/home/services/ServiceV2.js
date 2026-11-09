import React from 'react';
import Column from '../../util/Home/Column';
import { Flex, Grid, Text } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { colors, styles } from '../../../theme/styles';
import { padding } from '../../../lib/constants';

// The home page's "Our Digital Expertise" section. Its heading, line under it and cards are the Mint
// panel's content "expertise" on the home page (items: title = card name, description = its text);
// the seed copy (lib/content/home.js) shows only when the panel can't be reached.
const Servicesv2 = ({ theme, section }) => {
	const bg = theme === 'dark' ? colors?.background?.dark : colors?.background?.light;
	const primaryColor = theme === 'dark' ? colors?.text?.dark : colors?.text?.light;
	const blue = theme === 'dark' ? colors?.text?.blue : colors?.text?.darkBlue;
	const secondaryColor =
		theme === 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;
	if (!section) return null;
	const d = section.data || {};
	const items = (d.items || []).filter(i => i?.title);

	return (
		<Column
			{...containerCss}
			bg={bg}>
			<Flex {...headingContainerCss}>
				<Text
					{...headingCss}
					color={primaryColor}>
					{String(d.heading || 'Our Digital Expertise').replace(/\n/g, ' ')}
				</Text>
				<Text
					{...subHeadingCss}
					color={blue}>
					{d.text}
				</Text>
			</Flex>

			<Grid {...gridCss}>
				{items.map((item, i) => (
					<SeriveItemLg
						theme={theme}
						item={item}
						key={i}
					/>
				))}
			</Grid>
		</Column>
	);
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

const gridCss = {
	gap: 6,
	w: 'full',
	gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
};

const SeriveItemLg = ({ item, theme }) => (
	<Column
		{...itemCss}
		bg={theme === 'dark' ? colors?.card?.dark : colors?.card?.light}>
		<Text
			{...titleCss}
			color={theme === 'dark' ? colors?.text?.dark : colors?.text?.light}>
			{item?.title}
		</Text>
		<Flex
			flex={1}
			align='flex-end'>
			<Text
				{...bodyTextCss}
				color={theme === 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light}>
				{item?.description}
			</Text>
		</Flex>
	</Column>
);

const itemCss = {
	p: { base: 6, md: 8 },
	gap: 4,
	borderRadius: '12px',
	// border: '1px solid #333',
	bgColor: colors?.card?.dark,
};

const titleCss = {
	color: colors?.text?.dark,
	fontSize: { base: '2rem', md: '3rem' },
	fontWeight: '800',
	lineHeight: 1,
	fontFamily: fonts.title,
	textTransform: 'uppercase',
};

const bodyTextCss = {
	color: colors?.text?.dark,
	fontFamily: fonts.primary,
	fontSize: { base: '14px', lg: '15px' },
	lineHeight: 1.5,
	textTransform: 'uppercase',
};

export default Servicesv2;
