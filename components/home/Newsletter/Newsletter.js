import { border, Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react';
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

	const [trigger, result] = usePostMutation();

	const handleClick = () => {
		trigger({
			path: 'clickevents',
			body: {
				elementType: 'cta',
				elementName: 'Subscribe Newsletter',
				elementId: item?.name,
				elementSlug: `subscribe-newsletter`,
				elementText: 'Susbcribe to our newsletter',
				elementHref: '#',
				clickType: 'submit',
			},
		});
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
					<Flex {...flexStyle}>
						<Input
							{...inputStyle}
							bg={theme == 'dark' ? colors?.text?.dark : 'white'}
							borderColor={theme == 'dark' ? colors?.text?.dark : colors?.text?.darkBlue}
							color={colors?.text?.light}
							placeholder='Enter your email'
							_placeholder={{ color: colors?.text?.light }}
						/>
						<Button
							{...buttonStyle}
							color={textColor}
							onClick={handleClick}
							borderColor={textColor}>
							Subscribe
						</Button>
					</Flex>
					<Text
						{...subTextStyle}
						color={blueColor}>
						By subscribing, you agree to our Privacy Policy.
					</Text>
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

const subTextStyle = {
	fontSize: 'xs',
	color: colors?.textSecondary?.blue,
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
	mt: 3,
};
