import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import MarqueeComponent from 'react-fast-marquee';
import { colors } from '../../../theme/styles';
import { fonts } from '../../../lib/constants';

const CONTENT = `We help startups build powerful digital products fast. | We turn your ideas into real, working software. | We create solutions that grow with your business. | Partner with us to innovate, scale, and succeed. | Delivering tech that drives measurable growth. | Your trusted partner for lasting digital impact.`;

const Marquee = () => {
	return (
		<Flex
			align='flex-end'
			justify='flex-end'
			flex={1}>
			<MarqueeComponent>
				<Text
					textTransform='uppercase'
					fontFamily={fonts?.primary}
					color={colors?.text?.dark}
					letterSpacing='1px'
					fontSize='.8rem'>
					{CONTENT}
				</Text>
			</MarqueeComponent>
		</Flex>
	);
};

export default Marquee;
