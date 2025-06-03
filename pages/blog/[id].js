import { Box, Heading, Text, Image, HStack, VStack, Avatar, Tag } from '@chakra-ui/react';
import { Divider, useColorMode, Grid } from '@chakra-ui/react';
import { colors } from '../../theme/styles';
import { blogData } from '../../data/blogData';
import Page from '../../components/util/Page/Page';
import { fonts, padding } from '../../lib/constants';
import RelatedBlogCard from '../../components/blog/RelatedBlogCard';

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
	const textColor = colorMode === 'dark' ? 'white' : colors.text.light;
	const secondaryColor =
		colorMode === 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;
	const tagBg = colorMode == 'dark' ? colors.card.dark : colors.card.light;
	// Styling constants

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
						<Heading
							{...headingStyles}
							color={textColor}>
							{blog.title}
						</Heading>

						{/* Subtitle */}
						<Text
							{...subtitleStyles}
							color={secondaryColor}>
							{blog.excerpt}
						</Text>

						{/* Author Section */}
						<Box {...authorSectionStyles}>
							<HStack {...authorHStackStyles}>
								<HStack {...authorInfoStyles}>
									<Avatar
										size='sm'
										src={blog.authorImage}
										name={blog.author}
									/>
									<VStack {...authorVStackStyles}>
										<Text
											{...authorNameStyles}
											color={textColor}>
											{blog.author}
										</Text>
									</VStack>
								</HStack>
								<Text
									{...authorDateStyles}
									color={secondaryColor}>
									{new Date(blog.publishedAt).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</Text>
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
						<Text
							{...bodyTextStyles}
							color={textColor}>
							{blog.content}
						</Text>

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
							<Heading
								{...relatedHeadingStyles}
								color={textColor}>
								Related Articles
							</Heading>

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

export default BlogSingle;
