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

const SidebarDrawer = ({ button, ...props }) => {
	// HOOKS
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [index, setIndex] = useState(1);

	return (
		<>
			<Center
				onClick={onOpen}
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
						bg='black.800'
						color='white'>
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