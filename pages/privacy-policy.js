import React from 'react';
import Page from '../components/util/Page/Page';

import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../components/lib/constants';

const Container = styled(Flex)`
	flex-direction: column;
	margin: 24px;
	letter-spacing: 0.5px;
	line-height: 1.6;

	p,
	li {
		font-family: 'Poppins', sans-serif;
		font-size: 1rem;
		letter-spacing: 1px;
		line-height: 1.6;
		margin-bottom: 1rem;
		margin-top: 1rem;
	}

	@media (min-width: ${breakpoints.desktop}) {
		margin: 128px;
	}
`;

const PrivacyPolicy = () => {
	return (
		<Page>
			<Container>
				<Stack>
					<Heading fontSize='32px' color='#FB2176' paddingLeft='80px'>
						Privacy Policy
					</Heading>
					<Text
						color='#7A86A1'
						paddingLeft='80px'
						paddingRight='80px'
						paddingBottom='10px'>
						At thinkcrypt.io, we are committed to protecting the privacy of our
						users. This Privacy Policy explains how we collect, use, and
						disclose information about you when you use our web application,
						Marketrol.
					</Text>
					<Heading fontSize='32px' color='#FB2176' paddingLeft='80px'>
						Information We Collect
					</Heading>
					<Text
						textAlign='justify'
						color='#7A86A1'
						paddingLeft='80px'
						paddingRight='80px'
						paddingBottom='10px'>
						We collect information about you when you use our web application,
						including the following: Personal information that you provide when
						you create an account or submit a form, such as your name, email
						address, and company information. Information about your use of our
						web application, such as the pages you visit and the actions you
						take. Information about the device you use to access our web
						application, including the IP address, browser type, and operating
						system. Information about the performance of the advertisements that
						are run through our web application, including impressions, clicks,
						and conversions. How We Use Your Information. We use the information
						we collect to provide and improve our web application, to
						communicate with you, and to personalize your experience. We may
						also use your information to send you promotional messages or to
						display targeted advertisements.
					</Text>
					<Heading fontSize='32px' color='#FB2176' paddingLeft='80px'>
						Sharing Your Information.
					</Heading>
					<Text
						textAlign='justify'
						color='#7A86A1'
						paddingLeft='80px'
						paddingRight='80px'
						paddingBottom='10px'>
						We may share your information with third parties for the purpose of
						providing and improving our web application, as well as for
						advertising and analytics purposes. We may also share your
						information in response to legal requests or to prevent harm.
					</Text>
					<Heading fontSize='32px' color='#FB2176' paddingLeft='80px'>
						Data Retention
					</Heading>
					<Text
						textAlign='justify'
						color='#7A86A1'
						paddingLeft='80px'
						paddingRight='80px'
						paddingBottom='10px'>
						We will retain your information for as long as your account is
						active or as needed to provide you with our web application. We will
						also retain and use your information as necessary to comply with
						legal obligations, resolve disputes, and enforce our agreements.
					</Text>
					<Heading fontSize='32px' color='#FB2176' paddingLeft='80px'>
						Your Data Protection Rights
					</Heading>
					<Text
						textAlign='justify'
						color='#7A86A1'
						paddingLeft='80px'
						paddingRight='80px'
						paddingBottom='10px'>
						Under certain circumstances, you have the right to request access to
						the personal data we hold about you, as well as the right to request
						the correction or deletion of your personal data. You also have the
						right to object to the processing of your personal data and to
						request the transfer of your personal data to another party.
					</Text>
					<Heading fontSize='32px' color='#FB2176' paddingLeft='80px'>
						Changes to Our Privacy Policy
					</Heading>
					<Text
						textAlign='justify'
						color='#7A86A1'
						paddingLeft='80px'
						paddingRight='80px'
						paddingBottom='10px'>
						We reserve the right to update our Privacy Policy at any time. Any
						changes will be effective immediately upon posting to our website.
						We encourage you to review our Privacy Policy periodically to stay
						informed about how we are protecting the personal data we collect.
					</Text>
					<Heading fontSize='32px' color='#FB2176' paddingLeft='80px'>
						Contact Us
					</Heading>
					<Text
						textAlign='justify'
						color='#7A86A1'
						paddingLeft='80px'
						paddingRight='80px'
						paddingBottom='10px'>
						If you have any questions or concerns about our Privacy Policy or
						the personal data we hold about you, please do not hesitate to
						contact us at support@marketrol.com.
					</Text>
				</Stack>
			</Container>
		</Page>
	);
};

export default PrivacyPolicy;
