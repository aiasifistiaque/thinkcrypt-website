import {
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Center,
	Flex,
	Heading,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react';
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
`;

const Overlay = styled(Center)`
	flex: 1;
	color: white;
	display: flex;
	flex-direction: column;
	height: 100%;
	transition: 0.4s ease-in;
	width: 100%;
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

const ProjectSmall = ({ item, index }) => {
	return (
		<>
			<AccordionItem
				borderTop='none'
				flexDir='column'
				borderRight={index % 2 === 0 ? BORDER : 'none'}
				borderBottom={BORDER}
				cursor='pointer'
				flex={1}>
				<AccordionButton
					border='none'
					textAlign='left'
					px={0}
					w='full'>
					<Flex
						w='full'
						p={{ base: '8px 24px', md: '16px 32px' }}>
						<Text
							noOfLines={1}
							lineHeight='1.4'
							fontSize='1.6rem'
							fontFamily='Bebas Neue'>
							{item?.name}: {item?.type}
						</Text>
					</Flex>
				</AccordionButton>

				<AccordionPanel w='full'>
					<Flex
						p='16px'
						w='full'>
						<Link
							href={item.href}
							isExternal
							w='full'
							_hover={{ textDecoration: 'none' }}>
							<Background
								bg={`url(${item.src})`}
								width='full'>
								<Overlay>
									<TextBox>
										<TextOverlay
											p={3}
											spacing={0.5}>
											<Heading
												fontFamily='Suisse'
												size='lg'>
												{item.name}
											</Heading>
											<Heading
												fontFamily='Suisse'
												size='xs'>
												{item.type}
											</Heading>
										</TextOverlay>
									</TextBox>
								</Overlay>
							</Background>
						</Link>
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</>
	);
};

export default ProjectSmall;
