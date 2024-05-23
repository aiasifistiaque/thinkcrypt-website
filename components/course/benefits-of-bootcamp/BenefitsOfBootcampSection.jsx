import { Stack } from '@chakra-ui/react';
import React from 'react';
import BenefitsOfBootcampHeader from './BenefitsOfBootcampHeader.jsx';
import BenefitsOfBootcampMain from './BenefitsOfBootcampMain.jsx';

const BenefitsOfBootcampSection = ({ benefitsOfBootcamp }) => {
	return (
		<Stack w='full' spacing={6}>
			<BenefitsOfBootcampHeader benefitsOfBootcamp={benefitsOfBootcamp} />
			<BenefitsOfBootcampMain benefitsOfBootcamp={benefitsOfBootcamp} />
		</Stack>
	);
};

export default BenefitsOfBootcampSection;
