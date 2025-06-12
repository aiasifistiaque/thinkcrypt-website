import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { colors } from '../../../theme/styles';
import Link from 'next/link';
import { fonts } from '../../../lib/constants';

const SidebarNavItem = ({ id, name, href, ...props }) => (
	<Link href={href || '/'}>
		<Flex
			{...containerCss}
			{...props}>
			<Text {...desktopIdTextCss}>{id}</Text>

			<Flex {...innerFlexCss}>
				<Text {...nameTextCss}>{name}</Text>
				<Text {...mobileIdTextCss}>{id}</Text>
			</Flex>
		</Flex>
	</Link>
);

const containerCss = {
	cursor: 'pointer',
	align: 'flex-start',
	gap: { base: 2, lg: 3 },
	fontFamily: fonts?.title,
	w: 'full',
	py: { base: '8px', md: 0 },
	borderBottom: { base: '.5px solid', md: 'none' },
	borderColor: 'text.300',
};

const desktopIdTextCss = {
	fontWeight: '300',
	color: 'text.300',
	display: { base: 'none', md: 'block' },
	fontSize: { base: '.9rem', lg: '12px' },
	lineHeight: { base: '1rem', lg: '2rem' },
	letterSpacing: '2px',
};

const innerFlexCss = {
	w: 'full',
	gap: 2,
	align: { base: 'center', md: 'flex-start' },
	justify: { base: 'space-between', md: 'flex-start' },
};

const nameTextCss = {
	fontFamily: fonts?.title,
	fontWeight: '300',
	color: colors?.text?.dark,
	lineHeight: '1',
	fontSize: { base: '2.5rem', md: '5rem' },
};

const mobileIdTextCss = {
	color: 'text.300',
	display: { base: 'block', md: 'none' },
	fontSize: '2.5rem',
	lineHeight: '2.5rem',
};

export default SidebarNavItem;
