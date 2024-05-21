import React from 'react';
import BorderContainer from '../../util/container/BorderContainer.js';
import { Box, Flex, Grid, Image, Stack } from '@chakra-ui/react';
import EachSchedule from '../bootcamp-schedule/EachSchedule.jsx';
import BootcampEachGridItem from './BootcampEachGridItem.jsx';

const BootcampDetailsGrid = ({ bootcampDetails }) => {
	return (
		<BorderContainer>
			<Grid
				templateColumns={{ base: '1fr', md: '2fr 3fr 2fr' }}
				gap={{ base: 2, md: 5 }}
				px={{ base: 2, md: 5 }}
				py={{ base: 10, md: 20 }}
			>
				<Flex
					w='full'
					flexDir={{ base: 'row', md: 'column' }}
					gap={{ base: 2, md: 5 }}
				>
					{bootcampDetails?.items.map((item, index) => {
						return index < 2 && <BootcampEachGridItem item={item} />;
					})}
				</Flex>
				<Box w='full'>
					<Image
						src={bootcampDetails?.photo}
						w='full'
						h={{ base: '250px', md: '514px' }}
						objectFit={'cover'}
						alt={bootcampDetails?.heading}
					/>
				</Box>
				<Flex
					w='full'
					flexDir={{ base: 'row', md: 'column' }}
					gap={{ base: 2, md: 5 }}
				>
					{bootcampDetails?.items.map((item, index) => {
						return (
							index > 1 && index < 5 && <BootcampEachGridItem item={item} />
						);
					})}
				</Flex>
			</Grid>
		</BorderContainer>
	);
};

export default BootcampDetailsGrid;
