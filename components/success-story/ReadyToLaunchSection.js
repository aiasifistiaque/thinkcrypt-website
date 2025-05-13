import React from 'react';
import { Box, Heading, Text, Button, VStack, Flex, border } from '@chakra-ui/react';
import Link from 'next/link';
import { styles } from '../../theme/styles';

const ReadyToLaunchSection = () => {
	return (
		<Box {...sectionStyle}>
			<Flex {...containerStyle}>
				<VStack {...vStackStyle}>
					<Heading {...headingStyle}>Ready to Launch Your Startup?</Heading>
					<Text {...textStyle}>
						{`Let's transform your idea into a market-ready product that users love and investors
						believe in.`}
					</Text>
					<Link href='/contact'>
						<Button {...buttonStyle}>Schedule a Consultation</Button>
					</Link>
				</VStack>
			</Flex>
		</Box>
	);
};

export default ReadyToLaunchSection;

// Style Constants
const sectionStyle = {
	py: { base: 20, md: 32 },
	bg: 'black',
	color: 'white',
};

const containerStyle = {
	px: { base: 6, md: 16 },
	flexDirection: 'column',
};

const vStackStyle = {
	maxW: '3xl',
	mx: 'auto',
	textAlign: 'center',
	spacing: 6,
};

const headingStyle = {
	as: 'h2',
	size: 'lg',
	textTransform: 'uppercase',
	letterSpacing: 'wider',
	mb: 2,
};

const textStyle = {
	fontSize: 'base',
	color: styles.color.textDarker,
	mb: 14,
	fontSize: '18px',
};

const buttonStyle = {
	size: 'lg',

	borderRadius: 'none',
	bg: 'white',
	color: 'black',
	fontFamily: 'Michroma',
};
