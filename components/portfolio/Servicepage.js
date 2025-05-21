import React, { useState } from 'react';
import SectionHeading from '../home/sectionheading/SectionHeading';
import Page from '../util/Page/Page';

import { Heading, Stack, Flex, Grid, Wrap, Image } from '@chakra-ui/react';

import { styles } from '../../theme/styles';
import { useGetAllQuery } from '../../store';

import ServiceCard from './ServiceCard';
import SelectItem from './SelectItem';

const img =
	'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const BORDER = styles.border.light;

const Servicepage = () => {
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

	return (
		<Page
			image={img}
			title={`Custom Software & SaaS Development Services | Thinkcrypt`}
			description={`Explore Thinkcrypt’s full range of services including MERN stack development, MVPs, SaaS platforms, eCommerce, CRM systems, and cloud solutions tailored for startups and enterprises.`}>
			<Stack
				spacing={0}
				pt='48px'>
				<SectionHeading
					containerProps={{ pb: '32px' }}
					heading='Our Development Services'
					subHeading='Custom Software & SaaS Development'>
					{`Explore Thinkcrypt’s full range of services including MERN stack development, MVPs, SaaS platforms, eCommerce, CRM systems, and cloud solutions tailored for startups and enterprises.`}
				</SectionHeading>

				<Flex
					borderBottom={BORDER}
					flexDir='column'
					pb='32px'>
					<Flex {...titleContainer}>
						<Flex>
							<Flex
								gap={6}
								flexDir='column'>
								<Heading
									textTransform='uppercase'
									fontFamily='Michroma'
									size='md'>
									Filter By Category
								</Heading>
								<Wrap>
									<SelectItem
										selected={cat == ''}
										onClick={() => onCategoryChange('')}>
										All
									</SelectItem>

									{categories?.doc?.map((item, i) => (
										<SelectItem
											key={i}
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
				<Grid {...gridCss}>
					{data?.doc?.map((item, i) => (
						<ServiceCard
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
	px: { base: 4, md: 6 },
	gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
	gap: 4,
};

const titleContainer = {
	pt: 4,
	px: { base: 4, md: 6 },
	borderLeft: BORDER,
	borderRight: BORDER,
};

export default Servicepage;
