'use client';

import { useState } from 'react';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { Frame, PillButton, ScreenFrame, SectionHead, num } from '../website-development/sections';

// The demo stores (the panel's "EC demos"): each store's website, its commerce panel and a demo login,
// so a visitor can try both sides. The section's words are the page content "demos".
// A store with a demoUrl (its panel's demo link) opens the panel signed in for an hour, so no email or
// password is shown; the others still show the shared login.

const hostOf = url => {
	try {
		return new URL(url).host;
	} catch {
		return url || '';
	}
};

const Copy = ({ value, t }) => {
	const [done, setDone] = useState(false);
	return (
		<Box
			as='button'
			type='button'
			onClick={() => {
				navigator.clipboard?.writeText(value).then(() => {
					setDone(true);
					setTimeout(() => setDone(false), 1500);
				});
			}}
			fontFamily={fonts.primary}
			fontSize='11px'
			textTransform='uppercase'
			color={done ? t.accent : t.sub}
			_hover={{ color: t.text }}
			flexShrink={0}
			aria-label={`Copy ${value}`}>
			{done ? 'Copied' : 'Copy'}
		</Box>
	);
};

// The label sits above its value: side by side, "Website" and "Password" wrapped in the narrow cards
const Row = ({ label, value, href, copy, t }) => (
	<Flex
		align='flex-end'
		gap={3}
		py={2.5}
		borderTop='1px solid'
		borderColor={t.line}
		fontFamily={fonts.primary}
		fontSize='13px'>
		<Box
			flex={1}
			minW={0}>
			<Text
				fontSize='11px'
				textTransform='uppercase'
				whiteSpace='nowrap'
				color={t.sub}>
				{label}
			</Text>
			<Text
				mt={1}
				noOfLines={1}
				color={t.text}
				wordBreak='break-all'>
				{href ? (
					<Box
						as='a'
						href={href}
						target='_blank'
						rel='noopener'
						textDecoration='underline'
						textUnderlineOffset='3px'>
						{value}
					</Box>
				) : (
					value
				)}
			</Text>
		</Box>
		{copy && (
			<Copy
				value={value}
				t={t}
			/>
		)}
	</Flex>
);

export const DemoCard = ({ demo, t, i, startHref }) => (
	<Flex
		direction='column'
		gap={5}
		bg={t.card}
		borderRadius='12px'
		p={{ base: 4, md: 6 }}>
		<Box
			as='a'
			href={demo.siteUrl}
			target='_blank'
			rel='noopener'
			display='block'>
			<ScreenFrame
				src={demo.image}
				alt={`${demo.name} demo store`}
				address={hostOf(demo.siteUrl)}
				t={t}
			/>
		</Box>
		<Box>
			<Flex
				justify='space-between'
				align='baseline'
				gap={3}>
				<Heading
					as='h3'
					fontFamily={fonts.title}
					fontSize='2.25rem'
					fontWeight='400'
					lineHeight='1'
					textTransform='uppercase'
					color={t.text}>
					{demo.name}
				</Heading>
				<Text
					fontFamily={fonts.primary}
					fontSize='13px'
					color={t.accent}>
					{num(i)}
				</Text>
			</Flex>
			{demo.kind && (
				<Text
					mt={1}
					fontFamily={fonts.primary}
					fontSize='12px'
					textTransform='uppercase'
					color={t.accent}>
					{demo.kind}
				</Text>
			)}
			{demo.summary && (
				<Text
					mt={3}
					fontFamily={fonts.primary}
					fontSize='14px'
					lineHeight='1.45'
					textTransform='uppercase'
					color={t.sub}>
					{demo.summary}
				</Text>
			)}
		</Box>
		<Box>
			<Row
				label='Website'
				value={hostOf(demo.siteUrl)}
				href={demo.siteUrl}
				t={t}
			/>
			{(demo.demoUrl || demo.panelUrl) && (
				<Row
					label='Panel'
					value={hostOf(demo.demoUrl || demo.panelUrl)}
					href={demo.demoUrl || demo.panelUrl}
					t={t}
				/>
			)}
			{demo.demoUrl && (
				<Row
					label='Login'
					value='None needed — opens signed in for an hour'
					t={t}
				/>
			)}
			{!demo.demoUrl && demo.loginEmail && (
				<Row
					label='Email'
					value={demo.loginEmail}
					copy
					t={t}
				/>
			)}
			{!demo.demoUrl && demo.demoPassword && (
				<Row
					label='Password'
					value={demo.demoPassword}
					copy
					t={t}
				/>
			)}
		</Box>
		<Flex
			gap={2}
			wrap='wrap'
			mt='auto'>
			<PillButton
				t={t}
				solid
				href={demo.siteUrl}>
				Visit store
			</PillButton>
			{(demo.demoUrl || demo.panelUrl) && (
				<PillButton
					t={t}
					href={demo.demoUrl || demo.panelUrl}>
					{demo.demoUrl ? 'Try the panel' : 'Open panel'}
				</PillButton>
			)}
			{startHref && (
				<PillButton
					t={t}
					href={`${startHref}?demo=${encodeURIComponent(demo.slug || demo.name)}#estimate`}>
					Get this design
				</PillButton>
			)}
		</Flex>
	</Flex>
);

const DemoStores = ({ section, index, t, demos = [], startHref }) => {
	const d = section.data;
	if (!demos.length) return null;
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
			<Grid
				templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
				gap={{ base: 3, md: 4 }}>
				{demos.map((demo, i) => (
					<DemoCard
						key={demo._id || demo.slug}
						demo={demo}
						i={i}
						t={t}
						startHref={startHref}
					/>
				))}
			</Grid>
			{d.buttonLabel && (
				<Box mt={10}>
					<PillButton
						t={t}
						href={d.buttonUrl}>
						{d.buttonLabel}
					</PillButton>
				</Box>
			)}
			{d.subheading && (
				<Text
					mt={6}
					fontFamily={fonts.primary}
					fontSize='12px'
					textTransform='uppercase'
					color={t.sub}>
					{d.subheading}
				</Text>
			)}
		</Frame>
	);
};

export default DemoStores;
