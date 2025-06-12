'use client';

import { Clock, Search, FileText, Calendar, Image as IMG, Grid } from 'lucide-react';
import { Users, Lock, Key, Settings, UserCheck } from 'lucide-react';
import LightIItemCard from '../card/LightIItemCard';

import { SimpleGrid, Image, Center, Flex, Heading, useColorMode } from '@chakra-ui/react';
import ItemSection from './ItemSection';
import { fonts } from '../../../lib/constants';

const data = [
	{
		title: 'Content Management',
		description:
			'Easily create, edit, and organize your website content without technical knowledge',
		icon: (
			<FileText
				size={22}
				color='white'
			/>
		),
	},
	{
		title: 'Media Library',
		description: 'Upload, organize, and reuse images, videos, and documents across your website',
		icon: (
			<IMG
				size={22}
				color='white'
			/>
		),
	},
	{
		title: 'SEO Controls',
		description:
			'Manage meta titles, descriptions, URLs, and other SEO elements to improve rankings',
		icon: (
			<Search
				size={22}
				color='white'
			/>
		),
	},
	{
		title: 'Publishing Workflow',
		description: 'Draft, review, schedule, and publish content with a structured approval process',
		icon: (
			<Calendar
				size={22}
				color='white'
			/>
		),
	},
	{
		title: 'Version History',
		description: 'Track changes and revert to previous versions of any page or content when needed',
		icon: (
			<Clock
				size={22}
				color='white'
			/>
		),
	},
];

const permissionData = [
	{
		title: 'User Roles',
		description:
			'Define custom roles like Admin, Editor, Author, and Viewer with specific access rights',
		icon: (
			<Users
				size={22}
				color='white'
			/>
		),
	},
	{
		title: 'Permission Sets',
		description: 'Create detailed permission groups that can be assigned to different user roles',
		icon: (
			<Grid
				size={22}
				color='white'
			/>
		),
	},
	{
		title: 'Content Restrictions',
		description: 'Restrict access to specific pages, sections, or content types by user role',
		icon: (
			<Lock
				size={22}
				color='white'
			/>
		),
	},
	{
		title: 'Approval Workflows',
		description: 'Set up multi-step approval processes for content publishing based on user roles',
		icon: (
			<UserCheck
				size={22}
				color='white'
			/>
		),
	},
	{
		title: 'Access Control',
		description: 'Control who can view, edit, publish, or delete different types of content',
		icon: (
			<Key
				size={22}
				color='white'
			/>
		),
	},
	{
		title: 'Admin Tools',
		description: 'Powerful administration dashboard for user management and system configuration',
		icon: (
			<Settings
				size={22}
				color='white'
			/>
		),
	},
];

const frstImage =
	'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

const permImage =
	'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

const CMSFeatures = () => {
	const { colorMode } = useColorMode();

	return (
		<ItemSection
			colorMode={colorMode}
			title='Enterprise-Grade CMS Built For Your Business'
			subHeading='Our custom content management system gives you complete control over your website without needing technical knowledge.'>
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={8}>
				<Flex
					flexDir='column'
					gap={6}
					pt={16}>
					<Heading
						fontSize={{ base: '1.5rem', md: '3rem' }}
						fontFamily={fonts?.title}>
						Powerful Content Management
					</Heading>
					<Center display={{ base: 'flex', md: 'none' }}>
						<Image src={frstImage} />
					</Center>
					<SimpleGrid
						columns={{ base: 1, md: 2 }}
						spacing={8}>
						{data?.map((item, i) => (
							<LightIItemCard
								iconBg='#0d0d0d'
								colorMode={colorMode}
								heading='inline'
								align='start'
								item={item}
								key={i}
							/>
						))}
					</SimpleGrid>
				</Flex>
				<Center display={{ base: 'none', md: 'flex' }}>
					<Image src={frstImage} />
				</Center>
			</SimpleGrid>
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={8}>
				<Center display={{ base: 'none', md: 'flex' }}>
					<Image src={permImage} />
				</Center>
				<Flex
					flexDir='column'
					gap={6}
					pt={16}>
					<Heading
						textTransform='uppercase'
						fontSize={{ base: '1.5rem', md: '3rem' }}
						fontFamily={fonts?.title}>
						Advanced Role-Based Permissions
					</Heading>
					<Center display={{ base: 'flex', md: 'none' }}>
						<Image src={permImage} />
					</Center>
					<SimpleGrid
						columns={{ base: 1, md: 2 }}
						spacing={8}>
						{permissionData?.map((item, i) => (
							<LightIItemCard
								iconBg='#0d0d0d'
								colorMode={colorMode}
								heading='inline'
								align='start'
								item={item}
								key={i}
							/>
						))}
					</SimpleGrid>
				</Flex>
			</SimpleGrid>
		</ItemSection>
	);
};
export default CMSFeatures;
