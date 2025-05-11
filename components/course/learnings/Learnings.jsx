import { Box, Grid, Image } from '@chakra-ui/react';
import React from 'react';
import BorderContainer from '../../util/container/BorderContainer';
import Column from '../../util/Column';
import { BORDER } from '../../../lib/constants';
import HeaderText from '../../util/dynamic-text/HeaderText';
import BodyText from '../../util/dynamic-text/BodyText';
import MichromaText from '../../util/dynamic-text/MichromaText';

const Learnings = ({ data }) => {
	return (
		<BorderContainer>
			<Grid templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}>
				<Column
					gap={4}
					border={BORDER}
					py={{ base: '45px', md: '55px' }}
					px={{ base: '7px', md: '14px' }}
					justify='center'
				>
					<HeaderText
						fontSize={{ base: '1.5rem', md: '2rem' }}
					>{`what you’ll learn`}</HeaderText>
					<MichromaText
						fontSize={{ base: '1rem', md: '1rem' }}
					>{`You and your peers will be experienced professionals, specialists and C-suite executives, who are looking to: `}</MichromaText>
				</Column>
				{data?.map((item, index) => (
					<Column
						key={index}
						gap={4}
						border={BORDER}
						align='start'
						py={{ base: '45px', md: '55px' }}
						px={{ base: '14px', md: '40px' }}
					>
						<Box h={'54px'} w='auto'>
							<Image h={'100%'} w={'100%'} src={item?.icon} alt={item?.title} />
						</Box>
						<MichromaText fontSize={{ base: '1rem', md: '1rem' }}>
							{item?.description}
						</MichromaText>
					</Column>
				))}
			</Grid>
		</BorderContainer>
	);
};

export default Learnings;
