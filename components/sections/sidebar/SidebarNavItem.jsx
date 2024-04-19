import { Flex, Text } from '@chakra-ui/react';
import React from 'react';



const SidebarNavItem = ({ id, name, ...props }) => {
	return (
		<Flex
			gap={{ base: 2, lg: 3 }}
			fontFamily='Roboto Flex'
			w='full'
			borderBottom={{ base: '1px solid', md: 'none' }}
			{...props}
		>
			<Text
				fontWeight='200'
				color='text.200'
				display={{ base: 'none', md: 'block' }}
				fontSize={{ base: '.9rem', lg: '1rem' }}
				lineHeight={ { base: '1rem', lg: '2rem' } }
				letterSpacing={'2px'}
			>
				{id}
			</Text>
			<Flex
				w='full'
				gap={2}
				justify={{ base: 'space-between', md: 'flex-start' }}
				alignItems='center'
			>
				<Text
					fontWeight='200'
					color='text.200'
					fontSize={{ base: '4rem', md: '4rem', lg: '6rem' }}
					lineHeight={{ base: '4rem', md: '4rem', lg: '6rem' }}
				>
					{name}
				</Text>
				<Text
					display={{ base: 'block', md: 'none' }}
					fontSize='2.5rem'
					lineHeight='2.5rem'
				>
					{id}
				</Text>
			</Flex>
		</Flex>
	);
};

export default SidebarNavItem;
