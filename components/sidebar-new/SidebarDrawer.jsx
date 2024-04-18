import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Flex,
	FlexProps,
	IconButton,
	Text,
	Button,
	Show,
} from '@chakra-ui/react';

import SidebarLeftPart from './SidebarLeftPart';
import SidebarRightPart from './SidebarRightPart';



const SidebarDrawer = ({ button, ...props }) => {
	// HOOKS
	const { isOpen, onOpen, onClose } = useDisclosure();
	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<>
			<Flex onClick={onOpen} {...props}>
				{button}
			</Flex>
			<Drawer onClose={onClose} isOpen={isOpen} size='full' autoFocus={false}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody p={0}>
						<Flex h='full' flex={1}>
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
