'use client';

import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import Page from '../components/util/Page/Page';
import Link from 'next/link';

export default function Error({ error, reset }) {
	const { colorMode } = useColorMode();

	return (
		<Page
			colorMode={colorMode}
			title='Something went wrong'>
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
					500
				</Heading>
				<Heading
					as='h2'
					size='xl'
					mb={6}>
					Something went wrong
				</Heading>
				<Text
					fontSize='lg'
					mb={8}
					maxWidth='500px'>
					We&apos;re sorry, but something went wrong on our end. Please try again or contact support
					if the problem persists.
				</Text>
				<Box
					display='flex'
					gap={4}>
					<Button
						onClick={reset}
						colorScheme='blue'
						size='lg'>
						Try Again
					</Button>
					<Link
						href='/'
						passHref>
						<Button
							variant='outline'
							size='lg'>
							Go Home
						</Button>
					</Link>
				</Box>
			</Box>
		</Page>
	);
}
