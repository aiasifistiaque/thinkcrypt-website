import { Button, Flex, Icon, Stack, StackProps, Text } from '@chakra-ui/react';
import React from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import GrayText from '../text/GrayText';
import useCustomColors from '../../../hooks/useCustomColors';
import RoundedButton from '../buttons/rounded-button/RoundedButton';
import { layout } from '../../../lib/constants';
import Column from '../Column';

/**
 * @description New Version of Footer Created by Mubin on 31 March 2024
 */

const FooterV3 = ({ variant = 'dark', ...props }) => {
	// api

	// hooks
	const { textGray } = useCustomColors();

	// states

	// variables

	// styles

	// functions
	const getBgColor = variant => {
		switch (variant) {
			case 'light':
				return {
					texts: textGray,
					bg: '#FFF',
					letsTalk: '#E9E9E9',
					buttonBg: 'transparent',
					buttonColor: textGray,
				};
			case 'dark':
				return {
					texts: '#A9A9A9',
					bg: '#000',
					letsTalk: '#E9E9E9',
					buttonBg: 'transparent',
					buttonColor: 'white',
				};
			case 'blue':
				return {
					texts: '#5a5a90',
					bg: '#171766',
					letsTalk: '#5a5a90',
					buttonBg: '#5a5a90',
					buttonColor: 'white',
				};
			case 'green':
				return {
					texts: '#A9A9A9',
					bg: '#16280D',
					letsTalk: '#424242',
					buttonBg: '#424242',
					buttonColor: '#F5F5F5',
					buttonBorder: '#877676',
				};
			default:
				return {
					texts: '##A9A9A9',
					bg: '#16280d',
					letsTalk: '#424242',
					buttonBg: 'transparent',
					buttonColor: textGray,
				};
		}
	};

	const colors = getBgColor(variant);
	const borderColor = colors.buttonBorder ? colors.buttonBorder : colors.texts;

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// effects

	// components
	const top = (
		<Flex flex={1} justify='space-between' alignItems='center'>
			<GrayText color={colors.texts}>{`@2024`}</GrayText>
			<Button
				onClick={scrollToTop}
				variant='transparent'
				color={colors.texts}
				_hover={{
					textDecoration: 'underline',
				}}
				rightIcon={
					<Icon
						as={IoMdArrowRoundUp}
						border='2px solid'
						borderColor={colors.texts}
						rounded='full'
						boxSize={{ base: 5, lg: 6 }}
						color={colors.texts}
					/>
				}
			>
				<GrayText color={colors.texts}>{`BACK TO TOP`}</GrayText>
			</Button>
		</Flex>
	);

	const bottom = (
		<Column gap={{ base: 3, lg: 4 }} py={{ base: 10, lg: 15 }} h='full' 
		justify={{ base: 'space-around', lg: 'space-between' }}
		>
			<GrayText color={colors.texts}>HAVE A PROJECT IN MIND?</GrayText>
			<Flex>
				<Text
					align={{ base: 'center', lg: 'start' }}
					fontSize={{ base: '64px', lg: '190px' }}
					color={colors.letsTalk}
					fontWeight='600'
				>{`LET'S TALK`}</Text>
			</Flex>
			<Flex
				flexDirection={{ base: 'column', lg: 'row' }}
				justifyContent='space-between'
				gap={{ base: 3, lg: 4 }}
			>
				<Flex
					gap={3}
					justify={{ base: 'space-between', lg: 'flex-start' }}
					align='center'
				>
					<RoundedButton
						color={colors.buttonColor}
						borderColor={borderColor}
						bg={colors.buttonBg}
					>
						GITHUB
					</RoundedButton>
					<RoundedButton
						color={colors.buttonColor}
						borderColor={borderColor}
						bg={colors.buttonBg}
					>
						TWITTER
					</RoundedButton>
					<RoundedButton
						color={colors.buttonColor}
						borderColor={borderColor}
						bg={colors.buttonBg}
					>
						LINKEDIN
					</RoundedButton>
				</Flex>
				{/* <Flex>
					<GrayText py={{ base: 4, lg: 0 }} color={colors.texts}>
						{`Knock Us-- House 88, Road - 17/A,`}
						<br />
						{`Block - E, Banani.`}
					</GrayText>
				</Flex> */}
			</Flex>
		</Column>
	);

	return (
		<Flex bgColor={colors.bg}>
			<Stack
				flex={1}
				pt={{ base: '44px', md: '142px' }}
				pb={{ base: '36px', md: '64px' }}
				maxW={layout.MAX_W}
				mx='auto'
				px={{ base: 4, lg: 6 }}
				minH={'724px'}
				{...props}
			>
				{top}
				{bottom}
			</Stack>
		</Flex>
	);
};

export default FooterV3;
