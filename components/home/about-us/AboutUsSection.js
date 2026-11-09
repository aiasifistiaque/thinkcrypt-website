'use client';

import { Flex, Grid, Text } from '@chakra-ui/react';
import { fonts } from '../../../lib/constants';
import { toneOf } from '../../website-development/sections';
import TitleSection from './TitleSection';

// The home page's second section. Its words and button are the Mint panel's content "about-us" on
// the home page (heading lines → the two title lines, text paragraphs split on a blank line,
// items = the number cards under it: title = the number, subTitle = what it counts);
// the panel's seed copy (lib/content/home.js) shows only when the panel can't be reached.
const Stats = ({ stats, theme }) => {
	const t = toneOf(theme);
	return (
		<Grid
			templateColumns={{ base: 'repeat(2, 1fr)', md: `repeat(${Math.min(stats.length, 4)}, 1fr)` }}
			gap={{ base: 3, md: 4 }}
			pt={{ base: 8, md: 12 }}>
			{stats.map((s, i) => (
				<Flex
					key={i}
					direction='column'
					justify='space-between'
					gap={6}
					bg={t.card}
					borderRadius='16px'
					p={{ base: 5, md: 7 }}
					minH={{ md: '190px' }}>
					<Text
						fontFamily={fonts.title}
						fontSize={{ base: '3rem', md: '5rem' }}
						lineHeight='0.9'
						color={t.text}>
						{s.title}
					</Text>
					<Text
						fontFamily={fonts.primary}
						fontSize={{ base: '13px', md: '15px' }}
						lineHeight='1.4'
						textTransform='uppercase'
						color={t.sub}>
						{s.subTitle || s.description}
					</Text>
				</Flex>
			))}
		</Grid>
	);
};

const AboutUsSection = ({ theme, section }) => {
	if (!section) return null;
	const d = section.data;
	const [titleTop, ...rest] = String(d.heading || '').split('\n');
	const [first, ...more] = String(d.text || '').split(/\n\s*\n/);
	const stats = (d.items || []).filter(i => i?.title);

	return (
		<TitleSection
			colorMode={theme}
			pb='92px'
			titleTop={titleTop}
			title={d.eyebrow}
			index='02'
			titleBottom={rest.join(' ')}
			paragraph={more.join('\n\n')}
			btn={d.buttonLabel}
			href={d.buttonUrl}
			footer={stats.length > 0 && <Stats stats={stats} theme={theme} />}
			clickEvent={
				d.buttonLabel && {
					elementType: 'link',
					elementName: d.buttonLabel,
					elementId: 'home-about-us',
					elementSlug: 'home-about-us',
					elementText: d.buttonLabel,
					elementHref: d.buttonUrl,
					clickType: 'click',
				}
			}>
			{first}
		</TitleSection>
	);
};

export default AboutUsSection;
