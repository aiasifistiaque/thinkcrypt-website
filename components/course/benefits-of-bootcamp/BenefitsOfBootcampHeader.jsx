import React from 'react';
import BorderContainer from '../../util/container/BorderContainer.js';
import { Stack } from '@chakra-ui/react';
import HeaderText from '../../util/dynamic-text/HeaderText.jsx';
import SuisseText from '../../util/dynamic-text/SuisseText.jsx';

const BenefitsOfBootcampHeader = ({ benefitsOfBootcamp }) => {
	return (
		<BorderContainer>
			<Stack
				px={{ base: '16px', md: '10px' }}
				py={{ base: 2, md: 8 }}
				spacing={0}
			>
				<HeaderText>{benefitsOfBootcamp?.heading}</HeaderText>
				<SuisseText>{benefitsOfBootcamp?.description}</SuisseText>
			</Stack>
		</BorderContainer>
	);
};

export default BenefitsOfBootcampHeader;
