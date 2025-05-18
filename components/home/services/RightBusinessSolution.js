import React from 'react';
import Column from '../../util/Home/Column';
import { Button, Center, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { useGetAllQuery } from '../../../store';

import { Building, Building2, Factory, Hospital, Rocket, ShoppingCart } from 'lucide-react';
// import SolutionCard from './SolutionCard';
import SolutionCard, { Skeleton } from './SolutionCard';

// Updated primary solution cards data for the 6 main business categories
const doc = [
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
	const { data, isFetching } = useGetAllQuery({
		path: 'solutions',
		limit: 6,
		sort: '-priority',
		filters: {
			isFeatured: true,
			status: 'published',
		},
	});

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
				{isFetching && [...Array(3)].map((_, i) => <Skeleton key={i} />)}
				{data &&
					data?.doc?.map((item, i) => (
						<SolutionCard
							href={item?.toStaticPage ? item?.staticPageUrl : `/businesses/${item?._id}`}
							icon={
								<Image
									w='48px'
									h='48px'
									objectFit='contain'
									src={item?.icon}
								/>
							}
							key={i}
							title={item?.name}
							description={item?.shortDescription}
							btnText='Learn More'
						/>
					))}
			</Grid>
			<Center>
				<Button {...btnCss}>View all business solutions</Button>
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

const btnCss = {
	bg: 'transparent',
	borderColor: 'black',
	border: '1px solid',
	fontSize: '12px',
	borderRadius: 'none',
	fontFamily: 'Michroma',
	_hover: { bg: 'transparent', color: 'black' },
};

export default RightBusinessSolution;
