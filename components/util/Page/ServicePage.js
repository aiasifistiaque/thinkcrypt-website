import React from 'react';
import { Page, ServiceHero } from '../../';
import { Box } from '@chakra-ui/react';

const ServicePage = ({ meta, hero, children }) => {
	return (
		<Page
			image={meta?.image}
			title={meta?.title}
			description={meta?.desc}>
			<Box {...pageStyle}>
				<Box
					as='main'
					flex='1'>
					<ServiceHero
						title={hero?.title}
						subtitle={hero?.desc}
						imageUrl={hero?.image}
					/>
					{children}
				</Box>
			</Box>
		</Page>
	);
};

// Style Constants
const pageStyle = {
	minH: '100vh',
	display: 'flex',
	w: 'full',
	flexDirection: 'column',
};

export default ServicePage;
