import React from 'react';
import { Box, VStack, Heading, SimpleGrid, Flex, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { colors } from '../../../theme/styles';
import { fonts, padding } from '../../../lib/constants';

const CardSection = ({
	data,
	title,
	subHeading,
	children,
	btnText,
	href,
	grid,
	columns,
	colorMode,
	...props
}) => {
	const textColor = colorMode === 'dark' ? colors?.text?.dark : colors?.text?.light;
	const containerBg = colorMode === 'dark' ? colors?.background?.dark : colors?.background?.light;
	return (
		<Flex
			{...containerStyle}
			{...props}
			bg={containerBg}>
			<VStack {...headingWrapperStyle}>
				<Heading
					{...headingStyle}
					color={textColor}>
					{title}
				</Heading>
				{subHeading && <Heading {...subHeadingStyle}>{subHeading}</Heading>}
			</VStack>
			<SimpleGrid
				{...gridStyle}
				columns={columns || { base: 1, md: 2, lg: grid || 4 }}>
				{children}
			</SimpleGrid>
			{btnText && (
				<Link href={href || '#'}>
					<Box
						mt='44px'
						mb='-24px'
						mx='auto'>
						<Button
							{...btnStyle}
							color={textColor}>
							{btnText || 'Button Text'}
						</Button>
					</Box>
				</Link>
			)}
		</Flex>
	);
};

export default CardSection;

const btnStyle = {
	bg: 'transparent',
	color: 'black',
	textTransform: 'uppercase',
	border: '1px solid',
	borderColor: 'black',
	px: 4,
	py: 2,
	borderRadius: 'none',
	fontSize: '18px',

	fontFamily: fonts?.primary,
	_hover: {
		bg: 'transparent',
		color: 'white',
	},
};

const containerStyle = {
	px: { base: padding?.baseBody, md: padding?.lgBody },
	py: 20,
	pb: 16,
	flexDirection: 'column',
};

const headingWrapperStyle = {
	maxW: '4xl',
	mx: 'auto',
	textAlign: 'center',
	pb: 8,
};

const headingStyle = {
	mb: 4,
	fontFamily: fonts?.heading,
	textTransform: 'uppercase',
	fontWeight: '600',
	textAlign: 'center',
	fontSize: { base: 'xl', md: '6rem' },
};

const subHeadingStyle = {
	as: 'h4',
	color: '#737373',
	fontSize: '16px',
	fontWight: '200',
};

const gridStyle = {
	spacing: { base: 2, md: 6 },
};
