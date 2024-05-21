import {
	Box,
	Flex,
	FlexProps,
	Grid,
	Image,
	Text,
	TextProps,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import Column from '../../util/Column';
import { fonts, layout } from '../../../lib/constants';

const EachItem = ({ children, ...props }) => {
	return (
		<Flex
			flex={1}
			justify={'center'}
			align={'center'}
			bg='#f8f8f8'
			h={{ base: '90px', md: '130px' }}
		>
			<Box w={{ base: '60px', md: 'auto' }}>
				<Image w='full' h='auto' src={children} alt='logo' />
			</Box>
		</Flex>
	);
};

const Technology = ({ data, ...props }) => {
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	const style = {
		container: {
			// flex: 1,
			align: 'center',
			py: { base: 2, md: 6 },
			w: 'full',
			mx: 'auto',
		},
		title: {
			fontWeight: '500',
			color: 'textColor.light',
			fontFamily: fonts.heading,
			ml: '24px',
		},
		frameworkContainer: {
			flex: 1,
			ml: { base: 8, md: 20 },
			flexDir: 'column',
			borderLeft: '1px solid #DEDEE0',
			borderRight: '1px solid #DEDEE0',
		},
	};

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Column
			mt='60px'
			borderTop='1px solid #DEDEE0'
			borderBottom='1px solid #DEDEE0'
			{...props}
		>
			<Flex sx={style.container} maxW={layout.MAX_W}>
				<Column gap={6}>
					<Text sx={style.title} fontSize={{ base: '1.5rem', lg: '2.5rem' }}>
						Hands on experience
					</Text>
					<Text sx={style.title} fontSize={{ base: '2.25rem', lg: '3.5rem' }}>
						Tools & software
					</Text>
				</Column>
			</Flex>
			<Column borderBottom='1px solid #DEDEE0' />
			<Flex w='full' maxW={layout.MAX_W} mx='auto'>
				<Flex sx={style.frameworkContainer}>
					<Grid
						flex={1}
						templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(6, 1fr)' }}
						gap='1px'
						bg={'#DEDEE0'}
					>
						<Box
							gridColumn={{ base: '1 / span 2', md: '1 / span 2' }}
							bg='#f8f8f8'
							py={{ base: 3, md: 5 }}
						>
							<Text sx={style.title} fontSize={{ base: '20px', lg: '32px' }}>
								Your framework your way
							</Text>
						</Box>
						{data.map((logo, index) => (
							<EachItem key={index}>{logo}</EachItem>
						))}
					</Grid>
				</Flex>
			</Flex>
		</Column>
	);
};

export default Technology;
