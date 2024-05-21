import { Button } from '@chakra-ui/react';
import React from 'react';
import { fonts } from '../../../lib/constants';

const SquareButton = ({ variant, children, ...props }) => {
	return (
		<>
			{!variant && (
				<Button
					w='full'
					variant={'outline'}
					borderRadius={0}
					color={'black'}
					fontFamily={fonts.body}
					fontWeight={'400'}
					fontSize={{ base: '0.875rem', md: '1rem', lg: '1.5rem' }}
					size={{ base: 'sm', md: 'lg' }}
					{...props}
				>
					{children && children}
				</Button>
			)}
			{variant === 'solid' && (
				<Button
					w='full'
					borderRadius={0}
					bg={'black'}
					color={'white'}
					fontFamily={fonts.body}
					fontWeight={'400'}
					fontSize={{ base: '0.875rem', md: '1rem', lg: '1.5rem' }}
					size={{ base: 'sm', md: 'lg' }}
					{...props}
				>
					{children && children}
				</Button>
			)}
		</>
	);
};

export default SquareButton;
