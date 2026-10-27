'use client';

import { useState } from 'react';
import { Box, Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import Page from '../util/Page/Page';
import { fonts } from '../../lib/constants';
import { Frame, toneOf } from '../website-development/sections';

// The unsubscribe page: the address the link belongs to and one button. Done, already done, a bad link and the
// panel being down each get their own words.
const UnsubscribePage = ({ code, email, already, failed }) => {
	const { colorMode } = useColorMode();
	const t = toneOf(colorMode);
	const [done, setDone] = useState(already);
	const [sending, setSending] = useState(false);
	const [problem, setProblem] = useState('');

	const unsubscribe = async () => {
		setSending(true);
		setProblem('');
		try {
			const res = await fetch('/api/newsletter/unsubscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ code }),
			});
			const out = await res.json().catch(() => null);
			if (!res.ok) throw new Error(out?.message || 'You couldn’t be unsubscribed just now. Try again in a moment.');
			setDone(true);
		} catch (error) {
			setProblem(error.message);
		} finally {
			setSending(false);
		}
	};

	const heading = done
		? 'You’re unsubscribed'
		: code
		? 'Unsubscribe from our newsletter'
		: failed
		? 'Something went wrong'
		: 'This link isn’t valid';
	const text = done
		? `${email || 'Your address'} won’t get the Thinkcrypt newsletter any more. Changed your mind? Subscribe again from our home page any time.`
		: code
		? `Stop sending the Thinkcrypt newsletter to ${email}?`
		: failed
		? 'We couldn’t look up your subscription just now. Try the link from your email again in a moment.'
		: 'This unsubscribe link is incomplete or no longer works. Open it again from the newsletter email, or contact us and we’ll take you off the list.';

	return (
		<Page theme={colorMode}>
			<Flex
				as='main'
				direction='column'
				w='full'
				minH='70vh'
				bg={t.bg}>
				<Frame
					t={t}
					pt={{ base: 28, md: 40 }}>
					<Box
						maxW='3xl'
						mx='auto'
						textAlign='center'>
						<Heading
							as='h1'
							mb={6}
							fontFamily={fonts.title}
							fontWeight='600'
							fontSize={{ base: '3rem', md: '4.5rem' }}
							lineHeight='1'
							letterSpacing='2px'
							textTransform='uppercase'
							color={t.text}>
							{heading}
						</Heading>
						<Text
							mb={8}
							fontFamily={fonts.primary}
							fontSize={{ base: '16px', md: '18px' }}
							lineHeight='1.6'
							color={t.sub}>
							{text}
						</Text>
						{code && !done && (
							<Button
								onClick={unsubscribe}
								isLoading={sending}
								loadingText='Unsubscribing'
								size='lg'
								h={14}
								px={10}
								borderRadius='none'
								border='1px'
								borderColor={t.text}
								bg='transparent'
								color={t.text}
								fontFamily={fonts.primary}
								fontSize='16px'
								textTransform='uppercase'
								_hover={{ bg: t.text, color: t.bg }}>
								Unsubscribe
							</Button>
						)}
						{problem && (
							<Text
								mt={4}
								fontFamily={fonts.primary}
								fontSize='14px'
								color={colorMode === 'dark' ? '#ff8a80' : '#c62828'}
								role='alert'>
								{problem}
							</Text>
						)}
						{(done || !code) && (
							<Text
								as={Link}
								href={code ? '/' : '/contact'}
								display='inline-block'
								fontFamily={fonts.primary}
								fontSize='14px'
								textTransform='uppercase'
								color={t.accent}
								_hover={{ textDecoration: 'underline' }}>
								{code ? 'Back to the home page' : 'Contact us'}
							</Text>
						)}
					</Box>
				</Frame>
			</Flex>
		</Page>
	);
};

export default UnsubscribePage;
