import React from 'react';
import Column from '../../util/Home/Column';
import { Button, Center, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { useGetAllQuery } from '../../../store';
import Link from 'next/link';

import { Building, Building2, Factory, Hospital, Rocket, ShoppingCart } from 'lucide-react';
// import SolutionCard from './SolutionCard';
import SolutionCard, { Skeleton } from './SolutionCard';
import { colors } from '../../../theme/styles';

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
			status: 'published',
		},
	});

	return (
		<Column {...containerCss}>
			<Center {...headingContainerCss}>
				<Text {...headingCss}>
					FIND THE RIGHT SOLUTION FOR YOUR BUSINESS - FILTERED BY INDUSTRY
				</Text>
				{/* <Text {...subHeadingCss}>
					Every business has unique challenges and goals. We provide tailored digital solutions to
					help you overcome obstacles and achieve sustainable growth.
				</Text> */}
			</Center>

			<Grid {...gridCss}>
				{isFetching && [...Array(3)].map((_, i) => <Skeleton key={i} />)}
				{data &&
					data?.doc?.map((item, i) => (
						<SolutionCard
							colorMode='dark'
							href={item?.toStaticPage ? item?.staticPageUrl : `/businesses/${item?._id}`}
							icon={
								<Image
									w='32px'
									h='32px'
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
				<Link href='/business-solution'>
					<Button {...btnCss}>View all business solutions</Button>
				</Link>
			</Center>
		</Column>
	);
};

const headingCss = {
	lineHeight: 1,
	color: colors?.text?.dark,
	fontSize: { base: '3rem', md: '6rem' },
	fontFamily: fonts.title,
	fontWeight: '900',
};

const subHeadingCss = {
	color: colors?.textSecondary?.dark,
	fontFamily: fonts.primary,
	fontSize: { base: '1rem', md: '1.5rem' },
};

const containerCss = {
	bg: colors?.background?.dark,
	py: { base: 16, md: 16 },
	px: { base: 4, md: 8 },
	gap: 12,
};

const headingContainerCss = {
	flexDir: 'column',
	gap: 4,
	mx: 'auto',
	maxW: { base: '100%', md: '80vw' },
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
	border: '1px solid',
	fontSize: { base: '1.5rem', md: '3rem' },
	lineHeight: 1,
	py: 8,
	pt: 9,
	mt: 4,
	color: colors?.text?.dark,
	borderRadius: 'none',
	borderRight: 'none',
	borderLeft: 'none',
	fontFamily: fonts?.title,
	borderColor: colors?.border?.dark,
	_hover: { bg: 'transparent', color: colors?.text?.dark, borderColor: colors?.text?.dark },
};

export default RightBusinessSolution;
