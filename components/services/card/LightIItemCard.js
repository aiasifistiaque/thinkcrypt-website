import React from 'react';
import { Box, VStack, Heading, Text, Flex, Center } from '@chakra-ui/react';
import { colors } from '../../../theme/styles';
import { fonts } from '../../../lib/constants';

const LightIItemCard = ({ item, align = 'center', heading, iconBg, colorMode }) => {
	const card = colorMode == 'dark' ? colors?.card.dark : colors?.card.light;
	return (
		<Flex
			{...cardStyle}
			bg={card}>
			<Flex
				{...cardContentStyle}
				flex={1}
				align={align == 'start' ? 'flex-start' : 'center'}>
				<Flex
					flex={1}
					flexDir={heading == 'inline' ? 'row' : 'column'}
					{...(heading == 'inline' ? { align: 'center' } : {})}
					gap={iconBg ? 2 : 4}>
					{item?.icon && (
						<Center
							mx='auto'
							w={iconBg ? '44px' : 'auto'}
							h={iconBg ? '44px' : 'auto'}
							bg={iconBg || 'transparent'}
							{...iconWrapperStyle}>
							{item?.icon}
						</Center>
					)}
					<Heading
						{...cardHeadingStyle}
						fontSize={{ base: '18px', md: iconBg ? '2rem' : '2rem' }}
						lineHeight={1}
						textAlign={align == 'start' ? 'left' : 'center'}>
						{item?.title}
					</Heading>
				</Flex>
				<Flex flex={1}>
					<Text
						{...cardTextStyle}
						color={colorMode == 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light}
						textAlign={align == 'start' ? 'left' : 'center'}>
						{item?.description}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

const cardStyle = {
	borderRadius: '12px',
	flexDir: 'column',
	p: 6,
	px: 4,
	flex: 1,
};

const cardContentStyle = {
	gap: 4,
	flexDir: 'column',
};

const iconWrapperStyle = {
	justifyContent: 'center',
};

const cardHeadingStyle = {
	mb: 1,
	textTransform: 'uppercase',
	fontSize: { base: '2rem', md: '4rem' },
	fontFamily: fonts?.title,
};

const cardTextStyle = {
	fontSize: '16px',
	fontWeight: '500',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
};

export default LightIItemCard;
