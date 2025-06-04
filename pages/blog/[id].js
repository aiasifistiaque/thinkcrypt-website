import { Box, Heading, Image, HStack, VStack, Avatar, Tag, Button, Icon } from '@chakra-ui/react';
import { Divider, useColorMode, Grid, useToast } from '@chakra-ui/react';
import { colors } from '../../theme/styles';
import { blogData } from '../../data/blogData';
import Page from '../../components/util/Page/Page';
import { fonts, padding } from '../../lib/constants';
import RelatedBlogCard from '../../components/blog/RelatedBlogCard';
import { PrimaryHeading, PrimaryText, SecondaryText } from '../../components';
import { FiShare2 } from 'react-icons/fi';

export async function getServerSideProps(context) {
	const { id } = context.params;
	const blog = blogData.doc.find(b => b.id === id);
	// Related blogs: same category, not this one
	const related = blogData.doc
		.filter(b => b.category === blog?.category && b.id !== id)
		.slice(0, 3);
	return {
		props: {
			blog: blog || null,
			related,
		},
	};
}

const BlogSingle = ({ blog, related }) => {
	const { colorMode } = useColorMode();
	const toast = useToast();

	if (!blog)
		return (
			<Page
				colorMode={colorMode}
				title='Blog not found'>
				<Box p={10}>
					<Heading>Blog not found</Heading>
				</Box>
			</Page>
		);

	const cardBg = colorMode === 'dark' ? colors.background.dark : colors.background.light;
	const secondaryColor =
		colorMode === 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;
	const tagBg = colorMode == 'dark' ? colors.card.dark : colors.card.light;

	// Social sharing functionality
	const handleShare = async () => {
		const shareData = {
			title: blog.title,
			text: blog.excerpt,
			url: window.location.href,
		};

		try {
			// Try Web Share API first (mobile/modern browsers)
			if (navigator.share) {
				await navigator.share(shareData);
			} else {
				// Fallback: copy to clipboard
				await navigator.clipboard.writeText(window.location.href);
				toast({
					title: 'Link copied!',
					description: 'The article URL has been copied to your clipboard.',
					status: 'success',
					duration: 3000,
					isClosable: true,
				});
			}
		} catch (error) {
			// Fallback if both Web Share API and clipboard fail
			console.error('Error sharing:', error);
			toast({
				title: 'Sharing failed',
				description: 'Unable to share this article. Please copy the URL manually.',
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Page
			colorMode={colorMode}
			title={blog.title}
			description={blog.excerpt}
			image={blog.featuredImage}>
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
							{blog.category}
						</Tag>

						{/* Article Title */}
						<PrimaryHeading {...headingStyles}>{blog?.title}</PrimaryHeading>
						<SecondaryText
							{...subtitleStyles}
							color={secondaryColor}>
							{blog?.excerpt}
						</SecondaryText>

						{/* Author Section with Share Button */}
						<Box {...authorSectionStyles}>
							<HStack {...authorHStackStyles}>
								<HStack {...authorInfoStyles}>
									<Avatar
										size='sm'
										src={blog.authorImage}
										name={blog.author}
									/>
									<VStack {...authorVStackStyles}>
										<PrimaryText {...authorNameStyles}>{blog?.author}</PrimaryText>
									</VStack>
								</HStack>
								<HStack spacing={3}>
									<SecondaryText {...authorDateStyles}>
										{new Date(blog.publishedAt).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										})}
									</SecondaryText>
									<Button
										{...shareButtonStyles}
										bg={tagBg}
										color={secondaryColor}
										borderColor={secondaryColor}
										_hover={{
											bg: colorMode === 'dark' ? 'gray.600' : 'gray.100',
											transform: 'translateY(-1px)',
										}}
										onClick={handleShare}>
										<Icon as={FiShare2} />
									</Button>
								</HStack>
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
							src={blog.featuredImage}
							alt={blog.title}
							{...imageStyles}
							mt={10}
						/>

						{/* Article Content */}
						<PrimaryText {...bodyTextStyles}>{blog.content}</PrimaryText>

						{/* Tags */}
						<HStack {...tagsHStackStyles}>
							{blog.tags.map((tag, i) => (
								<Tag
									key={i}
									{...tagStyles}>
									{tag}
								</Tag>
							))}
						</HStack>
						{/* Divider */}
						<Divider
							{...dividerStyles}
							borderColor={secondaryColor}
						/>
						{/* Related Posts */}
						<Box
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
						</Box>
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
	maxW: '800px', // Medium-style narrow content width
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

const shareButtonStyles = {
	size: 'sm',
	variant: 'outline',
	borderRadius: 'full',
	minW: '32px',
	h: '32px',
	p: 0,
	transition: 'all 0.2s',
	border: '1px solid',
};

export default BlogSingle;
