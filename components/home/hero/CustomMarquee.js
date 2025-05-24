import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import MarqueeComponent from 'react-fast-marquee';
import { colors } from '../../../theme/styles';
import { fonts } from '../../../lib/constants';

const CONTENT = `We help startups build powerful digital products fast. | We turn your ideas into real, working software. | We create solutions that grow with your business. | Partner with us to innovate, scale, and succeed. | Delivering tech that drives measurable growth. | Your trusted partner for lasting digital impact.`;

const CustomMarquee = ({ children }) => {
	return (
		<Flex flex={1}>
			<MarqueeComponent speed={50}>
				<Flex
					gap={{ base: 12, md: 20 }}
					pr={{ base: 12, md: 20 }}>
					{children}
				</Flex>
			</MarqueeComponent>
		</Flex>
	);
};

export default CustomMarquee;
