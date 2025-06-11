'use client';

import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import Page from '../components/util/Page/Page';
import Link from 'next/link';

export default function NotFound() {
	const { colorMode } = useColorMode();

	return (
		<Page
			colorMode={colorMode}
			title='Page Not Found'>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				minHeight='60vh'
				textAlign='center'
				p={8}>
				<Heading
					as='h1'
					size='2xl'
					mb={4}>
					404
				</Heading>
				<Heading
					as='h2'
					size='xl'
					mb={6}>
					Page Not Found
				</Heading>
				<Text
					fontSize='lg'
					mb={8}
					maxWidth='500px'>
					Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved,
					deleted, or you entered the wrong URL.
				</Text>
				<Link
					href='/'
					passHref>
					<Button
						colorScheme='blue'
						size='lg'>
						Go Back Home
					</Button>
				</Link>
			</Box>
		</Page>
	);
}
