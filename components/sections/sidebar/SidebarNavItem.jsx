import { Flex, Text } from '@chakra-ui/react';
import React from 'react';



const SidebarNavItem = ({ id, name, ...props }) => {
	return (
		<Flex
			gap={{ base: 2, lg: 3 }}
			fontWeight='400'
			fontFamily='Roboto Flex'
			w='full'
			borderBottom={{ base: '1px solid', md: 'none' }}
			{...props}
		>
			<Text
				display={{ base: 'none', md: 'block' }}
				fontSize={{ base: '1rem', lg: '2rem' }}
				lineHeight={{ base: '1rem', lg: '2rem' }}
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
					fontSize={{ base: '4rem', md: '4rem', lg: '6rem' }}
					lineHeight={{ base: '4rem', md: '4rem', lg: '6rem' }}
					transition='transform 0.5s ease-in-out'
					_hover={{
						transform: 'scale(1.1)',
					}}
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
