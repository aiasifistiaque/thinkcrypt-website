import React from 'react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { CheckCircle } from 'lucide-react';

const ServiceCard = ({ title, description, icon, tags }) => {
	return (
		<Box {...serviceCardStyle}>
			<Flex {...flexIconHeadingStyle}>
				<Box {...iconBoxStyle}>{icon}</Box>
				<Heading {...serviceHeadingStyle}>{title}</Heading>
			</Flex>
			<Text {...serviceTextStyle}>{description}</Text>
			<VStack {...detailsListStyle}>
				{tags?.map((detail, idx) => (
					<Flex
						key={idx}
						{...detailFlexStyle}>
						<CheckCircle
							size={16}
							color='black'
						/>
						<Text {...detailTextStyle}>{detail}</Text>
					</Flex>
				))}
			</VStack>
		</Box>
	);
};

const serviceCardStyle = {
	p: 8,
	border: '1px solid',
	borderColor: '#e6e8ec',
	bg: 'white',
	borderRadius: 'none',
};

const flexIconHeadingStyle = {
	align: 'center',
	mb: 6,
};

const iconBoxStyle = {
	mr: 4,
};

const serviceHeadingStyle = {
	as: 'h3',
	fontSize: 'xl',
	textTransform: 'uppercase',
	letterSpacing: 'wide',
};

const serviceTextStyle = {
	mb: 6,
	color: 'black',
};

const detailsListStyle = {
	align: 'start',
	spacing: 2,
};

const detailFlexStyle = {
	align: 'center',
};

const detailTextStyle = {
	ml: 2,
	color: 'black',
	fontSize: '1rem',
};

export default ServiceCard;
