'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
	AspectRatio,
	Box,
	Flex,
	Grid,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Text,
	useColorMode,
} from '@chakra-ui/react';
import Page from '../util/Page/Page';
import { fonts, layout, padding } from '../../lib/constants';
import { Band, CardGrid, Frame, PillButton, SectionHead, num, toneOf } from '../website-development/sections';

// A project's case study — its record from the panel (Website → Portfolios), loaded on the server.
// Every part shows only when its fields are filled, so a short record still makes a tidy page.

const has = v => (Array.isArray(v) ? v.length > 0 : !!String(v || '').trim());
const hostOf = url => {
	try {
		return new URL(url).host.replace(/^www\./, '');
	} catch {
		return url;
	}
};
const titleCase = s => String(s || '').replace(/(^|[\s/-])\w/g, c => c.toUpperCase());

// Long-form text reads in sentence case; the site's short labels stay in capitals
const Body = ({ t, children, ...props }) => (
	<Text
		fontFamily={fonts.primary}
		fontSize={{ base: '16px', md: '18px' }}
		lineHeight='1.65'
		color={t.sub}
		whiteSpace='pre-line'
		{...props}>
		{children}
	</Text>
);

const Label = ({ t, children, color, ...props }) => (
	<Text
		fontFamily={fonts.primary}
		fontSize='13px'
		textTransform='uppercase'
		letterSpacing='0.5px'
		color={color || t.accent}
		{...props}>
		{children}
	</Text>
);

// A picture shown whole, at its own shape (never cropped): rounded, on the card colour
const Shot = ({ src, alt, t, eager }) => (
	<Box
		borderRadius='16px'
		overflow='hidden'
		bg={t.card}>
		<Image
			src={src}
			alt={alt || ''}
			w='full'
			h='auto'
			display='block'
			loading={eager ? 'eager' : 'lazy'}
		/>
	</Box>
);

/* ------------------------------------------------------------------ hero */

const Facts = ({ data, t }) => {
	const facts = [
		['Client', data.client || data.companyName],
		['Industry', data.companyCategory || titleCase(data.category)],
		['Year', data.year],
		['Timeline', data.duration],
	].filter(([, v]) => has(v));
	if (!facts.length) return null;
	return (
		<Grid
			templateColumns={{ base: 'repeat(2, 1fr)', md: `repeat(${facts.length}, 1fr)` }}
			gap={4}
			alignSelf='end'>
			{facts.map(([label, value]) => (
				<Box
					key={label}
					borderTop='1px solid'
					borderColor={t.line}
					pt={3}>
					<Label
						t={t}
						color={t.sub}>
						{label}
					</Label>
					<Text
						fontFamily={fonts.title}
						fontSize={{ base: '1.75rem', md: '2.25rem' }}
						lineHeight='1.05'
						mt={1}
						textTransform='uppercase'
						color={t.text}>
						{value}
					</Text>
				</Box>
			))}
		</Grid>
	);
};

// The project's few big facts ("10,000+ / products"), in a band under the cover
const Highlights = ({ items, t }) =>
	has(items) ? (
		<Grid
			templateColumns={{ base: 'repeat(2, 1fr)', md: `repeat(${Math.min(items.length, 4)}, 1fr)` }}
			gap={{ base: 3, md: 4 }}
			pt={{ base: 4, md: 6 }}>
			{items.map((item, i) => (
				<Flex
					key={i}
					direction='column'
					justify='space-between'
					gap={6}
					bg={t.card}
					borderRadius='16px'
					p={{ base: 5, md: 7 }}>
					<Text
						fontFamily={fonts.title}
						fontSize={{ base: '2.75rem', md: '4.5rem' }}
						lineHeight='0.9'
						color={t.text}>
						{item.value}
					</Text>
					<Text
						fontFamily={fonts.primary}
						fontSize={{ base: '13px', md: '15px' }}
						lineHeight='1.4'
						textTransform='uppercase'
						color={t.sub}>
						{item.label}
					</Text>
				</Flex>
			))}
		</Grid>
	) : null;

const Hero = ({ data, t }) => (
	<Frame
		t={t}
		id='case-study'
		pt={layout.NAV_HEIGHT}>
		<SectionHead
			as='h1'
			size='xl'
			index='Case study'
			eyebrow={titleCase(data.category)}
			heading={data.name}
			t={t}
		/>
		<Grid
			templateColumns={{ base: '1fr', md: '1.4fr 1fr' }}
			gap={{ base: 8, md: 10 }}
			pb={{ base: 10, md: 14 }}>
			<Facts
				data={data}
				t={t}
			/>
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
					{data.subTitle || data.shortDescription}
				</Text>
				<Flex
					gap={3}
					wrap='wrap'>
					{data.showLiveUrl && (
						<PillButton
							t={t}
							solid
							href={data.liveUrl}>
							Visit {hostOf(data.liveUrl)} ↗
						</PillButton>
					)}
					<PillButton
						t={t}
						href='/contact'>
						Start a project like this
					</PillButton>
				</Flex>
			</Flex>
		</Grid>
		<Shot
			src={data.coverImage || data.image}
			alt={data.name}
			t={t}
			eager
		/>
		<Highlights
			items={data.highlights}
			t={t}
		/>
	</Frame>
);

/* -------------------------------------------------------------- overview */

const Overview = ({ data, index, t }) => (
	<Frame t={t}>
		<SectionHead
			index={num(index)}
			eyebrow='Overview'
			heading={data.title || data.name}
			t={t}
		/>
		<Grid
			templateColumns={{ base: '1fr', md: '1.4fr 1fr' }}
			gap={{ base: 8, md: 16 }}
			alignItems='start'>
			<Body
				t={t}
				fontSize={{ base: '19px', md: '24px' }}
				lineHeight='1.5'
				color={t.text}>
				{data.overview || data.shortDescription}
			</Body>
			{(has(data.companyName) || has(data.companyDescription)) && (
				<Flex
					direction='column'
					gap={4}
					bg={t.card}
					borderRadius='16px'
					p={{ base: 6, md: 8 }}>
					{data.logo && (
						<Image
							src={data.logo}
							alt={data.companyName}
							h='48px'
							w='48px'
							objectFit='cover'
							borderRadius='10px'
						/>
					)}
					<Label t={t}>About the client</Label>
					<Heading
						as='h3'
						fontFamily={fonts.title}
						fontSize={{ base: '2.25rem', md: '2.75rem' }}
						fontWeight='400'
						lineHeight='1'
						textTransform='uppercase'
						color={t.text}>
						{data.companyName}
					</Heading>
					{data.companyTitle && (
						<Text
							fontFamily={fonts.primary}
							fontSize='14px'
							textTransform='uppercase'
							color={t.text}>
							{data.companyTitle}
						</Text>
					)}
					<Body
						t={t}
						fontSize='15px'>
						{data.companyDescription}
					</Body>
					{data.companyUrl && (
						<Text
							as='a'
							href={data.companyUrl}
							target='_blank'
							rel='noopener'
							fontFamily={fonts.primary}
							fontSize='14px'
							textDecoration='underline'
							textUnderlineOffset='4px'
							color={t.text}>
							{hostOf(data.companyUrl)} ↗
						</Text>
					)}
				</Flex>
			)}
		</Grid>
	</Frame>
);

/* ----------------------------------------------------------------- story */

// Problem → how we did it → result: three cards side by side
const Story = ({ data, index, t }) => {
	const steps = [
		['The problem', data.challengeTitle, data.challengeDescription],
		['How we did it', data.approachTitle, data.approachDescription],
		['The result', data.solutionTitle, data.solutionDescription],
	].filter(([, title, text]) => has(title) || has(text));
	if (!steps.length) return null;
	return (
		<Frame t={t}>
			<SectionHead
				index={num(index)}
				eyebrow='The story'
				heading={'From problem\nto product'}
				t={t}
			/>
			<Grid
				templateColumns={{ base: '1fr', lg: `repeat(${steps.length}, 1fr)` }}
				gap={{ base: 3, md: 4 }}>
				{steps.map(([label, title, text], i) => (
					<Flex
						key={label}
						direction='column'
						gap={5}
						bg={i === steps.length - 1 ? t.text : t.card}
						borderRadius='16px'
						p={{ base: 6, md: 8 }}>
						<Flex
							justify='space-between'
							align='center'>
							<Label
								t={t}
								color={i === steps.length - 1 ? t.bg : t.accent}>
								{label}
							</Label>
							<Text
								fontFamily={fonts.title}
								fontSize='2rem'
								lineHeight='1'
								color={i === steps.length - 1 ? t.bg : t.accent}>
								{num(i)}
							</Text>
						</Flex>
						<Heading
							as='h3'
							fontFamily={fonts.title}
							fontSize={{ base: '2.25rem', md: '3rem' }}
							fontWeight='400'
							lineHeight='0.95'
							textTransform='uppercase'
							color={i === steps.length - 1 ? t.bg : t.text}>
							{title || label}
						</Heading>
						<Body
							t={t}
							fontSize={{ base: '15px', md: '16px' }}
							color={i === steps.length - 1 ? t.bg : t.sub}
							opacity={i === steps.length - 1 ? 0.85 : 1}>
							{text}
						</Body>
					</Flex>
				))}
			</Grid>
		</Frame>
	);
};

/* -------------------------------------------------------------- features */

// A feature with a picture: the picture on one side, its words on the other, swapping sides each row
const FeatureRow = ({ item, i, t, onOpen }) => (
	<Grid
		templateColumns={{ base: '1fr', md: '1.35fr 1fr' }}
		gap={{ base: 6, md: 14 }}
		alignItems='center'
		py={{ base: 8, md: 12 }}
		borderTop='1px solid'
		borderColor={t.line}>
		<Box
			order={{ md: i % 2 ? 2 : 1 }}
			as='button'
			type='button'
			onClick={onOpen}
			cursor='zoom-in'
			textAlign='left'
			aria-label={`See ${item.title} full size`}
			transition='transform .4s'
			_hover={{ transform: 'translateY(-4px)' }}>
			<Shot
				src={item.image}
				alt={item.title}
				t={t}
			/>
		</Box>
		<Flex
			direction='column'
			gap={4}
			order={{ md: i % 2 ? 1 : 2 }}
			maxW='520px'>
			<Label t={t}>
				{num(i)}
				{item.label ? ` — ${item.label}` : ''}
			</Label>
			<Heading
				as='h3'
				fontFamily={fonts.title}
				fontSize={{ base: '2.75rem', md: '4.25rem' }}
				fontWeight='400'
				lineHeight='0.95'
				textTransform='uppercase'
				color={t.text}>
				{item.title}
			</Heading>
			<Body t={t}>{item.description}</Body>
		</Flex>
	</Grid>
);

const Features = ({ data, index, t, onOpen, pictures }) => {
	const all = (data.solutionFeatures || []).filter(f => f?.title);
	const rows = all.filter(f => f.image);
	const rest = all.filter(f => !f.image);
	if (!all.length) return null;
	return (
		<Frame t={t}>
			<SectionHead
				index={num(index)}
				eyebrow='What we built'
				heading={data.productTitle || 'Inside the\nproduct'}
				text={data.productDescription}
				t={t}
			/>
			{rows.length > 0 && (
				<Flex direction='column'>
					{rows.map((item, i) => (
						<FeatureRow
							key={item.title}
							item={item}
							i={i}
							t={t}
							onOpen={() => onOpen(pictures.indexOf(item.image))}
						/>
					))}
				</Flex>
			)}
			{rest.length > 0 && (
				<Box pt={rows.length ? { base: 8, md: 12 } : 0}>
					{rows.length > 0 && (
						<Label
							t={t}
							pb={5}>
							And also
						</Label>
					)}
					<CardGrid
						items={rest}
						t={t}
					/>
				</Box>
			)}
		</Frame>
	);
};

/* ------------------------------------------------------- behind the site */

// What runs the site: its admin panel, CMS, backend and SEO (the record's "Behind the site" list).
// Wide screens: the list on the left, the picked one's picture on the right. Phones: one after another.
const Platform = ({ data, index, t, onOpen, pictures }) => {
	const items = (data.platform || []).filter(p => p?.title);
	const [active, setActive] = useState(0);
	if (!items.length) return null;
	const cur = items[Math.min(active, items.length - 1)];
	const open = item => item.image && onOpen(pictures.indexOf(item.image));
	return (
		<Frame t={t}>
			<SectionHead
				index={num(index)}
				eyebrow='Behind the site'
				heading={data.platformTitle || 'Run from its own\nadmin panel'}
				text={data.platformDescription}
				t={t}
			/>
			{/* wide screens */}
			<Grid
				display={{ base: 'none', lg: 'grid' }}
				templateColumns='0.85fr 1.65fr'
				gap={10}
				alignItems='start'>
				<Flex
					direction='column'
					gap={3}>
					{items.map((item, i) => {
						const on = item === cur;
						return (
							<Box
								key={item.title}
								as='button'
								type='button'
								onClick={() => setActive(i)}
								onMouseEnter={() => setActive(i)}
								textAlign='left'
								p={6}
								borderRadius='16px'
								border='1px solid'
								borderColor={on ? t.text : t.line}
								bg={on ? t.card : 'transparent'}
								transition='all .25s'>
								<Label
									t={t}
									color={on ? t.accent : t.sub}>
									{num(i)} — {item.label}
								</Label>
								<Heading
									as='h3'
									mt={2}
									fontFamily={fonts.title}
									fontSize='2.5rem'
									fontWeight='400'
									lineHeight='0.95'
									textTransform='uppercase'
									color={t.text}>
									{item.title}
								</Heading>
								<Box
									display='grid'
									gridTemplateRows={on ? '1fr' : '0fr'}
									transition='grid-template-rows .3s'>
									<Box overflow='hidden'>
										<Body
											t={t}
											pt={3}>
											{item.description}
										</Body>
									</Box>
								</Box>
							</Box>
						);
					})}
				</Flex>
				{cur.image && (
					<Box
						as='button'
						type='button'
						onClick={() => open(cur)}
						cursor='zoom-in'
						aria-label={`See ${cur.title} full size`}
						position='sticky'
						top='100px'>
						<Shot
							key={cur.image}
							src={cur.image}
							alt={cur.title}
							t={t}
						/>
					</Box>
				)}
			</Grid>
			{/* phones and tablets */}
			<Flex
				display={{ base: 'flex', lg: 'none' }}
				direction='column'
				gap={10}>
				{items.map((item, i) => (
					<Flex
						key={item.title}
						direction='column'
						gap={3}>
						<Label t={t}>
							{num(i)} — {item.label}
						</Label>
						<Heading
							as='h3'
							fontFamily={fonts.title}
							fontSize='2.5rem'
							fontWeight='400'
							lineHeight='0.95'
							textTransform='uppercase'
							color={t.text}>
							{item.title}
						</Heading>
						<Body t={t}>{item.description}</Body>
						{item.image && (
							<Box
								as='button'
								type='button'
								onClick={() => open(item)}
								pt={2}>
								<Shot
									src={item.image}
									alt={item.title}
									t={t}
								/>
							</Box>
						)}
					</Flex>
				))}
			</Flex>
		</Frame>
	);
};

/* --------------------------------------------------------------- gallery */

const ArrowButton = ({ t, onClick, label, children, disabled }) => (
	<Box
		as='button'
		type='button'
		aria-label={label}
		onClick={onClick}
		disabled={disabled}
		w='52px'
		h='52px'
		borderRadius='full'
		border='1px solid'
		borderColor={t.text}
		color={t.text}
		fontSize='20px'
		opacity={disabled ? 0.3 : 1}
		transition='all .2s'
		_hover={disabled ? {} : { bg: t.text, color: t.bg }}>
		{children}
	</Box>
);

// Every picture in one strip that scrolls sideways (swipe, trackpad or the arrows); tap one to see it big
const Gallery = ({ data, index, t, pictures, onOpen }) => {
	const strip = useRef(null);
	const [pos, setPos] = useState({ start: true, end: false, progress: 0 });
	const video = data.isVideoEnabled && data.videoURL;

	const measure = useCallback(() => {
		const el = strip.current;
		if (!el) return;
		const max = el.scrollWidth - el.clientWidth;
		setPos({
			start: el.scrollLeft <= 4,
			end: el.scrollLeft >= max - 4,
			progress: max > 0 ? el.scrollLeft / max : 1,
		});
	}, []);

	useEffect(() => {
		measure();
		window.addEventListener('resize', measure);
		return () => window.removeEventListener('resize', measure);
	}, [measure]);

	const step = dir => {
		const el = strip.current;
		if (!el) return;
		const card = el.querySelector('[data-slide]');
		el.scrollBy({ left: dir * ((card?.clientWidth || el.clientWidth * 0.8) + 16), behavior: 'smooth' });
	};

	if (!pictures.length && !video) return null;
	return (
		<Box
			as='section'
			bg={t.bg}
			py={{ base: 12, md: 20 }}>
			<Box px={{ base: padding.baseBody, lg: padding.lgBody }}>
				<SectionHead
					index={num(index)}
					eyebrow='Gallery'
					heading={'A closer\nlook'}
					text={`${pictures.length} pictures — swipe or use the arrows. Tap one to see it full size.`}
					t={t}
				/>
			</Box>
			<Flex
				ref={strip}
				onScroll={measure}
				data-lenis-prevent-touch
				gap={4}
				overflowX='auto'
				align='flex-start'
				scrollSnapType='x mandatory'
				px={{ base: padding.baseBody, lg: padding.lgBody }}
				scrollPaddingX={{ base: padding.baseBody, lg: padding.lgBody }}
				pb={2}
				sx={{ scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
				{video && (
					<Box
						data-slide
						flex='0 0 auto'
						w={{ base: '86vw', md: '62vw', xl: '880px' }}
						scrollSnapAlign='start'
						borderRadius='16px'
						overflow='hidden'
						bg={t.card}>
						<AspectRatio ratio={16 / 10}>
							<video
								src={data.videoURL}
								controls
								playsInline
								preload='metadata'
								poster={data.thumbnail || data.coverImage || undefined}
							/>
						</AspectRatio>
					</Box>
				)}
				{pictures.map((src, i) => (
					<Box
						key={src + i}
						data-slide
						as='button'
						type='button'
						onClick={() => onOpen(i)}
						aria-label={`Open picture ${i + 1} of ${pictures.length}`}
						flex='0 0 auto'
						w={{ base: '86vw', md: '62vw', xl: '880px' }}
						scrollSnapAlign='start'
						cursor='zoom-in'
						textAlign='left'>
						<Shot
							src={src}
							alt={`${data.name} — picture ${i + 1}`}
							t={t}
						/>
					</Box>
				))}
				<Box
					flex='0 0 1px'
					aria-hidden
				/>
			</Flex>
			<Flex
				px={{ base: padding.baseBody, lg: padding.lgBody }}
				pt={6}
				gap={6}
				align='center'>
				<Box
					flex={1}
					h='2px'
					bg={t.line}
					borderRadius='full'
					overflow='hidden'>
					<Box
						h='full'
						w={`${Math.max(8, pos.progress * 100)}%`}
						bg={t.text}
						transition='width .2s'
					/>
				</Box>
				<Flex gap={3}>
					<ArrowButton
						t={t}
						label='Previous pictures'
						disabled={pos.start}
						onClick={() => step(-1)}>
						←
					</ArrowButton>
					<ArrowButton
						t={t}
						label='Next pictures'
						disabled={pos.end}
						onClick={() => step(1)}>
						→
					</ArrowButton>
				</Flex>
			</Flex>
		</Box>
	);
};

// Full-size viewer for every picture on the page, with previous / next and the arrow keys
const Viewer = ({ pictures, open, setOpen, name }) => {
	useEffect(() => {
		if (open === null) return;
		const key = e => {
			if (e.key === 'ArrowRight') setOpen(o => (o + 1) % pictures.length);
			if (e.key === 'ArrowLeft') setOpen(o => (o - 1 + pictures.length) % pictures.length);
		};
		window.addEventListener('keydown', key);
		return () => window.removeEventListener('keydown', key);
	}, [open, pictures.length, setOpen]);

	return (
		<Modal
			isOpen={open !== null && open >= 0}
			onClose={() => setOpen(null)}
			size='6xl'
			isCentered>
			<ModalOverlay bg='rgba(0,0,0,0.88)' />
			<ModalContent
				bg='transparent'
				boxShadow='none'>
				<ModalCloseButton
					color='white'
					top='-44px'
					right={0}
				/>
				<ModalBody p={0}>
					{open !== null && open >= 0 && (
						<Flex
							direction='column'
							gap={3}>
							<Image
								src={pictures[open]}
								alt={`${name} — picture ${open + 1}`}
								w='full'
								maxH='82vh'
								objectFit='contain'
								borderRadius='12px'
							/>
							{pictures.length > 1 && (
								<Flex
									justify='space-between'
									align='center'
									color='white'
									fontFamily={fonts.primary}
									fontSize='14px'>
									<Box
										as='button'
										onClick={() => setOpen((open - 1 + pictures.length) % pictures.length)}>
										← Previous
									</Box>
									<Text color='white'>
										{open + 1} / {pictures.length}
									</Text>
									<Box
										as='button'
										onClick={() => setOpen((open + 1) % pictures.length)}>
										Next →
									</Box>
								</Flex>
							)}
						</Flex>
					)}
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

/* ------------------------------------------------------------ tech stack */

const TechStack = ({ data, index, t }) =>
	has(data.techStack) ? (
		<Frame t={t}>
			<SectionHead
				index={num(index)}
				eyebrow='Tech stack'
				heading={data.techStackTitle || 'Built with'}
				t={t}
			/>
			<Grid
				templateColumns={{ base: '1fr', md: '1fr 1.2fr' }}
				gap={{ base: 6, md: 16 }}
				alignItems='start'>
				<Body t={t}>{data.techStackDescription}</Body>
				<Flex
					wrap='wrap'
					gap={{ base: 2, md: 3 }}>
					{data.techStack.map(item => (
						<Box
							key={item}
							px={{ base: 5, md: 6 }}
							py={2}
							border='1px solid'
							borderColor={t.text}
							borderRadius='99px'
							fontFamily={fonts.title}
							fontSize={{ base: '1.5rem', md: '2.25rem' }}
							lineHeight='1'
							textTransform='uppercase'
							color={t.text}>
							{String(item).replace(/-/g, ' ')}
						</Box>
					))}
				</Flex>
			</Grid>
		</Frame>
	) : null;

/* ---------------------------------------------------------------- review */

const Review = ({ data, t }) =>
	has(data.review) ? (
		<Frame t={t}>
			<Flex
				direction='column'
				gap={8}
				borderTop='1px solid'
				borderColor={t.text}
				pt={{ base: 10, md: 16 }}>
				<Text
					fontFamily={fonts.title}
					fontSize={{ base: '5rem', md: '8rem' }}
					lineHeight='0.6'
					color={t.accent}>
					“
				</Text>
				<Text
					fontFamily={fonts.primary}
					fontSize={{ base: '22px', md: '34px' }}
					lineHeight='1.35'
					maxW='1100px'
					color={t.text}>
					{data.review}
				</Text>
				<Label
					t={t}
					color={t.sub}>
					{[data.client || data.companyName, data.companyCategory].filter(Boolean).join(' · ')}
				</Label>
			</Flex>
		</Frame>
	) : null;

/* ------------------------------------------------------- more case studies */

const More = ({ items, index, t }) =>
	items?.length ? (
		<Frame t={t}>
			<SectionHead
				index={num(index)}
				eyebrow='More work'
				heading={'More case\nstudies'}
				t={t}
			/>
			<Grid
				templateColumns={{ base: '1fr', md: `repeat(${Math.min(items.length, 3)}, 1fr)` }}
				gap={6}>
				{items.map(item => (
					<Flex
						key={item.slug || item._id}
						as={Link}
						href={`/case-study/${item.slug || item._id}`}
						direction='column'
						gap={4}
						role='group'>
						<Box
							borderRadius='16px'
							overflow='hidden'
							bg={t.card}>
							<Image
								src={item.image || item.coverImage}
								alt={item.name}
								w='full'
								h='auto'
								display='block'
								loading='lazy'
								transition='transform .5s'
								_groupHover={{ transform: 'scale(1.03)' }}
							/>
						</Box>
						<Flex
							justify='space-between'
							align='baseline'
							gap={4}>
							<Heading
								as='h3'
								fontFamily={fonts.title}
								fontSize='2.25rem'
								fontWeight='400'
								lineHeight='1'
								textTransform='uppercase'
								color={t.text}>
								{item.name}
							</Heading>
							<Label t={t}>{titleCase(item.category)} ↗</Label>
						</Flex>
						<Text
							fontFamily={fonts.primary}
							fontSize='14px'
							lineHeight='1.5'
							color={t.sub}
							noOfLines={3}>
							{item.shortDescription}
						</Text>
					</Flex>
				))}
			</Grid>
		</Frame>
	) : null;

/* ------------------------------------------------------------------ page */

const CaseStudyDetail = ({ data, more = [] }) => {
	const { colorMode } = useColorMode();
	const t = toneOf(colorMode);
	const [open, setOpen] = useState(null);

	// Every picture on the page, in reading order, for the gallery strip and the full-size viewer
	const featurePictures = (data.solutionFeatures || []).map(f => f?.image).filter(Boolean);
	const platformPictures = (data.platform || []).map(p => p?.image).filter(Boolean);
	const pictures = [...new Set([...featurePictures, ...platformPictures, ...(data.images || []).filter(Boolean)])];

	// Number the parts that are shown, in order
	const parts = [
		Overview,
		(data.challengeDescription || data.approachDescription || data.solutionDescription) && Story,
		has(data.solutionFeatures) && Features,
		has(data.platform) && Platform,
		(pictures.length || (data.isVideoEnabled && data.videoURL)) && Gallery,
		has(data.techStack) && TechStack,
	].filter(Boolean);

	return (
		<Page theme={colorMode}>
			<Flex
				as='main'
				direction='column'
				w='full'
				minH='100vh'
				bg={t.bg}>
				<Hero
					data={data}
					t={t}
				/>
				{parts.map((Part, i) => (
					<Part
						key={i}
						data={data}
						index={i}
						t={t}
						pictures={pictures}
						onOpen={setOpen}
					/>
				))}
				<Review
					data={data}
					t={t}
				/>
				<Band
					t={t}
					index={parts.length}
					section={{
						slug: 'case-study-cta',
						data: {
							eyebrow: 'Your project',
							heading: 'Have a project\nlike this?',
							subheading:
								'Tell us what you want to build. We design it, build it and hand you the tools to run it yourself.',
							buttonLabel: 'Start a project',
							buttonUrl: '/contact',
							secondaryLabel: data.showLiveUrl && data.liveUrl ? `Visit ${hostOf(data.liveUrl)}` : 'See all work',
							secondaryUrl: data.showLiveUrl && data.liveUrl ? data.liveUrl : '/portfolio',
						},
					}}
				/>
				<More
					items={more}
					index={parts.length + 1}
					t={t}
				/>
			</Flex>
			<Viewer
				pictures={pictures}
				open={open}
				setOpen={setOpen}
				name={data.name}
			/>
		</Page>
	);
};

export default CaseStudyDetail;
