import React from 'react';
import Column from '../util/Column';
import LinkButton from '../util/buttons/LinkButton';
import { Center, Flex, Text } from '@chakra-ui/react';
import { TfiClose } from 'react-icons/tfi';
import Link from 'next/link';
import RobotoText from '../util/text/RobotoText';
import usePointerPosition from '../../hooks/usePointerPosition';
import { styles } from '../../theme/styles';

const border = styles.border.dark;

const CloseButton = ({ ...props }) => {
	return (
		<Flex
			borderBottom={border}
			h='4rem'
			px='1.5rem'
			justify='flex-end'
			alignItems='center'>
			<Flex
				borderLeft={border}
				minW='7rem'
				justify='flex-end'
				alignItems='center'
				h='full'
				cursor='pointer'
				{...props}>
				<Center
					borderRadius='full'
					border='.75px solid #ebebeb'
					h='1.75rem'
					w='1.75rem'>
					<TfiClose size='.7rem' />
				</Center>
			</Flex>
		</Flex>
	);
};

const SidebarRightPart = ({ onClose }) => {
	const { x, y } = usePointerPosition();

	const SpringValue = ({ children, pos }) => (
		<RobotoText
			fontFamily='Suisse'
			fontSize='12px'
			fontWeight='300'
			letterSpacing='4px'
			lineHeight='1.2'
			color='white'>
			{`${pos}. ${children}`}
		</RobotoText>
	);

	return (
		<Column
			flex={1}
			fontFamily='Suisse'>
			<CloseButton onClick={onClose} />

			<Flex
				flex={1}
				justify='flex-end'
				align='center'
				px='1.5rem'
				py='2rem'>
				<Column>
					<SpringValue pos='X'>{x}</SpringValue>
					<SpringValue pos='Y'>{y}</SpringValue>
				</Column>
			</Flex>
			<Flex
				borderTop={border}
				flex={4}
				p='2rem'
				justify='flex-end'>
				<Column
					gap='8rem'
					alignItems='flex-end'
					justify='space-between'>
					<Link href='https://docs.google.com/forms/d/e/1FAIpQLSeu0GxkeIBfjuAXlPALET-5S1Dxs6JASbV2CSjv2Yv4YA1vZQ/viewform?usp=sf_link'>
						<LinkButton label='CONTACT US' />
					</Link>
					<Flex></Flex>
					<Column
						gap={8}
						alignItems='flex-end'>
						<Text
							color='text.200'
							fontFamily='Suisse'
							fontSize={{ md: '6rem', lg: '8rem' }}
							letterSpacing='4px'
							lineHeight='1'
							fontWeight='300'>
							01
						</Text>
						<Flex gap={8}>
							<Link
								href='https://www.linkedin.com/company/thinkcrypt-io/'
								target='_blank'>
								<LinkButton label='LINKEDIN' />
							</Link>
							<Link
								href='https://www.facebook.com/thinkcrypt/'
								target='_blank'>
								<LinkButton label='FACEBOOK' />
							</Link>
						</Flex>
					</Column>
				</Column>
			</Flex>
		</Column>
	);
};

export default SidebarRightPart;
