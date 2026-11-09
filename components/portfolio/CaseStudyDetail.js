'use client';

import { useState } from 'react';
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
import { fonts, layout } from '../../lib/constants';
import { Band, CardGrid, Frame, PillButton, Picture, SectionHead, num, toneOf } from '../website-development/sections';

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
			pb={{ base: 10, md: 16 }}>
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
		<Picture
			src={data.coverImage || data.image}
			alt={data.name}
			ratio={{ base: 16 / 10, md: 24 / 11 }}
		/>
		{has(data.tags) && (
			<Flex
				gap={2}
				wrap='wrap'
				pt={6}>
				{data.tags.map(tag => (
					<Text
						key={tag}
						px={4}
						py={2}
						border='1px solid'
						borderColor={t.line}
						borderRadius='99px'
						fontFamily={fonts.primary}
						fontSize='12px'
						textTransform='uppercase'
						color={t.sub}>
						{String(tag).replace(/-/g, ' ')}
					</Text>
				))}
			</Flex>
		)}
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
				fontSize={{ base: '18px', md: '22px' }}
				lineHeight='1.55'
				color={t.text}>
				{data.overview || data.shortDescription}
			</Body>
			{(has(data.companyName) || has(data.companyDescription)) && (
				<Flex
					direction='column'
					gap={4}
					bg={t.card}
					borderRadius='12px'
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

// Challenge → approach → solution, one row each: the step and its title, then the story
const Story = ({ data, index, t }) => {
	const steps = [
		['The challenge', data.challengeTitle, data.challengeDescription],
		['Our approach', data.approachTitle, data.approachDescription],
		['The solution', data.solutionTitle, data.solutionDescription],
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
			<Flex direction='column'>
				{steps.map(([label, title, text], i) => (
					<Grid
						key={label}
						templateColumns={{ base: '1fr', md: '1fr 1.2fr' }}
						gap={{ base: 4, md: 16 }}
						py={{ base: 8, md: 12 }}
						borderTop='1px solid'
						borderColor={t.line}>
						<Flex
							direction='column'
							gap={3}>
							<Label t={t}>
								{num(i)} — {label}
							</Label>
							<Heading
								as='h3'
								fontFamily={fonts.title}
								fontSize={{ base: '2.5rem', md: '4rem' }}
								fontWeight='400'
								lineHeight='0.95'
								textTransform='uppercase'
								color={t.text}>
								{title || label}
							</Heading>
						</Flex>
						<Body t={t}>{text}</Body>
					</Grid>
				))}
			</Flex>
		</Frame>
	);
};

/* -------------------------------------------------------------- features */

const Features = ({ data, index, t }) =>
	has(data.solutionFeatures) ? (
		<Frame t={t}>
			<SectionHead
				index={num(index)}
				eyebrow='What we built'
				heading={data.productTitle || 'Inside the\nproduct'}
				text={data.productDescription}
				t={t}
			/>
			<CardGrid
				items={data.solutionFeatures.filter(f => f?.title)}
				t={t}
			/>
		</Frame>
	) : null;

/* --------------------------------------------------------------- gallery */

const Gallery = ({ data, index, t }) => {
	const [open, setOpen] = useState(null);
	const images = (data.images || []).filter(Boolean);
	const video = data.isVideoEnabled && data.videoURL;
	if (!images.length && !video) return null;
	return (
		<Frame t={t}>
			<SectionHead
				index={num(index)}
				eyebrow='Gallery'
				heading={'A closer\nlook'}
				text={images.length ? 'Tap a picture to see it full size.' : undefined}
				t={t}
			/>
			<Grid
				templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
				gap={{ base: 3, md: 4 }}>
				{video && (
					<Box
						gridColumn={{ md: '1 / -1' }}
						borderRadius='12px'
						overflow='hidden'
						bg={t.card}>
						<AspectRatio ratio={16 / 9}>
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
				{images.map((src, i) => (
					<Box
						key={src + i}
						as='button'
						type='button'
						aria-label={`Open picture ${i + 1} of ${images.length}`}
						onClick={() => setOpen(i)}
						gridColumn={{ md: i === 0 && images.length % 2 === 1 ? '1 / -1' : 'auto' }}
						borderRadius='12px'
						overflow='hidden'
						bg={t.card}
						cursor='zoom-in'
						transition='transform .3s'
						_hover={{ transform: 'translateY(-4px)' }}>
						<AspectRatio ratio={16 / 10}>
							<Image
								src={src}
								alt={`${data.name} — picture ${i + 1}`}
								objectFit='cover'
								loading='lazy'
							/>
						</AspectRatio>
					</Box>
				))}
			</Grid>
			<Modal
				isOpen={open !== null}
				onClose={() => setOpen(null)}
				size='6xl'
				isCentered>
				<ModalOverlay bg='rgba(0,0,0,0.85)' />
				<ModalContent
					bg='transparent'
					boxShadow='none'>
					<ModalCloseButton
						color='white'
						top='-44px'
						right={0}
					/>
					<ModalBody p={0}>
						{open !== null && (
							<Flex
								direction='column'
								gap={3}>
								<Image
									src={images[open]}
									alt={`${data.name} — picture ${open + 1}`}
									w='full'
									maxH='82vh'
									objectFit='contain'
									borderRadius='12px'
								/>
								{images.length > 1 && (
									<Flex
										justify='space-between'
										align='center'
										color='white'
										fontFamily={fonts.primary}
										fontSize='14px'>
										<Box
											as='button'
											onClick={() => setOpen((open - 1 + images.length) % images.length)}>
											← Previous
										</Box>
										<Text color='white'>
											{open + 1} / {images.length}
										</Text>
										<Box
											as='button'
											onClick={() => setOpen((open + 1) % images.length)}>
											Next →
										</Box>
									</Flex>
								)}
							</Flex>
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
		</Frame>
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
							py={{ base: 2, md: 2 }}
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
				gap={{ base: 6, md: 6 }}>
				{items.map(item => (
					<Flex
						key={item.slug || item._id}
						as={Link}
						href={`/case-study/${item.slug || item._id}`}
						direction='column'
						gap={4}
						role='group'>
						<Box
							borderRadius='12px'
							overflow='hidden'
							bg={t.card}>
							<AspectRatio ratio={16 / 10}>
								<Image
									src={item.image || item.coverImage}
									alt={item.name}
									objectFit='cover'
									loading='lazy'
									transition='transform .5s'
									_groupHover={{ transform: 'scale(1.04)' }}
								/>
							</AspectRatio>
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

	// Number the parts that are shown, in order
	const parts = [
		Overview,
		(data.challengeDescription || data.approachDescription || data.solutionDescription) && Story,
		has(data.solutionFeatures) && Features,
		(has(data.images) || (data.isVideoEnabled && data.videoURL)) && Gallery,
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
		</Page>
	);
};

export default CaseStudyDetail;
