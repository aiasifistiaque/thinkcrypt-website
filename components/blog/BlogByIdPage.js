import React from 'react';
import { useColorMode, Box, Tag } from '@chakra-ui/react';
import { PrimaryHeading, PrimaryText, SecondaryText } from '../util/text';
import { Avatar, HStack, VStack, Divider, Image } from '@chakra-ui/react';
import { Page } from '../util';
import { padding, fonts } from '@/lib/constants';
import { colors } from '@/theme/styles';

const processContentForDisplay = content => {
	if (!content) return '';

	// Check if content already contains HTML tags
	const hasHtmlTags = /<[^>]+>/.test(content);

	if (hasHtmlTags) {
		// Content already has HTML tags, return as is
		return content;
	} else {
		// Content is plain text, convert to HTML
		return convertTextToHtml(content);
	}
};

const BlogByIdPage = ({ data }) => {
	const { colorMode } = useColorMode();
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

const getBlogContentStyles = colorMode => {
	return {
		// Typography
		color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		'& h1': {
			fontSize: { base: '1.8rem', md: '2rem' },
			fontWeight: '800',
			margin: '1.5rem 0 1rem 0',
			lineHeight: 1.2,
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& h2': {
			fontSize: { base: '1.6rem', md: '1.75rem' },
			fontWeight: '800',
			margin: '1.4rem 0 0.8rem 0',
			lineHeight: 1.3,
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& h3': {
			fontSize: { base: '1.4rem', md: '1.5rem' },
			fontWeight: '800',
			margin: '1.3rem 0 0.7rem 0',
			lineHeight: 1.4,
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& h4, & h5, & h6': {
			fontSize: { base: '1.2rem', md: '1.25rem' },
			fontWeight: '800',
			margin: '1.2rem 0 0.6rem 0',
			lineHeight: 1.4,
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& p': {
			margin: '1rem 0',
			lineHeight: 1.4,
			fontSize: { base: '1.1rem', md: '1.14rem' },
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& span': {
			margin: '1rem 0',
			lineHeight: 1.3,
			fontSize: { base: '1.1rem', md: '1.1rem' },
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& strong': {
			fontWeight: '900 !important',
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& em': {
			fontStyle: 'italic',
		},
		'& u': {
			textDecoration: 'underline',
		},
		'& s': {
			textDecoration: 'line-through',
		},
		'& blockquote': {
			borderLeft: `4px solid ${colorMode === 'dark' ? '#4A5568' : '#E2E8F0'}`,
			paddingLeft: '1rem',
			margin: '1.5rem 0',
			fontStyle: 'italic',
			color: colorMode === 'dark' ? 'gray.300' : 'gray.600',
			backgroundColor: colorMode === 'dark' ? 'gray.800' : 'gray.50',
			padding: '1rem',
			borderRadius: '8px',
		},
		'& code': {
			backgroundColor: colorMode === 'dark' ? 'gray.700' : 'gray.100',
			color: colorMode === 'dark' ? 'green.300' : 'green.600',
			padding: '0.2rem 0.4rem',
			borderRadius: '3px',
			fontFamily: 'Monaco, Consolas, "Courier New", monospace',
			fontSize: '0.9rem',
		},
		'& pre': {
			backgroundColor: colorMode === 'dark' ? 'gray.800' : 'gray.100',
			color: colorMode === 'dark' ? 'gray.200' : 'gray.800',
			padding: '1rem',
			borderRadius: '8px',
			overflowX: 'auto',
			margin: '1rem 0',
			border: `1px solid ${colorMode === 'dark' ? 'gray.600' : 'gray.300'}`,
		},
		'& pre code': {
			backgroundColor: 'transparent',
			color: 'inherit',
			padding: 0,
		},
		'& ol, & ul': {
			margin: '1rem 0',
			paddingLeft: '2rem',
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
			fontSize: '1rem',
		},
		'& ol li, & ul li': {
			margin: '0.5rem 0',
			lineHeight: 1.3,
			fontSize: '1.1rem',
		},
		'& img': {
			maxWidth: '100%',
			height: 'auto',
			margin: '1.5rem 0',
			borderRadius: '8px',
			boxShadow:
				colorMode === 'dark' ? '0 4px 8px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
		},
		'& a': {
			color: colorMode === 'dark' ? '#63B3ED' : '#0066CC',
			textDecoration: 'underline',
			'&:hover': {
				color: colorMode === 'dark' ? '#90CDF4' : '#004499',
			},
		},
		'& .ql-align-center': {
			textAlign: 'center',
		},
		'& .ql-align-right': {
			textAlign: 'right',
		},
		'& .ql-align-left': {
			textAlign: 'left',
		},
		'& .ql-align-justify': {
			textAlign: 'justify',
		},
	};
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

export default BlogByIdPage;
