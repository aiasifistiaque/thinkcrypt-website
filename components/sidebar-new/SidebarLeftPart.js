import { Flex, Hide, Show, Text } from '@chakra-ui/react';
import SidebarNavItem from '../sections/sidebar/SidebarNavItem';
import LinkButton from '../util/buttons/LinkButton';
import Link from 'next/link';
import { styles } from '../../theme/styles';
import { CloseButton } from './SidebarRightPart';
import sidebarData from '@/data/sidebar.data';
import { Align, Column } from '../util';
import { useState } from 'react';

const BORDER = styles.border.dark;

const SidebarLeftPart = ({ onClose, ...props }) => {
	const [idx, setIdx] = useState('00');
	return (
		<Column
			flex={2}
			borderRight={BORDER}
			{...props}>
			<Align
				borderBottom={BORDER}
				h='4rem'
				justify='flex-end'>
				<Show below='md'>
					<CloseButton onClick={onClose} />
				</Show>
			</Align>
			<Flex {...mainCss}>
				<Column
					justify={{ base: 'space-between', md: 'center' }}
					w='full'>
					<Column
						gap={4}
						w='full'>
						{sidebarData?.map((item, i) => (
							<SidebarNavItem
								onMouseEnter={() => setIdx(item?.id)}
								href={item?.href}
								key={i}
								id={item?.id}
								name={item?.name}
							/>
						))}
					</Column>
					<Hide above='md'>
						<Column
							gap={8}
							alignItems='flex-end'>
							<Text {...indexCss}>{idx}</Text>
							<Flex gap={8}>
								<Link href='https://docs.google.com/forms/d/e/1FAIpQLSeu0GxkeIBfjuAXlPALET-5S1Dxs6JASbV2CSjv2Yv4YA1vZQ/viewform?usp=sf_link'>
									<LinkButton label='CONTACT US' />
								</Link>
							</Flex>
						</Column>
					</Hide>
				</Column>
			</Flex>
			<Flex {...bottomTextContainer}>
				<Text
					fontSize='10px'
					color='text.300'>
					We Build Digital Experience
				</Text>
			</Flex>
		</Column>
	);
};

const indexCss = {
	fontSize: '5rem',
	lineHeight: '5rem',
	color: 'text.200',
};

const bottomTextContainer = {
	align: 'center',
	px: '24px',
	fontSize: '6px',
	fontWeight: '300',
	letterSpacing: '2px',
	display: { base: 'none', md: 'flex' },
	borderTop: { md: BORDER },
	h: '4rem',
};

const mainCss = {
	flex: 1,
	px: { base: '1rem', md: '2.5rem' },
	py: '.5rem',
	alignItems: { md: 'center' },
	w: 'full',
};

export default SidebarLeftPart;
