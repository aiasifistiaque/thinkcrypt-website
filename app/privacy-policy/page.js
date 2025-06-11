'use client';

import React from 'react';
import Page from '../../components/util/Page/Page';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../../components/lib/constants';

const Container = styled(Flex)`
	flex-direction: column;
	margin: 24px;
	letter-spacing: 0.5px;
	@media screen and (max-width: ${breakpoints.lg}) {
		margin: 16px;
	}
`;

export default function PrivacyPolicy() {
	return (
		<Page title='Privacy Policy'>
			<Container>
				<Heading
					as='h1'
					size='xl'
					mb={6}>
					Privacy Policy
				</Heading>
				{/* Rest of privacy policy content */}
			</Container>
		</Page>
	);
}
