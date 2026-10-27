'use client';

import { Center, Flex, Text } from '@chakra-ui/react';
import { PiWhatsappLogoThin } from 'react-icons/pi';
import { fonts, padding } from '../../lib/constants';
import { whatsappHref } from '../../lib/whatsapp';
import { useSiteInfo } from './SiteInfo';

// The WhatsApp button on every page, drawn like the header's round buttons (thin white ring, thin icon) and,
// like the header, blended with "difference" so it stays visible over light and dark sections alike. Its
// Only the round button takes clicks, so the label (shown on hover) never covers the page beside it.
// number, opening message and label are the panel's content "whatsapp" (lib/siteInfo); hidden there, it's gone.
const WhatsAppButton = () => {
	const whatsapp = useSiteInfo()?.whatsapp;
	const href = whatsapp && whatsappHref(whatsapp.number, whatsapp.message);
	if (!href) return null;

	return (
		<Flex
			as='a'
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			aria-label={whatsapp.label}
			title={whatsapp.label}
			role='group'
			position='fixed'
			zIndex={998}
			right={{ base: padding.baseBody, md: padding.lgBody }}
			bottom={{ base: '1.25rem', md: '2rem' }}
			align='center'
			gap={3}
			color='#fefefe'
			mixBlendMode='difference'
			pointerEvents='none'>
			<Text
				display={{ base: 'none', md: 'block' }}
				opacity={0}
				transform='translateX(8px)'
				transition='opacity .25s, transform .25s'
				_groupHover={{ opacity: 1, transform: 'none' }}
				_groupFocusVisible={{ opacity: 1, transform: 'none' }}
				color='#fefefe'
				fontFamily={fonts.primary}
				fontSize='12px'
				letterSpacing='0.08em'
				textTransform='uppercase'
				whiteSpace='nowrap'>
				{whatsapp.label}
			</Text>
			<Center
				boxSize={{ base: '2.75rem', md: '3rem' }}
				borderRadius='full'
				border='.5px solid #fefefe'
				pointerEvents='auto'
				transition='transform .25s'
				_groupHover={{ transform: 'scale(1.06)' }}>
				<PiWhatsappLogoThin
					size='1.5rem'
					color='#fefefe'
				/>
			</Center>
		</Flex>
	);
};

export default WhatsAppButton;
