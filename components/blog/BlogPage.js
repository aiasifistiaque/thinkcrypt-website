import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Page from '../util/Page/Page';
import BlogSkeleton from './BlogSkeleton';
import { Stack, Grid, Text, useColorMode, Center } from '@chakra-ui/react';
import { colors } from '../../theme/styles';
import BlogCard from './BlogCard';
import TitleSection from '../home/about-us/TitleSection';
import { fonts, padding } from '../../lib/constants';
import useScrollPreservation from '../../hooks/useScrollPreservation';
import { useGetAllQuery } from '../../store';

const img =
	'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const BlogPage = ({ initialData, initialCategory = '' }) => {
	const { colorMode } = useColorMode();
	const router = useRouter();

	// Use custom scroll preservation hook
	useScrollPreservation();

	const { data, isFetching } = useGetAllQuery({ path: 'blogs', filters: { status: 'published' } });

	const bg = colorMode == 'dark' ? colors.background.dark : colors.background.light;
	const text = colorMode == 'dark' ? colors.text.dark : colors.text.light;
	const secondary = colorMode == 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;

	return (
		<Page
			theme={colorMode}
			colorMode={colorMode}
			image={img}
			title={`Insights & Expertise – Tech Blog | Thinkcrypt`}
			description={`Stay updated with the latest in web development, SaaS architecture, and tech trends. Read expert insights from Thinkcrypt's team on building scalable digital solutions.`}>
			<Stack spacing={0}>
				<TitleSection
					colorMode={colorMode}
					top
					pb='64px'
					title='Tech Insights'
					titleTop='Our'
					titleBottom='Blog & Resources'>
					{`Stay updated with the latest in web development, SaaS architecture, and tech trends. Read expert insights from Thinkcrypt's team on building scalable digital solutions.`}
				</TitleSection>

				{/* Category Filter */}
				{/* <Stack
					py={{ base: '32px', md: '48px' }}
					px={padding}
					spacing={{ base: '24px', md: '32px' }}>
					<Flex
						direction={{ base: 'column', md: 'row' }}
						align={{ base: 'start', md: 'center' }}
						justify={{ base: 'start', md: 'space-between' }}
						gap={{ base: '16px', md: '24px' }}>
						<Text
							fontSize={{ base: 'lg', md: 'xl' }}
							fontWeight='600'
							color={text}
							fontFamily={fonts?.heading}>
							Filter by Category
						</Text>
						<Wrap spacing={{ base: '8px', md: '12px' }}>
							{categories.map((category, index) => (
								<SelectItem
									key={index}
									colorMode={colorMode}
									title={category.title}
									value={category.value}
									isSelected={cat === category.value}
									onClick={() => onCategoryChange(category.value)}
								/>
							))}
						</Wrap>
					</Flex>
				</Stack> */}

				{/* Blog Grid */}
				<Stack
					bg={bg}
					px={{ base: padding?.baseBody, md: padding?.lgBody }}
					py={{ base: '32px', md: '48px' }}
					spacing={{ base: '24px', md: '32px' }}>
					{isFetching ? (
						<Grid {...blogGrid}>
							{Array.from({ length: 6 }, (_, i) => (
								<BlogSkeleton
									key={i}
									colorMode={colorMode}
								/>
							))}
						</Grid>
					) : (
						<Grid {...blogGrid}>
							{data?.doc?.map((blog, index) => (
								<BlogCard
									key={index}
									blog={blog}
									colorMode={colorMode}
								/>
							))}
						</Grid>
					)}
				</Stack>
			</Stack>
		</Page>
	);
};

const blogGrid = {
	templateColumns: {
		base: 'repeat(1, 1fr)',
		md: 'repeat(2, 1fr)',
		lg: 'repeat(3, 1fr)',
	},
	gap: { base: '24px', md: '32px' },
	pb: '128px',
};

export default BlogPage;
