
import { Button } from '@chakra-ui/react';
import React from 'react';
import { fonts } from '../../../lib/constants.js';

const LinkButton = ({ label, ...props }) => {
	return (
		<Button
			variant='link'
			fontFamily={fonts.body}
			textDecoration={'underline'}
			color='black'
			fontWeight='400'
			{...props}
		>
			{label}
		</Button>
	);
};

export default LinkButton;
