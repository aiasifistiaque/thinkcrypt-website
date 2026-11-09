'use client';

import Link from 'next/link';
import { AspectRatio, Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { Frame, SectionHead, num, toneOf } from '../website-development/sections';

// "Our expertise" on the home page: the Mint panel's content "expertise" on "/" (a cards content:
// heading, text, and one card per item with its picture, small label, title, words and link).
// The first two cards are large, side by side; the rest sit four to a row.
const Card = ({ item, i, t, large }) => {
	const inner = (
		<Flex
			direction='column'
			h='full'
			bg={t.card}
			borderRadius='16px'
			overflow='hidden'
			transition='transform .35s, box-shadow .35s'
			_groupHover={{ transform: 'translateY(-6px)', boxShadow: '0 30px 60px -30px rgba(0,0,0,0.35)' }}>
			{item.image && (
				<AspectRatio ratio={large ? 16 / 9 : 16 / 10}>
					<Box p={large ? { base: 4, md: 6 } : 4}>
						<Image
							src={item.image}
							alt={item.title}
							w='full'
							h='full'
							objectFit='contain'
							loading='lazy'
						/>
					</Box>
				</AspectRatio>
			)}
			<Flex
				direction='column'
				gap={3}
				p={{ base: 6, md: large ? 8 : 6 }}
				pt={item.image ? 2 : undefined}
				flex={1}>
				<Flex
					justify='space-between'
					fontFamily={fonts.primary}
					fontSize='13px'
					textTransform='uppercase'
					color={t.accent}>
					<Text color={t.accent}>{item.subTitle}</Text>
					<Text color={t.accent}>{num(i)}</Text>
				</Flex>
				<Heading
					as='h3'
					fontFamily={fonts.title}
					fontSize={large ? { base: '2.5rem', md: '3.75rem' } : { base: '2.25rem', md: '2.75rem' }}
					fontWeight='400'
					lineHeight='0.95'
					textTransform='uppercase'
					color={t.text}>
					{item.title}
				</Heading>
				<Text
					fontFamily={fonts.primary}
					fontSize={{ base: '15px', md: large ? '17px' : '15px' }}
					lineHeight='1.55'
					color={t.sub}>
					{item.description}
				</Text>
				{item.url && (
					<Text
						mt='auto'
						pt={2}
						fontFamily={fonts.primary}
						fontSize='13px'
						textTransform='uppercase'
						letterSpacing='0.5px'
						color={t.text}>
						Learn more ↗
					</Text>
				)}
			</Flex>
		</Flex>
	);
	return item.url ? (
		<Box
			as={Link}
			href={item.url}
			role='group'
			display='block'
			gridColumn={large ? { lg: 'span 6' } : { lg: 'span 3' }}>
			{inner}
		</Box>
	) : (
		<Box
			role='group'
			gridColumn={large ? { lg: 'span 6' } : { lg: 'span 3' }}>
			{inner}
		</Box>
	);
};

const ExpertiseSection = ({ theme, section }) => {
	if (!section) return null;
	const t = toneOf(theme);
	const d = section.data || {};
	const items = (d.items || []).filter(i => i?.title);
	return (
		<Frame
			t={t}
			id='expertise'>
			<SectionHead
				index='03'
				eyebrow={d.eyebrow}
				heading={d.heading}
				text={d.text}
				t={t}
			/>
			<Grid
				templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(12, 1fr)' }}
				gap={{ base: 3, md: 4 }}>
				{items.map((item, i) => (
					<Card
						key={item.title}
						item={item}
						i={i}
						t={t}
						large={i < 2}
					/>
				))}
			</Grid>
		</Frame>
	);
};

export default ExpertiseSection;
