import React from 'react';
import Column from '../../util/Home/Column';
import { Box, Button, Center, Flex, Grid, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { styles } from '../../../theme/styles';
import { useGetAllQuery } from '../../../store';

import { Building, Building2, Factory, Hospital, Rocket, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

// Updated primary solution cards data for the 6 main business categories
const data = [
	{
		title: 'STARTUPS',
		description:
			'Early-stage companies focused on innovation and rapid growth, seeking nimble tech solutions to disrupt markets.',
		icon: <Rocket size={48} />,
		link: '/solution/startups',
	},
	{
		title: 'SMALL & MEDIUM ENTERPRISES',
		description:
			'Established businesses looking to enhance efficiency and expand reach through targeted digital transformation.',
		icon: <Building size={48} />,
		link: '/solution/sme',
	},
	{
		title: 'ENTERPRISE & CORPORATIONS',
		description:
			'Large organizations requiring complex, integrated solutions to manage scale and drive innovation.',
		icon: <Building2 size={48} />,
		link: '/solution/enterprise',
	},
	{
		title: 'E-COMMERCE',
		description:
			'Online retailers seeking robust platforms and strategies to enhance customer experience and increase sales.',
		icon: <ShoppingCart size={48} />,
		link: '/solution/ecommerce',
	},
	{
		title: 'MANUFACTURING & INDUSTRIAL',
		description:
			'Production-oriented businesses looking to optimize operations through automation and intelligent systems.',
		icon: <Factory size={48} />,
		link: '/solution/manufacturing',
	},
	{
		title: 'HEALTHCARE',
		description:
			'Medical providers requiring secure, compliant systems to enhance patient care and operational efficiency.',
		icon: <Hospital size={48} />,
		link: '/solution/healthcare',
	},
];

const RightBusinessSolution = () => {
	// const { data, isFetching } = useGetAllQuery({
	// 	path: 'services',
	// 	limit: 9,
	// 	sort: '-priority',
	// 	filters: {
	// 		isActive: true,
	// 	},
	// });

	const isFetching = false;

	return (
		<Column {...containerCss}>
			<Center {...headingContainerCss}>
				<Text {...headingCss}>FIND THE RIGHT SOLUTION FOR YOUR BUSINESS</Text>
				<Text {...subHeadingCss}>
					Every business has unique challenges and goals. We provide tailored digital solutions to
					help you overcome obstacles and achieve sustainable growth.
				</Text>
			</Center>

			<Grid {...gridCss}>
				{isFetching
					? [...Array(10)].map((_, i) => <SeriveItemLgSkeleton key={i} />)
					: data?.map((item, i) => (
							<SeriveItemLg
								item={item}
								key={i}
							/>
					  ))}
			</Grid>
			<Center>
				<Button
					bg='white'
					border='1px solid black'
					textTransform='uppercase'
					fontFamily='Michroma'
					borderRadius='none'
					_hover={{ bg: 'white', color: 'black' }}>
					View all business solutions
				</Button>
			</Center>
		</Column>
	);
};

const headingCss = {
	lineHeight: 1.4,
	color: 'black',
	fontSize: { base: '32px', md: '48px' },
	fontFamily: fonts.heading,
};

const subHeadingCss = {
	fontSize: '16px',
	color: '#737373' || 'white',
	fontFamily: fonts.heading,
};

const containerCss = {
	bg: 'whitesmoke',
	py: { base: 16, md: 16 },
	px: { base: 4, md: 8 },
	gap: 12,
};

const headingContainerCss = {
	flexDir: 'column',
	gap: 4,
	mx: 'auto',
	maxW: { base: '100%', md: '60vw' },
	textAlign: 'center',
	w: 'full',
};

const gridCss = {
	gap: 6,
	w: 'full',
	gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
};

const SeriveItemLg = ({ item }) => (
	<Column {...itemCss}>
		<Center
			w='full'
			pb={2}>
			<Flex
				bg='whitesmoke'
				p={4}
				borderRadius='full'>
				{item?.icon}
			</Flex>
		</Center>
		<Text {...titleCss}>{item?.title}</Text>
		<Text {...bodyTextCss}>{item?.description}</Text>
		<Center mt={2}>
			<Button
				size='md'
				bg='transparent'
				color='black'
				borderColor='black'
				border='1px solid'
				fontSize='12px'
				borderRadius='none'
				fontFamily='Michroma'
				_hover={{ bg: 'transparent', color: 'black' }}>
				LEARN MORE
			</Button>
		</Center>
	</Column>
);

const SeriveItemLgSkeleton = () => (
	<Column {...itemCss}>
		<Skeleton>
			<Text
				{...titleCss}
				fontFamily={fonts.heading}>
				NAME OF ITEM
			</Text>
		</Skeleton>
		<SkeletonText noOfLines={4} />
	</Column>
);

const itemCss = {
	p: 8,
	gap: 4,
	border: '1px solid #e6e6e6',
	bgColor: 'white',
	justify: 'center',
};

const titleCss = {
	fontSize: { base: '16px', md: '22px' },
	fontWeight: '900',
	fontFamily: fonts.heading,
	textTransform: 'uppercase',
	textAlign: 'center',
	lineHeight: 1.4,
};

const bodyTextCss = {
	color: '#737373',
	fontFamily: 'Michroma',
	fontSize: '14px',
	textTransform: 'capitalize',
	fontSize: '.9rem',
	lineHeight: 1.5,
	fontWeight: '500',
	textAlign: 'center',
};

export default RightBusinessSolution;
