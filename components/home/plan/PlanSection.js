import React, { useState } from 'react';
import { styles } from '../../../theme/styles';
import { breakpoints, layout } from '../../lib/constants';
import { fonts } from '../../../lib/constants';
import { colors } from '../../lib/constants';
import styled from '@emotion/styled';
import { FaCheck } from 'react-icons/fa';
import {
	Box,
	Button,
	Center,
	Flex,
	Grid,
	GridItem,
	List,
	ListIcon,
	ListItem,
	Switch,
	Text,
} from '@chakra-ui/react';
import Column from '../../util/Column';
import { planData } from '../../../data/data';

const P = styled(Text)`
	@media (min-width: ${breakpoints.desktop}) {
		font-size: 1rem;
		line-height: 1.6;
		max-width: 50vw;
	}
`;

const ThinkButton = styled(Center)`
	cursor: pointer;
	margin: 32px 0;
	height: 50px;
	width: 220px;
	background-color: ${colors.charcole};
	transition: 0.2s;
	&:hover {
		@media (min-width: ${breakpoints.desktop}) {
			background-color: ${colors.orange};
		}
	}
	&:active {
		background-color: black.800;
	}
`;

const ButtonText = styled(Text)`
	line-height: 0;
	color: white;
	font-weight: bold;
	letter-spacing: 0.75px;
	font-size: 1rem;
`;

const BORDER = styles.border.light;

const PlanSection = () => {
	const [isYearly, setIsYearly] = useState(false);

	const handleToggle = () => setIsYearly(!isYearly);

	return (
		<Column
			mt='60px'
			p={{ base: 6, md: 16, lg: 32 }}
			alignItems='center'
			borderTop={BORDER}
			borderBottom={BORDER}
			gap={{ base: 4, md: 10, lg: 16 }}
			bg='sectionBg.light'
		>
			<Text
				fontSize={{ base: '1.5rem', md: '2rem', lg: '3rem' }}
				fontFamily='Bebas Neue'
			>
				There’s a E-mint store for every business
			</Text>
			<Flex
				gap={{ base: 2, md: 4 }}
				wrap={{ base: 'wrap', md: 'nowrap' }}
				alignItems='center'
			>
				<P
					fontFamily={fonts.Suisse}
					//fontWeight={!isYearly ? 600 : 300}
				>
					Pay Monthly
				</P>
				<Switch size='lg' isChecked={isYearly} onChange={handleToggle} />
				<P
					fontFamily={fonts.Suisse}
					//fontWeight={isYearly ? 600 : 300}
				>
					Pay Annually
				</P>
				<P
					fontFamily={fonts.Suisse}
					bgColor='orange.light'
					py={1}
					px={2}
					textColor='white'
				>
					50% OFF ALL YEAR
				</P>
			</Flex>

			<Grid
				templateColumns={{
					base: '1fr',
					md: '1fr 1fr',
					lg: '1fr 1fr 1fr',
					xl: '1fr 1fr 1fr 1fr',
				}}
				gap={6}
				py={{ base: 4, md: 6, lg: 10 }}
				px={{ base: 4, md: 6, lg: 20 }}
			>
				{planData?.map(plan => (
					<GridItem key={plan?.id}>
						<Box
							display='flex'
							flexDirection='column'
							alignItems='center'
							bg='white'
							borderRadius='4px'
							px={6}
							py={10}
							gap={4}
							minH='full'
						>
							<Text
								fontSize={{ base: '1.75rem', md: '2rem', lg: '2.5rem' }}
								fontFamily='Bebas Neue'
							>
								{plan?.item}
							</Text>

							<Text as='s' color='gray.500' fontFamily={fonts.Suisse}>
								BDT {isYearly ? plan.oldYearlyPayment : plan.oldMonthlyPayment}
							</Text>
							<Flex>
								<Text
									fontSize={{ base: '1.75rem', md: '2rem', lg: '2.5rem' }}
									fontWeight={500}
									fontFamily='Bebas Neue'
								>
									{isYearly ? plan['yearly-payment'] : plan['monthly-payment']}
								</Text>
								<P fontWeight={500}>{isYearly ? '/yr*' : '/mo*'}</P>
							</Flex>

							<Text color='gray.500' mb={4} fontFamily={fonts.Suisse}>
								Save BDT{' '}
								{isYearly ? plan['yearly-savings'] : plan['monthly-savings']}
								{isYearly ? '/yr' : '/mo'} for 3 months
							</Text>

							<ThinkButton w='full'>
								<ButtonText>Buy now</ButtonText>
							</ThinkButton>

							<List spacing={2} mt={4}>
								{plan['data-list'].map((feature, index) => (
									<ListItem
										key={index}
										display='flex'
										gap={2}
										alignItems='center'
										fontFamily={fonts.Suisse}
										w='full'
									>
										<FaCheck color='green' /> {feature}
									</ListItem>
								))}
							</List>
						</Box>
					</GridItem>
				))}
			</Grid>
		</Column>
	);
};

export default PlanSection;
