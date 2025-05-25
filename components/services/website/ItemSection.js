import React from 'react';
import { Box, VStack, Heading, SimpleGrid, Flex, Text } from '@chakra-ui/react';
import { colors } from '../../../theme/styles';
import { fonts } from '../../../lib/constants';

const ItemSection = ({ data, title, subHeading, children, grid, colorMode, ...props }) => {
	const text = colorMode == 'dark' ? colors?.text?.dark : colors?.text?.light;
	const containerBg = colorMode == 'dark' ? colors?.background?.dark : colors?.background?.light;
	const blue = colorMode == 'dark' ? colors?.text?.blue : colors?.text?.darkBlue;
	return (
		<Flex
			{...containerStyle}
			bg={containerBg}
			{...props}>
			<VStack {...headingWrapperStyle}>
				<Heading
					{...headingStyle}
					color={text}>
					{title}
				</Heading>
				{subHeading && (
					<Text
						{...subHeadingStyle}
						color={blue}>
						{subHeading}
					</Text>
				)}
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
	mx: 'auto',
	textAlign: 'center',
	pb: 8,
};

const headingStyle = {
	mb: 4,
	textTransform: 'uppercase',
	fontSize: { base: '2rem', md: '5rem' },
};

const subHeadingStyle = {
	color: '#737373',
	textTransform: 'uppercase',
	fontSize: '16px',
	fontWight: '200',
	fontFamily: fonts?.primary,
};

const gridStyle = {
	spacing: 8,
};
