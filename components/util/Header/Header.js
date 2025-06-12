'use client';

import Link from 'next/link';
import { Center, Flex, useColorMode } from '@chakra-ui/react';
import Sidebar from '../../sidebar-new/SidebarDrawer';
import { LiaEqualsSolid } from 'react-icons/lia';
import Logo from './Logo';
import Time from './Time';
import ScrollYProgtess from '../Page/ScrollProgress';
import { padding } from '../../../lib/constants';
import { PiMoonThin, PiSunThin } from 'react-icons/pi';
import { Align } from '@/components';

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex
			{...containerCss}
			mixBlendMode='difference'>
			<ScrollYProgtess />
			<Link
				href='/'
				style={{ cursor: 'pointer' }}>
				<Logo />
			</Link>
			<Align gap={6}>
				<Time />
				<Align gap={2}>
					<Center
						onClick={toggleColorMode}
						{...btnCss}>
						{colorMode == 'light' ? (
							<PiSunThin {...colorModeBtn} />
						) : (
							<PiMoonThin {...colorModeBtn} />
						)}
					</Center>
					<Sidebar
						{...btnCss}
						button={<LiaEqualsSolid {...colorModeBtn} />}
					/>
				</Align>
			</Align>
		</Flex>
	);
};

const containerCss = {
	zIndex: 999,
	height: '4rem',
	alignItems: 'center',
	px: { base: padding?.baseBody, md: padding?.lgBody },
	color: 'white',
	position: 'fixed',
	justifyContent: 'space-between',
	width: '100%',
};

const btnCss = {
	boxSize: '1.75rem',
	borderRadius: 'full',
	border: '.5px solid #fefefe',
};

const colorModeBtn = { size: '1rem', color: '#fefefe', cursor: 'pointer' };

export default Header;
