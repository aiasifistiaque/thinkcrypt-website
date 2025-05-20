import { Text as ChakraText, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../../lib/constants';

/**Containers */

const Container = styled(Flex)`
	flex-direction: column;
	margin: 24px;
	letter-spacing: 0.5px;

	@media (min-width: ${breakpoints.desktop}) {
		margin: 24px;
	}
`;

const Row = styled(Flex)`
	flex-direction: column;
	@media (min-width: ${breakpoints.desktop}) {
		flex-direction: row;
	}
`;

const Left = styled(Flex)`
	flex: 1;
	align-self: flex-start;
	width: 100%;
	height: 100%;

	@media (min-width: ${breakpoints.desktop}) {
		align-self: center;
		padding-top: 64px;
	}
`;

const Right = styled(Flex)`
	flex-direction: column;
	flex: 2.25;
	padding-bottom: 24px;
	padding-left: 0;
	@media (min-width: ${breakpoints.desktop}) {
		padding-top: 24px;
		padding-left: 42px;
	}
`;

export const rightCss = {
	flexDir: 'column',
	flex: 2.25,
	paddingBottom: 6,
	paddingLeft: { base: 0, md: 6 },
	paddingTop: { base: 0, md: 6 },
};

/**Texts */

const Title = styled(ChakraText)`
	font-size: 2rem;
	font-family: 'Michroma', sans-serif;
	line-height: 1.3;

	margin-top: 0.5rem;
	font-weight: 900;
	text-transform: uppercase;
	@media (min-width: ${breakpoints.desktop}) {
		max-width: 700px;
	}

	@media (min-width: ${breakpoints.desktop}) {
		font-size: 3rem;
	}
`;

const Subtitle = styled(ChakraText)`
	font-size: 1.2rem;
	font-family: 'Michroma', sans-serif;
	font-weight: bold;

	line-height: 1.6;
	@media (min-width: ${breakpoints.desktop}) {
		max-width: 200px;
	}
`;

const Text = styled(ChakraText)`
	font-family: 'Michroma', sans-serif;

	line-height: 1.4;
	font-size: 1rem;

	@media (min-width: ${breakpoints.desktop}) {
		font-size: 1.4rem;
		line-height: 1.5;
	}
`;

export const SectionText = styled(ChakraText)`
	font-family: 'Michroma', sans-serif;
	font-size: 1rem;
	line-height: 1.4;

	@media (min-width: ${breakpoints.desktop}) {
		font-size: 1.4rem;
		line-height: 1.5;
	}
`;

export { Title, Subtitle, Text, Container, Row, Right, Left };
