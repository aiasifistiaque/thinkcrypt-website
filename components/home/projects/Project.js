import { Center, Flex, Heading, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { boxShadow, boxShadowHover, breakpoints } from '../../lib/constants';

const radius = '4px';

const Background = styled(Flex)`
	flex: 1;
	background-position: top center;
	background-size: cover;
	width: 100%;
	height: 200px;
	background-repeat: no-repeat;
	box-shadow: ${boxShadow};
	transition: 0.3s;
	@media (min-width: ${breakpoints.tab}) {
		background-size: cover;
		max-height: 100px;
	}
	@media (min-width: ${breakpoints.desktop}) {
		min-height: 320px;
		border-radius: ${radius};

		&:hover {
			box-shadow: ${boxShadowHover};
			transform: scale(1.2);
		}
	}
`;

const Overlay = styled(Center)`
	border-radius: 2px;
	flex: 1;
	color: white;
	display: flex;
	flex-direction: column;
	height: 100%;
	transition: 0.4s ease-in;
`;

const TextBox = styled(Flex)`
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
	width: 100%;
	height: 40px;
`;

const TextOverlay = styled(Stack)`
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.6) 75.79%
	);

	@media (min-width: ${breakpoints.desktop}) {
		border-bottom-left-radius: ${radius};
		border-bottom-right-radius: ${radius};
	}
`;

const Project = ({ item }) => {
	return (
		<Link href={item.href} isExternal _hover={{ textDecoration: 'none' }}>
			<Flex cursor='pointer' flex={1}>
				<Background bg={`url(${item.src})`}>
					<Overlay>
						<TextBox>
							<TextOverlay p={3} spacing={0.5}>
								<Heading size='lg'>{item.name}</Heading>
								<Heading size='xs'>{item.type}</Heading>
							</TextOverlay>
						</TextBox>
					</Overlay>
				</Background>
			</Flex>
		</Link>
	);
};

export default Project;
