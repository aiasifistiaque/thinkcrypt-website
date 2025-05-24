import {
	Box,
	Center,
	Flex,
	grid,
	Grid,
	Image,
	Skeleton,
	SkeletonCircle,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { fonts } from '../../lib/constants';
import { partnerLogos } from '../../../data/data';
import { colors, styles } from '../../../theme/styles';
import { useGetAllQuery } from '../../../store';
import { max } from 'moment-timezone';
import { padding } from '../../../lib/constants';
import LinkButton from '../about-us/LinkButton';
import CustomMarquee from '../hero/CustomMarquee';

const BORDER = styles.border.dark;

const EachItem = ({ children, ...props }) => {
	return (
		<Center
			flex={1}
			bg={colors?.background?.dark}
			h={{ base: '120px', md: '180px' }}>
			<Box p={{ base: 2, md: 4 }}>
				<Image
					w={{ base: '100px', md: '140px' }}
					h={{ base: '80px', md: '100px' }}
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
		limit: 15,
		filters: { isActive: true },
	});
	return (
		<Flex {...container}>
			<Flex {...section}>
				<Flex {...titleContainer}>
					<Grid {...titleStack}>
						<Text {...title}>Our Partners & Clients</Text>
						<Flex justify='flex-end'>
							<Flex
								flexDir='column'
								gap={6}
								justify='flex-end'
								justifySelf='flex-end'
								w={{ base: '100%', md: '80%' }}>
								<Text {...subTitle}>
									{`We offer services to a diverse range of businesses, from startups and SMEs to large corporations. Our extensive partnerships across various industries allow us to deliver impactful, tailored solutions that drive businesses forward.`}
								</Text>
								<LinkButton href='/clients'>View All Clients</LinkButton>
							</Flex>
						</Flex>
					</Grid>
					<CustomMarquee>
						{!data
							? Array.from({ length: 12 }).map((_, index) => (
									<EachItemLoading key={`loading-${index}`} />
							  ))
							: data?.doc?.map((logo, index) => <EachItem key={index}>{logo?.icon}</EachItem>)}
					</CustomMarquee>
				</Flex>

				{/* <Grid {...itemContainer}>
					{!data
						? Array.from({ length: 12 }).map((_, index) => (
								<EachItemLoading key={`loading-${index}`} />
						  ))
						: data?.doc?.map((logo, index) => <EachItem key={index}>{logo?.icon}</EachItem>)}
				</Grid> */}
			</Flex>
		</Flex>
	);
};

const title = {
	mt: '32px',
	fontSize: { base: '2rem', md: '8rem' },
	fontWeight: 700,
	fontFamily: fonts.title,
	color: colors?.text?.dark,
	lineHeight: 1,
};

const subTitle = {
	fontSize: { base: '1rem', md: '14px' },
	fontWeight: 400,
	letterSpacing: '.5px',
	lineHeight: '1.5',
	fontFamily: fonts?.primary,
	color: colors?.textSecondary?.dark,
	textTransform: 'uppercase',
	maxW: { base: '100%', md: '60vw' },
};

const container = {
	borderTop: BORDER,
	borderBottom: BORDER,
	h: '100vh',
	w: 'full',
	bg: colors?.background?.dark,
	// bg: 'teal',
};

const section = {
	flex: 1,
	flexDir: 'column',
};

const titleContainer = {
	flexDir: 'column',
	// px: { base: padding?.baseBody, md: padding?.lgBody },
	py: { base: 4, md: 8, lg: 8 },

	px: 0,
};

const titleStack = {
	py: 4,
	flexDir: 'column',
	w: 'full',
	gap: 12,
	// bg: 'red',
	gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)' },
	px: { base: padding?.baseBody, md: padding?.lgBody },
	maxW: '100vw',
	mb: 8,
	minH: '65vh',
};

export default Clients;
