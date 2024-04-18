import React, { useState } from "react";
import Column from "../../util/Home/Column";
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { howWeWork, howWeWorkPic1, howWeWorkPic2 } from "../../../data/data";
import { fonts, layout } from "../../lib/constants";

const ServicesNew = () => {

  	const [hoveredIndex, setHoveredIndex] = useState(0);

  	const CustomImage = ({ children, w, h }) => {
		return (
			<Flex w={w} h={h}>
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
		<Column
			mt='60px'
			borderTop='1px solid #DEDEE0'
			borderBottom='1px solid #DEDEE0'
		>
			<Column w='full' mx='auto' maxW={layout.MAX_W}>
				{/* FOR SMALL SCREEN */}
				<Column display={{ base: 'flex', md: 'none' }}>
					<Grid
						templateRows='2fr 1fr'
						display={{ base: 'grid', md: 'none' }}
						w='full'
					>
						<Grid templateColumns='1fr 1fr' w='full'>
							<CustomImage w='full' h='324px'>
								{howWeWorkPic1}
							</CustomImage>
							<Flex w='full' p={4}>
								<Text fontSize='32px' fontFamily={fonts.heading}>
									Our Services
								</Text>
							</Flex>
						</Grid>
						<CustomImage w='full' h='full'>
							{howWeWorkPic2}
						</CustomImage>
					</Grid>

					<Column ml={8}>
						<Accordion defaultIndex={[0]} borderLeft='1px solid #DEDEE0'>
							{howWeWork?.map((item, index) => (
								<AccordionItem key={index}>
									<h2>
										<AccordionButton>
											<Box as='span' flex='1' textAlign='left' py={3}>
												<Text fontSize='18px' fontWeight={600} fontFamily={fonts.heading}>
													{item.title}
												</Text>
											</Box>
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										<Text fontSize='14px' fontFamily={fonts.body}>
											{item.subTitle}
										</Text>
									</AccordionPanel>
								</AccordionItem>
							))}
						</Accordion>
					</Column>
				</Column>

				{/* FOR LARGE SCREEN */}
				<Column
					display={{ base: 'none', md: 'flex' }}
					// ml={20}
					borderLeft='1px solid #DEDEE0'
					borderRight='1px solid #DEDEE0'
				>
					<Grid templateColumns='2fr 3fr' w='full'>
						<CustomImage w='full' h='full'>
							{howWeWorkPic1}
						</CustomImage>
						<Grid templateRows='1fr 1fr' w='full'>
							<Flex w='full' p={8}>
								<Text
									fontSize='48px'
									fontFamily={fonts.heading}
									fontWeight='600'
								>
									Our Services
								</Text>
							</Flex>
							<CustomImage w='full' h='full'>
								{howWeWorkPic2}
							</CustomImage>
						</Grid>
					</Grid>

					<Grid
						w='full'
						templateColumns='repeat(4, 1fr)'
						gap='1px'
						bgColor='#DEDEE0'
					>
						{howWeWork?.map((item, index) => (
							<Column
								key={index}
								px={4}
								py={6}
								gap={5}
								bgColor='#F8F8F8'
								h='230px'
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(0)}
								gridColumn={
									index === hoveredIndex
										? 'span 2'
										: index === 4 && hoveredIndex === 3
										? '3'
										: 'auto'
								}
								gridRow={index === 4 && hoveredIndex === 3 ? '1' : 'auto'}
							>
								<Text
									fontSize='24px'
									fontWeight='400'
									fontFamily={fonts.heading}
								>
									{item.title}
								</Text>
								<Text fontSize='18px' fontWeight='400' fontFamily={fonts.body}>
									{item.subTitle}
								</Text>
							</Column>
						))}
					</Grid>
				</Column>
			</Column>

			{/* <Flex flex={1} w='full' justify='flex-end' borderTop='1px solid #DEDEE0'>
				<ViewAllButton href='/services'>VIEW SERVICES</ViewAllButton>
			</Flex> */}
		</Column>
	);
};

export default ServicesNew;
