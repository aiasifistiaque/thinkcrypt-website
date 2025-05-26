// import Column from '/components/util/Column';
// import RobotoText from '@/components/util/text/RobotoText';
// import { fonts, layout, padding } from '@/lib/constants';
// import { AboutUs } from '@/lib/staticElements';
import { border, Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { fonts, layout } from '../../lib/constants';
import RobotoText from '../../util/text/RobotoText';
import Column from '../../util/Column';
import { AboutUs, padding } from '../../../lib/constants';
import { colors, styles } from '../../../theme/styles';
import TitleSection from './TitleSection';

const BORDER = styles.border.light;
const AboutUsSection = ({ theme }) => {
	const bg = theme === 'dark' ? colors?.background?.dark : colors?.background?.light;
	const primaryColor = theme === 'dark' ? colors?.text?.dark : colors?.text?.light;
	const secondaryColor =
		theme === 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;
	const borderColor = theme === 'dark' ? colors?.background?.light : colors?.background?.dark;
	return (
		<TitleSection
			colorMode={theme}
			pb='92px'
			titleTop='We started'
			title='Our vision'
			index='02'
			titleBottom='back in 2017'
			paragraph='	Today, we build scalable platforms and custom tools that streamline workflows and drive
					growth. From MVPs to full systems, we handle the tech so businesses can focus on reaching
					their goals.'>
			Thinkcrypt was founded in 2017 to help entrepreneurs turn their ideas into reality using
			modern technology. We aimed to bridge the gap between vision and execution by delivering
			smart, cost-efficient digital solutions.
		</TitleSection>
	);
};

{
	/* <Flex {...containerCss}>
	<Flex
		{...visionContainerCss}
		borderColor={borderColor}>
		<Text
			color={primaryColor}
			fontFamily={fonts.body}>
			01
		</Text>
		<RobotoText
			color={primaryColor}
			fontSize={'0.875rem'}>
			OUR VISION
		</RobotoText>
	</Flex>

	<Column
		{...bodyCss}
		borderColor={borderColor}>
		<Grid
			flex={1}
			gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
			gap={5}>
			<Heading
				{...headingCss}
				color={primaryColor}>
				WE STARTED
				<br />
				BACK IN 2017
			</Heading>

			<Flex
				align='flex-end'
				justify='flex-end'>
				<Flex
					gap={8}
					flexDir='column'
					maxW={{ base: '100%', md: '70%' }}>
					<RobotoText
						{...bodyTextCss}
						color={secondaryColor}>
						Thinkcrypt was founded in 2017 to help entrepreneurs turn their ideas into reality using
						modern technology. We aimed to bridge the gap between vision and execution by delivering
						smart, cost-efficient digital solutions.
					</RobotoText>
					<RobotoText
						{...bodyTextCss}
						color={secondaryColor}>
						Today, we build scalable platforms and custom tools that streamline workflows and drive
						growth. From MVPs to full systems, we handle the tech so businesses can focus on
						reaching their goals.
					</RobotoText>
				</Flex>
			</Flex>
		</Grid>
	</Column>
</Flex>; */
}

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
	color: colors?.text?.dark,
	fontSize: { base: '14px', lg: '16px' },

	letterSpacing: { base: '0px', md: '0px' },
	lineHeight: { base: '1.5', md: '1.6' },
	fontFamily: fonts.primary,
	textTransform: 'uppercase',
};

export default AboutUsSection;
