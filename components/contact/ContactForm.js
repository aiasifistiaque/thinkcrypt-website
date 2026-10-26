'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Button, Flex, Grid, Input, Select, Text, Textarea } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { MAX_FILES, MAX_TOTAL_MB } from '../../lib/contactLimits';

// The contact form, drawn from the panel's "Contact us" fields. It posts to the site's own /api/contact,
// which sends the files and the enquiry to the panel with the server key.

const MAX_BYTES = MAX_TOTAL_MB * 1024 * 1024;
const ACCEPT = '.png,.jpg,.jpeg,.webp,.gif,.heic,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.zip';
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const mb = bytes => `${(bytes / 1024 / 1024).toFixed(bytes < 1024 * 1024 ? 2 : 1)} MB`;

// Where the visitor came from: the page that sent them here, else this one
const sentFrom = () => {
	try {
		const ref = document.referrer && new URL(document.referrer);
		if (ref && ref.origin === location.origin && ref.pathname !== location.pathname) return ref.pathname;
	} catch {}
	return location.pathname + location.search;
};

const Label = ({ field, t, htmlFor }) => (
	<Text
		as='label'
		htmlFor={htmlFor}
		display='block'
		mb={2}
		fontFamily={fonts.primary}
		fontSize='13px'
		textTransform='uppercase'
		color={t.sub}>
		{field.label}
		{field.required && <Text as='span' color={t.accent}> *</Text>}
	</Text>
);

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

const inputStyle = t => ({
	variant: 'flushed',
	borderColor: t.line,
	color: t.text,
	fontFamily: fonts.primary,
	fontSize: '16px',
	_placeholder: { color: t.sub, opacity: 0.6 },
	_focusVisible: { borderColor: t.text, boxShadow: `0 1px 0 0 ${t.text}` },
});

const ContactForm = ({ fields, types = [], buttonLabel, t, onSent }) => {
	const [values, setValues] = useState({});
	const [files, setFiles] = useState([]);
	const [errors, setErrors] = useState({});
	const [sending, setSending] = useState(false);
	const [problem, setProblem] = useState('');
	const trap = useRef(null);
	const picker = useRef(null);

	const set = (key, value) => {
		setValues(v => ({ ...v, [key]: value }));
		setErrors(e => ({ ...e, [key]: undefined }));
	};

	// /contact?type=<website type slug>&service=<choice> fills those in
	useEffect(() => {
		const q = new URLSearchParams(location.search);
		const type = types.find(x => x.slug === q.get('type'));
		const ref = fields.find(f => f.kind === 'reference');
		if (type && ref) set(ref.key, type._id);
		const service = q.get('service');
		const multi = fields.find(f => f.kind === 'multiselect' && f.options?.includes(service));
		if (multi) set(multi.key, [service]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Adds files while they fit: MAX_FILES of them, MAX_TOTAL_MB together
	const addFiles = list => {
		const next = [...files];
		let skipped = '';
		for (const f of Array.from(list || [])) {
			const used = next.reduce((n, x) => n + x.size, 0);
			if (next.length >= MAX_FILES) skipped = `Up to ${MAX_FILES} files.`;
			else if (used + f.size > MAX_BYTES) skipped = `“${f.name}” doesn’t fit — attachments are up to ${MAX_TOTAL_MB} MB in total. Email bigger files to us.`;
			else next.push(f);
		}
		setFiles(next);
		setErrors(e => ({ ...e, files: skipped || undefined }));
	};

	const check = () => {
		const found = {};
		for (const f of fields) {
			const v = values[f.key];
			const empty = v === undefined || v === '' || (Array.isArray(v) && !v.length);
			if (f.kind === 'files') continue;
			if (f.required && empty) found[f.key] = 'Required';
			else if (f.kind === 'email' && !empty && !EMAIL.test(String(v).trim())) found[f.key] = 'Check the email address';
		}
		setErrors(found);
		return !Object.keys(found).length;
	};

	const submit = async e => {
		e.preventDefault();
		setProblem('');
		if (!check()) return;
		// A bot filled the hidden field: answer as if it went through
		if (trap.current?.value) return onSent('');
		setSending(true);
		try {
			const form = new FormData();
			for (const [k, v] of Object.entries(values)) {
				if (Array.isArray(v)) v.forEach(x => form.append(k, x));
				else if (typeof v === 'string' && v.trim()) form.append(k, v.trim());
			}
			files.forEach(f => form.append('files', f, f.name));
			form.append('page', sentFrom());
			const res = await fetch('/api/contact', { method: 'POST', body: form });
			const out = await res.json().catch(() => null);
			if (!res.ok) throw new Error(out?.message || 'Your message couldn’t be sent. Try again in a moment.');
			onSent(out?.code || '');
		} catch (err) {
			setProblem(err.message);
		} finally {
			setSending(false);
		}
	};

	const field = f => {
		const id = `contact-${f.key}`;
		const v = values[f.key];
		const error = errors[f.key];
		let input;
		if (f.kind === 'textarea')
			input = (
				<Textarea
					id={id}
					rows={6}
					resize='vertical'
					value={v || ''}
					onChange={e => set(f.key, e.target.value)}
					placeholder='What do you want built? Who is it for? Anything you’ve seen that you like?'
					{...inputStyle(t)}
				/>
			);
		else if (f.kind === 'select' || f.kind === 'multiselect')
			input = (
				<Flex
					gap={2}
					wrap='wrap'
					role='group'
					aria-labelledby={id}>
					{(f.options || []).map(o => {
						const on = f.kind === 'multiselect' ? (v || []).includes(o) : v === o;
						const toggle = () =>
							f.kind === 'multiselect' ? set(f.key, on ? v.filter(x => x !== o) : [...(v || []), o]) : set(f.key, on ? '' : o);
						return (
							<Chip
								key={o}
								on={on}
								t={t}
								onClick={toggle}>
								{o}
							</Chip>
						);
					})}
				</Flex>
			);
		else if (f.kind === 'reference')
			input = (
				<Select
					id={id}
					value={v || ''}
					onChange={e => set(f.key, e.target.value)}
					placeholder='Choose one (optional)'
					{...inputStyle(t)}
					sx={{ option: { color: '#0D0D0D' } }}>
					{types.map(x => (
						<option
							key={x._id}
							value={x._id}>
							{x.name}
						</option>
					))}
				</Select>
			);
		else if (f.kind === 'files')
			input = (
				<Box>
					<Flex
						direction='column'
						align='center'
						justify='center'
						gap={2}
						p={{ base: 6, md: 8 }}
						border='1px dashed'
						borderColor={t.line}
						borderRadius='12px'
						textAlign='center'
						cursor='pointer'
						_hover={{ borderColor: t.text }}
						onClick={() => picker.current?.click()}
						onDragOver={e => e.preventDefault()}
						onDrop={e => {
							e.preventDefault();
							addFiles(e.dataTransfer.files);
						}}>
						<Text
							fontFamily={fonts.title}
							fontSize='1.75rem'
							lineHeight='1'
							textTransform='uppercase'
							color={t.text}>
							Drop files or choose
						</Text>
						<Text
							fontFamily={fonts.primary}
							fontSize='12px'
							textTransform='uppercase'
							color={t.sub}>
							Photos, PDF, Word, Excel, PowerPoint, text or zip · up to {MAX_FILES} files, {MAX_TOTAL_MB} MB in total
						</Text>
						<input
							ref={picker}
							id={id}
							type='file'
							multiple
							accept={ACCEPT}
							hidden
							onChange={e => {
								addFiles(e.target.files);
								e.target.value = '';
							}}
						/>
					</Flex>
					{files.length > 0 && (
						<Flex
							direction='column'
							mt={3}>
							{files.map((file, i) => (
								<Flex
									key={`${file.name}-${i}`}
									justify='space-between'
									align='center'
									gap={4}
									py={2}
									borderBottom='1px solid'
									borderColor={t.line}>
									<Text
										fontFamily={fonts.primary}
										fontSize='14px'
										color={t.text}
										noOfLines={1}>
										{file.name}
									</Text>
									<Flex
										gap={4}
										align='center'
										flex='none'>
										<Text
											fontFamily={fonts.primary}
											fontSize='12px'
											color={t.sub}>
											{mb(file.size)}
										</Text>
										<Box
											as='button'
											type='button'
											fontFamily={fonts.primary}
											fontSize='12px'
											textTransform='uppercase'
											color={t.accent}
											onClick={() => setFiles(files.filter((_, j) => j !== i))}>
											Remove
										</Box>
									</Flex>
								</Flex>
							))}
						</Flex>
					)}
				</Box>
			);
		else
			input = (
				<Input
					id={id}
					type={f.kind === 'email' ? 'email' : f.key === 'phone' ? 'tel' : 'text'}
					autoComplete={{ name: 'name', email: 'email', phone: 'tel', company: 'organization' }[f.key]}
					value={v || ''}
					onChange={e => set(f.key, e.target.value)}
					{...inputStyle(t)}
				/>
			);
		return (
			<Box
				key={f.key}
				gridColumn={['text', 'email'].includes(f.kind) ? 'auto' : '1 / -1'}>
				<Label
					field={f}
					t={t}
					htmlFor={f.kind === 'select' || f.kind === 'multiselect' ? undefined : id}
				/>
				{input}
				{error && (
					<Text
						mt={2}
						fontFamily={fonts.primary}
						fontSize='12px'
						textTransform='uppercase'
						color='#e5484d'>
						{error}
					</Text>
				)}
			</Box>
		);
	};

	return (
		<Box
			as='form'
			noValidate
			onSubmit={submit}>
			<Grid
				templateColumns={{ base: '1fr', md: '1fr 1fr' }}
				columnGap={8}
				rowGap={8}>
				{fields.map(field)}
			</Grid>
			{/* Left empty by people; bots fill it */}
			<Box
				position='absolute'
				left='-9999px'
				aria-hidden='true'>
				<input
					ref={trap}
					type='text'
					name='website'
					tabIndex={-1}
					autoComplete='off'
				/>
			</Box>
			{problem && (
				<Text
					mt={8}
					fontFamily={fonts.primary}
					fontSize='14px'
					textTransform='uppercase'
					color='#e5484d'>
					{problem}
				</Text>
			)}
			<Button
				type='submit'
				mt={10}
				h='56px'
				px={10}
				borderRadius='99px'
				bg={t.text}
				color={t.bg}
				fontFamily={fonts.primary}
				fontWeight='400'
				fontSize='14px'
				textTransform='uppercase'
				_hover={{ opacity: 0.85 }}
				_active={{ opacity: 0.75 }}
				isLoading={sending}
				loadingText={files.length ? 'Sending files…' : 'Sending…'}>
				{buttonLabel || 'Send message'}
			</Button>
		</Box>
	);
};

export default ContactForm;
