import React, { useState } from 'react';
import SectionHeading from '../home/sectionheading/SectionHeading';
import Page from '../util/Page/Page';

import { Heading, Stack, Flex, Grid, Wrap, Image, useColorMode } from '@chakra-ui/react';

import { colors, styles } from '../../theme/styles';
import { useGetAllQuery } from '../../store';

import ServiceCard from './ServiceCard';
import SelectItem from './SelectItem';
import TitleSection from '../home/about-us/TitleSection';
import { fonts, padding } from '../../lib/constants';

const img =
	'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const BORDER = styles.border.light;

const Servicepage = () => {
	const { colorMode } = useColorMode();
	const [cat, setCat] = useState('');

	const onCategoryChange = value => {
		setCat(value);
	};

	const { data, isFetching } = useGetAllQuery({
		path: 'offers',
		limit: 99,
		sort: '-priority',
		filters: { isActive: true, status: 'published', category_in: cat },
	});

	const { data: categories, isFetching: catLoading } = useGetAllQuery({
		path: 'servicecategories',
		limit: 99,
		sort: '-priority',
		filters: { isActive: true },
	});

	const bg = colorMode == 'dark' ? colors.background.dark : colors.background.light;

	return (
		<Page
			theme={colorMode}
			image={img}
			title={`Custom Software & SaaS Development Services | Thinkcrypt`}
			description={`Explore Thinkcrypt’s full range of services including MERN stack development, MVPs, SaaS platforms, eCommerce, CRM systems, and cloud solutions tailored for startups and enterprises.`}>
			<Stack spacing={0}>
				<TitleSection
					top
					pb={0}
					colorMode={colorMode}
					titleTop='Our Development'
					titleBottom='Services'
					title='Custom Software & SaaS Development'>
					{`Explore Thinkcrypt’s full range of services including MERN stack development, MVPs, SaaS platforms, eCommerce, CRM systems, and cloud solutions tailored for startups and enterprises.`}
				</TitleSection>

				<Flex
					bg={bg}
					px={{
						base: padding?.baseBody,
						md: padding?.lgBody,
					}}>
					<Flex
						// borderBottom={BORDER}
						flexDir='column'
						py='20px'>
						<Flex {...titleContainer}>
							<Flex>
								<Flex
									gap={6}
									flexDir='column'>
									<Heading
										textTransform='uppercase'
										fontFamily={fonts?.title}
										fontSize={{
											base: '1.5rem',
											md: '3rem',
										}}>
										Filter By Category
									</Heading>
									<Wrap>
										<SelectItem
											colorMode={colorMode}
											selected={cat == ''}
											onClick={() => onCategoryChange('')}>
											All
										</SelectItem>

										{categories?.doc?.map((item, i) => (
											<SelectItem
												key={i}
												colorMode={colorMode}
												selected={cat == item?._id}
												onClick={() => onCategoryChange(item?._id)}>
												{item?.name}
											</SelectItem>
										))}
									</Wrap>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
				<Grid
					{...gridCss}
					bg={bg}>
					{data?.doc?.map((item, i) => (
						<ServiceCard
							colorMode={colorMode}
							key={i}
							icon={
								<Image
									src={item?.icon}
									objectFit='contain'
									h='50px'
									w='50px'
								/>
							}
							title={item?.name}
							description={item?.shortDescription}
							tags={item?.featureList}
						/>
					))}
				</Grid>
			</Stack>
		</Page>
	);
};

const gridCss = {
	py: 4,
	pb: 16,
	px: { base: padding?.baseBody, md: padding?.lgBody },
	gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
	gap: 4,
};

const titleContainer = {
	py: 4,
	// px: { base: padding?.baseBody, md: padding?.lgBody },
	// borderLeft: BORDER,
	// borderRight: BORDER,
};

export default Servicepage;
