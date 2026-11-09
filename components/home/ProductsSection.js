'use client';

import Link from 'next/link';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { padding, fonts } from '../../lib/constants';
import { PillButton, SectionHead, num, toneOf } from '../website-development/sections';

// The home page's "Our products" section. Its words and button are the Mint panel's content
// "products" on the home page; the cards are the panel's Products (Website → Products, in their
// Order), so a product added there shows here too. Each card opens the product's page on this site
// (Page on this site) or else its own website (Product website).
const isExternal = href => /^https?:\/\//.test(href || '');

const ProductCard = ({ product: p, i, t }) => {
	const href = p.pagePath || p.productUrl;
	const card = (
		<Flex
			direction='column'
			h='full'
			bg={t.card}
			borderRadius='16px'
			overflow='hidden'
			transition='transform .25s'
			_hover={href ? { transform: 'translateY(-4px)' } : undefined}>
			{p.image && (
				// One frame size for every card, the picture shown whole inside it (never cropped)
				<Box
					position='relative'
					bg='#0d0d0d'
					sx={{ aspectRatio: '1200 / 630' }}>
					<Image
						src={p.image}
						alt={p.imageAlt || p.name}
						position='absolute'
						inset={0}
						w='full'
						h='full'
						objectFit='contain'
						display='block'
						loading='lazy'
					/>
				</Box>
			)}
			<Flex
				direction='column'
				gap={3}
				flex={1}
				p={{ base: 5, md: 7 }}>
				<Text
					fontFamily={fonts.primary}
					fontSize='13px'
					textTransform='uppercase'
					color={t.sub}>
					{num(i)}
				</Text>
				<Text
					fontFamily={fonts.title}
					fontSize={{ base: '2rem', md: '2.75rem' }}
					fontWeight='800'
					lineHeight='1'
					textTransform='uppercase'
					color={t.text}>
					{p.name}
				</Text>
				{p.tagline && (
					<Text
						fontFamily={fonts.primary}
						fontSize={{ base: '14px', lg: '15px' }}
						lineHeight='1.5'
						textTransform='uppercase'
						color={t.sub}>
						{p.tagline}
					</Text>
				)}
				{href && (
					<Text
						mt='auto'
						pt={4}
						fontFamily={fonts.primary}
						fontSize='14px'
						textTransform='uppercase'
						color={t.accent}>
						{(p.pagePath ? p.pageLabel : p.buttonLabel) || 'View product'} →
					</Text>
				)}
			</Flex>
		</Flex>
	);
	if (!href) return card;
	return (
		<Box
			as={Link}
			href={href}
			display='block'
			h='full'
			{...(isExternal(href) && { target: '_blank', rel: 'noopener' })}>
			{card}
		</Box>
	);
};

// Three to a row on wide screens (a 6-column grid, 2 each); a short last row widens its cards
// to fill the row: two left → 3 columns each, one left → the last four go two to a row.
const spanOf = (i, n) => {
	const rest = n % 3;
	if (rest === 2 && i >= n - 2) return 'span 3';
	if (rest === 1 && n > 1 && i >= n - 4) return 'span 3';
	if (rest === 1 && n === 1) return 'span 6';
	return 'span 2';
};

const ProductsSection = ({ section, products, theme }) => {
	if (!section || !products?.length) return null;
	const d = section.data;
	const t = toneOf(theme);

	return (
		<Box
			as='section'
			id='products'
			bg={t.bg}
			px={{ base: padding.baseBody, lg: padding.lgBody }}
			py={{ base: 12, md: 20 }}>
			<SectionHead
				index='—'
				eyebrow={d.eyebrow}
				heading={d.heading}
				text={d.text}
				t={t}
			/>
			<Grid
				templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(6, 1fr)' }}
				gap={{ base: 4, md: 6 }}>
				{products.map((p, i) => (
					<Box
						key={p._id || p.slug || i}
						gridColumn={{
							md: products.length % 2 === 1 && i === products.length - 1 ? 'span 2' : 'auto',
							xl: spanOf(i, products.length),
						}}>
						<ProductCard
							product={p}
							i={i}
							t={t}
						/>
					</Box>
				))}
			</Grid>
			{(d.buttonLabel || d.secondaryLabel) && (
				<Flex
					gap={3}
					wrap='wrap'
					pt={{ base: 8, md: 12 }}>
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
			)}
		</Box>
	);
};

export default ProductsSection;
