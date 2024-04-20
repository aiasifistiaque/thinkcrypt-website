import React from 'react';
import { Text } from '@chakra-ui/react';
import moment from 'moment-timezone';

const Time = () => {
	return (
		<Text
			fontSize='.7rem'
			fontWeight='500'
			color='#fefefe'
			lineHeight='1.25rem'
			maxW={{ base: '100px', md: 'full' }}>
			{moment().tz('Asia/Dhaka').format('HH:mm [GMT]')}
		</Text>
	);
};

export default Time;
