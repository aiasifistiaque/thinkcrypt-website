import { Box, Center, Flex, Grid, Image, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react';
import React from 'react';
import { fonts } from '../../lib/constants';
import { partnerLogos } from '../../../data/data';
import { styles } from '../../../theme/styles';
import { useGetAllQuery } from '../../../store';

const BORDER = styles.border.light;

const EachItem = ({ children, ...props }) => {
	return (
		<Center
			flex={1}
			bg='white'
			h={{ base: '140px', md: '200px' }}>
			<Box p={{ base: 2, md: 4 }}>
				<Image
					w={{ base: '100px', md: '180px' }}
					h={{ base: '55px', md: '100px' }}
					objectFit='contain'
					src={children}
					alt='logo'
				/>
			</Box>
		</Center>
	);
};

const EachItemLoading = () => {
	return (
		<Center
			flex={1}
			bg='white'
			h={{ base: '140px', md: '200px' }}>
			<Box p={{ base: 2, md: 4 }}>
				<Skeleton
					borderRadius='20px'
					w={{ base: '100px', md: '100px' }}
					h={{ base: '100px', md: '100px' }}
				/>
			</Box>
		</Center>
	);
};

const Clients = () => {
	const { data } = useGetAllQuery({
		path: 'tcclients',
		sort: '-priority',
		limit: 24,
		filters: { isActive: true },
	});
	return (
		<Flex {...container}>
			<Flex {...section}>
				<Center {...titleContainer}>
					<Flex {...titleStack}>
						<Text {...title}>Our Partners & Clients</Text>
						<Text {...subTitle}>
							{`We offer services to a diverse range of businesses, from startups and SMEs to large corporations, providing customized SaaS solutions that foster innovation and transformative growth. Our extensive partnerships across various industries allow us to deliver impactful, tailored SaaS solutions that drive businesses forward in their specific markets.`}
						</Text>
					</Flex>
				</Center>
				{/* <Grid {...itemContainer}>
					{partnerLogos?.map((logo, index) => (
						<EachItem key={index}>{logo}</EachItem>
					))}
				</Grid> */}
				<Grid {...itemContainer}>
					{!data
						? Array.from({ length: 12 }).map((_, index) => (
								<EachItemLoading key={`loading-${index}`} />
						  ))
						: data?.doc?.map((logo, index) => <EachItem key={index}>{logo?.icon}</EachItem>)}
				</Grid>
			</Flex>
		</Flex>
	);
};

const title = {
	fontSize: { base: '1.5rem', md: '3rem' },
	fontWeight: 700,
	fontFamily: fonts.heading,
	color: 'black.800',
};

const subTitle = {
	fontSize: { base: '1rem', md: '1.5rem' },
	fontWeight: 400,
	letterSpacing: '-.2px',
	lineHeight: '1.5',
	fontFamily: 'Suisse',
	color: 'black.800',
};

const container = {
	mx: 'auto',
	borderTop: BORDER,
	borderBottom: BORDER,
	px: '24px',
	pl: { base: '24px', md: '128px' },
	my: '60px',
};

const section = {
	flex: 1,
	borderLeft: BORDER,
	borderRight: BORDER,
	flexDir: 'column',
};

const itemContainer = {
	flex: 1,
	templateColumns: { base: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
	gap: '1px',
	bg: '#DEDEE0',
};

const titleContainer = {
	px: { base: 4, md: 8, lg: 16 },
	py: { base: 4, md: 8, lg: 8 },
	borderBottom: BORDER,
};

const titleStack = {
	py: 4,
	flexDir: 'column',
	w: 'full',
	gap: 4,
};

export default Clients;
