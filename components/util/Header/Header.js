'use client';

import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import { Center, Flex, useColorMode } from '@chakra-ui/react';
import { breakpoints } from '../../lib/constants';
import Sidebar from '../../sidebar-new/SidebarDrawer';
import { LiaEqualsSolid } from 'react-icons/lia';
import Logo from './Logo';
import Time from './Time';
import ScrollYProgtess from '../Page/ScrollProgress';
import { padding } from '../../../lib/constants';
import { PiMoonThin, PiSunThin } from 'react-icons/pi';

const Container = styled(Flex)`
	zindex: 9999;
	height: 4rem;
	align-items: center;
	padding: 0 1.5rem;
	color: white;
	position: fixed;
	justify-content: space-between;
	width: 100%;

	@media (min-width: ${breakpoints.desktop}) {
		padding: 0 ${padding?.lgBody};
	}
`;

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container
			mixBlendMode='difference'
			zIndex={999}>
			<ScrollYProgtess />
			<Link
				href='/'
				style={{ cursor: 'pointer' }}>
				<Logo />
			</Link>
			<Flex
				gap={6}
				align={'center'}>
				<Time />
				<Flex
					align='center'
					gap={2}>
					<Center
						onClick={toggleColorMode}
						boxSize='1.75rem'
						borderRadius='full'
						border='.5px solid #fefefe'>
						{colorMode == 'light' ? (
							<PiSunThin
								size='1rem'
								color='#fefefe'
								cursor='pointer'
							/>
						) : (
							<PiMoonThin
								size='1rem'
								color='#fefefe'
								cursor='pointer'
							/>
						)}
					</Center>
					<Sidebar
						boxSize='1.75rem'
						borderRadius='full'
						border='.5px solid #fefefe'
						button={
							<LiaEqualsSolid
								size='1rem'
								color='#fefefe'
								cursor='pointer'
							/>
						}
					/>
				</Flex>
			</Flex>
		</Container>
	);
};

export default Header;
