import React from 'react';
import data from './data.js';
import { Flex, Image as CImage, Stack, Heading, Text, Grid } from '@chakra-ui/react';

const Services = () => {
	return (
		<Flex {...containerCss}>
			<Grid {...customGridCss}>
				<Service item={data[0]} />
				<Service item={data[1]} />
			</Grid>

			<Grid {...customGridCss}>
				<Service item={data[2]} />
				<Service item={data[3]} />
			</Grid>

			<Grid {...customGridCss}>
				<Service item={data[4]} />
				<Service item={data[5]} />
			</Grid>
		</Flex>
	);
};

const containerCss = {
	margin: { base: '24px', md: '32px 128px' },
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	flexDirection: 'column',
	gap: '2rem',
};

const customGridCss = {
	gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
	gap: '1rem',
};

const Service = ({ item }) => {
	return (
		<Flex {...itemCss}>
			<CImage
				{...imageCss}
				src={`${item?.src}.jpg`}
				alt={item.name}
			/>
			<Stack
				mt={4}
				spacing={2}
				px='4px'>
				<Heading
					mb={0.5}
					fontFamily='Michroma, sans-serif'
					fontWeight='600'
					size='md'>
					{item?.name}
				</Heading>
				<Text>{item?.details}</Text>
			</Stack>
		</Flex>
	);
};

const itemCss = {
	mb: '3rem',
	flexDirection: 'column',
};

const imageCss = {
	w: '100%',
	h: { base: '220px', md: '300px', lg: '350px' },
	mb: '0.25rem',
	objectFit: 'cover',
	borderRadius: '2px',
};

export default Services;
