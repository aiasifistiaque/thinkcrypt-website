import React from 'react';
import BorderContainer from '../../util/container/BorderContainer.js';
import HeaderText from '../../util/dynamic-text/HeaderText.jsx';
import { Stack } from '@chakra-ui/react';
import MichromaText from '../../util/dynamic-text/MichromaText.jsx';

const BootcampDetailsHeader = ({ bootcampDetails }) => {
	return (
		<BorderContainer>
			<Stack
				px={{ base: '16px', md: '10px' }}
				py={{ base: 2, md: 8 }}
				spacing={0}
			>
				<HeaderText>{bootcampDetails?.heading}</HeaderText>
				<MichromaText fontSize={{ base: '1rem', md: '1.25rem' }}>
					{bootcampDetails?.description}
				</MichromaText>
			</Stack>
		</BorderContainer>
	);
};

export default BootcampDetailsHeader;
