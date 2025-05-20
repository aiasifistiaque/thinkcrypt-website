import React from 'react';
import styled from '@emotion/styled';
import { Badge, Button, Flex, Image, Link, Text, Wrap, Box } from '@chakra-ui/react';
import { styles } from '../../../theme/styles';

const Container = styled(Flex)`
	flex: 1;
	cursor: pointer;
	flex-direction: column;
`;

const BORDER = styles.border.light;
const CaseItem = ({ item }) => {
	return (
		<Container border={BORDER}>
			<Image
				{...imgCss}
				src={`${item?.image}`}
				alt={item?.name}
			/>
			<Flex {...cardCss}>
				<Text {...titleCss}>{item?.name}</Text>
				<Text {...catText}>{item?.category}</Text>
				<Text {...descCss}>{item?.shortDescription}</Text>
				<Wrap mb={4}>
					{item?.tags?.map((tag, i) => (
						<Badge
							{...badgeCss}
							key={i}>
							{tag}
						</Badge>
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

const catText = {
	fontFamily: 'Michroma',
	fontSize: '16px',
	color: '#737373',
};

const imgCss = {
	width: '100%',
	height: { base: '300px', md: '320px' },
	objectFit: 'cover',
	borderRadius: 'inherit',
	p: { base: '12px', md: '16px' },
};

const descCss = {
	fontFamily: 'Michroma',
	fontSize: '16px',
	noOfLines: 3,
	mb: 4,
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
