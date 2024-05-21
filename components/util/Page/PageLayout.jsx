



import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import FooterV3 from '../Footer/FooterV3';
import Header from '../Header/Header';
import ScrollYProgtess from './ScrollProgress';
import CircleFollow from '../CircleFollow';
import { layout } from '../../../lib/constants';

const Container = ({ children, bgColor }) => {
	return (
		<Flex
			as='main'
			bg={bgColor || 'bgColor.light'}
			pt={layout.NAV_HEIGHT}
			maxW='100vw'
			minH='100vh'
			flex={1}
		>
			{children}
		</Flex>
	);
};

const PageLayout = ({ footerVariant, children, title, bgColor }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components
	const head = (
		<Head>
			<title>{title || 'thinkcrypt.io'}</title>
			<meta property='title' content='thinkcrypt.io' />
			<link rel='icon' href='/favicon.ico' />

			<meta
				name='description'
				content='At thinkcrypt.io, we offer a complete range of services that build up business value, from the initial idea and formulation of product strategy, through building a prototype and testing it with users, right to the creation of the product itself.'
			></meta>
			<meta property='og:title' content='thinkcrypt.io' key='ogtitle' />
			<meta
				property='og:description'
				content='At thinkcrypt.io, we offer a complete range of services that build up business value, from the initial idea and formulation of product strategy, through building a prototype and testing it with users, right to the creation of the product itself.'
				key='ogdesc'
			/>

			<meta property='og:image' content='/hero.jpeg' key='ogimage' />
			<meta
				property='og:site_name'
				content={'thinkcrypt.io'}
				key='ogsitename'
			/>
		</Head>
	);

	return (
		<>
			{head}
			<CircleFollow />

			<Header />
			<ScrollYProgtess />
			<Container bgColor={bgColor}>{children && children}</Container>
			{/* <Footer /> */}
			{/* <FooterNew /> */}
			<FooterV3 variant={footerVariant} />
		</>
	);
};

export default PageLayout;
