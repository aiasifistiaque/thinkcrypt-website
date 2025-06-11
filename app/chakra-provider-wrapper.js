'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { colors as clrs } from '../theme/colors.theme.js';
import ClientWrapper from './client-wrapper';

const colors = {
	pink: { 200: '#FB2E7E' },
	facebook: { 200: '#1B74E4' },
	gray: { 200: '#7A86A1' },
	...clrs,
};

const components = {
	Heading: { baseStyle: { fontFamily: 'Michroma, sans-serif' } },
	Text: { baseStyle: { color: '#000', fontFamily: 'Michroma' } },
	Checkbox: { baseStyle: { color: '#7A86A1' } },
};

const chakraTheme = extendTheme({ colors, components });

export default function ChakraProviderWrapper({ children }) {
	return (
		<Provider store={store}>
			<ChakraProvider theme={chakraTheme}>
				<ClientWrapper>{children}</ClientWrapper>
			</ChakraProvider>
		</Provider>
	);
}
