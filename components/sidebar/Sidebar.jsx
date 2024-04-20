import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { breakpoints, colors } from '../lib/constants.js';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	useDisclosure,
	Text,
	Stack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { CloseButton } from '../sidebar-new/SidebarRightPart.js';

const menu = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Our Team',
		href: '/team',
	},

	{
		title: 'Portfolio',
		href: '/portfolio',
	},
];
const EachMenuItem = ({ href, children }) => {
	return (
		<Link href={href} cursor={'pointer'}>
			<Text fontSize={'2rem'} color={colors.charcole} fontWeight={600} fontFamily={'Poppins'}>
				{children}
			</Text>
		</Link>
	);
};

const Sidebar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button colorScheme='ghost' onClick={onOpen}>
				<CloseButton/>
			</Button>
			<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton scale={2} />

					<DrawerBody>
						<Stack w='full' py={12} spacing={6}>
							{menu.map((item, index) => (
								<EachMenuItem key={index} href={item.href}>
									{item.title}
								</EachMenuItem>
							))}
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Sidebar;
