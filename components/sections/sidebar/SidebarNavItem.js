import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const SidebarNavItem = ({ id, name, ...props }) => {
	const idText = (
		<Text
			fontWeight='300'
			color='text.300'
			display={{ base: 'none', md: 'block' }}
			fontSize={{ base: '.9rem', lg: '12px' }}
			lineHeight={{ base: '1rem', lg: '2rem' }}
			letterSpacing={'2px'}>
			{id}
		</Text>
	);
	return (
		<Flex
			align='flex-start'
			gap={{ base: 2, lg: 3 }}
			fontFamily='Suisse'
			w='full'
			borderBottom={{ base: '1px solid', md: 'none' }}
			{...props}>
			{idText}
			<Flex
				w='full'
				gap={2}
				align='flex-start'
				justify={{ base: 'space-between', md: 'flex-start' }}>
				<Text
					fontWeight='300'
					color='text.200'
					lineHeight='1'
					fontSize='4rem'>
					{name}
				</Text>
				<Text
					display={{ base: 'block', md: 'none' }}
					fontSize='2.5rem'
					lineHeight='2.5rem'>
					{id}
				</Text>
			</Flex>
		</Flex>
	);
};

export default SidebarNavItem;
