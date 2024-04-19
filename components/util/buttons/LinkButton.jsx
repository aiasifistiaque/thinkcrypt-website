
import { Button } from '@chakra-ui/react';
import React from 'react';
import { fonts } from '../../../lib/constants.js';

const LinkButton = ({ label, ...props }) => {
	return (
		<Button
			variant='link'
			fontFamily={ fonts.body }
			borderBottom='.5px solid'
			borderBottomColor='text.200'
			color='text.200'
			borderRadius='none'
			fontWeight='200'
			fontSize='.7rem'
			letterSpacing={'2px'}
			{...props}
		>
			{label}
		</Button>
	);
};

export default LinkButton;
