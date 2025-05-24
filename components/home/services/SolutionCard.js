import { Button, Center, color, Flex, Skeleton as SK, SkeletonText, Text } from '@chakra-ui/react';
import Column from '../../util/Home/Column';
import { fonts } from '../../lib/constants';
import Link from 'next/link';
import { colors } from '../../../theme/styles';

const SolutionCard = ({ icon, title, description, btnText, href, colorMode }) => {
	const bg = colorMode === 'dark' ? colors?.card?.dark : colors?.card?.light;
	const textColor = colorMode === 'dark' ? colors?.text?.dark : colors?.text?.light;
	const secondaryColor =
		colorMode === 'dark' ? colors?.textSecondary?.dark : colors?.textSecondary?.light;
	return (
		<Column
			{...itemCss}
			bg={bg}>
			<Flex {...iconContainer}>
				<Flex {...iconCss}>{icon}</Flex>
				<Text
					{...titleCss}
					color={textColor}>
					{title}
				</Text>
			</Flex>

			<Text
				{...bodyTextCss}
				color={secondaryColor}>
				{description}
			</Text>
			<Flex
				w='full'
				mt={1}
				align='flex-end'
				justify='flex-end'
				flex={1}>
				<Link href={href || '#'}>
					<Button
						w='full'
						{...learnMoreBtnCss}
						borderColor={secondaryColor}
						color={textColor}>
						{btnText || 'LEARN MORE'}
					</Button>
				</Link>
			</Flex>
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
	pb: 6,
	gap: 4,
	// border: '1px solid',
	// borderColor: '#333',
	borderRadius: '12px',
	bgColor: colors?.card?.dark,
	justify: 'center',
};

const iconContainer = {
	w: 'full',
	pb: 2,
	gap: 4,
	align: 'center',
};

const iconCss = {
	bg: colors?.background?.light,
	p: 2,
	borderRadius: 'full',
	w: '60px',
	h: '60px',
	align: 'center',
	justify: 'center',
};

const learnMoreBtnCss = {
	bg: 'transparent',
	color: colors?.text?.dark,
	border: '1px solid',
	fontSize: '14px',
	textTransform: 'uppercase',
	borderColor: colors?.border?.dark,
	borderRadius: 'none',
	borderRight: 'none',
	borderLeft: 'none',
	fontFamily: fonts?.primary,
	_hover: { bg: 'transparent', color: colors?.text?.dark, borderColor: colors?.text?.dark },
};

const titleCss = {
	fontSize: { base: '1.5rem', md: '3rem' },
	fontWeight: '900',
	fontFamily: fonts.title,
	textTransform: 'uppercase',
	// textAlign: 'center',
	lineHeight: 1,
	color: colors?.text?.dark,
};

const bodyTextCss = {
	color: colors?.textSecondary?.dark,
	fontFamily: fonts.primary,
	fontSize: '14px',
	textTransform: 'uppercase',
	fontSize: '.9rem',
	lineHeight: 1.4,
	fontWeight: '500',
	// textAlign: 'center',
};

export default SolutionCard;
