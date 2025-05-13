import React from 'react';
import { Box, Container, Flex, Heading, Text, VStack, Button, Image } from '@chakra-ui/react';
import Link from 'next/link';

const SuccessStorieyStartup = () => {
	return (
		<Box {...sectionStyle}>
			<Flex {...flexStyle}>
				<Box>
					<Heading {...headingStyle}>Success Stories</Heading>
					<Text {...paragraphStyle}>
						We've helped dozens of startups successfully launch their products and secure funding.
						Our expertise in building MVPs and scalable platforms has contributed to the success of
						startups across various industries.
					</Text>
					<VStack {...vStackStyle}>
						<Flex {...storyFlexStyle}>
							<Box {...lineStyle} />
							<Text {...storyTextStyle}>FinTech startup secured $2.5M in seed funding</Text>
						</Flex>
						<Flex {...storyFlexStyle}>
							<Box {...lineStyle} />
							<Text {...storyTextStyle}>HealthTech MVP reached 10,000 users in 3 months</Text>
						</Flex>
						<Flex {...storyFlexStyle}>
							<Box {...lineStyle} />
							<Text {...storyTextStyle}>EdTech platform acquired within 18 months of launch</Text>
						</Flex>
					</VStack>
					<Link href='/case-studies'>
						<Button {...buttonStyle}>View Case Studies</Button>
					</Link>
				</Box>
				<Box>
					<Image
						src='https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
						alt='Startup success'
						{...imageStyle}
					/>
				</Box>
			</Flex>
		</Box>
	);
};

export default SuccessStorieyStartup;

// Style Constants
const sectionStyle = {
	w: 'full',
	p: { base: 6, md: 16 },
	py: { base: 12, md: 44 },
};

const containerStyle = {
	w: 'full',
	px: { base: 6, md: 16 },
};

const flexStyle = {
	direction: { base: 'column-reverse', md: 'row' },
	gap: 16,
	align: 'center',
};

const headingStyle = {
	as: 'h2',
	size: 'lg',
	mb: 6,
	textTransform: 'uppercase',
	letterSpacing: 'wide',
};

const paragraphStyle = {
	mb: 6,
};

const vStackStyle = {
	align: 'start',
	spacing: 4,
	mb: 8,
};

const storyFlexStyle = {
	align: 'center',
};

const lineStyle = {
	w: 20,
	h: 1,
	bg: 'black',
	mr: 4,
};

const storyTextStyle = {
	fontWeight: 'bold',
	fontSize: '18px',
};

const buttonStyle = {
	borderColor: 'black',
	bg: 'black',
	color: 'white',
	borderRadius: 'none',
};

const imageStyle = {
	w: 'full',
	h: 'auto',
	border: '1px solid black',
};
