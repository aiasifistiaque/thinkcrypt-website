import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Badge, Button, Flex, Image, Link, Text, Wrap, Box } from '@chakra-ui/react';
import { colors, styles } from '../../../theme/styles';
import { fonts } from '../../../lib/constants';
import NextLink from 'next/link';
import useIsMobile from '../../../hooks/useIsMobile';
import CardBadge from './CardBadge';
import { usePostMutation } from '../../../store';

const Container = styled(Flex)`
	flex: 1;
	cursor: pointer;
	flex-direction: column;
	border-radius: 12px;
`;

const IMAGE_HEIGHT = { md: '240px', '2xl': '360px' };

const CaseItem = ({ item, colorMode }) => {
	const BORDER = colorMode == 'dark' ? styles.border.dark : styles.border.light;
	const textColor = colorMode == 'dark' ? colors.text.dark : colors.text.light;
	const cardBg = colorMode == 'dark' ? colors.card.dark : colors.card.light;
	const blue = colorMode == 'dark' ? colors.text.blue : colors.text.darkBlue;
	const bg = colorMode == 'dark' ? colors.background.dark : colors.background.light;

	const isMobile = useIsMobile();

	const videoRef = useRef(null);

	const [trigger, result] = usePostMutation();

	const handleClick = () => {
		trigger({
			elementType: 'card',
			elementName: 'Project Item Card',
			elementId: item?.name,
			elementSlug: `project-card-${item?._id}`,
			elementText: 'View Project' + item?.name,
			elementHref: item?.showCaseStudy
				? `/case-study/${item?._id}`
				: item?.liveUrl
				? item?.liveUrl
				: '#',
			clickType: 'click',
		});
	};

	useEffect(() => {
		if (isMobile) {
			// If on mobile, pause the video and reset it
			videoRef.current?.play();
		}
	}, [videoRef, isMobile]);

	const handleMouseEnter = () => {
		if (!item?.isVideoEnabled || !item?.videoURL) return; // Skip if video is not enabled or URL is not provided
		if (isMobile) return; // Skip video play on mobile
		videoRef.current?.play();

		// Play the video when mouse enters
	};

	const handleMouseLeave = () => {
		if (!item?.isVideoEnabled || !item?.videoURL) return;
		if (isMobile) return; // Skip video pause on mobile
		// Pause the video when mouse leaves
		videoRef.current?.pause();
		videoRef.current.currentTime = 0;
	};

	return (
		<Link
			_hover={{
				textDecoration: 'none',
			}}
			onClick={handleClick}
			isExternal={item?.showCaseStudy ? false : true}
			href={item?.showCaseStudy ? `/case-study/${item?._id}` : item?.liveUrl ? item?.liveUrl : '#'}>
			<Container
				bg={cardBg}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				{item?.isVideoEnabled && item?.videoURL ? (
					<Box
						w='full'
						h={IMAGE_HEIGHT}
						bg='#133AB9'
						overflow='hidden'
						borderTopRadius='inherit'>
						<video
							poster={item?.thumbnail || undefined}
							ref={videoRef}
							muted
							playsInline
							loop
							style={{ width: '100%', height: '100%', objectFit: 'contain' }}>
							<source
								src={item?.videoURL}
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
					</Box>
				) : (
					<Image
						{...imgCss}
						src={`${item?.image}`}
						alt={item?.name}
					/>
				)}
				<Flex
					{...cardCss}
					borderTop={BORDER}
					flex={1}>
					<Text
						{...catText}
						color={blue}>
						{item?.category}
					</Text>
					<Text
						{...titleCss}
						color={textColor}>
						{item?.name}
					</Text>

					<Text
						{...descCss}
						color={textColor}>
						{item?.shortDescription}
					</Text>
					<Wrap spacing={1}>
						{item?.tags?.map((tag, i) => (
							<CardBadge key={i}>{tag}</CardBadge>
						))}
					</Wrap>
				</Flex>
			</Container>
		</Link>
	);
};

const catText = {
	fontFamily: fonts?.primary,
	fontSize: '16px',
	textTransform: 'uppercase',
	color: colors?.text?.blue,
};

const imgCss = {
	width: '100%',
	h: IMAGE_HEIGHT,
	objectFit: 'cover',
	borderRadius: '0',
	borderTopRadius: '12px',
	// p: { base: '12px', md: '16px' },
};

const descCss = {
	fontFamily: fonts?.primary,
	fontSize: '15px',
	textTransform: 'uppercase',
	noOfLines: 3,
	lineHeight: '1.4',
	mb: 4,
};

const btnCss = {
	borderRadius: 'full',
	color: 'white',
	size: 'sm',
	fontFamily: fonts?.primary,
	textTransform: 'uppercase',
	fontSize: '14px',
	bg: 'transparent',
};

const cardCss = {
	flexDir: 'column',

	p: { base: '12px', md: '16px' },
	gap: 2,
};

const titleCss = {
	lineHeight: 1,
	fontFamily: fonts?.title,
	fontSize: { base: '20px', md: '44px' },
	fontWeight: '600',
	noOfLines: 2,
	textTransform: 'uppercase',
};

const badgeCss = {
	fontFamily: fonts?.primary,
	fontSize: '10px',
	fontWeight: '500',
	size: 'sm',
	bg: '#f2f2f2',
	textTransform: 'uppercase',
	px: 3,
	borderRadius: '99px',
	py: 1,
	fontSize: '12px',
};

export default CaseItem;
