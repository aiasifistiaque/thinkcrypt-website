import React from 'react';
import BorderContainer from '../../util/container/BorderContainer.js';
import { Accordion, Box, Flex, Grid, Image } from '@chakra-ui/react';
import FaqAccordion from './FaqAccordion.jsx';
import Column from '../../util/Column.jsx';
import HeaderText from '../../util/dynamic-text/HeaderText.jsx';

const FaqSection = ({ data }) => {
	return (
		<BorderContainer>
			<Grid templateColumns={{ base: '1fr', md: '1fr' }}>
				{/* <Box h='full'>
					<Image h='100%' w='100%' src={data?.faq?.image} objectFit='cover' />
				</Box> */}
				<Flex
					flex={1}
					direction='column'
					px={{ base: 6, md: 6 }}
					pt={{ base: 4, md: 12 }}
					pb={{ base: 11, md: '72px' }}
				>
					<HeaderText>Faq</HeaderText>
					<Column gap='0.825rem'>
						<Accordion defaultIndex={0}>
							{data?.faq?.questions?.map((content, index) => (
								<FaqAccordion key={index} data={content} />
							))}
						</Accordion>
					</Column>
				</Flex>
			</Grid>
		</BorderContainer>
	);
};

export default FaqSection;
