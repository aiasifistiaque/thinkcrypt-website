'use client';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ArrowUpRight } from 'lucide-react';
import { fonts, padding } from '../../lib/constants';
import { Lines, PillButton, toneOf } from '../website-development/sections';

// A small band under the website development section: our pre-built stores, with one button out to
// the commerce site (a full address, so it opens in a new tab). Its words and button are the Mint
// panel's content "instant-commerce" on the home page; hidden there, it isn't shown.
const InstantCommerceSection = ({ section, theme }) => {
	if (!section) return null;
	const d = section.data;
	const t = toneOf(theme);

	return (
		<Box
			as='section'
			id='instant-commerce'
			bg={t.bg}
			px={{ base: padding.baseBody, lg: padding.lgBody }}
			pb={{ base: 12, md: 20 }}>
			<Flex
				direction={{ base: 'column', md: 'row' }}
				justify='space-between'
				align={{ base: 'flex-start', md: 'flex-end' }}
				gap={{ base: 6, md: 12 }}
				bg={t.card}
				borderRadius='12px'
				p={{ base: 6, md: 10 }}>
				<Box>
					{d.eyebrow && (
						<Text
							fontFamily={fonts.primary}
							fontSize='0.875rem'
							textTransform='uppercase'
							color={t.accent}
							mb={{ base: 3, md: 4 }}>
							{d.eyebrow}
						</Text>
					)}
					<Heading
						as='h2'
						fontFamily={fonts.title}
						fontSize={{ base: '2.5rem', md: '4rem' }}
						fontWeight='800'
						lineHeight='0.95'
						letterSpacing='1px'
						textTransform='uppercase'
						color={t.text}>
						<Lines>{d.heading}</Lines>
					</Heading>
				</Box>
				<Flex
					direction='column'
					align='flex-start'
					gap={6}
					maxW={{ md: '440px' }}>
					{d.text && (
						<Text
							fontFamily={fonts.primary}
							fontSize={{ base: '14px', lg: '16px' }}
							lineHeight='1.5'
							textTransform='uppercase'
							color={t.sub}>
							{d.text}
						</Text>
					)}
					<PillButton
						href={d.buttonUrl}
						solid
						t={t}
						gap={2}>
						{d.buttonLabel}
						<ArrowUpRight size={18} />
					</PillButton>
				</Flex>
			</Flex>
		</Box>
	);
};

export default InstantCommerceSection;
