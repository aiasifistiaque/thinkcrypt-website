import React from 'react';
import Column from '../util/Column';
import LinkButton from '../util/buttons/LinkButton';
import { Center, Flex, Text } from '@chakra-ui/react';
import { TfiClose } from 'react-icons/tfi';
import Link from 'next/link';
import { styles } from '../../theme/styles';
import ScrollValue from './ScrollValue';

const border = styles.border.dark;

export const CloseButton = ({ align, ...props }) => {
	return (
		<Flex
			borderBottom={border}
			h='4rem'
			px='1.5rem'
			justify='flex-end'
			alignItems={align || 'center'}>
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
	return (
		<Column
			flex={1}
			fontFamily='Michroma'>
			<CloseButton onClick={onClose} />

			<ScrollValue />
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
							fontFamily='Michroma'
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
