import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { colors } from '../../../theme/styles';

const LinkButton = ({ children, href }) => {
	return (
		<Link href={href}>
			<Box>
				<Button
					_hover={{
						bg: 'transparent',
						color: colors?.text?.dark,
					}}
					p={6}
					borderColor={colors?.text?.dark}
					color={colors?.textSecondary?.dark}
					textTransform='uppercase'
					variant='outline'
					borderRadius='none'>
					{children}
				</Button>
			</Box>
		</Link>
	);
};

export default LinkButton;
