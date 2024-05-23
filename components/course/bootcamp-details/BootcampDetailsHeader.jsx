import React from 'react';
import BorderContainer from '../../util/container/BorderContainer.js';
import HeaderText from '../../util/dynamic-text/HeaderText.jsx';
import { Stack } from '@chakra-ui/react';
import SuisseText from '../../util/dynamic-text/SuisseText.jsx';

const BootcampDetailsHeader = ({ bootcampDetails }) => {
	return (
		<BorderContainer>
			<Stack
				px={{ base: '16px', md: '10px' }}
				py={{ base: 2, md: 8 }}
				spacing={0}
			>
				<HeaderText>{bootcampDetails?.heading}</HeaderText>
				<SuisseText fontSize={{ base: '1rem', md: '1.25rem' }}>
					{bootcampDetails?.description}
				</SuisseText>
			</Stack>
		</BorderContainer>
	);
};

export default BootcampDetailsHeader;
