'use client';

import React, { useState } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
	Flex,
	Show,
	Center,
} from '@chakra-ui/react';
import SidebarLeftPart from './SidebarLeftPart';
import SidebarRightPart from './SidebarRightPart';
import { colors } from '../../theme/styles';
import { usePostMutation } from '../../store';

const SidebarDrawer = ({ button, ...props }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [trigger, result] = usePostMutation();

	const handleMenuClick = () => {
		onOpen();
		trigger({
			path: 'clickevents',
			body: {
				elementType: 'nav',
				elementName: 'Sidebar Menu',
				elementId: '',
				elementSlug: 'menu-sidebar',
				elementText: 'Menu',
				elementHref: '#',
				clickType: 'click',
			},
		});
	};

	return (
		<>
			<Center
				onClick={handleMenuClick}
				{...props}>
				{button}
			</Center>
			<Drawer
				onClose={onClose}
				isOpen={isOpen}
				size='full'
				autoFocus={false}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody
						p={0}
						bg={colors?.background?.dark}
						color={colors?.text?.dark}>
						<Flex
							h='full'
							flex={1}>
							<SidebarLeftPart onClose={onClose} />
							<Show above='md'>
								<SidebarRightPart onClose={onClose} />
							</Show>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default SidebarDrawer;
