import { Box, Heading } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import Page from '../../components/util/Page/Page';
import { SecondaryText } from '../../components';
import BlogByIdPage from '@/components/blog/BlogByIdPage';
import { getBlogByIdServerSideProps } from '../../lib/blogServerSide';

// Server-Side Rendering
export async function getServerSideProps(context) {
	return getBlogByIdServerSideProps(context);
}

const BlogSingle = ({ blogData: data, error }) => {
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

	return <BlogByIdPage data={data} />;
};

export default BlogSingle;
