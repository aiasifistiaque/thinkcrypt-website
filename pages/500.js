import { Box, Heading, Text, Code, VStack } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { colors } from '../theme/styles';
import Page from '../components/util/Page/Page';
import { fonts, padding } from '../lib/constants';
import { PrimaryHeading, SecondaryText } from '../components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Custom500 = () => {
	const { colorMode } = useColorMode();
	const router = useRouter();
	const [errorDetails, setErrorDetails] = useState(null);

	useEffect(() => {
		// Try to get error details from router query or sessionStorage
		const errorInfo = router.query.error || sessionStorage.getItem('lastError');
		if (errorInfo) {
			try {
				setErrorDetails(typeof errorInfo === 'string' ? JSON.parse(errorInfo) : errorInfo);
			} catch (e) {
				setErrorDetails({ message: errorInfo, timestamp: new Date().toISOString() });
			}
		}
	}, [router.query]);

	const cardBg = colorMode === 'dark' ? colors.background.dark : colors.background.light;
	const textColor = colorMode === 'dark' ? colors.text.dark : colors.text.light;
	const secondaryColor =
		colorMode === 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;

	return (
		<Page
			colorMode={colorMode}
			title='Internal Server Error'
			description='Something went wrong on our end'>
			<Box
				minH='100vh'
				w='full'
				bg={cardBg}
				px={{ base: padding?.baseBody, md: 8 }}
				py={{ base: 12, md: 16 }}>
				<Box
					maxW='800px'
					mx='auto'>
					<VStack
						spacing={6}
						align='start'>
						<PrimaryHeading
							as='h1'
							fontSize={{ base: '2.5rem', md: '3rem' }}
							fontWeight='bold'
							lineHeight={1.1}
							fontFamily={fonts?.title}
							color={textColor}>
							500 - Internal Server Error
						</PrimaryHeading>

						<SecondaryText
							fontSize={{ base: 'lg', md: 'xl' }}
							fontFamily={fonts?.primary}
							lineHeight={1.2}
							color={secondaryColor}>
							Something went wrong on our end. We're working to fix it.
						</SecondaryText>

						{/* Development/Debug Information */}
						{(process.env.NODE_ENV === 'development' || errorDetails) && (
							<Box w='full'>
								<Heading
									as='h3'
									size='md'
									mb={4}
									color={textColor}
									fontFamily={fonts?.title}>
									Debug Information
								</Heading>

								{/* Error Details */}
								{errorDetails && (
									<Box mb={6}>
										<Text
											fontSize='sm'
											fontWeight='600'
											mb={2}
											color={textColor}>
											Error Details:
										</Text>
										<Code
											display='block'
											whiteSpace='pre-wrap'
											p={4}
											borderRadius='md'
											fontSize='sm'
											bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
											color={colorMode === 'dark' ? 'gray.200' : 'gray.800'}
											maxH='400px'
											overflowY='auto'>
											{JSON.stringify(errorDetails, null, 2)}
										</Code>
									</Box>
								)}

								{/* Environment Info */}
								<Box mb={6}>
									<Text
										fontSize='sm'
										fontWeight='600'
										mb={2}
										color={textColor}>
										Environment:
									</Text>
									<Code
										display='block'
										whiteSpace='pre-wrap'
										p={4}
										borderRadius='md'
										fontSize='sm'
										bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
										color={colorMode === 'dark' ? 'gray.200' : 'gray.800'}>
										{JSON.stringify(
											{
												timestamp: new Date().toISOString(),
												userAgent:
													typeof window !== 'undefined' ? window.navigator.userAgent : 'N/A',
												url: typeof window !== 'undefined' ? window.location.href : 'N/A',
												referrer: typeof window !== 'undefined' ? document.referrer : 'N/A',
											},
											null,
											2
										)}
									</Code>
								</Box>

								{/* Instructions */}
								<Box>
									<Text
										fontSize='sm'
										color={secondaryColor}
										fontStyle='italic'>
										If you're seeing this error consistently, please copy the debug information
										above and contact support.
									</Text>
								</Box>
							</Box>
						)}

						{/* Production-only message */}
						{process.env.NODE_ENV === 'production' && !errorDetails && (
							<Box>
								<Text
									fontSize='md'
									color={secondaryColor}>
									Error ID: {Date.now().toString(36)}
								</Text>
								<Text
									fontSize='sm'
									color={secondaryColor}
									mt={2}>
									Please try refreshing the page or contact support if the problem persists.
								</Text>
							</Box>
						)}
					</VStack>
				</Box>
			</Box>
		</Page>
	);
};

export default Custom500;
