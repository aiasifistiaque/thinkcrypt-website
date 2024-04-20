import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { breakpoints } from '../../lib/constants';
import Sidebar from '../../sidebar-new/SidebarDrawer';
import { LiaEqualsSolid } from 'react-icons/lia';
import Logo from './Logo';
import Time from './Time';

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
		padding: 0 1.5rem;
	}
`;

const Header = () => {
	return (
		<Container mixBlendMode='difference'>
			<Link href='/'>
				<Logo />
			</Link>
			<Flex
				gap={6}
				align={'center'}>
				<Time />
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
		</Container>
	);
};

export default Header;
