'use client';

import { Flex, useColorMode } from '@chakra-ui/react';
import Page from '../util/Page/Page';
import { SECTIONS, toneOf } from './sections';

// A page drawn from its panel sections, in the panel's order: /website-development,
// /business-software and /products
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
