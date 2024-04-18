import React from 'react';
import Column from '../util/Column';
import { Flex, Hide, Text } from '@chakra-ui/react';
import SidebarNavItem from '../sections/sidebar/SidebarNavItem';
import { CgCloseO } from 'react-icons/cg';
import LinkButton from '../util/buttons/LinkButton';
import Link from 'next/link';



const SidebarLeftPart = ({ onClose, ...props }) => {
	return (
		<Column flex={2} borderRight='1px solid' {...props}>
			<Flex
				borderBottom='1px solid'
				h='4rem'
				justify='flex-end'
				alignItems='center'
				px='1.5rem'
			>
				<Flex
					display={{ base: 'flex', md: 'none' }}
					onClick={onClose}
					borderLeft='1px solid #DEDEE0'
					minW='7rem'
					justify='flex-end'
					alignItems='center'
					h='full'
					cursor='pointer'
				>
					<CgCloseO size='2.25rem' />
				</Flex>
			</Flex>
			<Flex
				flex={1}
				px={{ base: '1rem', md: '2.5rem' }}
				py={'3rem'}
				alignItems={{ md: 'center' }}
				w='full'
			>
				<Column justify={{ base: 'space-between', md: 'center' }} w='full'>
					<Column gap={6} w='full'>
						<Link href='/'>
							<SidebarNavItem id='01' name='Home' />
						</Link>
						<Link href='/portfolio'>
							<SidebarNavItem id='02' name='Portfolio' />
						</Link>
						<Link href='/team'>
							<SidebarNavItem id='03' name='Team' />
						</Link>
						{/* <Link href='/about'>
							<SidebarNavItem id='03' name='About' />
						</Link> */}
						{/* <Link href='/blog'>
							<SidebarNavItem id='04' name='Blog' />
						</Link> */}
					</Column>
					{/* <Hide above='md'>
						<Column gap={8} alignItems='flex-end'>
							<Text fontSize='5rem' fontFamily='Roboto Flex' lineHeight='5rem'>
								01
							</Text>
							<Flex gap={8}>
								<Link href='/contact-us'>
									<LinkButton label='CONTACT US' />
								</Link>
							</Flex>
						</Column>
					</Hide> */}
				</Column>
			</Flex>
			<Flex
				display={{ base: 'none', md: 'flex' }}
				borderTop={{ md: '1px solid' }}
				h='4rem'
			></Flex>
		</Column>
	);
};

export default SidebarLeftPart;
