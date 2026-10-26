'use client';

import React from 'react';
import Page from '../util/Page/Page';
import { Stack, Grid, Text, useColorMode, Center } from '@chakra-ui/react';
import { colors } from '../../theme/styles';
import BlogCard from './BlogCard';
import TitleSection from '../home/about-us/TitleSection';
import { padding } from '../../lib/constants';

// The blog index — posts come prerendered from the server (Mint panel, published only)
const BlogPageClient = ({ blogs = [] }) => {
	const { colorMode } = useColorMode();

	const bg = colorMode === 'dark' ? colors.background.dark : colors.background.light;
	const secondary = colorMode === 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;

	return (
		<Page
			colorMode={colorMode}
			title='Blog'
			description='Latest blog posts and articles'>
			<Stack
				spacing={0}
				w='full'>
				<TitleSection
					headingAs='h1'
					colorMode={colorMode}
					top
					w='full'
					pb={0}
					title='Latest Blog Posts'
					titleTop='Our'
					titleBottom='Blog & Resources'>
					{`Stay updated with the latest in web development, SaaS architecture, and tech trends. Read
					expert insights from Thinkcrypt's team on building scalable digital solutions.`}
				</TitleSection>

				{blogs.length > 0 ? (
					<Grid
						templateColumns={{
							base: '1fr',
							md: 'repeat(2, 1fr)',
							lg: 'repeat(3, 1fr)',
						}}
						gap={6}
						p={{ base: padding?.baseBody, md: padding?.lgBody }}
						bg={bg}>
						{blogs.map((blog, index) => (
							<BlogCard
								key={blog._id || index}
								blog={blog}
							/>
						))}
					</Grid>
				) : (
					<Center py={20}>
						<Text
							color={secondary}
							fontSize='lg'>
							No blog posts found.
						</Text>
					</Center>
				)}
			</Stack>
		</Page>
	);
};

export default BlogPageClient;
