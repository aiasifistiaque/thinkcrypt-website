'use client';

import { useEffect, useMemo, useState } from 'react';
import { Box, Button, Checkbox, Flex, Grid, Heading, Input, Select, Text, Textarea } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { DESIGNS, estimate, limitText, taka } from '../../lib/easyCommerce';
import { Frame, Lines, num } from '../website-development/sections';

// The estimate and lead form: the visitor sets how many products and images the store will hold, picks a
// design and sees the build and hosting estimate change as they go. Name, phone and email send it to the
// panel's "EC leads" through /api/ec-lead, which works the estimate out again. The words are the page content
// "estimate" (eyebrow, heading, text, button; subheading is the thank-you).

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputStyle = t => ({
	variant: 'flushed',
	borderColor: t.line,
	color: t.text,
	fontFamily: fonts.primary,
	fontSize: '16px',
	_placeholder: { color: t.sub, opacity: 0.6 },
	_focusVisible: { borderColor: t.text, boxShadow: `0 1px 0 0 ${t.text}` },
});

const Label = ({ children, htmlFor, required, t }) => (
	<Text
		as='label'
		htmlFor={htmlFor}
		display='block'
		mb={2}
		fontFamily={fonts.primary}
		fontSize='13px'
		textTransform='uppercase'
		color={t.sub}>
		{children}
		{required && (
			<Text
				as='span'
				color={t.accent}>
				{' '}
				*
			</Text>
		)}
	</Text>
);

const PRODUCT_STEPS = [25, 50, 100, 200, 300, 500, 1000, 2000];

const Chip = ({ on, children, t, ...props }) => (
	<Box
		as='button'
		type='button'
		px={4}
		py={2}
		border='1px solid'
		borderColor={on ? t.text : t.line}
		borderRadius='99px'
		bg={on ? t.text : 'transparent'}
		color={on ? t.bg : t.text}
		fontFamily={fonts.primary}
		fontSize='13px'
		textTransform='uppercase'
		transition='all .15s'
		_hover={{ borderColor: t.text }}
		aria-pressed={on}
		{...props}>
		{children}
	</Box>
);

const Line = ({ label, value, sub, t }) => (
	<Flex
		justify='space-between'
		align='baseline'
		gap={4}
		py={4}
		borderTop='1px solid'
		borderColor={t.bg}
		style={{ borderColor: 'rgba(127,127,127,.35)' }}>
		<Box>
			<Text
				fontFamily={fonts.primary}
				fontSize='13px'
				textTransform='uppercase'>
				{label}
			</Text>
			{sub && (
				<Text
					mt={1}
					fontFamily={fonts.primary}
					fontSize='12px'
					textTransform='uppercase'
					opacity={0.7}>
					{sub}
				</Text>
			)}
		</Box>
		<Text
			fontFamily={fonts.title}
			fontSize={{ base: '2rem', md: '2.5rem' }}
			lineHeight='1'
			textAlign='right'
			whiteSpace='nowrap'>
			{value}
		</Text>
	</Flex>
);

const Estimate = ({ section, index, t, demos = [] }) => {
	const d = section.data;
	const [v, setV] = useState({
		productCount: 100,
		imageCount: 200,
		design: 'prebuilt',
		demo: '',
		customFeatures: false,
		name: '',
		business: '',
		phone: '',
		email: '',
		message: '',
	});
	const [imagesTouched, setImagesTouched] = useState(false);
	const [errors, setErrors] = useState({});
	const [problem, setProblem] = useState('');
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(null);
	const set = (k, val) => setV(x => ({ ...x, [k]: val }));

	// ?demo=<slug> from a demo's "Get this design"
	useEffect(() => {
		const q = new URLSearchParams(location.search).get('demo');
		const found = q && demos.find(x => x.slug === q || x.name === q);
		if (found) set('demo', found.name);
	}, [demos]);

	const e = useMemo(() => estimate(v), [v]);
	const products = n => {
		set('productCount', n);
		if (!imagesTouched) set('imageCount', n * 2);
	};

	const submit = async ev => {
		ev.preventDefault();
		const errs = {};
		if (!v.name.trim()) errs.name = 'Your name is required.';
		if (!/^\+?[\d\s-]{10,20}$/.test(v.phone.trim())) errs.phone = 'Check the phone number.';
		if (!EMAIL.test(v.email.trim())) errs.email = 'Check the email address.';
		setErrors(errs);
		if (Object.keys(errs).length) return;
		setSending(true);
		setProblem('');
		try {
			const res = await fetch('/api/ec-lead', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...v,
					website: ev.currentTarget.elements.website?.value || '',
					page: location.pathname + location.search,
				}),
			});
			const out = await res.json().catch(() => ({}));
			if (!res.ok) throw new Error(out.message || 'Your request couldn’t be sent. Try again in a moment.');
			setSent(out.code || '');
		} catch (err) {
			setProblem(err.message);
		} finally {
			setSending(false);
		}
	};

	const err = k =>
		errors[k] && (
			<Text
				mt={2}
				fontFamily={fonts.primary}
				fontSize='12px'
				textTransform='uppercase'
				color='#e5484d'>
				{errors[k]}
			</Text>
		);

	const buildText = e.buildMax > e.build ? `${taka(e.build)} – ${taka(e.buildMax)}` : taka(e.build);

	return (
		<Frame
			t={t}
			id={section.slug}>
			<Box
				display='flex'
				justifyContent='space-between'
				borderTop='1px solid'
				borderColor={t.text}
				pt={6}
				mb={{ base: 6, md: 10 }}
				fontFamily={fonts.primary}
				fontSize='0.875rem'
				textTransform='uppercase'>
				<Text color={t.text}>{num(index)}</Text>
				<Text color={t.text}>{d.eyebrow}</Text>
			</Box>
			<Heading
				as='h2'
				fontFamily={fonts.title}
				fontSize={{ base: '3rem', md: '6rem' }}
				fontWeight='800'
				lineHeight='0.95'
				textTransform='uppercase'
				color={t.text}>
				<Lines>{d.heading}</Lines>
			</Heading>
			{d.text && (
				<Text
					mt={6}
					maxW='640px'
					fontFamily={fonts.primary}
					fontSize={{ base: '14px', md: '16px' }}
					lineHeight='1.5'
					textTransform='uppercase'
					color={t.sub}>
					{d.text}
				</Text>
			)}

			{sent !== null ? (
				<Box
					mt={12}
					bg={t.card}
					borderRadius='12px'
					p={{ base: 6, md: 12 }}
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
						{d.subheading || 'We’ll call you within one working day with your plan and a launch date.'}
						{sent ? ` Your reference: ${sent}.` : ''}
					</Text>
				</Box>
			) : (
				<Grid
					as='form'
					noValidate
					onSubmit={submit}
					mt={{ base: 10, md: 14 }}
					templateColumns={{ base: '1fr', lg: '1.4fr 1fr' }}
					gap={{ base: 8, lg: 12 }}
					alignItems='start'>
					<Flex
						direction='column'
						gap={10}
						bg={t.card}
						borderRadius='12px'
						p={{ base: 6, md: 10 }}>
						<Box>
							<Label t={t}>How many products will you sell?</Label>
							<Flex
								wrap='wrap'
								gap={2}
								mb={4}>
								{PRODUCT_STEPS.map(n => (
									<Chip
										key={n}
										t={t}
										on={v.productCount === n}
										onClick={() => products(n)}>
										{taka(n)}
									</Chip>
								))}
							</Flex>
							<Grid
								templateColumns='1fr 1fr'
								gap={8}>
								<Box>
									<Label
										t={t}
										htmlFor='ec-products'>
										Products
									</Label>
									<Input
										id='ec-products'
										type='number'
										min={0}
										inputMode='numeric'
										value={v.productCount}
										onChange={x => products(Math.max(0, Number(x.target.value) || 0))}
										{...inputStyle(t)}
									/>
								</Box>
								<Box>
									<Label
										t={t}
										htmlFor='ec-images'>
										Images
									</Label>
									<Input
										id='ec-images'
										type='number'
										min={0}
										inputMode='numeric'
										value={v.imageCount}
										onChange={x => {
											setImagesTouched(true);
											set('imageCount', Math.max(0, Number(x.target.value) || 0));
										}}
										{...inputStyle(t)}
									/>
								</Box>
							</Grid>
							<Text
								mt={3}
								fontFamily={fonts.primary}
								fontSize='12px'
								textTransform='uppercase'
								color={t.sub}>
								Every product picture counts, including each colour or variant.
							</Text>
						</Box>

						<Box>
							<Label t={t}>Design</Label>
							<Flex
								direction='column'
								gap={2}>
								{DESIGNS.map(x => (
									<Box
										key={x.value}
										as='button'
										type='button'
										textAlign='left'
										p={4}
										border='1px solid'
										borderColor={v.design === x.value ? t.text : t.line}
										borderRadius='12px'
										onClick={() => set('design', x.value)}
										aria-pressed={v.design === x.value}>
										<Flex
											justify='space-between'
											gap={4}
											fontFamily={fonts.primary}
											fontSize='14px'
											textTransform='uppercase'
											color={t.text}>
											<Text>{x.label}</Text>
											<Text whiteSpace='nowrap'>
												BDT {taka(x.price)}
												{x.value === 'custom' ? '+' : ''}
											</Text>
										</Flex>
										<Text
											mt={1}
											fontFamily={fonts.primary}
											fontSize='12px'
											textTransform='uppercase'
											color={t.sub}>
											{x.note}
										</Text>
									</Box>
								))}
							</Flex>
						</Box>

						{demos.length > 0 && (
							<Box>
								<Label
									t={t}
									htmlFor='ec-demo'>
									A demo you like (optional)
								</Label>
								<Select
									id='ec-demo'
									value={v.demo}
									onChange={x => set('demo', x.target.value)}
									{...inputStyle(t)}>
									<option value=''>None yet</option>
									{demos.map(x => (
										<option
											key={x._id || x.name}
											value={x.name}>
											{x.name}
											{x.kind ? ` — ${x.kind}` : ''}
										</option>
									))}
								</Select>
							</Box>
						)}

						<Checkbox
							isChecked={v.customFeatures}
							onChange={x => set('customFeatures', x.target.checked)}
							colorScheme='gray'>
							<Text
								fontFamily={fonts.primary}
								fontSize='14px'
								textTransform='uppercase'
								color={t.text}>
								I need custom features (loyalty points, wholesale prices, an app…)
							</Text>
						</Checkbox>

						<Grid
							templateColumns={{ base: '1fr', md: '1fr 1fr' }}
							columnGap={8}
							rowGap={8}>
							<Box>
								<Label
									t={t}
									htmlFor='ec-name'
									required>
									Name
								</Label>
								<Input
									id='ec-name'
									autoComplete='name'
									value={v.name}
									onChange={x => set('name', x.target.value)}
									{...inputStyle(t)}
								/>
								{err('name')}
							</Box>
							<Box>
								<Label
									t={t}
									htmlFor='ec-business'>
									Business or store name
								</Label>
								<Input
									id='ec-business'
									autoComplete='organization'
									value={v.business}
									onChange={x => set('business', x.target.value)}
									{...inputStyle(t)}
								/>
							</Box>
							<Box>
								<Label
									t={t}
									htmlFor='ec-phone'
									required>
									Phone
								</Label>
								<Input
									id='ec-phone'
									type='tel'
									autoComplete='tel'
									placeholder='01XXXXXXXXX'
									value={v.phone}
									onChange={x => set('phone', x.target.value)}
									{...inputStyle(t)}
								/>
								{err('phone')}
							</Box>
							<Box>
								<Label
									t={t}
									htmlFor='ec-email'
									required>
									Email
								</Label>
								<Input
									id='ec-email'
									type='email'
									autoComplete='email'
									value={v.email}
									onChange={x => set('email', x.target.value)}
									{...inputStyle(t)}
								/>
								{err('email')}
							</Box>
							<Box gridColumn='1 / -1'>
								<Label
									t={t}
									htmlFor='ec-message'>
									Anything else? (optional)
								</Label>
								<Textarea
									id='ec-message'
									rows={3}
									placeholder='Your current site, the look you want, features you need'
									value={v.message}
									onChange={x => set('message', x.target.value)}
									{...inputStyle(t)}
								/>
							</Box>
						</Grid>
						{/* Left empty by people; bots fill it */}
						<Box
							position='absolute'
							left='-9999px'
							aria-hidden='true'>
							<input
								type='text'
								name='website'
								tabIndex={-1}
								autoComplete='off'
							/>
						</Box>
					</Flex>

					<Box
						position={{ lg: 'sticky' }}
						top={{ lg: '96px' }}
						bg={t.text}
						color={t.bg}
						borderRadius='12px'
						p={{ base: 6, md: 8 }}
						aria-live='polite'>
						<Text
							fontFamily={fonts.primary}
							fontSize='13px'
							textTransform='uppercase'
							mb={2}>
							Your estimate · BDT
						</Text>
						<Line
							label='Build, once'
							sub={e.design.label}
							value={buildText}
							t={t}
						/>
						<Line
							label='Hosting a month'
							sub={`${e.plan.name}: ${limitText(e.plan.products)} products · ${limitText(e.plan.images)} images`}
							value={taka(e.monthly)}
							t={t}
						/>
						<Text
							mt={4}
							fontFamily={fonts.primary}
							fontSize='12px'
							lineHeight='1.5'
							textTransform='uppercase'
							opacity={0.75}>
							Live in less than a week. Domain not included.{' '}
							{e.customFeatures || e.design.value === 'custom' ? 'Custom work is quoted before we start.' : ''}
						</Text>
						{problem && (
							<Text
								mt={4}
								fontFamily={fonts.primary}
								fontSize='13px'
								textTransform='uppercase'
								color='#ff8a8d'>
								{problem}
							</Text>
						)}
						<Button
							type='submit'
							mt={6}
							w='full'
							h='56px'
							borderRadius='99px'
							bg={t.bg}
							color={t.text}
							fontFamily={fonts.primary}
							fontWeight='400'
							fontSize='14px'
							textTransform='uppercase'
							_hover={{ opacity: 0.85 }}
							_active={{ opacity: 0.75 }}
							isLoading={sending}
							loadingText='Sending…'>
							{d.buttonLabel || 'Get my store'}
						</Button>
					</Box>
				</Grid>
			)}
		</Frame>
	);
};

export default Estimate;
