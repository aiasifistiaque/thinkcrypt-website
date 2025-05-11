import React from 'react';
import BorderContainer from '../../util/container/BorderContainer';
import Column from '../../util/Column';
import HeaderText from '../../util/dynamic-text/HeaderText';
import { Box, Grid, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import BodyText from '../../util/dynamic-text/BodyText';
import MichromaText from '../../util/dynamic-text/MichromaText';

const EligibilitySection = ({ data }) => {
	return (
		<BorderContainer>
			<Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
				<Column px={3} py={4} order={{ base: 2, md: 1 }}>
					<HeaderText>{data?.heading}</HeaderText>
					<UnorderedList px={4} spacing={4}>
						{data?.items?.map((item, index) => (
							<ListItem key={index}>
								<MichromaText fontSize={{ base: '1rem', md: '1.125rem' }}>
									{item}
								</MichromaText>
							</ListItem>
						))}
					</UnorderedList>
				</Column>
				<Box
					h={{ base: 'full', lg: '250px' }}
					w='full'
					order={{ base: 1, md: 2 }}
				>
					<Image
						src={data?.photo}
						w='100%'
						h='100%'
						objectFit='cover'
						alt={data?.heading}
					/>
				</Box>
			</Grid>
		</BorderContainer>
	);
};

export default EligibilitySection;
