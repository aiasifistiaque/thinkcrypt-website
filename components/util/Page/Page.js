import React from 'react';
import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styled from '@emotion/styled';
import { CgMenuRound } from 'react-icons/cg';
import CircleFollow from '../CircleFollow';

const Container = styled('main')`
	display: flex;
	max-width: 100vw;
	min-height: 100vh;
	flex: 1;
`;

const Page = ({ children, title }) => {
	return (
		<>
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
			<CircleFollow />
			<Header />
			<Container>{children}</Container>
			<Footer />
		</>
	);
};

export default Page;
