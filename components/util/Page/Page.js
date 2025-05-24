import React from 'react';
import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styled from '@emotion/styled';
import { CgMenuRound } from 'react-icons/cg';
import CircleFollow from '../CircleFollow';
import { Flex } from '@chakra-ui/react';

import dynamic from 'next/dynamic';
import ScrollYProgtess from './ScrollProgress';
import { colors } from '../../../theme/styles';
// import ScrollContainer from '../../home/ScrollContainer';

const Scroll = dynamic(() => import('../../scroll/Scroll'));
const ScrollContainer = dynamic(() => import('../../home/ScrollContainer'));

const Page = ({ children, title, description, colorMode, image }) => {
	return (
		<>
			<Head>
				<title>{title || 'thinkcrypt.io'}</title>
				<meta
					property='title'
					content={title || 'thinkcrypt.io'}
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>

				<meta
					name='description'
					content='At thinkcrypt.io, we offer a complete range of services that build up business value, from the initial idea and formulation of product strategy, through building a prototype and testing it with users, right to the creation of the product itself.'></meta>
				<meta
					property='og:title'
					content={title || 'thinkcrypt.io'}
					key='ogtitle'
				/>
				<meta
					property='og:description'
					content={
						description ||
						'At thinkcrypt.io, we offer a complete range of services that build up business value, from the initial idea and formulation of product strategy, through building a prototype and testing it with users, right to the creation of the product itself.'
					}
					key='ogdesc'
				/>

				<meta
					property='og:image'
					content={image || '/hero.jpeg'}
					key='ogimage'
				/>
				<meta
					property='og:site_name'
					content={'thinkcrypt.io'}
					key='ogsitename'
				/>
			</Head>
			<CircleFollow />
			<Header />

			<Scroll>
				<ScrollContainer>
					<Flex
						bg={colorMode == 'dark' ? colors?.background?.dark : colors}
						maxW='100vw'
						minH='100vh'
						flex={1}>
						{children}
					</Flex>
				</ScrollContainer>
			</Scroll>
			<Footer />
		</>
	);
};

export default Page;
