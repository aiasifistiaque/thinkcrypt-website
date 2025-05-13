import React from 'react';
import { Box, Button, Container, Heading, Text, VStack, Image } from '@chakra-ui/react';
import Link from 'next/link';
import Header from '../util/Header/Header';

const Hero = ({
	title,
	subtitle,
	ctaText,
	ctaLink = '/contact',
	align = 'center',
	imageUrl,
	fullHeight = false,
}) => {
	return (
		<Box {...heroContainerStyle(fullHeight)}>
			{imageUrl && (
				<Box {...imageWrapperStyle}>
					<Image
						zIndex={999}
						src={imageUrl}
						alt='Hero background'
						{...imageStyle}
					/>
				</Box>
			)}

			<Container {...containerStyle}>
				<VStack {...vStackStyle(align)}>
					<Heading {...headingStyle(imageUrl)}>{title}</Heading>

					{subtitle && <Text {...subtitleStyle(imageUrl)}>{subtitle}</Text>}

					{ctaText && (
						<Box>
							<Button
								as={Link}
								href={ctaLink}
								{...ctaButtonStyle(imageUrl)}>
								{ctaText}
							</Button>
						</Box>
					)}
				</VStack>
			</Container>
		</Box>
	);
};

export default Hero;

// Style Constants
const heroContainerStyle = fullHeight => ({
	position: 'relative',
	w: 'full',
	minH: fullHeight ? '90vh' : 'auto',
	py: fullHeight ? 0 : { base: 20, md: 32 },
	display: 'flex',

	alignItems: 'center',
	zIndex: 100,
});

const imageWrapperStyle = {
	position: 'absolute',
	inset: 0,
	zIndex: 0,
	bg: 'black',
};

const imageStyle = {
	w: 'full',
	h: 'full',
	objectFit: 'cover',
	opacity: 0.5,
};

const containerStyle = {
	position: 'relative',
	zIndex: 10,
	pb: 16,
};

const vStackStyle = align => ({
	maxW: '4xl',
	mx: 'auto',
	textAlign: align === 'center' ? 'center' : 'left',
	spacing: 6,
});

const headingStyle = imageUrl => ({
	as: 'h1',
	textTransform: 'uppercase',
	letterSpacing: 'wider',
	color: imageUrl ? 'white' : 'primary',
});

const subtitleStyle = imageUrl => ({
	fontSize: { base: 'md', md: 'lg' },
	color: imageUrl ? 'whiteAlpha.900' : 'gray.600',
});

const ctaButtonStyle = imageUrl => ({
	size: 'lg',
	variant: imageUrl ? 'outline' : 'solid',
	borderColor: imageUrl ? 'white' : undefined,
	color: imageUrl ? 'white' : undefined,
	_hover: imageUrl ? { bg: 'white', color: 'black' } : undefined,
});
