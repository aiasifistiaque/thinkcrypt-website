import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import MarqueeComponent from 'react-fast-marquee';

const CONTENT = `Unleash the Future: Building Bold, Brilliant Software That Transforms Ideas into
				Reality. | Where Innovation Meets Excellence: Join Us on the Journey to Redefine
				What's Possible. | Experience Cutting-Edge Development: Your Dreams, Engineered by Our
				Expertise. | Step Into Tomorrow with Software Crafted to Elevate Your Business Beyond
				the Horizon.`;

const Marquee = () => {
	return (
		<Flex
			align='flex-end'
			justify='flex-end'
			py={2}
			flex={1}>
			<MarqueeComponent>
				<Text
					letterSpacing='2px'
					fontFamily='Suisse'
					fontSize='.9rem'>
					{CONTENT}
				</Text>
			</MarqueeComponent>
		</Flex>
	);
};

export default Marquee;
