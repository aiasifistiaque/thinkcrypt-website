'use client';

import Link from 'next/link';
import { Box, Flex, Grid, Heading, Text, useColorMode } from '@chakra-ui/react';
import Page from '../util/Page/Page';
import { fonts } from '../../lib/constants';
import { links } from '../../lib/constants';
import {
	Band,
	CardGrid,
	Faq,
	FeatureRows,
	Frame,
	Lines,
	PillButton,
	RecordCard,
	ScreenFrame,
	SectionHead,
	num,
	toneOf,
} from './sections';

// /website-development/<slug>: one kind of website (Mint panel → Website types). Every word and
// picture is the record's; the contact band is the /website-development page's "cta" content.

const Chip = ({ children, t }) => (
	<Box
		px={4}
		py={2}
		border='1px solid'
		borderColor={t.text}
		borderRadius='99px'
		fontFamily={fonts.primary}
		fontSize='13px'
		textTransform='uppercase'
		color={t.text}>
		{children}
	</Box>
);

// Features with a screenshot as alternating rows, then the rest as cards
const Features = ({ items, t }) => {
	const shown = items.filter(f => f.image);
	const rest = items.filter(f => !f.image);
	return (
		<>
			{shown.length > 0 && (
				<FeatureRows
					items={shown}
					t={t}
				/>
			)}
			{rest.length > 0 && (
				<Box pt={shown.length ? { base: 10, md: 16 } : 0}>
					<CardGrid
						items={rest}
						t={t}
					/>
				</Box>
			)}
		</>
	);
};

const Screens = ({ items, t }) => (
	<Grid
		templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
		gap={{ base: 6, md: 8 }}>
		{items.map((s, i) => {
			const caption = s.caption || s.title;
			return (
				<Flex
					key={i}
					direction='column'
					gap={3}>
					<ScreenFrame
						src={s.image}
						alt={caption}
						t={t}
					/>
					{caption && (
						<Text
							fontFamily={fonts.primary}
							fontSize='13px'
							textTransform='uppercase'
							color={t.sub}>
							{num(i)} — {caption}
						</Text>
					)}
				</Flex>
			);
		})}
	</Grid>
);

const WebsiteTypePage = ({ type, others = [], cta }) => {
	const { colorMode } = useColorMode();
	const t = toneOf(colorMode);
	const inv = { ...t, bg: t.text, text: t.bg, sub: t.bg, line: 'rgba(128,128,128,0.35)' };
	const website = (type.websiteFeatures || []).filter(f => f.title);
	const panel = (type.panelFeatures || []).filter(f => f.title);
	const highlights = (type.highlights || []).filter(f => f.title);
	const siteScreens = (type.websiteScreens || []).filter(s => s.image);
	const panelScreens = (type.panelScreens || []).filter(s => s.image);
	const faq = (type.faq || []).filter(q => q.question && q.answer);

	// Numbered in the order they show, skipping the ones this type leaves empty
	let n = 0;
	const next = () => num(n++);

	return (
		<Page theme={colorMode}>
			<Flex
				as='main'
				direction='column'
				w='full'
				minH='100vh'
				bg={t.bg}>
				{/* The type, what it's for, and its demo website */}
				<Frame
					t={t}
					id='overview'
					pt='64px'>
					<Flex
						borderTop='1px solid'
						borderColor={t.text}
						pt={6}
						justify='space-between'
						fontFamily={fonts.primary}
						fontSize='0.875rem'
						textTransform='uppercase'>
						<Text color={t.text}>{next()}</Text>
						<Text
							as={Link}
							href='/website-development'
							color={t.text}
							_hover={{ textDecoration: 'underline' }}>
							Website development
						</Text>
					</Flex>
					<Grid
						templateColumns={{ base: '1fr', md: '1.4fr 1fr' }}
						gap={{ base: 6, md: 10 }}
						alignItems='end'
						py={{ base: 8, md: 12 }}>
						<Box>
							<Heading
								as='h1'
								fontFamily={fonts.title}
								fontSize={{ base: '3.75rem', md: '7rem', xl: '8.5rem' }}
								fontWeight='800'
								lineHeight='0.92'
								textTransform='uppercase'
								color={t.text}>
								<Lines>{type.name}</Lines>
							</Heading>
							{type.tagline && (
								<Text
									mt={5}
									fontFamily={fonts.primary}
									fontSize={{ base: '15px', md: '18px' }}
									textTransform='uppercase'
									color={t.accent}>
									{type.tagline}
								</Text>
							)}
						</Box>
						<Flex
							direction='column'
							gap={6}
							maxW='520px'
							justifySelf={{ md: 'end' }}>
							{(type.intro || type.summary) && (
								<Text
									fontFamily={fonts.primary}
									fontSize={{ base: '14px', lg: '16px' }}
									lineHeight='1.5'
									textTransform='uppercase'
									color={t.sub}>
									{type.intro || type.summary}
								</Text>
							)}
							<Flex
								gap={3}
								wrap='wrap'>
								<PillButton
									t={t}
									solid
									href={cta?.data?.buttonUrl || links.contact}>
									{cta?.data?.buttonLabel || 'Contact us'}
								</PillButton>
								{(panel.length > 0 || panelScreens.length > 0) && (
									<PillButton
										t={t}
										href='#panel'>
										See the panel
									</PillButton>
								)}
							</Flex>
						</Flex>
					</Grid>
					{type.audience?.length > 0 && (
						<Flex
							gap={2}
							wrap='wrap'
							pb={{ base: 8, md: 12 }}>
							{type.audience.map(a => (
								<Chip
									key={a}
									t={t}>
									{a}
								</Chip>
							))}
						</Flex>
					)}
					<ScreenFrame
						src={type.coverImage}
						alt={`${type.name} — demo website`}
						t={t}
						ratio={16 / 9}
					/>
				</Frame>

				{website.length > 0 && (
					<Frame
						t={t}
						id='website'>
						<SectionHead
							index={next()}
							eyebrow='The website'
							heading={'What your\nvisitors get'}
							text={`Everything a ${type.name.toLowerCase()} needs on the front: designed in your brand, fast on every phone and ready for Google.`}
							t={t}
						/>
						<Features
							items={website}
							t={t}
						/>
					</Frame>
				)}

				{siteScreens.length > 0 && (
					<Frame
						t={t}
						id='demo-website'>
						<SectionHead
							index={next()}
							eyebrow='Demo website'
							heading={'See the\nwebsite'}
							text='Example designs. Yours is made in your brand, with your own photos and words.'
							t={t}
						/>
						<Screens
							items={siteScreens}
							t={t}
						/>
					</Frame>
				)}

				{(panel.length > 0 || panelScreens.length > 0) && (
					<Frame
						t={t}
						id='panel'>
						<SectionHead
							index={next()}
							eyebrow='The panel'
							heading={'What your\nteam runs it with'}
							text='Your own panel behind the website: every booking, order, message and page in one place, with roles for your team.'
							t={t}
						/>
						{panel.length > 0 && (
							<Features
								items={panel}
								t={t}
							/>
						)}
						{panelScreens.length > 0 && (
							<Box pt={panel.length ? { base: 10, md: 16 } : 0}>
								<Screens
									items={panelScreens}
									t={t}
								/>
							</Box>
						)}
					</Frame>
				)}

				{highlights.length > 0 && (
					<Frame
						t={t}
						id='special-features'>
						<Box
							bg={inv.bg}
							borderRadius='12px'
							p={{ base: 6, md: 12 }}>
							<SectionHead
								index={next()}
								eyebrow='Special features'
								heading={'Made for\nthis business'}
								t={inv}
							/>
							<Grid
								templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
								columnGap={10}>
								{highlights.map((h, i) => (
									<Flex
										key={i}
										direction='column'
										gap={2}
										py={6}
										borderTop='1px solid'
										borderColor={inv.line}>
										<Flex
											gap={4}
											align='baseline'>
											<Text
												fontFamily={fonts.primary}
												fontSize='13px'
												color={t.accent}>
												{num(i)}
											</Text>
											<Heading
												as='h3'
												fontFamily={fonts.title}
												fontSize={{ base: '2rem', md: '2.75rem' }}
												fontWeight='400'
												lineHeight='1'
												textTransform='uppercase'
												color={inv.text}>
												{h.title}
											</Heading>
										</Flex>
										{h.description && (
											<Text
												pl={{ md: 9 }}
												fontFamily={fonts.primary}
												fontSize='14px'
												lineHeight='1.5'
												textTransform='uppercase'
												color={inv.sub}
												opacity={0.8}>
												{h.description}
											</Text>
										)}
									</Flex>
								))}
							</Grid>
						</Box>
					</Frame>
				)}

				{(type.pages?.length > 0 || type.integrations?.length > 0) && (
					<Frame
						t={t}
						id='details'>
						<SectionHead
							index={next()}
							eyebrow='Included'
							heading={'Pages and\nconnections'}
							t={t}
						/>
						<Grid
							templateColumns={{ base: '1fr', md: '1fr 1fr' }}
							gap={{ base: 10, md: 16 }}>
							{[
								['Pages on the website', type.pages],
								['Works with', type.integrations],
							]
								.filter(([, list]) => list?.length)
								.map(([label, list]) => (
									<Box key={label}>
										<Text
											mb={4}
											fontFamily={fonts.primary}
											fontSize='13px'
											textTransform='uppercase'
											color={t.accent}>
											{label}
										</Text>
										<Flex
											gap={2}
											wrap='wrap'>
											{list.map(item => (
												<Chip
													key={item}
													t={t}>
													{item}
												</Chip>
											))}
										</Flex>
									</Box>
								))}
						</Grid>
					</Frame>
				)}

				{faq.length > 0 && (
					<Faq
						section={{
							slug: 'faq',
							data: {
								eyebrow: 'FAQ',
								heading: 'Questions',
								items: faq.map(q => ({ title: q.question, description: q.answer })),
							},
						}}
						index={n++}
						t={t}
					/>
				)}

				{cta && (
					<Band
						section={cta}
						index={n++}
						t={t}
					/>
				)}

				{others.length > 0 && (
					<Frame
						t={t}
						id='more-website-types'>
						<SectionHead
							index={next()}
							eyebrow='More website types'
							heading={'Other websites\nwe build'}
							t={t}
						/>
						<Grid
							templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
							columnGap={{ base: 4, md: 6 }}
							rowGap={10}>
							{others.map(o => (
								<RecordCard
									key={o._id}
									record={o}
									d={{ link: '/website-development/{slug}' }}
									t={t}
								/>
							))}
						</Grid>
					</Frame>
				)}
			</Flex>
		</Page>
	);
};

export default WebsiteTypePage;
