import React from 'react';
import styled from '@emotion/styled';
import { Badge, Button, Flex, Image, Link, Text, Wrap, Box } from '@chakra-ui/react';
import { breakpoints } from '../../lib/constants';
import { styles } from '../../../theme/styles';
import NextLink from 'next/link';

const lorem =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Container = styled(Flex)`
	flex: 1;
	cursor: pointer;
	flex-direction: column;
`;

const ImageBox = styled(Image)`
	img {
		width: 100%;
		height: 300px;
		object-fit: contain;
		border-radius: inherit;

		@media (min-width: ${breakpoints.desktop}) {
			width: 500px;
			height: 350px;
			object-fit: contain;
		}
	}
`;

const tags = [
	'ecommerce',
	'healthcare',
	'education',
	'finance',
	'real estate',
	'travel',
	'food & beverage',
	'entertainment',
];

const BORDER = styles.border.light;
const CaseItem = ({ item }) => {
	return (
		<Container border={BORDER}>
			<ImageBox
				p={{ base: '12px', md: '16px' }}
				src={`${item?.image}`}
				alt={item?.name}
			/>
			<Flex {...cardCss}>
				<Text {...titleCss}>{item?.name}</Text>
				<Text
					fontFamily='Michroma'
					fontSize='16px'
					color='#737373'>
					{item?.category}
				</Text>
				<Text
					fontFamily='Michroma'
					fontSize='16px'
					noOfLines={3}
					mb={4}>
					{item?.shortDescription || lorem}
				</Text>
				<Wrap mb={4}>
					{tags?.map((item, i) => (
						<Badge {...badgeCss}>{item}</Badge>
					))}
				</Wrap>
				<Link
					_hover={{
						textDecoration: 'none',
					}}
					isExternal
					href={
						item?.showCaseStudy ? `/case-study/${item?._id}` : item?.liveUrl ? item?.liveUrl : '#'
					}>
					<Box>
						<Button {...btnCss}>{item?.showCaseStudy ? 'View case Study' : 'Visit Project'}</Button>
					</Box>
				</Link>
			</Flex>
		</Container>
	);
};

const btnCss = {
	bg: 'black',
	borderRadius: 'none',
	color: 'white',
	fontFamily: 'Michroma',
	textTransform: 'uppercase',
};

const cardCss = {
	flexDir: 'column',
	p: { base: '12px', md: '16px' },
	gap: 2,
	borderTop: BORDER,
};

const titleCss = {
	lineHeight: 1.2,
	fontFamily: 'Michroma',
	fontSize: '24px',
	fontWeight: '600',
	noOfLines: 2,
	textTransform: 'uppercase',
};

const badgeCss = {
	fontFamily: 'Michroma',
	fontSize: '12px',
	fontWeight: '500',
	p: 2,
	bg: '#f2f2f2',
	textTransform: 'uppercase',
};

export default CaseItem;
