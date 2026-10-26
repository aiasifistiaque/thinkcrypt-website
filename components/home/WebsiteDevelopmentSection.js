'use client';

import Link from 'next/link';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { ArrowUpRight } from 'lucide-react';
import { fonts, padding } from '../../lib/constants';
import { SectionHead, toneOf } from '../website-development/sections';

// The home page's way into /website-development. Its words, list and picture are the Mint
// panel's content "website-development" on the home page; hidden there, it isn't shown.
const WebsiteDevelopmentSection = ({ section, theme }) => {
	if (!section) return null;
	const d = section.data;
	const t = toneOf(theme);
	const href = d.buttonUrl || '/website-development';

	return (
		<Box
			as='section'
			id='website-development'
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
				templateColumns={{ base: '1fr', md: '1fr 1fr' }}
				gap={{ base: 8, md: 16 }}
				alignItems='stretch'>
				{d.image && (
					<Link
						href={href}
						aria-label={d.buttonLabel || d.eyebrow}>
						<Image
							src={d.image}
							alt={d.imageAlt || ''}
							w='full'
							h='full'
							minH={{ base: '260px', md: '480px' }}
							objectFit='cover'
							borderRadius='12px'
							loading='lazy'
						/>
					</Link>
				)}
				<Flex
					direction='column'
					justify='space-between'>
					<Box>
						{d.items?.map((item, i) => (
							<Flex
								key={i}
								as={Link}
								href={href}
								justify='space-between'
								align='center'
								py={{ base: 3, md: 4 }}
								borderTop='1px solid'
								borderColor={t.line}
								color={t.text}
								role='group'>
								<Text
									fontFamily={fonts.title}
									fontSize={{ base: '2rem', md: '3rem' }}
									lineHeight='1'
									textTransform='uppercase'
									color={t.text}
									transition='transform .2s'
									_groupHover={{ transform: 'translateX(8px)' }}>
									{item.title}
								</Text>
								<Text
									fontFamily={fonts.primary}
									fontSize='13px'
									color={t.accent}>
									{String(i + 1).padStart(2, '0')}
								</Text>
							</Flex>
						))}
					</Box>
					{d.buttonLabel && (
						<Flex
							as={Link}
							href={href}
							mt={8}
							py={{ base: 5, md: 7 }}
							borderTop='1px solid'
							borderBottom='1px solid'
							borderColor={t.text}
							justify='space-between'
							align='center'
							color={t.text}
							role='group'>
							<Text
								fontFamily={fonts.title}
								fontSize={{ base: '1.75rem', md: '3rem' }}
								lineHeight='1'
								textTransform='uppercase'
								color={t.text}>
								{d.buttonLabel}
							</Text>
							<Box
								transition='transform .2s'
								_groupHover={{ transform: 'translate(4px, -4px)' }}>
								<ArrowUpRight size={40} />
							</Box>
						</Flex>
					)}
				</Flex>
			</Grid>
		</Box>
	);
};

export default WebsiteDevelopmentSection;
