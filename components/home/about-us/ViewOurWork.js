// import Column from '/components/util/Column';
// import RobotoText from '@/components/util/text/RobotoText';
// import { fonts, layout, padding } from '@/lib/constants';
// import { AboutUs } from '@/lib/staticElements';
import { border, Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { fonts, layout } from '../../lib/constants';
import RobotoText from '../../util/text/RobotoText';
import Column from '../../util/Column';
import { AboutUs, padding } from '../../../lib/constants';
import { colors, styles } from '../../../theme/styles';
import Link from 'next/link';
import TitleSection from './TitleSection';

const BORDER = styles.border.light;
const ViewOurWork = ({ theme }) => {
	const bg = theme === 'dark' ? colors?.background?.dark : colors?.background?.light;
	const primaryColor = theme === 'dark' ? colors?.text?.dark : colors?.text?.light;
	const secondaryColor =
		theme === 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;
	const borderColor = theme === 'dark' ? colors?.background?.light : colors?.background?.dark;
	return (
		<>
			<TitleSection
				pb={{
					base: '44px',
					md: '92px',
				}}
				index='03'
				btn='VIEW OUR WORK'
				href='/portfolio'
				colorMode={theme}
				title='Our Work'
				titleTop='Explore Our'
				titleBottom='Full Portfolio'
				paragraph='Take a look at our past projects to see how we turn ideas into working products. If you like what you see, we can build something great for you too.'>
				{`We’ve helped startups and businesses build websites, apps, and digital tools that solve
				real problems. Our focus is on making things fast, modern, and easy to use.`}
			</TitleSection>
		</>
	);
};

const containerCss = {
	direction: 'column',
	gap: { base: 8, md: 16 },
	pb: { base: '3rem', md: '8rem' },
	px: { base: padding.baseBody, lg: padding.lgBody },
	mx: 'auto',
	pt: '92px',
	maxW: layout.MAX_W,
};

const visionContainerCss = {
	borderTop: '1px solid',
	borderColor: colors?.background?.light,
	pt: '92px',
	w: 'full',
	justify: 'space-between',
};

const bodyCss = {
	borderBottom: '1px solid',
	borderColor: colors?.background?.light,
	gap: 5,
	minH: '80vh',
	pb: '64px',
	flex: 5,
};

const headingCss = {
	fontFamily: 'Bebas Neue',
	fontSize: { base: '4rem', md: '8rem' },
	fontWeight: '600',
	lineHeight: '1',
	letterSpacing: '2px',
	color: colors?.text?.dark,
};

const bodyTextCss = {
	color: colors?.textSecondary?.dark,
	fontSize: { base: '14px', lg: '16px' },

	letterSpacing: { base: '0px', md: '0px' },
	lineHeight: { base: '1.5', md: '1.6' },
	fontFamily: fonts.primary,
	textTransform: 'uppercase',
};

export default ViewOurWork;
