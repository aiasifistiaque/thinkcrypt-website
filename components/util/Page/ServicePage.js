'use client';

import React from 'react';
import { Page, ServiceHero } from '../../';
import { Box, useColorMode } from '@chakra-ui/react';
import TitleSection from '../../home/about-us/TitleSection';

const ServicePage = ({ meta, hero, children, theme }) => {
	const { colorMode } = useColorMode();
	return (
		<Page
			theme={colorMode}
			image={meta?.image}
			title={meta?.title}
			description={meta?.desc}>
			<Box {...pageStyle}>
				<Box
					as='main'
					flex='1'>
					<TitleSection
						top
						pb={0}
						colorMode={colorMode}
						titleTop={hero?.titleTop || hero?.title}
						titleBottom={hero?.titleBottom}
						title={hero?.heading}>
						{hero?.desc}
					</TitleSection>
					{/* <ServiceHero
						title={hero?.title}
						subtitle={hero?.desc}
						imageUrl={hero?.image}
					/> */}
					<Box>{children}</Box>
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
