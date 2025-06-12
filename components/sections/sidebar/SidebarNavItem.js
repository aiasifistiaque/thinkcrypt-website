import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { colors, styles } from '../../../theme/styles';
import Link from 'next/link';
import { fonts } from '../../../lib/constants';

const SidebarNavItem = ({ id, name, href, ...props }) => {
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
		<Link href={href || '/'}>
			<Flex
				cursor='pointer'
				align='flex-start'
				gap={{ base: 2, lg: 3 }}
				fontFamily={fonts?.title}
				w='full'
				pb={{ base: '6px', md: 0 }}
				borderBottom={{ base: '1px solid', md: 'none' }}
				borderColor={styles.border.dark}
				{...props}>
				{idText}

				<Flex
					w='full'
					gap={2}
					align='flex-start'
					justify={{ base: 'space-between', md: 'flex-start' }}>
					<Text
						fontFamily={fonts?.title}
						fontWeight='300'
						color={colors?.text?.dark}
						lineHeight='1'
						fontSize={{ base: '2.5rem', md: '5rem' }}>
						{name}
					</Text>
					<Text
						color={'text.300'}
						display={{ base: 'block', md: 'none' }}
						fontSize='2.5rem'
						lineHeight='2.5rem'>
						{id}
					</Text>
				</Flex>
			</Flex>
		</Link>
	);
};

export default SidebarNavItem;
