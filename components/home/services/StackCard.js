import React from 'react';
import { Box, VStack, Heading, Text, Flex, Center, Wrap } from '@chakra-ui/react';

const StackCard = ({ icon, title, description, tags, align = 'center', heading, iconBg }) => {
	return (
		<Box {...cardStyle}>
			<VStack
				{...cardContentStyle}
				align={align == 'start' ? 'flex-start' : 'center'}>
				<Flex
					flexDir={heading == 'inline' ? 'row' : 'column'}
					{...(heading == 'inline' ? { align: 'center' } : {})}
					gap={iconBg ? 2 : 4}>
					{icon && (
						<Center
							mx='auto'
							w={iconBg ? '44px' : 'auto'}
							h={iconBg ? '44px' : 'auto'}
							bg={iconBg || 'transparent'}
							{...iconWrapperStyle}>
							{icon}
						</Center>
					)}
					<Heading
						{...cardHeadingStyle}
						fontSize={{ base: '18px', md: iconBg ? '1rem' : '18px' }}
						textAlign={align == 'start' ? 'left' : 'center'}>
						{title}
					</Heading>
				</Flex>

				<Text
					{...cardTextStyle}
					textAlign={align == 'start' ? 'left' : 'center'}>
					{description}
				</Text>
				{tags && tags?.length > 0 && (
					<Wrap
						pb={2}
						pt={6}
						spacing={0}>
						{tags?.map((tag, i) => (
							<Text
								fontSize='11px'
								textTransform='uppercase'
								key={i}>
								{tag}
								{tags?.length < i ? '' : ', '}
							</Text>
						))}
					</Wrap>
				)}
			</VStack>
		</Box>
	);
};

const cardStyle = {
	bg: 'white',
	border: '1px solid',
	borderColor: '#e6e6e6',
	borderRadius: 'none',
	overflow: 'hidden',
	pt: 8,
	px: 4,
	pb: 2,
};

const cardContentStyle = {
	spacing: 4,
};

const iconWrapperStyle = {
	justifyContent: 'center',
};

const cardHeadingStyle = {
	mb: 1,
	textTransform: 'uppercase',
	fontSize: { base: '18px', md: '18px' },
};

const cardTextStyle = {
	color: '#737373',
	fontSize: '16px',
	fontWeight: '500',
};

export default StackCard;
