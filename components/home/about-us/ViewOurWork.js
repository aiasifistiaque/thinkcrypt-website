// import Column from '/components/util/Column';
// import RobotoText from '@/components/util/text/RobotoText';
// import { fonts, layout, padding } from '@/lib/constants';
// import { AboutUs } from '@/lib/staticElements';
import { border, Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { fonts, layout } from '../../lib/constants';
import RobotoText from '../../util/text/RobotoText';
import Column from '../../util/Column';
import { AboutUs, padding } from '../../../lib/constants';
import { colors, styles } from '../../../theme/styles';
import Link from 'next/link';

const BORDER = styles.border.light;
const ViewOurWork = ({}) => {
	return (
		<Flex
			bg={colors?.background?.dark}
			w='full'>
			<Flex {...containerCss}>
				<Flex {...visionContainerCss}>
					<Text
						color={colors?.text?.dark}
						fontFamily={fonts.body}>
						01
					</Text>
					<RobotoText
						color={colors?.text?.dark}
						fontSize={'0.875rem'}>
						OUR WORK
					</RobotoText>
				</Flex>

				<Column {...bodyCss}>
					<Grid
						flex={1}
						gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
						gap={5}>
						<Heading {...headingCss}>
							Explore Our
							<br />
							Full Portfolio
						</Heading>

						<Flex
							align='flex-end'
							justify='flex-end'>
							<Flex
								gap={8}
								flexDir='column'
								maxW={{ base: '100%', md: '80%' }}>
								<RobotoText {...bodyTextCss}>
									{`We’ve helped startups and businesses build websites, apps, and digital tools that solve real problems. Our focus is on making things fast, modern, and easy to use.`}
								</RobotoText>
								<RobotoText {...bodyTextCss}>
									Take a look at our past projects to see how we turn ideas into working products.
									If you like what you see, we can build something great for you too.
								</RobotoText>
								<Link href='/portfolio'>
									<Box>
										<Button
											_hover={{
												bg: 'transparent',
												color: colors?.text?.dark,
											}}
											p={6}
											borderColor={colors?.text?.dark}
											color={colors?.textSecondary?.dark}
											textTransform='uppercase'
											variant='outline'
											borderRadius='none'>
											VIEW OUR WORK
										</Button>
									</Box>
								</Link>
							</Flex>
						</Flex>
					</Grid>
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
	);
};

const containerCss = {
	direction: 'column',
	gap: { base: 8, md: 16 },
	pb: { base: '3rem', md: '8rem' },
	px: { base: padding.baseBody, lg: padding.lgBody },
	mx: 'auto',
	pt: '92px',
	maxW: layout.MAX_W,
};

const visionContainerCss = {
	borderTop: '1px solid',
	borderColor: colors?.background?.light,
	pt: '92px',
	w: 'full',
	justify: 'space-between',
};

const bodyCss = {
	borderBottom: '1px solid',
	borderColor: colors?.background?.light,
	gap: 5,
	minH: '80vh',
	pb: '64px',
	flex: 5,
};

const headingCss = {
	fontFamily: 'Bebas Neue',
	fontSize: { base: '4rem', md: '8rem' },
	fontWeight: '600',
	lineHeight: '1',
	letterSpacing: '2px',
	color: colors?.text?.dark,
};

const bodyTextCss = {
	color: colors?.textSecondary?.dark,
	fontSize: { base: '14px', lg: '16px' },

	letterSpacing: { base: '0px', md: '0px' },
	lineHeight: { base: '1.5', md: '1.6' },
	fontFamily: fonts.primary,
	textTransform: 'uppercase',
};

export default ViewOurWork;
