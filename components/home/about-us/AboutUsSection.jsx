// import Column from '/components/util/Column';
// import RobotoText from '@/components/util/text/RobotoText';
// import { fonts, layout, padding } from '@/lib/constants';
// import { AboutUs } from '@/lib/staticElements';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { fonts, layout } from '../../lib/constants';
import RobotoText from '../../util/text/RobotoText';
import Column from '../../util/Column';
import { AboutUs, padding } from '../../../lib/constants';

const AboutUsSection = ({}) => {
	return (
		<Flex
			w='full'
			borderTop={'1px solid #DEDEE0'}
			borderBottom={'1px solid #DEDEE0'}
		>
			<Flex
				direction='column'
				// justify='space-between'
				// minH={{ base: "auto", lg: "720px" }}
				gap={{ base: 8, md: 16 }}
				pt='5rem'
				pb={{ base: '5rem', md: '12rem' }}
				px={{ base: padding.baseBody, lg: padding.lgBody }}
				mx='auto'
				maxW={layout.MAX_W}
			>
				<Flex w='full' justify='space-between'>
					<Text fontFamily={fonts.body}>01</Text>
					<RobotoText fontSize={'0.875rem'} fontFamily={fonts.heading}>
						OUR VISION
					</RobotoText>
				</Flex>
				<Flex
					w='full'
					gap={{ base: 7, md: 0 }}
					flexDir={{ base: 'column', md: 'row' }}
				>
					<Column gap={5} flex={5}>
						<Heading
							fontFamily={fonts.heading}
							fontSize={{ base: '2rem', md: '2rem' }}
							fontWeight='400'
							color='textColor.light'
						>
							WHO WE ARE
						</Heading>
						<RobotoText
							fontFamily={fonts.body}
							fontSize={ { base: '1rem', lg: '2.25rem' } }
							maxW={{ base: '100%', lg: '75%' }}
							color='black.800'
							letterSpacing='-2px'
							lineHeight='1.2'
						>
							{AboutUs.ABOUT_DESCRIPTION}
						</RobotoText>
					</Column>
					{/* <Flex flex={2} justify='flex-end' align={'flex-end'}>
						<RobotoText
							fontSize='1rem'
							fontWeight='500'
							textDecor={'underline'}
							fontFamily={fonts.heading}
						>
							LEARN ABOUT US
						</RobotoText>
					</Flex> */}
				</Flex>
				{/* <Box maxH='550px' minW='fit-content' order={{ base: 1, lg: 2 }}>
				<Image src='/home/phone.svg' h='100%' w='100%' objectFit='cover' />
			</Box> */}
			</Flex>
		</Flex>
	);
};

export default AboutUsSection;
