import React from 'react';
import { Box, Heading, Text, Button, VStack, Flex, border } from '@chakra-ui/react';
import Link from 'next/link';
import { colors, styles } from '../../theme/styles';
import { fonts } from '../../lib/constants';

const ReadyToLaunchSection = ({ theme }) => {
	const bg = theme === 'dark' ? colors?.background.dark : colors?.background.light;
	const text = theme === 'dark' ? colors?.text.dark : colors?.text.light;
	const secondary = theme === 'dark' ? colors?.textSecondary.dark : colors?.textSecondary.light;
	const blue = theme === 'dark' ? colors?.text.blue : colors?.text.darkBlue;
	return (
		<Box
			{...sectionStyle}
			bg={bg}>
			<Flex {...containerStyle}>
				<VStack {...vStackStyle}>
					<Heading
						{...headingStyle}
						color={text}>
						Ready to Launch Your Startup?
					</Heading>
					<Text
						{...textStyle}
						color={secondary}>
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
	pt: 0,
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
	fontSize: { base: '2rem', md: '6rem' },
	textTransform: 'uppercase',
	fontFamily: fonts?.title,
	mb: 2,
	lineHeight: '1',
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
