import { useState } from 'react';
import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../theme/styles';
import { fonts, padding } from '../../../lib/constants';
import { usePostMutation } from '../../../store';

export default function NewsletterSection({ theme }) {
	const bg = theme === 'dark' ? colors?.background?.dark : colors?.background?.light;
	const textColor = theme === 'dark' ? colors?.text?.dark : colors?.text?.light;
	const secondaryColor =
		theme === 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;
	const borderColor = theme === 'dark' ? colors?.background?.light : colors?.background?.dark;
	const blueColor =
		theme === 'dark' ? colors?.textSecondary?.blue : colors?.textSecondary?.darkBlue;

	const [trigger] = usePostMutation();
	const [email, setEmail] = useState('');
	const [sending, setSending] = useState(false);
	const [problem, setProblem] = useState('');
	const [subscribed, setSubscribed] = useState(false);

	// Subscribers land in the Mint panel (through the site's /api/newsletter), which emails them a welcome
	// with an unsubscribe link. Once it goes through, the form gives way to a thank-you.
	const handleSubmit = async e => {
		e.preventDefault();
		if (sending) return;
		const value = email.trim();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return setProblem('Enter a valid email address.');
		setSending(true);
		setProblem('');
		try {
			const res = await fetch('/api/newsletter', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: value, page: window.location.pathname, website: e.target.website?.value }),
			});
			const out = await res.json().catch(() => null);
			if (!res.ok) throw new Error(out?.message || 'You couldn’t be subscribed just now. Try again in a moment.');
			setSubscribed(true);
			trigger({
				path: 'clickevents',
				body: {
					elementType: 'cta',
					elementName: 'Subscribe Newsletter',
					elementId: 'newsletter',
					elementSlug: 'subscribe-newsletter',
					elementText: 'Subscribe to our newsletter',
					elementHref: '#',
					clickType: 'submit',
				},
			});
		} catch (error) {
			setProblem(error.message);
		} finally {
			setSending(false);
		}
	};

	return (
		<Box
			{...sectionStyle}
			bg={bg}>
			<Container {...containerStyle}>
				<Box
					maxW='3xl'
					mx='auto'
					textAlign='center'>
					<Heading
						{...headingStyle}
						color={textColor}>
						Subscribe to our newsletter
					</Heading>
					<Text
						{...textStyle}
						color={secondaryColor}>
						Stay updated with the latest technology trends, industry insights, and company news.
					</Text>
					{subscribed ? (
						<Box
							{...thanksStyle}
							borderColor={textColor}
							role='status'>
							<Text
								{...thanksHeadingStyle}
								color={textColor}>
								Thank you for your subscription
							</Text>
							<Text
								{...subTextStyle}
								mt={2}
								color={blueColor}>
								We’ve sent a confirmation to your inbox.
							</Text>
						</Box>
					) : (
						<form
							onSubmit={handleSubmit}
							noValidate>
							{/* Left empty by people; bots fill it */}
							<input
								name='website'
								tabIndex={-1}
								autoComplete='off'
								aria-hidden='true'
								style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
							/>
							<Flex {...flexStyle}>
								<Input
									{...inputStyle}
									name='email'
									aria-label='Email address'
									autoComplete='email'
									value={email}
									onChange={e => setEmail(e.target.value)}
									isDisabled={sending}
									bg={theme == 'dark' ? colors?.text?.dark : 'white'}
									borderColor={theme == 'dark' ? colors?.text?.dark : colors?.text?.darkBlue}
									color={colors?.text?.light}
									placeholder='Enter your email'
									_placeholder={{ color: colors?.text?.light }}
								/>
								<Button
									{...buttonStyle}
									type='submit'
									isLoading={sending}
									loadingText='Subscribing'
									color={textColor}
									borderColor={textColor}>
									Subscribe
								</Button>
							</Flex>
							{problem && (
								<Text
									{...subTextStyle}
									color={theme === 'dark' ? '#ff8a80' : '#c62828'}
									role='alert'>
									{problem}
								</Text>
							)}
							<Text
								{...subTextStyle}
								color={blueColor}>
								By subscribing, you agree to our Privacy Policy.
							</Text>
						</form>
					)}
				</Box>
			</Container>
		</Box>
	);
}

const sectionStyle = {
	py: { base: 12, md: 20 },
	bg: colors?.background?.dark,
	color: colors?.text?.dark,
	px: { base: padding?.baseBody, md: padding?.lgBody },
};

const containerStyle = {
	maxW: 'container.lg',
};

const headingStyle = {
	mb: 4,
	fontSize: { base: '3rem', md: '5rem' },
	textTransform: 'uppercase',
	fontWeight: '600',
	lineHeight: '1',
	letterSpacing: '2px',
	fontFamily: fonts?.title,
};

const textStyle = {
	color: colors?.textSecondary?.dark,
	mb: 8,
	fontSize: { base: '16px', md: '2rem' },
	fontFamily: fonts?.title,
	textTransform: 'uppercase',
	lineHeight: { base: '1.5', md: '1' },
};

const flexStyle = {
	direction: { base: 'column', sm: 'row' },
	gap: 3,
};

const inputStyle = {
	type: 'email',
	placeholder: 'Enter your email',
	h: 14,
	w: 'full',
	border: '1px',
	borderColor: colors?.text?.dark,
	borderRadius: 'none',
	bg: colors?.text?.dark,
	color: colors?.text?.dark,
	px: 3,
	fontFamily: fonts?.primary,
	py: 2,
	fontSize: 'base',
	color: colors?.text?.light,
	_placeholder: {
		fontFamiy: fonts?.primary,
		textTransform: 'uppercase',
	},
};

const buttonStyle = {
	size: 'lg',
	borderRadius: 'none',
	bg: 'transparent',
	color: colors?.text?.dark,
	fontSize: '16px',
	h: 14,
	border: '1px',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
	borderColor: colors?.text?.dark,
	_hover: {
		bg: 'transparent',
		color: colors?.text?.dark,
	},
};

const thanksStyle = {
	border: '1px',
	px: 6,
	py: { base: 6, md: 8 },
};

const thanksHeadingStyle = {
	fontSize: { base: '1.75rem', md: '2.5rem' },
	fontFamily: fonts?.title,
	textTransform: 'uppercase',
	lineHeight: '1',
	letterSpacing: '1px',
};

const subTextStyle = {
	fontSize: 'xs',
	color: colors?.textSecondary?.blue,
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
	mt: 3,
};
