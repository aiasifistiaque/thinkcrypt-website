import { Heading, Stack, Flex, Text, Link, Center } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import footerData from '../../../data/footerData';
import { breakpoints } from '../../lib/constants';

const Container = styled(Flex)`
	gap: 1rem;
	padding: 64px 24px;
	flex: 1;
	@media (min-width: ${breakpoints.desktop}) {
		padding: 64px 128px;
	}
`;

const Sections = styled(Flex)`
	flex: 1;
	gap: 4rem;
	justify-content: space-between;
	flex-direction: column;

	@media (min-width: ${breakpoints.desktop}) {
		flex-direction: row;
	}
`;

const Footer = () => {
	const Section = ({ data }) => {
		return (
			<Stack spacing={4}>
				<Heading size='sm'>{data.heading}</Heading>
				<Stack spacing={2}>
					{data.items.map((item, i) => (
						<Link key={i} href={item.href}>
							{item.name}
						</Link>
					))}
				</Stack>
			</Stack>
		);
	};
	return (
		<Stack bg='#f2f2f2'>
			<Container>
				<Sections>
					<Stack>
						<Heading size='md'>Contact Us</Heading>
						<Stack spacing={0}>
							<Text>thinkcrypt.io</Text>
							<Text>House 88, Road 17/A, Block E</Text>
							<Text>Banani</Text>
							<Text>Dhaka 1213, Bangladesh</Text>
						</Stack>

						<Stack spacing={0}>
							<Text>Tel: (+88) 01828398225, 01799399555</Text>
							<Text>Email: info@thinkcrypt.io</Text>
						</Stack>
					</Stack>
					<Flex wrap='wrap' gap='5rem'>
						{footerData.map((item, i) => (
							<Section data={item} key={i} />
						))}
					</Flex>
				</Sections>
			</Container>
			<Center p='4px 16px'>
				<Text textAlign='center' color='gray.600' fontSize={12}>
					{`Copyright ©2024`} | thinkcrypt.io | ALL RIGHTS RESERVED
				</Text>
			</Center>
		</Stack>
	);
};

export default Footer;
