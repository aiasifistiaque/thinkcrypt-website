import React from 'react';
import BorderContainer from '../../util/container/BorderContainer.js';
import { Box, Flex, Grid, Image, Stack } from '@chakra-ui/react';
import EachSchedule from '../bootcamp-schedule/EachSchedule.jsx';
import BootcampEachGridItem from './BootcampEachGridItem.jsx';
import Column from '../../util/Column.jsx';

const BootcampDetailsGrid = ({ bootcampDetails }) => {
	return (
		<BorderContainer>
			<Column w='full' gap={{ base: 2, md: 5 }}>
				<Grid
					templateColumns={{ base: '1fr', lg: '2fr 3fr 2fr' }}
					gap={{ base: 2, md: 5 }}
					px={{ base: 2, md: 5 }}
					py={{ base: 10, md: 20 }}
				>
					<Flex
						w='full'
						display={{ base: 'none', lg: 'flex' }}
						flexDir={{ base: 'row', lg: 'column' }}
						gap={{ base: 2, md: 5 }}
					>
						{bootcampDetails?.items.map((item, index) => {
							return index < 3 && <BootcampEachGridItem item={item} />;
						})}
					</Flex>
					<Grid
						w='full'
						templateColumns={{ base: '1fr 1fr', md: '1fr 1fr' }}
						display={{ base: 'grid', lg: 'none' }}
						flexDir={{ base: 'row', lg: 'column' }}
						gap={{ base: 2, md: 5 }}
					>
						{bootcampDetails?.items.map((item, index) => {
							return index < 4 && <BootcampEachGridItem item={item} />;
						})}
					</Grid>
					<Box w='full'>
						<Image
							src={bootcampDetails?.photo}
							w='full'
							h={{ base: '250px', md: '400px', lg: 'full'}}
							// h={{ base: '250px', md: '400px', lg: '514px' }}
							objectFit={'cover'}
							alt={bootcampDetails?.heading}
						/>
					</Box>
					<Flex
						w='full'
						display={{ base: 'none', lg: 'flex' }}
						flexDir={{ base: 'row', lg: 'column' }}
						gap={{ base: 2, md: 5 }}
					>
						{bootcampDetails?.items.map((item, index) => {
							return (
								index > 2 && index < 6 && <BootcampEachGridItem item={item} />
							);
						})}
					</Flex>
					<Grid
						w='full'
						templateColumns={{ base: '1fr 1fr', lg: '1fr 1fr' }}
						display={{ base: 'grid', lg: 'none' }}
						flexDir={{ base: 'row', lg: 'column' }}
						gap={{ base: 2, md: 5 }}
					>
						{bootcampDetails?.items.map((item, index) => {
							return (
								index > 3 && index < 6 && <BootcampEachGridItem item={item} />
							);
						})}
					</Grid>
				</Grid>
				{/* <Grid
					templateColumns={{ base: '1fr 1fr', md: '1fr 1fr' }}
					gap={{ base: 2, md: 5 }}
					px={{ base: 2, md: 5 }}
					pb={{ base: 10, md: 15, lg: 20 }}
					w='full'
				>
					{bootcampDetails?.items.map((item, index) => {
						return index > 3 && <BootcampEachGridItem item={item} />;
					})}
				</Grid> */}
			</Column>
		</BorderContainer>
	);
};

export default BootcampDetailsGrid;
