import React from 'react';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { colors } from '../../../theme/styles';
import { fonts } from '../../../lib/constants';

const ViewMoreButton = ({ theme, children, href, ink, ...props }) => {
	return (
		<Link href={typeof href === 'string' ? href : '#'}>
			<Button
				{...btnCss(theme)}
				{...props}>
				{children}
			</Button>
		</Link>
	);
};

const btnCss = theme => {
	return {
		bg: 'transparent',
		border: '1px solid',
		fontSize: { base: '1.5rem', md: '3rem' },
		lineHeight: 1,
		py: 8,
		pt: 9,
		mt: 4,
		color: theme == 'dark' ? colors?.text?.dark : colors?.text?.light,
		borderRadius: 'none',
		borderRight: 'none',
		borderLeft: 'none',
		fontFamily: fonts?.title,
		borderColor: theme === 'dark' ? colors?.card?.dark : colors?.card?.light,
		_hover: {
			bg: 'transparent',
			color: theme == 'dark' ? colors?.text?.dark : colors?.text?.light,
			borderColor: theme == 'dark' ? colors?.text?.dark : colors?.text?.light,
		},
	};
};

export default ViewMoreButton;
