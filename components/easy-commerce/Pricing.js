'use client';

import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { BUILD_MAX, DESIGNS, PLANS, limitText, taka } from '../../lib/easyCommerce';
import { Frame, PillButton, SectionHead, num } from '../website-development/sections';

// Prices: the build (once) and hosting (a month). The words are the page content "pricing"; the numbers are
// lib/easyCommerce.js, the same ones the estimate form and /api/ec-lead use.

const Price = ({ amount, unit, t }) => (
	<Flex
		align='baseline'
		gap={2}>
		<Text
			fontFamily={fonts.primary}
			fontSize='13px'
			color={t.sub}>
			BDT
		</Text>
		<Text
			fontFamily={fonts.title}
			fontSize={{ base: '3rem', md: '4rem' }}
			lineHeight='1'
			color={t.text}>
			{amount}
		</Text>
		{unit && (
			<Text
				fontFamily={fonts.primary}
				fontSize='13px'
				textTransform='uppercase'
				color={t.sub}>
				{unit}
			</Text>
		)}
	</Flex>
);

const Card = ({ title, children, highlight, t }) => (
	<Flex
		direction='column'
		gap={5}
		bg={highlight ? t.text : t.card}
		color={highlight ? t.bg : t.text}
		borderRadius='12px'
		p={6}>
		<Text
			fontFamily={fonts.primary}
			fontSize='13px'
			textTransform='uppercase'
			color={highlight ? t.bg : t.accent}>
			{title}
		</Text>
		{children}
	</Flex>
);

const Group = ({ title, children, t }) => (
	<Box mt={{ base: 8, md: 12 }}>
		<Heading
			as='h3'
			mb={4}
			fontFamily={fonts.title}
			fontSize='2rem'
			fontWeight='400'
			textTransform='uppercase'
			color={t.text}>
			{title}
		</Heading>
		{children}
	</Box>
);

const Note = ({ children, t, invert }) => (
	<Text
		fontFamily={fonts.primary}
		fontSize='14px'
		lineHeight='1.45'
		textTransform='uppercase'
		color={invert ? t.bg : t.sub}
		opacity={invert ? 0.8 : 1}>
		{children}
	</Text>
);

const Pricing = ({ section, index, t }) => {
	const d = section.data;
	return (
		<Frame
			t={t}
			id={section.slug}>
			<SectionHead
				index={num(index)}
				eyebrow={d.eyebrow}
				heading={d.heading}
				text={d.text}
				t={t}
			/>

			<Group
				title='Build — paid once'
				t={t}>
				<Grid
					templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
					gap={{ base: 3, md: 4 }}>
					{DESIGNS.map(x => (
						<Card
							key={x.value}
							title={x.label}
							t={t}>
							<Price
								amount={`${taka(x.price)}${x.value === 'custom' ? '+' : ''}`}
								t={t}
							/>
							<Note t={t}>{x.note}</Note>
						</Card>
					))}
				</Grid>
				<Box mt={4}>
					<Note t={t}>
						From BDT {taka(DESIGNS[0].price)} up to BDT {taka(BUILD_MAX)}, with any custom features you need quoted before we start.
					</Note>
				</Box>
			</Group>

			<Group
				title='Hosting — a month'
				t={t}>
				<Grid
					templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
					gap={{ base: 3, md: 4 }}>
					{PLANS.map((p, i) => (
						<Card
							key={p.value}
							title={p.name}
							highlight={i === 1}
							t={t}>
							<Flex
								align='baseline'
								gap={2}>
								<Text
									fontFamily={fonts.primary}
									fontSize='13px'
									opacity={0.7}>
									BDT
								</Text>
								<Text
									fontFamily={fonts.title}
									fontSize={{ base: '3rem', md: '4rem' }}
									lineHeight='1'>
									{taka(p.price)}
								</Text>
								<Text
									fontFamily={fonts.primary}
									fontSize='13px'
									textTransform='uppercase'
									opacity={0.7}>
									/ month
								</Text>
							</Flex>
							<Note
								t={t}
								invert={i === 1}>
								{limitText(p.products)} products · {limitText(p.images)} images
							</Note>
						</Card>
					))}
				</Grid>
				<Box mt={4}>
					<Note t={t}>Fully hosted by us: servers, SSL, backups and updates. Your domain is not included.</Note>
				</Box>
			</Group>

			{d.buttonLabel && (
				<Box mt={10}>
					<PillButton
						t={t}
						solid
						href={d.buttonUrl}>
						{d.buttonLabel}
					</PillButton>
				</Box>
			)}
		</Frame>
	);
};

export default Pricing;
