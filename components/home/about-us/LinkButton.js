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
					size='md'
					fontSize='14px'
					borderColor={colors?.text?.dark}
					color={colors?.textSecondary?.dark}
					textTransform='uppercase'
					variant='outline'
					borderRadius='99px'>
					{children}
				</Button>
			</Box>
		</Link>
	);
};

export default LinkButton;
