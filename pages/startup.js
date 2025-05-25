import React from 'react';
import { Box, Button, Flex, Grid, Heading, Text, useColorMode, VStack } from '@chakra-ui/react';

import Hero from '../components/hero/Hero';
import { Rocket, CheckCircle, Cpu, ServerIcon } from 'lucide-react';
import Link from 'next/link';
import Page from '../components/util/Page/Page';
import { links, padding } from '../lib/constants';
import SuccessStorieyStartup from '../components/success-story/SuccessStoryStartup';
import ReadyToLaunchSection from '../components/success-story/ReadyToLaunchSection';
import TitleSection from '../components/home/about-us/TitleSection';
import { colors } from '../theme/styles';
import { fonts } from '../components/lib/constants';

const startupServicesLight = [
	{
		title: 'IDEA VALIDATION',
		description:
			'We help validate your startup idea through market research, user interviews, and competitive analysis to ensure product-market fit.',
		icon: (
			<CheckCircle
				size={48}
				color={colors?.text?.light}
			/>
		),
		details: [
			'Market research and analysis',
			'User interviews and personas',
			'Competitive landscape analysis',
			'Value proposition refinement',
			'Business model validation',
		],
	},
	{
		title: 'RAPID PROTOTYPING',
		description:
			'Our team quickly transforms your validated idea into a functional prototype, allowing you to visualize and test your product.',
		icon: (
			<Cpu
				size={48}
				color={colors?.text?.light}
			/>
		),
		details: [
			'Wireframing and user flow design',
			'Interactive prototyping',
			'User testing and feedback',
			'Iterative refinement process',
			'Prototype to MVP planning',
		],
	},
	{
		title: 'TECH CONSULTING',
		description:
			'Our experts provide strategic technology guidance to help you make informed decisions about your product architecture.',
		icon: (
			<ServerIcon
				size={48}
				color={colors?.text?.light}
			/>
		),
		details: [
			'Technology stack selection',
			'Scalability planning',
			'Cloud infrastructure design',
			'Security implementation strategy',
			'Third-party integrations assessment',
		],
	},
	{
		title: 'LAUNCH & SUPPORT',
		description:
			'We assist with the successful launch of your MVP and provide ongoing support to ensure your product thrives in the market.',
		icon: (
			<Rocket
				size={48}
				color={colors?.text?.light}
			/>
		),
		details: [
			'Deployment strategy',
			'Performance optimization',
			'Analytics implementation',
			'Post-launch bug fixes',
			'Continuous improvement planning',
		],
	},
];

const startupServices = [
	{
		title: 'IDEA VALIDATION',
		description:
			'We help validate your startup idea through market research, user interviews, and competitive analysis to ensure product-market fit.',
		icon: <CheckCircle size={48} />,
		details: [
			'Market research and analysis',
			'User interviews and personas',
			'Competitive landscape analysis',
			'Value proposition refinement',
			'Business model validation',
		],
	},
	{
		title: 'RAPID PROTOTYPING',
		description:
			'Our team quickly transforms your validated idea into a functional prototype, allowing you to visualize and test your product.',
		icon: <Cpu size={48} />,
		details: [
			'Wireframing and user flow design',
			'Interactive prototyping',
			'User testing and feedback',
			'Iterative refinement process',
			'Prototype to MVP planning',
		],
	},
	{
		title: 'TECH CONSULTING',
		description:
			'Our experts provide strategic technology guidance to help you make informed decisions about your product architecture.',
		icon: <ServerIcon size={48} />,
		details: [
			'Technology stack selection',
			'Scalability planning',
			'Cloud infrastructure design',
			'Security implementation strategy',
			'Third-party integrations assessment',
		],
	},
	{
		title: 'LAUNCH & SUPPORT',
		description:
			'We assist with the successful launch of your MVP and provide ongoing support to ensure your product thrives in the market.',
		icon: <Rocket size={48} />,
		details: [
			'Deployment strategy',
			'Performance optimization',
			'Analytics implementation',
			'Post-launch bug fixes',
			'Continuous improvement planning',
		],
	},
];

const mvpBenefits = [
	{
		title: 'VALIDATE MARKET DEMAND',
		description: 'Test your idea with real users before investing in a full-featured product.',
	},
	{
		title: 'ATTRACT INVESTORS',
		description: 'Demonstrate product viability and user traction to potential investors.',
	},
	{
		title: 'REDUCE DEVELOPMENT COSTS',
		description: 'Focus resources on essential features that deliver core value.',
	},
	{
		title: 'FASTER TIME-TO-MARKET',
		description: 'Launch your product quickly and gain a competitive advantage.',
	},
	{
		title: 'USER FEEDBACK LOOP',
		description: 'Gather valuable insights from early adopters to guide future development.',
	},
	{
		title: 'ITERATIVE IMPROVEMENT',
		description: 'Build a foundation that allows for continuous enhancement based on real data.',
	},
];

const Startups = () => {
	const { colorMode } = useColorMode();
	const bg = colorMode === 'dark' ? colors?.background.dark : colors.background.light;
	const text = colorMode === 'dark' ? colors?.text.dark : colors.text.light;
	const secondary = colorMode === 'dark' ? colors?.textSecondary.dark : colors.textSecondary.light;
	const card = colorMode === 'dark' ? colors?.card.dark : colors.card.light;
	const blue = colorMode === 'dark' ? colors?.text.blue : colors.text.darkBlue;
	const services = colorMode === 'dark' ? startupServices : startupServicesLight;
	return (
		<Page
			theme={colorMode}
			image='https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
			title='MVP Development for Startups | Full Tech & Launch SupportLaunch-Ready MVPs for Startups | We Handle Tech, You Drive Growth'
			description='Thinkcrypt helps startups validate, build, and launch investor-ready MVPs with speed and precision. From product strategy to full-stack execution — we’re your technical cofounder without the equity.'>
			<Box {...pageStyle}>
				<Box
					as='main'
					flex='1'>
					<TitleSection
						top
						pb={0}
						colorMode={colorMode}
						titleTop='From Idea To'
						titleBottom='Successful Startup'
						title='MVP'>
						{
							'We help innovative startups launch market-ready MVPs and build scalable SaaS platforms that attract users and investors.'
						}
					</TitleSection>
					{/* <Hero
						title='FROM IDEA TO SUCCESSFUL STARTUP'
						subtitle='We help innovative startups launch market-ready MVPs and build scalable SaaS platforms that attract users and investors.'
						imageUrl='https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					/> */}

					{/* MVP Section */}
					<Box
						{...sectionGrayStyle}
						bg={bg}>
						<Grid
							{...containerStyle}
							w='full'
							gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
							gap={8}>
							<Box flex='1'>
								<Heading
									{...headingStyle}
									color={text}>
									What is an MVP?
								</Heading>
								<Text
									{...textStyle}
									color={secondary}>
									A Minimum Viable Product (MVP) is the initial version of your product with just
									enough features to attract early-adopter customers and validate your business idea
									early in the product development cycle.
								</Text>
								<Text
									{...textStyle}
									color={secondary}>
									Instead of building a complete product with all intended features—which can be
									time-consuming and expensive—an MVP focuses on core functionality that solves the
									primary problem for your users.
								</Text>
								<Text
									{...textStyle}
									color={secondary}
									mb='6'>
									{`This approach allows you to gather valuable user feedback early and iterate
									quickly, reducing the risk of building a product that doesn't meet market needs.`}
								</Text>
								<Link href='/contact'>
									<Button
										{...buttonStyle}
										bg='transparent'
										border='1px solid'
										borderColor={text}
										color={text}>
										Discuss Your MVP
									</Button>
								</Link>
							</Box>
							<Grid
								gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
								gap='4'>
								{mvpBenefits.map((benefit, index) => (
									<Flex
										key={index}
										{...cardStyle}
										flexDir='column'
										bg={card}>
										<Heading {...cardHeadingStyle}>{benefit.title}</Heading>
										<Flex
											flex={1}
											align='flex-end'>
											<Text
												{...cardTextStyle}
												color={blue}>
												{benefit.description}
											</Text>
										</Flex>
									</Flex>
								))}
							</Grid>
						</Grid>
					</Box>

					{/* How We Help Section */}
					<Box
						{...sectionBlackStyle}
						bg={bg}>
						<Flex {...containerStyle}>
							<Box {...centeredBoxStyle}>
								<Heading
									{...headingStyle}
									color={text}>
									How We Help Startups
								</Heading>
								<Text
									{...whiteTextStyle}
									color={blue}>
									Our end-to-end approach takes you from initial concept to market-ready product,
									with expert guidance at every step.
								</Text>
							</Box>
							<Grid
								gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
								gap={8}>
								{services.map((service, index) => (
									<Box
										key={index}
										{...serviceCardStyle}
										bg={card}>
										<Flex {...flexIconHeadingStyle}>
											<Box {...iconBoxStyle}>{service.icon}</Box>
											<Heading
												{...serviceHeadingStyle}
												color={text}>
												{service.title}
											</Heading>
										</Flex>
										<Text
											{...serviceTextStyle}
											color={secondary}>
											{service.description}
										</Text>
										<VStack {...detailsListStyle}>
											{service.details.map((detail, idx) => (
												<Flex
													key={idx}
													{...detailFlexStyle}>
													<CheckCircle
														size={16}
														color={text}
													/>
													<Text
														{...detailTextStyle}
														color={blue}>
														{detail}
													</Text>
												</Flex>
											))}
										</VStack>
									</Box>
								))}
							</Grid>
						</Flex>
					</Box>
					<SuccessStorieyStartup theme={colorMode} />
					<ReadyToLaunchSection theme={colorMode} />
				</Box>
			</Box>
		</Page>
	);
};

export default Startups;

// Style Constants
const pageStyle = {
	minH: '100vh',
	display: 'flex',
	w: 'full',
	flexDirection: 'column',
};

const sectionGrayStyle = {
	py: 20,
	bg: 'gray.50',
};

const sectionBlackStyle = {
	py: 20,
	bg: 'black',
	color: 'white',
};

const containerStyle = {
	flexDirection: 'column',
	px: { base: padding?.baseBody, md: padding?.lgBody },
};

const headingStyle = {
	fontFamily: fonts?.title,
	mb: 6,
	textTransform: 'uppercase',
	letterSpacing: 'wide',
	size: { base: '2xl', md: '3xl' },
};

const textStyle = {
	mb: 4,
	fontSize: { base: '1rem', md: '16px' },
	lineHeight: '1.4',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
};

const buttonStyle = {
	size: 'lg',
	fontSize: '16px',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
	borderRadius: 'none',
};

const cardStyle = {
	p: 6,
	borderRadius: '12px',
	// border: '1px solid',
	// borderColor: 'black',
};

const cardHeadingStyle = {
	as: 'h3',
	fontSize: 'lg',
	mb: 3,
	lineHeight: '1',
	textTransform: 'uppercase',
	letterSpacing: 'wide',
	fontFamily: fonts?.title,
	fontSize: { base: '2rem', md: '2rem' },
};

const cardTextStyle = {
	fontSize: 'sm',
	color: '#737373',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
	lineHeight: '1.5',
};

const centeredBoxStyle = {
	textAlign: 'center',
	mb: 16,
};

const whiteTextStyle = {
	color: 'whiteAlpha.700',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
};

const flexWrapStyle = {
	direction: { base: 'column', md: 'row' },
	wrap: 'wrap',
	gap: 8,
};

const serviceCardStyle = {
	p: 8,
	// border: '1px solid',
	// borderColor: '#333',
	// bg: 'black',
	borderRadius: '12px',
};

const flexIconHeadingStyle = {
	align: 'center',
	mb: 6,
};

const iconBoxStyle = {
	mr: 4,
};

const serviceHeadingStyle = {
	as: 'h3',

	textTransform: 'uppercase',
	letterSpacing: 'wide',
	fontFamily: fonts?.title,
	size: { base: 'xl', md: '2xl' },
};

const serviceTextStyle = {
	mb: 6,
	color: 'whiteAlpha.800',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
	fontSize: '16px',
};

const detailsListStyle = {
	align: 'start',
	spacing: 2,
};

const detailFlexStyle = {
	align: 'center',
	gap: 2,
};

const detailTextStyle = {
	ml: 2,
	color: 'whiteAlpha.900',
	fontSize: '1rem',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
};
