import React from 'react';
import Column from '../util/Column';
import LinkButton from '../util/buttons/LinkButton';
import { Flex, Text } from '@chakra-ui/react';
import { CgCloseO } from 'react-icons/cg';
import Link from 'next/link';
import RobotoText from '../util/text/RobotoText';
import usePointerPosition from '../../hooks/usePointerPosition';



const SidebarRightPart = ({ onClose }) => {
	const { x, y } = usePointerPosition();

	const SpringValue = ({ children, pos }) => (
		<RobotoText fontSize='14px' fontWeight='400' letterSpacing='2px'>
			{`${pos}: ${children}`}
		</RobotoText>
	);

	return (
		<Column flex={1}>
			<Flex borderBottom='1px solid' h='4rem' px='1.5rem' justify='flex-end' alignItems='center'>
				<Flex
					onClick={onClose}
					borderLeft='1px solid #DEDEE0'
					minW='7rem'
					justify='flex-end'
					alignItems='center'
					h='full'
					cursor='pointer'>
					<CgCloseO size='2.25rem' />
				</Flex>
			</Flex>
			<Flex flex={1} justify='flex-end' align='center' px='1.5rem' py='2rem'>
				<Column>
					<SpringValue pos='X'>{x}</SpringValue>
					<SpringValue pos='Y'>{y}</SpringValue>
				</Column>
			</Flex>
			<Flex borderTop='1px solid' flex={4} px='2rem' py='2rem' justify='flex-end'>
				<Column gap='8rem' alignItems='flex-end' justify='space-between'>
					{/* <Link href='/contact-us'>
						<LinkButton label='CONTACT US' />
					</Link> */}
					<Flex></Flex>
					<Column gap={8} alignItems='flex-end'>
						<Text fontSize={{ md: '6rem', lg: '7rem' }} fontFamily='Roboto Flex' lineHeight='6rem'>
							01
						</Text>
						<Flex gap={8}>
							<Link href='https://www.linkedin.com/company/thinkcrypt-io/' target='_blank'>
								<LinkButton label='LINKEDIN' />
							</Link>
							<Link href='https://www.facebook.com/thinkcrypt/' target='_blank'>
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