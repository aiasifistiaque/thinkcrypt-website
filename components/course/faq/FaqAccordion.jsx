import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Icon,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import useCustomColors from '../../../hooks/useCustomColors';
import { fonts } from '../../../lib/constants';

const FaqAccordion = ({ data, ...props }) => {
	const { textGray } = useCustomColors();
	return (
		<AccordionItem mb={2} border={'none'}>
			{({ isExpanded }) => (
				<>
					<h2>
						<AccordionButton gap={4}>
							{/* <AccordionIcon /> */}
							<Icon
								as={isExpanded ? FaMinus : FaPlus}
								color={textGray}
								fontSize='1rem'
							/>
							<Box
								as='span'
								flex='1'
								textAlign='left'
								fontFamily={fonts.Michroma}
								fontSize={{ base: '1rem', md: '1.25rem' }}
							>
								{data?.question ? data?.question : 'Untitled'}
							</Box>
							{/* <BodyText fontSize='0.75rem' color={'#888'} hideBelow={'md'}>
						{data?.totalVideos && data?.totalDuration
							? `${data?.totalVideos} lectures . ${data?.totalDuration}`
							: '--'}
					</BodyText> */}
						</AccordionButton>
					</h2>
					<AccordionPanel
						fontFamily={fonts.Michroma}
						pb={4}
						color='#888'
						fontSize={{ base: '1rem', md: '1rem' }}
					>
						{data?.answer}
					</AccordionPanel>
				</>
			)}
		</AccordionItem>
	);
};

export default FaqAccordion;
