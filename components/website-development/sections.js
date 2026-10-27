'use client';

import Link from 'next/link';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AspectRatio,
	Box,
	Flex,
	Grid,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import { colors } from '../../theme/styles';
import { fonts, layout, padding } from '../../lib/constants';

// The sections /website-development is made of. Each renders one typed content from the
// Mint panel ({ slug, type, data }); its words and pictures are the content's fields.

export const toneOf = mode => {
	const dark = mode === 'dark';
	return {
		dark,
		bg: dark ? colors.background.dark : colors.background.light,
		text: dark ? colors.text.dark : colors.text.light,
		sub: dark ? colors.textSecondary.dark : colors.textSecondary.light,
		accent: dark ? colors.text.blue : colors.text.darkBlue,
		card: dark ? colors.card.dark : colors.card.light,
		line: dark ? '#333' : colors.border.light,
	};
};

const pad = { px: { base: padding.baseBody, lg: padding.lgBody } };
export const num = i => String(i + 1).padStart(2, '0');

// "Websites you\nrun yourself" → two lines
export const Lines = ({ children }) =>
	String(children || '')
		.split('\n')
		.map((line, i, all) => (
			<span key={i}>
				{line}
				{i < all.length - 1 && (
					<>
						{' '}
						<br />
					</>
				)}
			</span>
		));

const isExternal = url => /^https?:\/\//.test(url || '');

export const PillButton = ({ href, children, solid, t, ...props }) =>
	href && children ? (
		<Box
			as={Link}
			href={href}
			{...(isExternal(href) && { target: '_blank', rel: 'noopener' })}
			display='inline-flex'
			alignItems='center'
			px={6}
			h='48px'
			borderRadius='99px'
			border='1px solid'
			borderColor={t.text}
			bg={solid ? t.text : 'transparent'}
			color={solid ? t.bg : t.text}
			fontFamily={fonts.primary}
			fontSize='14px'
			textTransform='uppercase'
			letterSpacing='0.5px'
			transition='all .2s'
			_hover={{ bg: solid ? 'transparent' : t.text, color: solid ? t.text : t.bg }}
			{...props}>
			{children}
		</Box>
	) : null;

// The top of a section: a rule, its number and small line, then the heading and text
export const SectionHead = ({ index, eyebrow, heading, text, t, as = 'h2', size = 'lg' }) => (
	<Flex
		direction='column'
		gap={{ base: 6, md: 10 }}
		pb={{ base: 8, md: 14 }}>
		<Flex
			borderTop='1px solid'
			borderColor={t.text}
			pt={6}
			justify='space-between'
			fontFamily={fonts.primary}
			fontSize='0.875rem'
			textTransform='uppercase'
			color={t.text}>
			<Text color={t.text}>{index}</Text>
			<Text color={t.text}>{eyebrow}</Text>
		</Flex>
		<Grid
			templateColumns={{ base: '1fr', md: '1.4fr 1fr' }}
			gap={{ base: 5, md: 10 }}
			alignItems='end'>
			<Heading
				as={as}
				fontFamily={fonts.title}
				fontSize={size === 'xl' ? { base: '4rem', md: '8rem', xl: '10rem' } : { base: '3rem', md: '6rem' }}
				fontWeight='800'
				lineHeight='0.95'
				letterSpacing='1px'
				textTransform='uppercase'
				color={t.text}>
				<Lines>{heading}</Lines>
			</Heading>
			{text && (
				<Text
					fontFamily={fonts.primary}
					fontSize={{ base: '14px', lg: '16px' }}
					lineHeight='1.5'
					textTransform='uppercase'
					color={t.sub}
					maxW='520px'
					justifySelf={{ md: 'end' }}>
					{text}
				</Text>
			)}
		</Grid>
	</Flex>
);

export const Frame = ({ t, id, children, ...props }) => (
	<Box
		as='section'
		id={id}
		bg={t.bg}
		{...pad}
		py={{ base: 12, md: 20 }}
		scrollMarginTop='64px'
		{...props}>
		{children}
	</Box>
);

export const Picture = ({ src, alt, ratio = 16 / 10, radius = '12px' }) =>
	src ? (
		<AspectRatio
			ratio={ratio}
			w='full'>
			<Image
				src={src}
				alt={alt || ''}
				objectFit='cover'
				borderRadius={radius}
				loading='lazy'
			/>
		</AspectRatio>
	) : null;

// A screenshot in a window: three dots and an address bar over the picture, for panel and demo-site screens
export const ScreenFrame = ({ src, alt, address, t, ratio = 16 / 10 }) =>
	src ? (
		<Box
			w='full'
			borderRadius='12px'
			overflow='hidden'
			border='1px solid'
			borderColor={t.line}
			bg={t.card}
			boxShadow='0 18px 40px -24px rgba(0,0,0,0.35)'>
			<Flex
				align='center'
				gap='6px'
				px={3}
				h='30px'
				borderBottom='1px solid'
				borderColor={t.line}>
				{['#ff5f57', '#febc2e', '#28c840'].map(c => (
					<Box
						key={c}
						w='9px'
						h='9px'
						borderRadius='full'
						bg={c}
					/>
				))}
				{address && (
					<Text
						flex={1}
						mx={3}
						px={3}
						h='18px'
						lineHeight='18px'
						borderRadius='99px'
						bg={t.bg}
						fontFamily={fonts.primary}
						fontSize='10px'
						color={t.sub}
						noOfLines={1}
						textAlign='center'>
						{address}
					</Text>
				)}
			</Flex>
			<AspectRatio
				ratio={ratio}
				w='full'>
				<Image
					src={src}
					alt={alt || ''}
					objectFit='cover'
					objectPosition='top'
					loading='lazy'
				/>
			</AspectRatio>
		</Box>
	) : null;

// A drawn illustration (an .svg, or a picture named "illustration-…" that has its own window drawn
// in) in the panel's picture field, shown as it is, without a window
export const isIllustration = src => /\.svg($|\?)|illustration-/i.test(src || '');
export const Illustration = ({ src, alt, ratio = 16 / 10 }) =>
	src ? (
		<AspectRatio
			ratio={ratio}
			w='full'>
			{/* In a Box: AspectRatio crops an img that is its own child (object-fit: cover) */}
			<Box>
				<Image
					src={src}
					alt={alt || ''}
					w='full'
					h='full'
					objectFit='contain'
					borderRadius='12px'
					loading='lazy'
				/>
			</Box>
		</AspectRatio>
	) : null;

/* ----------------------------------------------------------------- hero */

export const Hero = ({ section, index = 0, t }) => {
	const d = section.data;
	return (
		<Frame
			t={t}
			id={section.slug}
			pt={layout.NAV_HEIGHT}>
			<SectionHead
				as='h1'
				size='xl'
				index={num(index)}
				eyebrow={d.eyebrow}
				heading={d.heading}
				t={t}
			/>
			<Grid
				templateColumns={{ base: '1fr', md: '1.4fr 1fr' }}
				gap={{ base: 8, md: 10 }}
				pb={{ base: 10, md: 16 }}>
				<Grid
					templateColumns={`repeat(${Math.max(d.items?.length || 1, 1)}, 1fr)`}
					gap={4}
					alignSelf='end'>
					{d.items?.map((item, i) => (
						<Box
							key={i}
							borderTop='1px solid'
							borderColor={t.line}
							pt={3}>
							<Text
								fontFamily={fonts.title}
								fontSize={{ base: '2rem', md: '3.5rem' }}
								lineHeight='1'
								color={t.text}>
								{item.title}
							</Text>
							<Text
								fontFamily={fonts.primary}
								fontSize={{ base: '11px', md: '13px' }}
								lineHeight='1.4'
								mt={1}
								textTransform='uppercase'
								color={t.sub}>
								{item.subTitle}
							</Text>
						</Box>
					))}
				</Grid>
				<Flex
					direction='column'
					gap={6}
					justifySelf={{ md: 'end' }}
					maxW='520px'>
					<Text
						fontFamily={fonts.primary}
						fontSize={{ base: '14px', lg: '16px' }}
						lineHeight='1.5'
						textTransform='uppercase'
						color={t.sub}>
						{d.text}
					</Text>
					<Flex
						gap={3}
						wrap='wrap'>
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
			</Grid>
			{isIllustration(d.image) ? (
				<Illustration
					src={d.image}
					alt={d.imageAlt}
					ratio={{ base: 4 / 3, md: 21 / 9 }}
				/>
			) : (
				<Picture
					src={d.image}
					alt={d.imageAlt}
					ratio={{ base: 4 / 3, md: 21 / 9 }}
				/>
			)}
		</Frame>
	);
};

/* ---------------------------------------------------------------- cards */

// Cards with a small line over each title — "what you get"
const BigCards = ({ items, t }) => (
	<Grid
		templateColumns={{ base: '1fr', md: `repeat(${Math.min(items.length, 3)}, 1fr)` }}
		gap={{ base: 3, md: 6 }}>
		{items.map((item, i) => (
			<Flex
				key={i}
				direction='column'
				justify='space-between'
				gap={10}
				bg={t.card}
				borderRadius='12px'
				p={{ base: 6, md: 8 }}
				minH={{ md: '340px' }}>
				<Flex
					justify='space-between'
					fontFamily={fonts.primary}
					fontSize='13px'
					textTransform='uppercase'
					color={t.accent}>
					<Text color={t.accent}>{item.subTitle}</Text>
					<Text color={t.accent}>{num(i)}</Text>
				</Flex>
				<Box>
					<Heading
						as='h3'
						fontFamily={fonts.title}
						fontSize={{ base: '2.25rem', md: '3rem' }}
						fontWeight='400'
						lineHeight='1'
						textTransform='uppercase'
						color={t.text}
						mb={4}>
						{item.title}
					</Heading>
					<Text
						fontFamily={fonts.primary}
						fontSize='15px'
						lineHeight='1.5'
						textTransform='uppercase'
						color={t.sub}>
						{item.description}
					</Text>
				</Box>
			</Flex>
		))}
	</Grid>
);

// Cards with pictures (screenshots) — one feature per row, picture on alternating sides
export const FeatureRows = ({ items, t }) => (
	<Flex direction='column'>
		{items.map((item, i) => (
			<Grid
				key={i}
				templateColumns={{ base: '1fr', md: '1.25fr 1fr' }}
				gap={{ base: 6, md: 16 }}
				alignItems='center'
				py={{ base: 8, md: 12 }}
				borderTop='1px solid'
				borderColor={t.line}>
				<Box order={{ md: i % 2 ? 2 : 1 }}>
					{isIllustration(item.image) ? (
						<Illustration
							src={item.image}
							alt={item.title}
						/>
					) : (
						<ScreenFrame
							src={item.image}
							alt={item.title}
							t={t}
						/>
					)}
				</Box>
				<Flex
					direction='column'
					gap={4}
					order={{ md: i % 2 ? 1 : 2 }}>
					<Text
						fontFamily={fonts.primary}
						fontSize='13px'
						textTransform='uppercase'
						color={t.accent}>
						{num(i)}
						{item.subTitle ? ` — ${item.subTitle}` : ''}
					</Text>
					<Heading
						as='h3'
						fontFamily={fonts.title}
						fontSize={{ base: '2.75rem', md: '4.5rem' }}
						fontWeight='400'
						lineHeight='0.95'
						textTransform='uppercase'
						color={t.text}>
						{item.title}
					</Heading>
					<Text
						fontFamily={fonts.primary}
						fontSize={{ base: '14px', md: '16px' }}
						lineHeight='1.5'
						textTransform='uppercase'
						color={t.sub}
						maxW='520px'>
						{item.description}
					</Text>
					{item.url && (
						<PillButton
							t={t}
							href={item.url}
							alignSelf='flex-start'>
							Learn more
						</PillButton>
					)}
				</Flex>
			</Grid>
		))}
	</Flex>
);

// Small cards in a grid — "everything else"
// Columns that fill every row: 4 when the cards divide by 4, else 3 when they divide by 3 (so 6 or
// 9 cards leave no gaps), else 4. Two up on tablets; an odd count that divides by 3 goes three up.
const gridColumns = n => {
	const lg = n % 4 === 0 ? 4 : n % 3 === 0 ? 3 : 4;
	const odd3 = n % 2 === 1 && lg === 3;
	return {
		base: '1fr',
		sm: odd3 ? '1fr' : 'repeat(2, 1fr)',
		md: odd3 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
		lg: `repeat(${lg}, 1fr)`,
	};
};

export const CardGrid = ({ items, t }) => (
	<Grid
		templateColumns={gridColumns(items.length)}
		gap={{ base: 3, md: 4 }}>
		{items.map((item, i) => (
			<Flex
				key={i}
				direction='column'
				gap={6}
				bg={t.card}
				borderRadius='12px'
				p={6}>
				<Text
					fontFamily={fonts.primary}
					fontSize='13px'
					color={t.accent}>
					{num(i)}
				</Text>
				<Box>
					<Heading
						as='h3'
						fontFamily={fonts.title}
						fontSize='2rem'
						fontWeight='400'
						lineHeight='1'
						textTransform='uppercase'
						color={t.text}
						mb={2}>
						{item.title}
					</Heading>
					<Text
						fontFamily={fonts.primary}
						fontSize='14px'
						lineHeight='1.45'
						textTransform='uppercase'
						color={t.sub}>
						{item.description}
					</Text>
				</Box>
			</Flex>
		))}
	</Grid>
);

// Numbered steps along a rule — "how we build it"
const Steps = ({ items, t }) => (
	<Grid
		templateColumns={{ base: '1fr', md: `repeat(${Math.min(items.length, 5)}, 1fr)` }}
		gap={{ base: 6, md: 6 }}>
		{items.map((item, i) => (
			<Flex
				key={i}
				direction='column'
				gap={3}
				borderTop='1px solid'
				borderColor={t.text}
				pt={4}>
				<Text
					fontFamily={fonts.title}
					fontSize={{ base: '3rem', md: '5rem' }}
					lineHeight='1'
					color={t.accent}>
					{num(i)}
				</Text>
				<Heading
					as='h3'
					fontFamily={fonts.title}
					fontSize='2rem'
					fontWeight='400'
					textTransform='uppercase'
					color={t.text}>
					{item.title}
				</Heading>
				<Text
					fontFamily={fonts.primary}
					fontSize='14px'
					lineHeight='1.45'
					textTransform='uppercase'
					color={t.sub}>
					{item.description}
				</Text>
			</Flex>
		))}
	</Grid>
);

// Titles only — a row of large outlined names ("tech stack")
const Chips = ({ items, t }) => (
	<Flex
		wrap='wrap'
		gap={{ base: 2, md: 3 }}>
		{items.map((item, i) => (
			<Box
				key={i}
				px={{ base: 5, md: 8 }}
				py={{ base: 2, md: 3 }}
				border='1px solid'
				borderColor={t.text}
				borderRadius='99px'
				fontFamily={fonts.title}
				fontSize={{ base: '1.75rem', md: '3rem' }}
				lineHeight='1'
				color={t.text}>
				{item.title}
			</Box>
		))}
	</Flex>
);

// How a Cards content looks: by its slug, else by what its cards hold
const CARD_LAYOUTS = { 'what-you-get': BigCards, features: FeatureRows, process: Steps, tech: Chips };
const cardLayout = (slug, items) => {
	const layout = CARD_LAYOUTS[slug];
	// Feature rows need pictures; without them a "features" content is a grid
	if (layout && !(layout === FeatureRows && !items.some(c => c.image))) return layout;
	return items.some(c => c.image) ? FeatureRows : items.every(c => !c.description) ? Chips : CardGrid;
};

export const Cards = ({ section, index, t }) => {
	const d = section.data;
	const items = d.items || [];
	const Layout = cardLayout(section.slug, items);
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
			<Layout
				items={items}
				t={t}
			/>
			{d.buttonLabel && (
				<Flex
					pt={10}
					justify='center'>
					<PillButton
						t={t}
						href={d.buttonUrl}>
						{d.buttonLabel}
					</PillButton>
				</Flex>
			)}
		</Frame>
	);
};

/* ------------------------------------------------------------------ faq */

export const Faq = ({ section, index, t }) => {
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
			<Accordion
				allowMultiple
				defaultIndex={[0]}>
				{(d.items || []).map((item, i) => (
					<AccordionItem
						key={i}
						borderColor={t.line}>
						<h3>
							<AccordionButton
								px={0}
								py={{ base: 5, md: 6 }}
								_hover={{ bg: 'transparent' }}
								color={t.text}
								gap={4}>
								<Text
									flex='1'
									textAlign='left'
									fontFamily={fonts.title}
									fontSize={{ base: '1.75rem', md: '2.75rem' }}
									lineHeight='1'
									textTransform='uppercase'
									color={t.text}>
									{item.title}
								</Text>
								<AccordionIcon boxSize={8} />
							</AccordionButton>
						</h3>
						<AccordionPanel
							px={0}
							pb={6}>
							<Text
								fontFamily={fonts.primary}
								fontSize={{ base: '14px', md: '16px' }}
								lineHeight='1.5'
								textTransform='uppercase'
								color={t.sub}
								maxW='760px'>
								{item.description}
							</Text>
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</Frame>
	);
};

/* ------------------------------------------------- section / cta / text */

// Bands drawn on the card colour instead of inverted
const LIGHT_BANDS = ['custom'];

// A heading, text, examples, buttons and a picture, on an inverted band in light mode, or on the
// card colour (and in dark mode always: a light band on black glares)
export const Band = ({ section, index, t, inverted = !t.dark && !LIGHT_BANDS.includes(section.slug) }) => {
	const d = section.data;
	const b = inverted ? { ...t, bg: t.text, text: t.bg, sub: t.bg, line: t.bg } : { ...t, bg: t.card };
	const examples = (d.items || []).filter(item => item.title);
	return (
		<Frame
			t={t}
			id={section.slug}>
			<Grid
				bg={b.bg}
				borderRadius='12px'
				border='1px solid'
				borderColor={inverted ? 'transparent' : t.line}
				overflow='hidden'
				templateColumns={{ base: '1fr', md: d.image ? '1.2fr 1fr' : '1fr' }}>
				<Flex
					direction='column'
					justify='space-between'
					gap={10}
					p={{ base: 6, md: 12 }}>
					<Flex
						justify='space-between'
						fontFamily={fonts.primary}
						fontSize='0.875rem'
						textTransform='uppercase'
						color={b.text}>
						<Text color={b.text}>{num(index)}</Text>
						<Text color={b.text}>{d.eyebrow}</Text>
					</Flex>
					<Heading
						as='h2'
						fontFamily={fonts.title}
						fontSize={{ base: '3.5rem', md: '7rem' }}
						fontWeight='800'
						lineHeight='0.95'
						textTransform='uppercase'
						color={b.text}>
						<Lines>{d.heading}</Lines>
					</Heading>
					<Flex
						direction='column'
						gap={6}
						maxW='520px'>
						{(d.subheading || d.text) && (
							<Text
								fontFamily={fonts.primary}
								fontSize={{ base: '14px', md: '16px' }}
								lineHeight='1.5'
								textTransform='uppercase'
								color={b.sub}
								opacity={inverted ? 0.8 : 1}>
								{d.subheading || d.text}
							</Text>
						)}
						{examples.length > 0 && (
							<Flex
								gap={2}
								wrap='wrap'>
								{examples.map(item => (
									<Text
										key={item.title}
										px={4}
										py={2}
										border='1px solid'
										borderColor={b.text}
										borderRadius='99px'
										fontFamily={fonts.primary}
										fontSize='13px'
										textTransform='uppercase'
										color={b.text}>
										{item.title}
									</Text>
								))}
							</Flex>
						)}
						<Flex
							gap={3}
							wrap='wrap'>
							<PillButton
								t={b}
								solid
								href={d.buttonUrl}>
								{d.buttonLabel}
							</PillButton>
							<PillButton
								t={b}
								href={d.secondaryUrl}>
								{d.secondaryLabel}
							</PillButton>
						</Flex>
					</Flex>
				</Flex>
				{d.image &&
					(isIllustration(d.image) ? (
						// An illustration is shown whole, padded, instead of filling (and cropping) the side
						<Flex
							align='center'
							justify='center'
							p={{ base: 4, md: 8 }}>
							<Image
								src={d.image}
								alt={d.imageAlt || ''}
								w='full'
								objectFit='contain'
								loading='lazy'
							/>
						</Flex>
					) : (
						<Image
							src={d.image}
							alt={d.imageAlt || ''}
							objectFit='cover'
							w='full'
							h='full'
							minH={{ base: '240px', md: '520px' }}
							loading='lazy'
						/>
					))}
			</Grid>
		</Frame>
	);
};

export const TextSection = ({ section, index, t }) => {
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
			{d.buttonLabel && (
				<PillButton
					t={t}
					href={d.buttonUrl}>
					{d.buttonLabel}
				</PillButton>
			)}
		</Frame>
	);
};

/* ----------------------------------------------------------------- list */

// "/website-development/{slug}" → the record's own address
const fill = (template, record) => String(template || '').replace(/\{(\w+)\}/g, (_, k) => record?.[k] ?? '');

// One record of a List as a card: its picture in a browser window, its name and text
export const RecordCard = ({ record, d, t }) => {
	const title = record[d.cardTitle || 'name'] || record.title;
	const text = record[d.cardText || 'summary'];
	const image = record[d.cardImage || 'coverImage'];
	const href = d.link ? fill(d.link, record) : null;
	return (
		<Flex
			as={href ? Link : 'div'}
			href={href || undefined}
			direction='column'
			gap={4}
			role='group'>
			<Box
				transition='transform .25s'
				_groupHover={{ transform: 'translateY(-4px)' }}>
				{image ? (
					<ScreenFrame
						src={image}
						alt={title}
						t={t}
						address={href ? `thinkcrypt.dev${href}` : undefined}
					/>
				) : (
					<Box
						borderRadius='12px'
						bg={t.card}
						h='200px'
					/>
				)}
			</Box>
			<Flex
				justify='space-between'
				align='flex-start'
				gap={4}>
				<Box>
					<Heading
						as='h3'
						fontFamily={fonts.title}
						fontSize={{ base: '2rem', md: '2.5rem' }}
						fontWeight='400'
						lineHeight='1'
						textTransform='uppercase'
						color={t.text}
						mb={2}>
						{title}
					</Heading>
					{text && (
						<Text
							fontFamily={fonts.primary}
							fontSize='14px'
							lineHeight='1.45'
							textTransform='uppercase'
							color={t.sub}>
							{text}
						</Text>
					)}
				</Box>
				{href && (
					<Text
						fontFamily={fonts.title}
						fontSize='2rem'
						lineHeight='1'
						color={t.text}
						transition='transform .2s'
						_groupHover={{ transform: 'translate(3px, -3px)' }}>
						↗
					</Text>
				)}
			</Flex>
		</Flex>
	);
};

const hostOf = url => {
	try {
		return new URL(url).host.replace(/^www\./, '');
	} catch {
		return undefined;
	}
};

// One product (Mint panel → Products) as its own section: picture, name, summary, features and
// a button to the product's website. Pictures alternate sides.
const ProductRow = ({ record, i, t }) => (
	<Grid
		as='article'
		id={record.slug}
		templateColumns={{ base: '1fr', md: '1.2fr 1fr' }}
		gap={{ base: 6, md: 16 }}
		alignItems='center'
		py={{ base: 10, md: 16 }}
		borderTop='1px solid'
		borderColor={t.line}
		scrollMarginTop='64px'>
		<Box order={{ md: i % 2 ? 2 : 1 }}>
			{isIllustration(record.image) ? (
				<Illustration
					src={record.image}
					alt={record.imageAlt || record.name}
					ratio={1200 / 630}
				/>
			) : (
				<ScreenFrame
					src={record.image}
					alt={record.imageAlt || record.name}
					address={hostOf(record.productUrl)}
					t={t}
					ratio={1200 / 630}
				/>
			)}
		</Box>
		<Flex
			direction='column'
			gap={5}
			order={{ md: i % 2 ? 1 : 2 }}>
			<Text
				fontFamily={fonts.primary}
				fontSize='13px'
				textTransform='uppercase'
				color={t.accent}>
				{num(i)}
				{record.tagline ? ` — ${record.tagline}` : ''}
			</Text>
			<Heading
				as='h3'
				fontFamily={fonts.title}
				fontSize={{ base: '2.75rem', md: '4.5rem' }}
				fontWeight='400'
				lineHeight='0.95'
				textTransform='uppercase'
				color={t.text}>
				{record.name}
			</Heading>
			{record.summary && (
				<Text
					fontFamily={fonts.primary}
					fontSize={{ base: '14px', md: '16px' }}
					lineHeight='1.5'
					textTransform='uppercase'
					color={t.sub}
					maxW='560px'>
					{record.summary}
				</Text>
			)}
			{record.features?.length > 0 && (
				<Box as='ul' listStyleType='none'>
					{record.features
						.filter(f => f.title)
						.map((f, j) => (
							<Box
								as='li'
								key={j}
								py={3}
								borderTop='1px solid'
								borderColor={t.line}>
								<Text
									fontFamily={fonts.primary}
									fontSize='14px'
									fontWeight='600'
									textTransform='uppercase'
									color={t.text}>
									{f.title}
								</Text>
								{f.description && (
									<Text
										fontFamily={fonts.primary}
										fontSize='13px'
										lineHeight='1.45'
										textTransform='uppercase'
										color={t.sub}>
										{f.description}
									</Text>
								)}
							</Box>
						))}
				</Box>
			)}
			<Flex
				gap={3}
				wrap='wrap'>
				{record.productUrl && (
					<PillButton
						t={t}
						solid
						href={record.productUrl}>
						{record.buttonLabel || 'View product'}
					</PillButton>
				)}
				{record.pagePath && (
					<PillButton
						t={t}
						href={record.pagePath}>
						{record.pageLabel || 'Learn more'}
					</PillButton>
				)}
			</Flex>
		</Flex>
	</Grid>
);

const ProductRows = ({ records, t }) => (
	<Flex direction='column'>
		{records.map((record, i) => (
			<ProductRow
				key={record._id}
				record={record}
				i={i}
				t={t}
			/>
		))}
	</Flex>
);

// How a List content shows its records, by the model it lists; others are cards
const LIST_LAYOUTS = { products: ProductRows };

// A List content: records of a panel model (e.g. website types), fetched by the page on the server
export const RecordList = ({ section, index, t }) => {
	const d = section.data;
	const records = section.records || [];
	if (!records.length) return null;
	const Layout = LIST_LAYOUTS[d.source];
	if (Layout)
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
				<Layout
					records={records}
					t={t}
				/>
			</Frame>
		);
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
				columnGap={{ base: 4, md: 6 }}
				rowGap={{ base: 10, md: 14 }}>
				{records.map(record => (
					<RecordCard
						key={record._id}
						record={record}
						d={d}
						t={t}
					/>
				))}
			</Grid>
			{d.buttonLabel && (
				<Flex
					pt={12}
					justify='center'>
					<PillButton
						t={t}
						href={d.buttonUrl}>
						{d.buttonLabel}
					</PillButton>
				</Flex>
			)}
		</Frame>
	);
};

// A content type → how it renders; one the page doesn't know is skipped
export const SECTIONS = {
	hero: Hero,
	cards: Cards,
	stats: Cards,
	faq: Faq,
	section: Band,
	cta: Band,
	text: TextSection,
	list: RecordList,
};
