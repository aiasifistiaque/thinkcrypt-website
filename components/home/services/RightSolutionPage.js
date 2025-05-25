import React from 'react';
import Column from '../../util/Home/Column';
import { Button, Center, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { fonts } from '../../lib/constants';
import { useGetAllQuery } from '../../../store';

import { Building, Building2, Factory, Hospital, Rocket, ShoppingCart } from 'lucide-react';
// import SolutionCard from './SolutionCard';
import SolutionCard, { Skeleton } from './SolutionCard';
import { colors } from '../../../theme/styles';

const RightSolutionPage = ({ theme }) => {
	const { data, isFetching } = useGetAllQuery({
		path: 'solutions',
		limit: 99,
		sort: '-priority',
		filters: {
			isFeatured: true,
			status: 'published',
		},
	});

	const bg = theme == 'dark' ? colors?.background?.dark : colors?.background?.light;
	const text = theme == 'dark' ? colors?.text?.dark : colors?.text?.light;
	const secondaryColor =
		theme == 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;

	return (
		<Column
			{...containerCss}
			bg={bg}>
			{/* <Center {...headingContainerCss}>
				<Text
					{...headingCss}
					text={text}>
					Power Up Your Business with the Right Digital Tools
				</Text>
				<Text
					{...subHeadingCss}
					color={secondaryColor}>
					{`In today’s fast-moving world, having the right digital solution can make all the
					difference. Whether you're running a café, managing a clinic, selling products online, or
					offering services — the right website, app, or software can help you save time, reach more customers, and grow faster.`}
				</Text>
				<Text
					{...subHeadingCss}
					color={secondaryColor}>
					{`At Thinkcrypt, we don’t believe in one-size-fits-all. We build smart, modern digital
					solutions designed specifically for your industry. From powerful eCommerce platforms and
					booking systems to CRMs, POS, or inventory tools — we help you turn ideas into action and
					challenges into opportunities.`}
				</Text>
			</Center> */}

			<Grid {...gridCss}>
				{isFetching && [...Array(3)].map((_, i) => <Skeleton key={i} />)}
				{data &&
					data?.doc?.map((item, i) => (
						<SolutionCard
							colorMode={theme}
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
		</Column>
	);
};

const headingCss = {
	lineHeight: 1.1,

	fontSize: { base: '32px', md: '5rem' },
	fontFamily: fonts.title,
	fontWeight: '900',
};

const subHeadingCss = {
	fontSize: '16px',
	fontFamily: fonts.primary,
	textTransform: 'uppercase',
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
	borderColor: 'black',
	border: '1px solid',
	fontSize: '12px',
	borderRadius: 'none',
	fontFamily: 'Michroma',
	_hover: { bg: 'transparent', color: 'black' },
};

export default RightSolutionPage;
