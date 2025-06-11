'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Page from '../util/Page/Page';
import BlogSkeleton from './BlogSkeleton';
import { Stack, Grid, Text, useColorMode, Center } from '@chakra-ui/react';
import { colors } from '../../theme/styles';
import BlogCard from './BlogCard';
import TitleSection from '../home/about-us/TitleSection';
import { fonts, padding } from '../../lib/constants';
// import useScrollPreservation from '../../hooks/useScrollPreservation';
import { useGetAllQuery } from '../../store';

const img =
	'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const BlogPageClient = () => {
	const router = useRouter();

	const { colorMode } = useColorMode();
	const [selectedCategory, setSelectedCategory] = useState('');

	// Get category from URL params
	// useEffect(() => {
	// 	const category = searchParams.get('category') || '';
	// 	setSelectedCategory(category);
	// }, [searchParams]);

	const { data, isLoading } = useGetAllQuery({
		path: 'blogs',
		query: {
			// category: selectedCategory,
			limit: 50,
		},
	});

	// useScrollPreservation('blog-page', [selectedCategory, searchQuery]);

	const bg = colorMode === 'dark' ? colors.background.dark : colors.background.light;
	const text = colorMode === 'dark' ? colors.text.dark : colors.text.light;
	const secondary = colorMode === 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;

	const handleCategoryChange = category => {
		setSelectedCategory(category);
		const params = new URLSearchParams();
		if (category) params.set('category', category);
		router.push(`/blog?${params.toString()}`);
	};

	return (
		<Page
			colorMode={colorMode}
			title='Blog'
			description='Latest blog posts and articles'>
			<Stack
				spacing={0}
				w='full'>
				<TitleSection
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

				{data?.doc && data?.doc?.length > 0 ? (
					<Grid
						templateColumns={{
							base: '1fr',
							md: 'repeat(2, 1fr)',
							lg: 'repeat(3, 1fr)',
						}}
						gap={6}
						p={{ base: padding?.baseBody, md: padding?.lgBody }}
						bg={bg}>
						{data?.doc?.map((blog, index) => (
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
