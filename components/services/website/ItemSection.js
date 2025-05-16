import React from 'react';
import { Box, VStack, Heading, SimpleGrid, Flex } from '@chakra-ui/react';

const ItemSection = ({ data, title, subHeading, children, grid, ...props }) => {
	return (
		<Flex
			{...containerStyle}
			{...props}>
			<VStack {...headingWrapperStyle}>
				<Heading {...headingStyle}>{title}</Heading>
				{subHeading && <Heading {...subHeadingStyle}>{subHeading}</Heading>}
			</VStack>

			{children}
		</Flex>
	);
};

export default ItemSection;

const containerStyle = {
	px: { base: 6, md: 16 },
	py: 20,
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
	fontSize: { base: '2xl', md: '3xl' },
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
