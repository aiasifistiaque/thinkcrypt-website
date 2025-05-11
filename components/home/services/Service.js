import React, { useState } from 'react';
import Column from '../../util/Home/Column';
import { Box, Flex, Grid, Image, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import { howWeWorkPic1, howWeWorkPic2 } from '../../../data/data';
import { fonts } from '../../lib/constants';

import { styles } from '../../../theme/styles';
import { useGetAllQuery } from '../../../store';

const BORDER = styles.border.light;

const ServicesNew = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'services',
		limit: 10,
		sort: '-priority',
		filters: {
			isActive: true,
		},
	});

	const CustomImage = ({ children, w, h }) => {
		return (
			<Flex
				w={w}
				h={h}>
				<Image
					src={children}
					alt='image'
					objectFit='cover'
					w='full'
					h='auto'
				/>
			</Flex>
		);
	};

	return (
		// <Container spacing={0} >
		<Column {...container}>
			{/* FOR SMALL SCREEN */}
			<Column display={{ base: 'flex', md: 'none' }}>
				<Grid
					templateRows='2fr 1fr'
					display={{ base: 'grid', md: 'none' }}
					w='full'>
					<Grid
						templateColumns='1fr 1fr'
						w='full'>
						<CustomImage
							w='full'
							h='324px'>
							{howWeWorkPic1}
						</CustomImage>
						<Flex
							w='full'
							p={4}>
							<Text
								fontSize='32px'
								fontFamily='Michroma'>
								Our Services
							</Text>
						</Flex>
					</Grid>
					<CustomImage
						w='full'
						h='full'>
						{howWeWorkPic2}
					</CustomImage>
				</Grid>

				<Column ml={6}>
					<Flex
						borderLeft={BORDER}
						flexDir='column'>
						{data?.doc?.map(
							(item, i) =>
								i <= 4 && (
									<Flex
										borderBottom={BORDER}
										p={4}
										key={i}
										flexDir='column'>
										<Box
											flex='1'
											textAlign='left'
											py={3}>
											<Text
												fontSize='18px'
												fontWeight={600}
												fontFamily={fonts.heading}>
												{(i + 1).toString().padStart(2, '0')} {item?.name}
											</Text>
										</Box>

										<Text
											fontSize='14px'
											fontFamily='Michroma'>
											{item?.description}
										</Text>
									</Flex>
								)
						)}
					</Flex>
				</Column>
			</Column>

			{/* FOR LARGE SCREEN */}
			<Column
				display={{ base: 'none', md: 'flex' }}
				borderLeft={BORDER}
				borderRight={BORDER}>
				<Grid
					templateColumns='2fr 3fr'
					w='full'>
					<CustomImage
						w='full'
						h='full'>
						{howWeWorkPic1}
					</CustomImage>
					<Grid
						templateRows='1fr 1fr'
						w='full'>
						<Flex
							w='full'
							p={8}>
							<Text
								fontSize='48px'
								fontFamily={fonts.heading}
								fontWeight='600'>
								Our Services
							</Text>
						</Flex>
						<CustomImage
							w='full'
							h='full'>
							{howWeWorkPic2}
						</CustomImage>
					</Grid>
				</Grid>

				<Grid
					w='full'
					templateColumns='repeat(4, 1fr)'
					gap='1px'
					bgColor='#DEDEE0'>
					{isFetching
						? [...Array(10)].map((_, i) => (
								<SeriveItemLgSkeleton
									key={i}
									index={i}
								/>
						  ))
						: data?.doc?.map((item, i) => (
								<SeriveItemLg
									item={item}
									index={i}
									key={i}
								/>
						  ))}
				</Grid>
			</Column>
		</Column>
		// </Container>
	);
};

const container = {
	px: { base: '0px', md: '24px' },
	pr: { base: '0px', md: '128px' },
	w: 'full',
	mx: 'auto',
	borderTop: BORDER,
	borderBottom: BORDER,
	mt: '60px',
	mb: '40px',
};

const SeriveItemLg = ({ item, index }) => (
	<Column
		{...itemCss}
		gridColumn={index === 0 || index == 9 ? 'span 2' : 'auto'}>
		<Text
			fontSize='18px'
			fontWeight='800'
			fontFamily={fonts.heading}>
			{(index + 1).toString().padStart(2, '0')} {item?.name}
		</Text>
		<Text
			fontFamily='Michroma'
			fontSize='14px'
			fontWeight='400'
			overflow='hidden'>
			{item?.description}
		</Text>
	</Column>
);

const SeriveItemLgSkeleton = ({ index }) => (
	<Column
		{...itemCss}
		gridColumn={index === 0 || index == 9 ? 'span 2' : 'auto'}>
		<Skeleton>
			<Text
				fontSize='18px'
				fontWeight='800'
				fontFamily={fonts.heading}>
				01 NAME OF ITEM
			</Text>
		</Skeleton>
		<SkeletonText noOfLines={4} />
	</Column>
);

const itemCss = {
	px: 4,
	py: 6,
	gap: 5,
	bgColor: 'white',
};

export default ServicesNew;
