import React from 'react';
import BorderContainer from '../../util/container/BorderContainer.js';
import { Box, Flex, Grid, Image, Stack } from '@chakra-ui/react';
import EachBenefitsOfBootcamp from './EachBenefitsOfBootcamp.jsx';
import { BORDER } from '../../../lib/constants.js';

const BenefitsOfBootcampMain = ({ benefitsOfBootcamp }) => {
	return (
		<BorderContainer>
			<Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
				<Stack
					w='full'
					py={6}
					pl={2}
					pr={10}
					borderRight={BORDER}
					spacing={6}
					order={{ base: 2, md: 1 }}
				>
					{benefitsOfBootcamp?.items?.map((item, idx) => {
						return <EachBenefitsOfBootcamp key={idx} item={item} />;
					})}
				</Stack>
				<Flex
					flex={1}
					h={{ base: '487px', md: '606px' }}
					order={{ base: 1, md: 2 }}
					px={{ base: 4, md: 6 }}
				>
					<Image
						src={benefitsOfBootcamp?.photo}
						alt={benefitsOfBootcamp?.heading}
						objectFit='cover'
					/>
				</Flex>
			</Grid>
		</BorderContainer>
	);
};

export default BenefitsOfBootcampMain;
