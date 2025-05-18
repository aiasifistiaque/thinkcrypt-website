import { Button, Center, Flex, Skeleton as SK, SkeletonText, Text } from '@chakra-ui/react';
import Column from '../../util/Home/Column';
import { fonts } from '../../lib/constants';
import Link from 'next/link';

const SolutionCard = ({ icon, title, description, btnText, href }) => {
	return (
		<Column {...itemCss}>
			<Center {...iconContainer}>
				<Flex {...iconCss}>{icon}</Flex>
			</Center>
			<Text {...titleCss}>{title}</Text>
			<Text {...bodyTextCss}>{description}</Text>
			<Center mt={2}>
				<Link href={href || '#'}>
					<Button {...learnMoreBtnCss}>{btnText || 'LEARN MORE'}</Button>
				</Link>
			</Center>
		</Column>
	);
};

export const Skeleton = () => (
	<Column {...itemCss}>
		<SK>
			<Text
				{...titleCss}
				fontFamily={fonts.heading}>
				NAME OF ITEM
			</Text>
		</SK>
		<SkeletonText noOfLines={4} />
	</Column>
);

const itemCss = {
	p: 8,
	gap: 4,
	border: '1px solid #e6e6e6',
	bgColor: 'white',
	justify: 'center',
};

const iconContainer = {
	w: 'full',
	pb: 2,
};

const iconCss = {
	bg: 'whitesmoke',
	p: 4,
	borderRadius: 'full',
};

const learnMoreBtnCss = {
	bg: 'transparent',
	color: 'black',
	borderColor: 'black',
	border: '1px solid',
	fontSize: '12px',
	borderRadius: 'none',
	fontFamily: 'Michroma',
	_hover: { bg: 'transparent', color: 'black' },
};

const titleCss = {
	fontSize: { base: '16px', md: '22px' },
	fontWeight: '900',
	fontFamily: fonts.heading,
	textTransform: 'uppercase',
	textAlign: 'center',
	lineHeight: 1.4,
};

const bodyTextCss = {
	color: '#737373',
	fontFamily: 'Michroma',
	fontSize: '14px',
	textTransform: 'capitalize',
	fontSize: '.9rem',
	lineHeight: 1.5,
	fontWeight: '500',
	textAlign: 'center',
};

export default SolutionCard;
