import React from 'react';
import Column from '../util/Column';
import { Flex, Hide, Show, Text } from '@chakra-ui/react';
import SidebarNavItem from '../sections/sidebar/SidebarNavItem';
import LinkButton from '../util/buttons/LinkButton';
import Link from 'next/link';
import { styles } from '../../theme/styles';
import { CloseButton } from './SidebarRightPart';

const BORDER = styles.border.dark;

const SidebarLeftPart = ({ onClose, ...props }) => {
	return (
		<Column
			flex={2}
			borderRight={BORDER}
			{...props}>
			<Flex
				borderBottom={BORDER}
				h='4rem'
				justify='flex-end'
				alignItems='center'>
				<Show below='md'>
					<CloseButton onClick={onClose} />
				</Show>
			</Flex>
			<Flex
				flex={1}
				px={{ base: '1rem', md: '2.5rem' }}
				py={'3rem'}
				alignItems={{ md: 'center' }}
				w='full'>
				<Column
					justify={{ base: 'space-between', md: 'center' }}
					w='full'>
					<Column
						gap={6}
						w='full'>
						<SidebarNavItem
							href='/'
							id='01'
							name='Home'
						/>

						<SidebarNavItem
							href='/portfolio'
							id='02'
							name='Portfolio'
						/>

						<SidebarNavItem
							href='/team'
							id='03'
							name='Team'
						/>

						<SidebarNavItem
							href='/clinents'
							id='04'
							name='Clients'
						/>
					</Column>
					<Hide above='md'>
						<Column
							gap={8}
							alignItems='flex-end'>
							<Text
								fontSize='5rem'
								lineHeight='5rem'
								color='text.200'>
								00
							</Text>
							<Flex gap={8}>
								<Link href='https://docs.google.com/forms/d/e/1FAIpQLSeu0GxkeIBfjuAXlPALET-5S1Dxs6JASbV2CSjv2Yv4YA1vZQ/viewform?usp=sf_link'>
									<LinkButton label='CONTACT US' />
								</Link>
							</Flex>
						</Column>
					</Hide>
				</Column>
			</Flex>
			<Flex
				align='center'
				px='24px'
				fontSize='6px'
				fontWeight='300'
				letterSpacing='2px'
				display={{ base: 'none', md: 'flex' }}
				borderTop={{ md: BORDER }}
				h='4rem'>
				<Text
					fontSize='10px'
					color='text.300'>
					We Build Digital Experience
				</Text>
			</Flex>
		</Column>
	);
};

export default SidebarLeftPart;
