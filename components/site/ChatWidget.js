'use client';

import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { PiChatCircleDotsThin, PiPaperPlaneRightThin, PiXThin } from 'react-icons/pi';
import { fonts, padding } from '../../lib/constants';

// The chat on every page: a round button drawn like the WhatsApp one (thin ring, "difference" blend), sitting
// just above it, that opens a small chat with the Thinkcrypt assistant (/api/chat → lib/chatbot). The visitor's
// id and the last messages stay in this browser (localStorage), so the chat carries on across pages.
const STORE = 'tc-chat';
const HELLO = 'Hi! I’m the Thinkcrypt assistant. Ask me about our services, Mint or Commerce OS.';

const newId = () =>
	(typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`).replace(/[^A-Za-z0-9_-]/g, '');

// Plain text with clickable links
const URL_RE = /(https?:\/\/[^\s)]+)/g;
const Linked = ({ text }) =>
	String(text)
		.split(URL_RE)
		.map((part, i) =>
			i % 2 ? (
				<Box
					as='a'
					key={i}
					href={part}
					target='_blank'
					rel='noopener noreferrer'
					textDecoration='underline'
					wordBreak='break-all'>
					{part}
				</Box>
			) : (
				<Fragment key={i}>{part}</Fragment>
			),
		);

const ChatWidget = () => {
	const [open, setOpen] = useState(false);
	const [state, setState] = useState({ visitorId: '', messages: [] });
	const [draft, setDraft] = useState('');
	const [busy, setBusy] = useState(false);
	const list = useRef(null);
	const input = useRef(null);

	useEffect(() => {
		let saved = null;
		try {
			saved = JSON.parse(localStorage.getItem(STORE) || 'null');
		} catch {}
		setState(saved?.visitorId ? saved : { visitorId: newId(), messages: [] });
	}, []);

	useEffect(() => {
		if (!state.visitorId) return;
		try {
			localStorage.setItem(STORE, JSON.stringify({ visitorId: state.visitorId, messages: state.messages.slice(-40) }));
		} catch {}
	}, [state]);

	useEffect(() => {
		if (open) {
			list.current?.scrollTo({ top: list.current.scrollHeight });
			input.current?.focus();
		}
	}, [open, state.messages.length, busy]);

	const send = async e => {
		e?.preventDefault();
		const text = draft.trim();
		if (!text || busy) return;
		setDraft('');
		setBusy(true);
		setState(s => ({ ...s, messages: [...s.messages, { role: 'user', text }] }));
		let answer;
		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ visitorId: state.visitorId, message: text, page: window.location.pathname }),
			});
			answer = (await res.json())?.reply;
		} catch {}
		setState(s => ({
			...s,
			messages: [...s.messages, { role: 'assistant', text: answer || 'Something went wrong — try again, or reach us on WhatsApp.' }],
		}));
		setBusy(false);
	};

	const messages = [{ role: 'assistant', text: HELLO }, ...state.messages];

	return (
		<>
			{!open && (
				<Center
					as='button'
					type='button'
					onClick={() => setOpen(true)}
					aria-label='Chat with the Thinkcrypt assistant'
					title='Chat with us'
					position='fixed'
					zIndex={998}
					right={{ base: padding.baseBody, md: padding.lgBody }}
					bottom={{ base: '4.25rem', md: '5.25rem' }}
					boxSize={{ base: '2.25rem', md: '2.5rem' }}
					borderRadius='full'
					border='.5px solid #fefefe'
					bg='transparent'
					color='#fefefe'
					mixBlendMode='difference'
					cursor='pointer'
					transition='transform .25s'
					_hover={{ transform: 'scale(1.06)' }}>
					<PiChatCircleDotsThin
						size='1.25rem'
						color='#fefefe'
					/>
				</Center>
			)}

			{open && (
				<Flex
					role='dialog'
					aria-label='Chat with Thinkcrypt'
					direction='column'
					position='fixed'
					zIndex={999}
					right={{ base: '12px', md: padding.lgBody }}
					left={{ base: '12px', md: 'auto' }}
					bottom={{ base: '12px', md: '2rem' }}
					w={{ base: 'auto', md: '370px' }}
					h={{ base: 'min(560px, calc(100dvh - 24px))', md: 'min(560px, calc(100vh - 4rem))' }}
					bg='#fefefe'
					color='#111'
					border='1px solid #111'
					fontFamily={fonts.primary}
					boxShadow='0 12px 40px rgba(0,0,0,.18)'>
					<Flex
						align='center'
						justify='space-between'
						px={4}
						py={3}
						bg='#111'
						color='#fefefe'>
						<Box>
							<Text
								color='#fefefe'
								fontSize='12px'
								letterSpacing='0.08em'
								textTransform='uppercase'>
								Thinkcrypt assistant
							</Text>
							<Text
								color='#bdbdbd'
								fontSize='11px'>
								Answers right away · our team follows up
							</Text>
						</Box>
						<Center
							as='button'
							type='button'
							onClick={() => setOpen(false)}
							aria-label='Close the chat'
							boxSize='2rem'
							bg='transparent'
							cursor='pointer'>
							<PiXThin
								size='1.2rem'
								color='#fefefe'
							/>
						</Center>
					</Flex>

					<Flex
						ref={list}
						direction='column'
						gap={2}
						flex={1}
						overflowY='auto'
						px={3}
						py={4}>
						{messages.map((m, i) => (
							<Box
								key={i}
								alignSelf={m.role === 'user' ? 'flex-end' : 'flex-start'}
								maxW='85%'
								px={3}
								py={2}
								bg={m.role === 'user' ? '#111' : '#f0f0f0'}
								color={m.role === 'user' ? '#fefefe' : '#111'}
								fontSize='14px'
								lineHeight='1.45'
								whiteSpace='pre-wrap'
								wordBreak='break-word'>
								<Linked text={m.text} />
							</Box>
						))}
						{busy && (
							<Text
								alignSelf='flex-start'
								color='#777'
								fontSize='13px'
								px={1}>
								Typing…
							</Text>
						)}
					</Flex>

					<Flex
						as='form'
						onSubmit={send}
						borderTop='1px solid #111'
						align='center'>
						<Box
							as='input'
							ref={input}
							value={draft}
							onChange={e => setDraft(e.target.value)}
							maxLength={1000}
							placeholder='Write a message…'
							aria-label='Your message'
							flex={1}
							px={4}
							py={3}
							bg='transparent'
							color='#111'
							fontSize='14px'
							outline='none'
							border='none'
						/>
						<Center
							as='button'
							type='submit'
							aria-label='Send'
							boxSize='2.75rem'
							bg='transparent'
							cursor={busy || !draft.trim() ? 'default' : 'pointer'}
							opacity={busy || !draft.trim() ? 0.35 : 1}>
							<PiPaperPlaneRightThin
								size='1.3rem'
								color='#111'
							/>
						</Center>
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default ChatWidget;
