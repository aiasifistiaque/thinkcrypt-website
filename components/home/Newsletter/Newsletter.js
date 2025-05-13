import { border, Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react';

export default function NewsletterSection() {
	return (
		<Box {...sectionStyle}>
			<Container {...containerStyle}>
				<Box
					maxW='3xl'
					mx='auto'
					textAlign='center'>
					<Heading {...headingStyle}>Subscribe to our newsletter</Heading>
					<Text {...textStyle}>
						Stay updated with the latest technology trends, industry insights, and company news.
					</Text>
					<Flex {...flexStyle}>
						<Input {...inputStyle} />
						<Button {...buttonStyle}>Subscribe</Button>
					</Flex>
					<Text {...subTextStyle}>By subscribing, you agree to our Privacy Policy.</Text>
				</Box>
			</Container>
		</Box>
	);
}

const sectionStyle = {
	py: { base: 12, md: 20 },
	bg: '#f2f2f2',
	color: 'black',
	px: { base: 4, md: 8 },
};

const containerStyle = {
	maxW: 'container.lg',
};

const headingStyle = {
	mb: 4,
	fontSize: { base: '2xl', md: '3xl' },
	textTransform: 'uppercase',
	fontWeight: '600',
};

const textStyle = {
	color: '#737373',
	mb: 8,
	fontSize: { base: '16px', md: '18px' },
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
	borderColor: '#e6e6e6',
	borderRadius: 'none',
	bg: 'white',
	px: 3,
	fontFamily: 'Michroma',
	py: 2,
	fontSize: 'base',
	color: 'white',
	_placeholder: {
		fontFamiy: 'Michroma',
	},
};

const buttonStyle = {
	size: 'lg',
	borderRadius: 'none',
	bg: 'black',
	color: 'white',
	fontSize: '16px',
	h: 14,
	border: '1px',
	fontFamily: 'Michroma',
};

const subTextStyle = {
	fontSize: 'xs',
	color: '#737373',
	mt: 3,
};
