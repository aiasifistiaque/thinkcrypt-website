import React from 'react';
import { Box, VStack, Heading, SimpleGrid, Flex, Button } from '@chakra-ui/react';
import Link from 'next/link';

const CardSection = ({ data, title, subHeading, children, btnText, href, grid, ...props }) => {
	return (
		<Flex
			{...containerStyle}
			{...props}>
			<VStack {...headingWrapperStyle}>
				<Heading {...headingStyle}>{title}</Heading>
				{subHeading && <Heading {...subHeadingStyle}>{subHeading}</Heading>}
			</VStack>
			<SimpleGrid
				{...gridStyle}
				columns={{ base: 1, md: 2, lg: grid || 4 }}>
				{children}
			</SimpleGrid>
			{btnText && (
				<Link href={href || '#'}>
					<Box
						mt='44px'
						mb='-24px'
						mx='auto'>
						<Button {...btnStyle}>{btnText || 'Button Text'}</Button>
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
	border: '1px solid',
	borderColor: 'black',
	px: 4,
	py: 2,
	borderRadius: 'none',
	fontSize: '14px',
	fontWeight: 'bold',
	fontFamily: 'Michroma',
	_hover: {
		bg: 'transparent',
		color: 'black',
	},
};

const containerStyle = {
	px: { base: 6, md: 16 },
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
	textTransform: 'uppercase',
	fontSize: { base: 'xl', md: '3xl' },
};

const subHeadingStyle = {
	as: 'h4',
	color: '#737373',
	fontSize: '16px',
	fontWight: '200',
};

const gridStyle = {
	spacing: 8,
};
