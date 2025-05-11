import { Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { boxShadow, boxShadowHover, breakpoints } from '../../lib/constants';
import { styles } from '../../../theme/styles';

const radius = '0px';

const Background = styled(Flex)`
	flex: 1;
	// border: 6px solid #060508;
	background-position: top center;
	// border-radius: 8px;
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
		min-height: 400px;

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
			href={item?.liveUrl}
			isExternal
			_hover={{ textDecoration: 'none' }}>
			<Flex
				flexDir='column'
				borderRight={index % 2 === 0 ? BORDER : 'none'}
				borderBottom={BORDER}
				cursor='pointer'
				flex={1}>
				<Flex
					flexDir='column'
					borderBottom={BORDER}
					p={{ base: '8px 16px', md: '16px 16px' }}>
					<Text
						noOfLines={1}
						lineHeight='1.4'
						fontSize='1.8rem'
						fontWeight='800'
						fontFamily='Michroma'>
						{item?.name}: {item?.type}
					</Text>
					<Text
						noOfLines={1}
						lineHeight='1.4'
						fontSize='1rem'
						fontWeight='400'
						fontFamily='Michroma'>
						{item?.category}
					</Text>
				</Flex>
				<Flex p={{ base: 4, md: 0 }}>
					<Background bg={`url(${item?.image})`}>
						<Overlay>
							<TextBox>
								<TextOverlay
									p={3}
									spacing={0.5}>
									<Heading
										fontFamily='Michroma'
										size='lg'>
										{item?.name}
									</Heading>
									<Heading
										fontFamily='Michroma'
										size='xs'>
										{item?.category}
									</Heading>
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
