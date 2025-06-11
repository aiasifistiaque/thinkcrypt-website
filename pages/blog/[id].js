import { Box, Heading, Image, HStack, VStack, Avatar, Tag } from '@chakra-ui/react';
import { Divider, useColorMode, Grid } from '@chakra-ui/react';
import { colors } from '../../theme/styles';
import Page from '../../components/util/Page/Page';
import { fonts, padding } from '../../lib/constants';
import { PrimaryHeading, PrimaryText, SecondaryText } from '../../components';
import { useRouter } from 'next/router';
import { getBlogContentStyles } from '../../utils/blogStyles';
import { processContentForDisplay } from '../../utils/textToHtml';

// Server-Side Rendering
export async function getServerSideProps(context) {
	const { id } = context.params;
	console.log('Fetching blog with ID:', id);

	try {
		// Prepare headers with authentication token
		const headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		};

		// Add authentication token if available
		if (process.env.NEXT_PUBLIC_TOKEN) {
			headers['Authorization'] = process.env.NEXT_PUBLIC_TOKEN;
		}

		console.log('Making request to:', `${process.env.NEXT_PUBLIC_BACKEND}/blogs/g/slug/${id}`);
		console.log('Headers:', headers);

		// Make API request with authentication
		const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/blogs/g/slug/${id}`, {
			method: 'GET',
			headers,
		});

		console.log('Response status:', response.status);

		if (!response.ok) {
			console.log('Blog not found or error fetching data:', response.status);

			// Return 404 for not found
			if (response.status === 404) {
				return {
					notFound: true,
				};
			}

			// Return error page for other errors
			return {
				props: {
					blogData: null,
					error: `HTTP ${response.status}: ${response.statusText}`,
				},
			};
		}

		const blogData = await response.json();
		console.log('Successfully fetched blog data:', blogData?.name);

		// Validate required data
		if (!blogData || !blogData.name) {
			console.error('Invalid blog data received:', blogData);
			return {
				props: {
					blogData: null,
					error: 'Invalid blog data',
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
		console.error('Error fetching blog data:', error.message, error.stack);

		return {
			props: {
				blogData: null,
				error: `Network error: ${error.message}`,
			},
		};
	}
}

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
					<SecondaryText mt={4}>{error}</SecondaryText>
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
	// Styling constants

	return (
		<Page
			colorMode={colorMode}
			title={data?.name}
			description={data?.excerpt}
			image={data?.image || data?.coverImage}>
			<Box
				{...mainContainerStyles}
				bg={cardBg}>
				<Box {...innerContainerStyles}>
					<Box {...contentContainerStyles}>
						{/* Category Tag */}
						<Tag
							{...categoryTagStyles}
							borderColor={colorMode === 'dark' ? 'gray.400' : 'gray.100'}
							bg={tagBg}
							color={secondaryColor}>
							{data?.category}
						</Tag>

						{/* Article Title */}
						<PrimaryHeading {...headingStyles}>{data?.name}</PrimaryHeading>
						<SecondaryText
							{...subtitleStyles}
							color={secondaryColor}>
							{data?.excerpt}
						</SecondaryText>

						{/* Author Section */}
						<Box {...authorSectionStyles}>
							<HStack {...authorHStackStyles}>
								<HStack {...authorInfoStyles}>
									<Avatar
										size='sm'
										src={data?.author?.image}
										name={data?.author?.name || 'Unknown Author'}
									/>
									<VStack {...authorVStackStyles}>
										<PrimaryText {...authorNameStyles}>
											{data?.author?.name || 'Unknown Author'}
										</PrimaryText>
									</VStack>
								</HStack>
								<SecondaryText {...authorDateStyles}>
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
							{...imageStyles}
							mt={10}
						/>

						{/* Article Content */}
						<Box
							{...bodyTextStyles}
							id='blog-content-main'
							// className={`blog-content ${colorMode === 'dark' ? 'dark' : 'light'}`}
							sx={{
								...getBlogContentStyles(colorMode),
								// Additional paragraph styling with higher specificity
								'& p, & div p, & section p': {
									// color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
									margin: '1rem 0',
									lineHeight: 1.3,
									fontSize: { base: '1.1rem', md: '1.1rem' },
									color: 'red !important', // This will override the default color
								},
							}}
							style={{
								// Inline styles as ultimate fallback
								color: colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D',
							}}
							dangerouslySetInnerHTML={{ __html: processContentForDisplay(data?.content) }}
						/>

						{/* Tags */}
						{data?.tags && data.tags.length > 0 && (
							<HStack {...tagsHStackStyles}>
								{data.tags.map((tag, i) => (
									<Tag
										key={i}
										{...tagStyles}>
										{tag}
									</Tag>
								))}
							</HStack>
						)}
						{/* Divider */}
						<Divider
							{...dividerStyles}
							borderColor={secondaryColor}
						/>
						{/* Related Posts */}
						{/* <Box
							{...relatedSectionStyles}
							borderTopColor={secondaryColor}>
							<PrimaryHeading {...relatedHeadingStyles}>Related Articles</PrimaryHeading>

							<Grid {...relatedGridStyles}>
								{related.map((item, i) => (
									<RelatedBlogCard
										item={item}
										key={i}
									/>
								))}
							</Grid>
						</Box> */}
					</Box>
				</Box>
			</Box>
		</Page>
	);
};

const mainContainerStyles = {
	minH: '100vh',
	w: 'full',
};
const innerContainerStyles = {
	px: { base: padding?.baseBody, md: 8 },
	py: { base: 12, md: 16 },
	maxW: '900px', // Medium-style narrow content width
	mx: 'auto',
};
const contentContainerStyles = {
	w: '100%',
};
const headingStyles = {
	as: 'h1',
	fontSize: { base: '2.5rem', md: '3rem' },
	mb: 4,

	fontWeight: 'bold',
	lineHeight: 1.1,
	fontFamily: fonts?.title,
	textAlign: 'left',
};
const subtitleStyles = {
	fontSize: { base: 'lg', md: 'xl' },
	mb: 8,

	fontFamily: fonts?.primary,
	lineHeight: 1.2,
	textAlign: 'left',
};
const categoryTagStyles = {
	size: 'sm',
	bg: 'transparent',

	fontFamily: fonts?.primary,
	borderRadius: 'full',
	px: 2,
	py: 1,
	mb: 4,
	textTransform: 'uppercase',
	fontSize: 'xs',
	fontWeight: '300',
	letterSpacing: '0.5px',

	border: '.5px solid',
};
const authorSectionStyles = {
	mb: 6,
	w: '100%',
};
const authorHStackStyles = {
	spacing: 3,
	align: 'center',
	justify: 'space-between',
	w: '100%',
	flexDir: 'row',
};
const authorInfoStyles = {
	spacing: 3,
	align: 'center',
};
const authorVStackStyles = {
	align: 'start',
	spacing: 1,
};
const authorNameStyles = {
	fontWeight: '600',
	fontFamily: fonts?.primary,
	fontSize: 'md',
};
const authorDateStyles = {
	fontSize: 'sm',
	textTransform: 'uppercase',
	fontFamily: fonts?.primary,
};

const bodyTextStyles = {
	mb: 6,
	lineHeight: 1.6,
	fontFamily: fonts?.primary,
	fontSize: { base: '1.1rem', md: '1.2rem' },
	textAlign: 'left',
};
const tagsHStackStyles = {
	spacing: 2,
	flexWrap: 'wrap',
	mt: 12,
	mb: 8,
};
const tagStyles = {
	size: 'sm',

	fontFamily: fonts?.primary,
	borderRadius: 'full',
	px: 3,
	py: 1,
};

const imageStyles = {
	w: '100%',
	maxH: '500px',
	objectFit: 'cover',
	borderRadius: 'md',
	mb: 10,
};

const relatedHeadingStyles = {
	as: 'h3',
	fontSize: 'xl',
	mb: 6,

	fontFamily: fonts?.title,
	fontWeight: '600',
};

const relatedSectionStyles = {
	w: '100%',
	mt: 16,
	pt: 8,
	borderTop: '1px solid',
};

const relatedGridStyles = {
	templateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
	gap: 4,
	w: '100%',
};

const dividerStyles = {
	my: 12,

	opacity: 0.3,
};

export default BlogSingle;
