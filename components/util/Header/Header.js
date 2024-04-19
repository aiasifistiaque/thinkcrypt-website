import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import { Flex, Image, Text } from '@chakra-ui/react';
import { breakpoints } from '../../lib/constants';
import Sidebar from '../../sidebar-new/SidebarDrawer';
import { CgMenuRound } from 'react-icons/cg';
import moment from 'moment-timezone';
const Container = styled(Flex)`
	height: 4rem;
	align-items: center;
	padding: 0 1.5rem;
	color: white;
	position: fixed;
	justify-content: space-between;
	width: 100%;
	backdrop-filter: blur(5px);
	@media (min-width: ${breakpoints.desktop}) {
		padding: 0 8rem;
	}
`;

const Logo = styled(Image)`
	cursor: pointer;
	height: 44px;
	width: auto;
	object-fit: contain;
`;

const Header = () => {
	return (
		<Container>
			<Link href='/'>
				<Logo
					src='/header.png'
					alt='thinkcrypt.io'
				/>
			</Link>
			<Flex
				gap={6}
				align={'center'}>
				<Text
					fontSize='.9rem'
					fontWeight='400'
					color='black.800'
					lineHeight='1.25rem'
					maxW={{ base: '100px', md: 'full' }}>
					{moment().tz('Asia/Dhaka').format('HH:mm [GMT]')}
				</Text>
				<Sidebar
					button={
						<CgMenuRound
							size='1.75rem'
							color='black.800'
							cursor='pointer'
						/>
					}
				/>
			</Flex>
		</Container>
	);
};

export default Header;
