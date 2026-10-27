'use client';

import { useState } from 'react';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { Frame, Lines, num } from '../website-development/sections';
import ContactForm from '../contact/ContactForm';

// A product page's sign-up: the panel's content "interest" on the page gives the words (eyebrow, heading, text,
// button; its subheading is the thank-you), the panel's "Product interest" model gives the fields. Sent requests
// land in the panel, linked to the product, and its automation tells the team. After sending, the thank-you takes
// the form's place.
const InterestSection = ({ section, index, t, fields, product }) => {
	const d = section.data;
	const [sent, setSent] = useState(null);

	return (
		<Frame
			t={t}
			id={section.slug}>
			<Grid
				templateColumns={{ base: '1fr', lg: '1fr 1.4fr' }}
				gap={{ base: 10, lg: 16 }}
				alignItems='start'
				bg={t.card}
				border='1px solid'
				borderColor={t.line}
				borderRadius='12px'
				p={{ base: 6, md: 12 }}>
				<Box
					position={{ lg: 'sticky' }}
					top={{ lg: '96px' }}>
					<Box
						display='flex'
						justifyContent='space-between'
						borderTop='1px solid'
						borderColor={t.text}
						pt={6}
						mb={6}
						fontFamily={fonts.primary}
						fontSize='0.875rem'
						textTransform='uppercase'>
						<Text color={t.text}>{num(index)}</Text>
						<Text color={t.text}>{d.eyebrow}</Text>
					</Box>
					<Heading
						as='h2'
						fontFamily={fonts.title}
						fontSize={{ base: '3rem', md: '4.5rem' }}
						fontWeight='800'
						lineHeight='0.95'
						textTransform='uppercase'
						color={t.text}>
						<Lines>{d.heading}</Lines>
					</Heading>
					{d.text && (
						<Text
							mt={6}
							fontFamily={fonts.primary}
							fontSize={{ base: '14px', md: '15px' }}
							lineHeight='1.5'
							textTransform='uppercase'
							color={t.sub}>
							{d.text}
						</Text>
					)}
				</Box>
				{sent === null ? (
					<ContactForm
						fields={fields}
						buttonLabel={d.buttonLabel || 'Request access'}
						t={t}
						action='/api/interest'
						extra={{ product }}
						messageHint=''
						onSent={code => setSent(code)}
					/>
				) : (
					<Box
						alignSelf='center'
						role='status'>
						<Heading
							as='h3'
							fontFamily={fonts.title}
							fontSize={{ base: '2.5rem', md: '3.5rem' }}
							fontWeight='800'
							lineHeight='0.95'
							textTransform='uppercase'
							color={t.text}>
							Thank you
						</Heading>
						<Text
							mt={5}
							fontFamily={fonts.primary}
							fontSize={{ base: '14px', md: '15px' }}
							lineHeight='1.5'
							textTransform='uppercase'
							color={t.sub}>
							{d.subheading || 'We’ll be in touch soon.'}
							{sent ? ` Your reference: ${sent}.` : ''}
						</Text>
					</Box>
				)}
			</Grid>
		</Frame>
	);
};

export default InterestSection;
