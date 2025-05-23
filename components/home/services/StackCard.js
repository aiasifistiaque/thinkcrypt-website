import React from 'react';
import { Box, VStack, Heading, Text, Flex, Center, Wrap } from '@chakra-ui/react';
import { colors } from '../../../theme/styles';
import { fonts } from '../../../lib/constants';

const StackCard = ({
	icon,
	title,
	description,
	tags,
	align = 'center',
	heading,
	iconBg,
	colorMode,
	headingStyle,
}) => {
	const bg = colorMode == 'dark' ? colors?.card?.dark : colors?.backcardground?.light;
	const textColor = colorMode == 'dark' ? colors?.text?.dark : colors?.text?.light;
	const secondaryTextColor =
		colorMode == 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;
	const borderColor = colorMode == 'dark' ? colors?.border?.dark : colors?.border?.light;
	const cardBg = colorMode == 'dark' ? colors?.background?.dark : colors?.background?.light;
	return (
		<Flex
			{...cardStyle}
			borderColor={borderColor}
			bg={bg}>
			<VStack {...cardContentStyle}>
				<Flex
					w='full'
					flexDir={heading == 'inline' ? 'row' : 'column'}
					gap={iconBg ? 2 : 4}>
					{icon && (
						<Flex
							w={iconBg ? '44px' : 'auto'}
							h={iconBg ? '44px' : 'auto'}
							bg={iconBg || 'transparent'}
							{...iconWrapperStyle}>
							{icon}
						</Flex>
					)}
					<Heading
						{...cardHeadingStyle}
						color={textColor}
						fontSize={{ base: '18px', md: iconBg ? '1rem' : '50px' }}
						{...headingStyle}>
						{title}
					</Heading>
				</Flex>

				<Flex
					flexDir='column'
					gap={2}
					flex={1}
					justify='flex-end'>
					<Text
						{...cardTextStyle}
						color={secondaryTextColor}>
						{description}
					</Text>
					{tags && tags?.length > 0 && (
						<Wrap
							pb={1}
							pt={6}
							spacing={0}>
							{tags?.map((tag, i) => (
								<Text
									fontSize='14px'
									fontFamily={fonts?.primary}
									textTransform='uppercase'
									color={textColor}
									key={i}>
									{tag}
									{tags?.length < i ? '' : ', '}
								</Text>
							))}
						</Wrap>
					)}
				</Flex>
			</VStack>
		</Flex>
	);
};

const cardStyle = {
	border: '1px solid',

	borderRadius: 'none',
	overflow: 'hidden',
	pt: 8,
	px: 4,
	pb: 2,
	flex: 1,
	h: 'full',
	gap: 4,
};

const cardContentStyle = {
	spacing: 4,
};

const iconWrapperStyle = {
	w: 'full',
};

const cardHeadingStyle = {
	mb: 1,
	textTransform: 'uppercase',
	fontFamily: fonts?.title,
};

const cardTextStyle = {
	fontSize: '16px',
	fontWeight: '500',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
};

export default StackCard;
