'use client';

import { Flex, useColorMode } from '@chakra-ui/react';
import Page from '../util/Page/Page';
import { SECTIONS, toneOf } from './sections';

// /website-development: the panel's sections for the page, in the panel's order
const WebsiteDevelopmentPage = ({ sections }) => {
	const { colorMode } = useColorMode();
	const t = toneOf(colorMode);

	return (
		<Page theme={colorMode}>
			<Flex
				as='main'
				direction='column'
				w='full'
				minH='100vh'
				bg={t.bg}>
				{sections.map((section, i) => {
					const Section = SECTIONS[section.type];
					return Section ? (
						<Section
							key={section.id || section.slug}
							section={section}
							index={i}
							t={t}
						/>
					) : null;
				})}
			</Flex>
		</Page>
	);
};

export default WebsiteDevelopmentPage;
