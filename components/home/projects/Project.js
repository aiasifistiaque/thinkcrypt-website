import { Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { boxShadow, boxShadowHover, breakpoints } from '../../lib/constants';
import { styles } from '../../../theme/styles';

const radius = '0px';

const Background = styled(Flex)`
	flex: 1;
	border: 18px solid #060508;
	background-position: top center;
	border-radius: 16px;
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
		min-height: 360px;

		&:hover {
			box-shadow: ${boxShadowHover};
		}
	}
`;

const Overlay = styled(Center)`
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
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 75.79%);

	@media (min-width: ${breakpoints.desktop}) {
		border-bottom-left-radius: ${radius};
		border-bottom-right-radius: ${radius};
	}
`;

const BORDER = styles.border.light;

const Project = ({ item, index }) => {
	return (
		<Link
			href={item.href}
			isExternal
			_hover={{ textDecoration: 'none' }}>
			<Flex
				flexDir='column'
				borderRight={index % 2 === 0 ? BORDER : 'none'}
				borderBottom={BORDER}
				cursor='pointer'
				flex={1}>
				<Flex
					align='center'
					borderBottom={BORDER}
					p={{ base: '8px 24px', md: '16px 32px' }}>
					<Text
						noOfLines={1}
						lineHeight='1.4'
						fontSize='2rem'
						fontFamily='Bebas Neue'>
						{item?.name}: {item?.type}
					</Text>
				</Flex>
				<Flex p={{ base: 6, md: 8 }}>
					<Background bg={`url(${item.src})`}>
						<Overlay>
							<TextBox>
								<TextOverlay
									p={3}
									spacing={0.5}>
									<Heading size='lg'>{item.name}</Heading>
									<Heading size='xs'>{item.type}</Heading>
								</TextOverlay>
							</TextBox>
						</Overlay>
					</Background>
				</Flex>
			</Flex>
		</Link>
	);
};

export default Project;
