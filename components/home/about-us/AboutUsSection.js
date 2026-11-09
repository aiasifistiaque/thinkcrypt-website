'use client';

import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { fonts } from '../../../lib/constants';
import { Frame, PillButton, SectionHead, toneOf } from '../../website-development/sections';

// The home page's second section: who we are. Its words, picture, numbers and buttons are the Mint
// panel's content "about-us" on the home page (text paragraphs split on a blank line; items =
// the numbers, title = the number, subTitle = what it counts). The seed copy (lib/content/home.js)
// shows only when the panel can't be reached.
const AboutUsSection = ({ theme, section }) => {
	if (!section) return null;
	const t = toneOf(theme);
	const d = section.data || {};
	const paragraphs = String(d.text || '')
		.split(/\n\s*\n/)
		.filter(Boolean);
	const stats = (d.items || []).filter(i => i?.title);

	return (
		<Frame
			t={t}
			id='about-us'>
			<SectionHead
				index='02'
				eyebrow={d.eyebrow}
				heading={d.heading}
				text={d.subheading}
				t={t}
			/>
			<Grid
				templateColumns={{ base: '1fr', lg: d.image ? '1fr 1.15fr' : '1fr' }}
				gap={{ base: 8, md: 14 }}
				alignItems='center'>
				<Flex
					direction='column'
					gap={6}
					maxW='640px'>
					{paragraphs.map((p, i) => (
						<Text
							key={i}
							fontFamily={fonts.primary}
							fontSize={i === 0 ? { base: '20px', md: '26px' } : { base: '16px', md: '18px' }}
							lineHeight={i === 0 ? '1.45' : '1.65'}
							color={i === 0 ? t.text : t.sub}>
							{p}
						</Text>
					))}
					<Flex
						gap={3}
						wrap='wrap'
						pt={2}>
						<PillButton
							t={t}
							solid
							href={d.buttonUrl}>
							{d.buttonLabel}
						</PillButton>
						<PillButton
							t={t}
							href={d.secondaryUrl}>
							{d.secondaryLabel}
						</PillButton>
					</Flex>
				</Flex>
				{d.image && (
					<Box
						borderRadius='16px'
						overflow='hidden'
						bg={t.card}>
						<Image
							src={d.image}
							alt={d.imageAlt || ''}
							w='full'
							loading='lazy'
						/>
					</Box>
				)}
			</Grid>
			{stats.length > 0 && (
				<Grid
					templateColumns={{ base: 'repeat(2, 1fr)', md: `repeat(${Math.min(stats.length, 4)}, 1fr)` }}
					gap={{ base: 3, md: 4 }}
					pt={{ base: 10, md: 14 }}>
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
			)}
		</Frame>
	);
};

export default AboutUsSection;
