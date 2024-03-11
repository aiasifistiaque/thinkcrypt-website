import { Text as ChakraText, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../../lib/constants';

/**Containers */

const Container = styled(Flex)`
	flex-direction: column;
	margin: 24px;
	letter-spacing: 0.5px;

	@media (min-width: ${breakpoints.desktop}) {
		margin: 128px;
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

	@media (min-width: ${breakpoints.desktop}) {
		align-self: center;
		margin-left: 32px;
	}
`;

const Right = styled(Flex)`
	flex-direction: column;
	flex: 2.25;
`;

/**Texts */

const Title = styled(ChakraText)`
	font-size: 2rem;
	font-family: 'Poppins', sans-serif;
	line-height: 2.5rem;
	letter-spacing: 2px;
	margin-top: 0.5rem;
	font-weight: 700;
	@media (min-width: ${breakpoints.desktop}) {
		max-width: 700px;
	}

	@media (min-width: ${breakpoints.desktop}) {
		font-size: 3.75rem;
		line-height: 5rem;
	}
`;

const Subtitle = styled(ChakraText)`
	font-size: 1.2rem;
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	max-width: 60vw;
	line-height: 1.6;
	@media (min-width: ${breakpoints.desktop}) {
		max-width: 200px;
	}
`;

const Text = styled(ChakraText)`
	font-family: 'Poppins', sans-serif;
	font-size: 1rem;
	letter-spacing: 1px;
	line-height: 1.6;

	@media (min-width: ${breakpoints.desktop}) {
		letter-spacing: 2px;
		line-height: 1.8;
		max-width: 650px;
	}
`;

export { Title, Subtitle, Text, Container, Row, Right, Left };
