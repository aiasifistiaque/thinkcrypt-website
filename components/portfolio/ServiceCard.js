import React from 'react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { CheckCircle } from 'lucide-react';
import { colors } from '../../theme/styles';
import { fonts, gap } from '../../lib/constants';

const ServiceCard = ({ title, description, icon, tags, colorMode }) => {
	const bg = colorMode === 'dark' ? colors?.card?.dark : colors?.card?.light;
	const text = colorMode === 'dark' ? colors?.text?.dark : colors?.text?.light;
	const secondaryColor =
		colorMode === 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;
	return (
		<Flex
			{...serviceCardStyle}
			bg={bg}>
			<Flex {...flexIconHeadingStyle}>
				<Box {...iconBoxStyle}>{icon}</Box>
				<Heading
					{...serviceHeadingStyle}
					color={text}>
					{title}
				</Heading>
			</Flex>
			<Text
				{...serviceTextStyle}
				color={secondaryColor}>
				{description}
			</Text>
			<Flex {...detailsListStyle}>
				{tags?.map((detail, idx) => (
					<Flex
						key={idx}
						{...detailFlexStyle}>
						<CheckCircle
							size={16}
							color={colorMode === 'dark' ? colors?.text?.dark : colors?.text?.light}
						/>
						<Text
							{...detailTextStyle}
							color={colorMode === 'dark' ? colors?.text?.blue : colors?.text?.darkBlue}>
							{detail}
						</Text>
					</Flex>
				))}
			</Flex>
		</Flex>
	);
};

const serviceCardStyle = {
	p: { base: 4, md: 8 },
	border: '1px solid',
	borderColor: 'transparent',
	flexDir: 'column',

	borderRadius: '12px',
};

const flexIconHeadingStyle = {
	align: 'center',
	mb: 6,
};

const iconBoxStyle = {
	mr: 4,
};

const serviceHeadingStyle = {
	as: 'h3',
	fontSize: { base: '2rem', md: '3rem' },
	textTransform: 'uppercase',
	letterSpacing: 'wide',
	fontFamily: fonts?.title,
};

const serviceTextStyle = {
	mb: 6,
	color: 'black',
	textTransform: 'uppercase',
	fontFamily: fonts?.primary,
};

const detailsListStyle = {
	align: 'start',
	gap: 2,
	flexDir: ' column',
	flex: 1,

	// align: 'flex-end',
	justify: 'flex-end',
};

const detailFlexStyle = {
	align: 'center',
	gap: 2,
};

const detailTextStyle = {
	ml: 2,
	textTransform: 'uppercase',

	fontSize: '16px',
	letterSpacing: '0px',
	fontWeight: '500',
	fontFamily: fonts?.primary,
};

export default ServiceCard;
