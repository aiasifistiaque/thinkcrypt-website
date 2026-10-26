'use client';

import { useState } from 'react';
import { Box, Flex, Grid, Heading, Text, useColorMode } from '@chakra-ui/react';
import Page from '../util/Page/Page';
import { fonts } from '../../lib/constants';
import { Band, Frame, Hero, Lines, num, toneOf } from '../website-development/sections';
import ContactForm from './ContactForm';

// /contact: the panel's intro ("hero"), the form's words ("form") and the thank-you band ("thanks");
// email, phone and address from Site setup. After sending, the thank-you band takes the form's place.

const Detail = ({ label, children, href, t }) =>
	children ? (
		<Box
			py={4}
			borderTop='1px solid'
			borderColor={t.line}>
			<Text
				mb={1}
				fontFamily={fonts.primary}
				fontSize='12px'
				textTransform='uppercase'
				color={t.accent}>
				{label}
			</Text>
			<Text
				as={href ? 'a' : 'p'}
				href={href}
				fontFamily={fonts.primary}
				fontSize={{ base: '15px', md: '16px' }}
				lineHeight='1.5'
				color={t.text}
				_hover={href ? { textDecoration: 'underline' } : undefined}>
				{children}
			</Text>
		</Box>
	) : null;

const ContactPage = ({ sections = [], fields = [], types = [], settings = {}, api, apiKey }) => {
	const { colorMode } = useColorMode();
	const t = toneOf(colorMode);
	const [sent, setSent] = useState(null);
	const by = slug => sections.find(s => s.slug === slug);
	const hero = by('hero');
	const form = by('form')?.data || {};
	const thanks = by('thanks');

	return (
		<Page theme={colorMode}>
			<Flex
				as='main'
				direction='column'
				w='full'
				minH='100vh'
				bg={t.bg}>
				{hero && (
					<Hero
						section={hero}
						index={0}
						t={t}
					/>
				)}

				{sent !== null && thanks ? (
					<Band
						section={{
							...thanks,
							data: { ...thanks.data, text: [thanks.data.text, sent && `Reference: ${sent}`].filter(Boolean).join(' ') },
						}}
						index={1}
						t={t}
					/>
				) : (
					<Frame
						t={t}
						id='form'>
						<Grid
							templateColumns={{ base: '1fr', lg: '1fr 1.7fr' }}
							gap={{ base: 10, lg: 20 }}
							alignItems='start'>
							<Box position={{ lg: 'sticky' }} top={{ lg: '96px' }}>
								<Flex
									justify='space-between'
									borderTop='1px solid'
									borderColor={t.text}
									pt={6}
									mb={6}
									fontFamily={fonts.primary}
									fontSize='0.875rem'
									textTransform='uppercase'>
									<Text color={t.text}>{num(1)}</Text>
									<Text color={t.text}>{form.eyebrow}</Text>
								</Flex>
								<Heading
									as='h2'
									fontFamily={fonts.title}
									fontSize={{ base: '3rem', md: '4.5rem' }}
									fontWeight='800'
									lineHeight='0.95'
									textTransform='uppercase'
									color={t.text}>
									<Lines>{form.heading || 'Send us your brief'}</Lines>
								</Heading>
								{form.text && (
									<Text
										mt={6}
										mb={8}
										fontFamily={fonts.primary}
										fontSize={{ base: '14px', md: '15px' }}
										lineHeight='1.5'
										textTransform='uppercase'
										color={t.sub}>
										{form.text}
									</Text>
								)}
								<Detail
									label='Email'
									href={settings.email && `mailto:${settings.email}`}
									t={t}>
									{settings.email}
								</Detail>
								<Detail
									label='Phone'
									href={settings.phone && `tel:${settings.phone.replace(/[^\d+]/g, '')}`}
									t={t}>
									{settings.phone}
								</Detail>
								<Detail
									label='Office'
									t={t}>
									{settings.address}
								</Detail>
							</Box>
							<ContactForm
								fields={fields}
								types={types}
								api={api}
								apiKey={apiKey}
								buttonLabel={form.buttonLabel}
								t={t}
								onSent={code => {
									setSent(code);
									window.scrollTo({ top: 0, behavior: 'smooth' });
								}}
							/>
						</Grid>
					</Frame>
				)}
			</Flex>
		</Page>
	);
};

export default ContactPage;
