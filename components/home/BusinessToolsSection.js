'use client';

import Link from 'next/link';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { padding, fonts } from '../../lib/constants';
import { PillButton, SectionHead, toneOf } from '../website-development/sections';

// The home page's way into /business-software and /products. Its words, list, picture and both
// buttons are the Mint panel's content "business-tools" on the home page; hidden there, it isn't shown.
const BusinessToolsSection = ({ section, theme }) => {
	if (!section) return null;
	const d = section.data;
	const t = toneOf(theme);
	const items = (d.items || []).filter(item => item.title);

	return (
		<Box
			as='section'
			id='business-tools'
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
				templateColumns={{ base: '1fr', md: '1.4fr 1fr' }}
				gap={{ base: 8, md: 12 }}
				alignItems='center'>
				{d.image && (
					<Link
						href={d.buttonUrl || '/business-software'}
						aria-label={d.buttonLabel || d.eyebrow}>
						<Image
							src={d.image}
							alt={d.imageAlt || ''}
							w='full'
							borderRadius='12px'
							loading='lazy'
						/>
					</Link>
				)}
				<Flex
					direction='column'
					gap={8}>
					{items.length > 0 && (
						<Flex
							gap={2}
							wrap='wrap'>
							{items.map(item => (
								<Text
									key={item.title}
									px={4}
									py={2}
									border='1px solid'
									borderColor={t.text}
									borderRadius='99px'
									fontFamily={fonts.primary}
									fontSize='13px'
									textTransform='uppercase'
									color={t.text}>
									{item.title}
								</Text>
							))}
						</Flex>
					)}
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
		</Box>
	);
};

export default BusinessToolsSection;
