import { Stack } from '@chakra-ui/react';
import React from 'react';
import HeaderText from '../../util/dynamic-text/HeaderText.jsx';
import SuisseText from '../../util/dynamic-text/SuisseText.jsx';
import { BORDER } from '../../../lib/constants.js';

const BootcampEachGridItem = ({ item }) => {
	return (
		<Stack
			w='full'
			h='full'
			spacing={0}
			px={{ base: 2, md: 6 }}
			py={{ base: 4, md: 6 }}
			border={BORDER}
			justify={'center'}
		>
			<HeaderText fontSize={{ base: '1.5rem', md: '2.5rem' }}>
				{item.title}
			</HeaderText>
			<SuisseText fontSize={{ base: '0.75rem', md: '1rem' }}>
				{item?.subline}
			</SuisseText>
		</Stack>
	);
};

export default BootcampEachGridItem;
