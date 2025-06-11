import { Box, Heading, Image, HStack, VStack, Avatar, Tag } from '@chakra-ui/react';
import { Divider, useColorMode, Grid } from '@chakra-ui/react';
import { colors } from '../../theme/styles';
import Page from '../../components/util/Page/Page';
import { fonts, padding } from '../../lib/constants';
import { PrimaryHeading, PrimaryText, SecondaryText } from '../../components';
import { useRouter } from 'next/router';

// Server-Side Rendering
export async function getServerSideProps(context) {
	const { id } = context.params;
	const isProduction = process.env.NODE_ENV === 'production';

	console.log('Fetching blog with ID:', id);

	try {
		// Validate environment variables
		if (!process.env.BACKEND_URL && !process.env.NEXT_PUBLIC_BACKEND) {
			const error = {
				type: 'MISSING_ENV_VAR',
				message: 'Backend URL not configured',
				details: {
					BACKEND_URL: !!process.env.BACKEND_URL,
					NEXT_PUBLIC_BACKEND: !!process.env.NEXT_PUBLIC_BACKEND,
					NODE_ENV: process.env.NODE_ENV,
				},
				timestamp: new Date().toISOString(),
			};

			console.error('Environment error:', error);

			return {
				props: {
					blogData: null,
					error: JSON.stringify(error, null, 2),
				},
			};
		}

		// Prepare headers with authentication token
		const headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		};

		// Add authentication token if available
		if (process.env.API_TOKEN) {
			headers['Authorization'] = process.env.API_TOKEN;
		}

		const backendUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND;
		const apiUrl = `${backendUrl}/blogs/g/slug/${id}`;

		console.log('Making request to:', apiUrl);
		console.log('Headers:', Object.keys(headers));

		// Make API request with authentication
		const response = await fetch(apiUrl, {
			method: 'GET',
			headers,
		});

		console.log('Response status:', response.status);

		if (!response.ok) {
			const errorText = await response.text().catch(() => 'Unable to read error response');

			const error = {
				type: 'API_ERROR',
				message: `API request failed`,
				details: {
					status: response.status,
					statusText: response.statusText,
					url: apiUrl,
					headers: Object.keys(headers),
					responseBody: errorText.substring(0, 1000), // Limit response body size
				},
				timestamp: new Date().toISOString(),
			};

			console.log('Blog not found or error fetching data:', error);

			// Return 404 for not found
			if (response.status === 404) {
				return {
					notFound: true,
				};
			}

			// Return error details for debugging
			return {
				props: {
					blogData: null,
					error: JSON.stringify(error, null, 2),
				},
			};
		}

		const blogData = await response.json();
		console.log('Successfully fetched blog data:', blogData?.name);

		// Validate required data
		if (!blogData || !blogData.name) {
			const error = {
				type: 'INVALID_DATA',
				message: 'Invalid blog data structure',
				details: {
					hasData: !!blogData,
					dataKeys: blogData ? Object.keys(blogData) : [],
					url: apiUrl,
				},
				timestamp: new Date().toISOString(),
			};

			console.error('Invalid blog data received:', error);

			return {
				props: {
					blogData: null,
					error: JSON.stringify(error, null, 2),
				},
			};
		}

		return {
			props: {
				blogData,
				error: null,
			},
		};
	} catch (error) {
		const errorInfo = {
			type: 'EXCEPTION',
			message: error.message,
			details: {
				name: error.name,
				stack: error.stack,
				url: `${process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND}/blogs/g/slug/${id}`,
				blogId: id,
			},
			timestamp: new Date().toISOString(),
		};

		console.error('Error fetching blog data:', errorInfo);

		return {
			props: {
				blogData: null,
				error: JSON.stringify(errorInfo, null, 2),
			},
		};
	}
}

// Simple content processor without external dependencies
const processContent = content => {
	if (!content) return '';

	// If content already contains HTML tags, return as is
	if (content.includes('<') && content.includes('>')) {
		return content;
	}

	// Otherwise, wrap plain text in paragraphs
	const paragraphs = content
		.split(/\n\s*\n/)
		.map(para => para.trim())
		.filter(para => para.length > 0);

	return paragraphs
		.map(paragraph => {
			const formattedParagraph = paragraph.replace(/\n/g, '<br>');
			return `<p>${formattedParagraph}</p>`;
		})
		.join('');
};

const BlogSingle = ({ blogData: data, error }) => {
	const router = useRouter();
	const { id } = router.query;
	const isFetching = false;
	const { colorMode } = useColorMode();

	// Handle loading state
	if (isFetching) return <Page colorMode={colorMode}></Page>;

	// Handle error state
	if (error) {
		return (
			<Page
				colorMode={colorMode}
				title='Error loading blog'>
				<Box p={10}>
					<Heading>Error loading blog</Heading>
					<Box
						mt={4}
						p={4}
						bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
						borderRadius='md'
						overflowX='auto'>
						<SecondaryText
							fontSize='sm'
							fontFamily='monospace'
							whiteSpace='pre-wrap'>
							{error}
						</SecondaryText>
					</Box>
				</Box>
			</Page>
		);
	}

	// Handle no data state
	if (!data) {
		return (
			<Page
				colorMode={colorMode}
				title='Blog not found'>
				<Box p={10}>
					<Heading>Blog not found</Heading>
					<SecondaryText mt={4}>
						The blog post you&apos;re looking for doesn&apos;t exist.
					</SecondaryText>
				</Box>
			</Page>
		);
	}

	const cardBg = colorMode === 'dark' ? colors.background.dark : colors.background.light;
	const secondaryColor =
		colorMode === 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;
	const tagBg = colorMode == 'dark' ? colors.card.dark : colors.card.light;

	return (
		<Page
			colorMode={colorMode}
			title={data?.name}
			description={data?.excerpt}
			image={data?.image || data?.coverImage}>
			<Box
				minH='100vh'
				w='full'
				bg={cardBg}>
				<Box
					px={{ base: padding?.baseBody, md: 8 }}
					py={{ base: 12, md: 16 }}
					maxW='900px'
					mx='auto'>
					<Box w='100%'>
						{/* Category Tag */}
						<Tag
							size='sm'
							bg='transparent'
							fontFamily={fonts?.primary}
							borderRadius='full'
							px={2}
							py={1}
							mb={4}
							textTransform='uppercase'
							fontSize='xs'
							fontWeight='300'
							letterSpacing='0.5px'
							border='.5px solid'
							borderColor={colorMode === 'dark' ? 'gray.400' : 'gray.100'}
							color={secondaryColor}>
							{data?.category}
						</Tag>

						{/* Article Title */}
						<PrimaryHeading
							as='h1'
							fontSize={{ base: '2.5rem', md: '3rem' }}
							mb={4}
							fontWeight='bold'
							lineHeight={1.1}
							fontFamily={fonts?.title}
							textAlign='left'>
							{data?.name}
						</PrimaryHeading>

						<SecondaryText
							fontSize={{ base: 'lg', md: 'xl' }}
							mb={8}
							fontFamily={fonts?.primary}
							lineHeight={1.2}
							textAlign='left'
							color={secondaryColor}>
							{data?.excerpt}
						</SecondaryText>

						{/* Author Section */}
						<Box
							mb={6}
							w='100%'>
							<HStack
								spacing={3}
								align='center'
								justify='space-between'
								w='100%'
								flexDir='row'>
								<HStack
									spacing={3}
									align='center'>
									<Avatar
										size='sm'
										src={data?.author?.image}
										name={data?.author?.name || 'Unknown Author'}
									/>
									<VStack
										align='start'
										spacing={1}>
										<PrimaryText
											fontWeight='600'
											fontFamily={fonts?.primary}
											fontSize='md'>
											{data?.author?.name || 'Unknown Author'}
										</PrimaryText>
									</VStack>
								</HStack>
								<SecondaryText
									fontSize='sm'
									textTransform='uppercase'
									fontFamily={fonts?.primary}>
									{data?.publishedAt
										? new Date(data.publishedAt).toLocaleDateString('en-US', {
												year: 'numeric',
												month: 'long',
												day: 'numeric',
										  })
										: 'No date available'}
								</SecondaryText>
							</HStack>
							<Divider
								my={4}
								mt={8}
								borderColor={secondaryColor}
								opacity={0.1}
							/>
						</Box>

						{/* Featured Image */}
						<Image
							src={data?.coverImage || data?.image}
							alt={data?.name}
							w='100%'
							maxH='500px'
							objectFit='cover'
							borderRadius='md'
							mb={10}
							mt={10}
						/>

						{/* Article Content */}
						<Box
							mb={6}
							lineHeight={1.6}
							fontFamily={fonts?.primary}
							fontSize={{ base: '1.1rem', md: '1.2rem' }}
							textAlign='left'
							color={colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'}
							sx={{
								'& p': {
									margin: '1rem 0',
									lineHeight: 1.6,
									color: colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D',
								},
								'& h1, & h2, & h3, & h4, & h5, & h6': {
									color: colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D',
									margin: '1.5rem 0 1rem 0',
									fontWeight: 'bold',
								},
							}}
							dangerouslySetInnerHTML={{ __html: processContent(data?.content) }}
						/>

						{/* Tags */}
						{data?.tags && data.tags.length > 0 && (
							<HStack
								spacing={2}
								flexWrap='wrap'
								mt={12}
								mb={8}>
								{data.tags.map((tag, i) => (
									<Tag
										key={i}
										size='sm'
										fontFamily={fonts?.primary}
										borderRadius='full'
										px={3}
										py={1}>
										{tag}
									</Tag>
								))}
							</HStack>
						)}

						{/* Divider */}
						<Divider
							my={12}
							opacity={0.3}
							borderColor={secondaryColor}
						/>
					</Box>
				</Box>
			</Box>
		</Page>
	);
};

export default BlogSingle;
