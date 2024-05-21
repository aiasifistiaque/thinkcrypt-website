import React from 'react';
import BootcampDetailsHeader from './BootcampDetailsHeader.jsx';
import { Stack } from '@chakra-ui/react';
import BootcampDetailsGrid from './BootcampDetailsGrid.jsx';

const BootcampDetailsSection = ({ bootcampDetails }) => {
	return (
		<Stack w='full' spacing={6}>
			<BootcampDetailsHeader bootcampDetails={bootcampDetails} />
			<BootcampDetailsGrid bootcampDetails={bootcampDetails} />
		</Stack>
	);
};

export default BootcampDetailsSection;
