import React from 'react';
import Column from '../util/Column';
import { Flex, Hide, Text } from '@chakra-ui/react';
import SidebarNavItem from '../sections/sidebar/SidebarNavItem';
import { CgCloseO } from 'react-icons/cg';
import LinkButton from '../util/buttons/LinkButton';
import Link from 'next/link';
import { styles } from '../../theme/styles';

const BORDER = styles.border.dark;

const SidebarLeftPart = ({ onClose, ...props }) => {
	return (
		<Column
			flex={2}
			borderRight={BORDER}
			{...props}>
			<Flex
				borderBottom={BORDER}
				h='4rem'
				justify='flex-end'
				alignItems='center'
				px='1.5rem'>
				<Flex
					display={{ base: 'flex', md: 'none' }}
					onClick={onClose}
					borderLeft={BORDER}
					minW='7rem'
					justify='flex-end'
					alignItems='center'
					h='full'
					cursor='pointer'>
					<CgCloseO size='2.25rem' />
				</Flex>
			</Flex>
			<Flex
				flex={1}
				px={{ base: '1rem', md: '2.5rem' }}
				py={'3rem'}
				alignItems={{ md: 'center' }}
				w='full'>
				<Column
					justify={{ base: 'space-between', md: 'center' }}
					w='full'>
					<Column
						gap={6}
						w='full'>
						<Link href='/'>
							<SidebarNavItem
								id='01'
								name='Home'
							/>
						</Link>
						<Link href='/portfolio'>
							<SidebarNavItem
								id='02'
								name='Portfolio'
							/>
						</Link>
						<Link href='/team'>
							<SidebarNavItem
								id='03'
								name='Team'
							/>
						</Link>
					</Column>
					<Hide above='md'>
						<Column
							gap={8}
							alignItems='flex-end'>
							<Text
								fontSize='5rem'
								lineHeight='5rem'
								color='text.200'>
								00
							</Text>
							<Flex gap={8}>
								<Link href='https://docs.google.com/forms/d/e/1FAIpQLSeu0GxkeIBfjuAXlPALET-5S1Dxs6JASbV2CSjv2Yv4YA1vZQ/viewform?usp=sf_link'>
									<LinkButton label='CONTACT US' />
								</Link>
							</Flex>
						</Column>
					</Hide>
				</Column>
			</Flex>
			<Flex
				display={{ base: 'none', md: 'flex' }}
				borderTop={{ md: BORDER }}
				h='4rem'></Flex>
		</Column>
	);
};

export default SidebarLeftPart;
