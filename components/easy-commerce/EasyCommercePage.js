'use client';

import { Flex, useColorMode } from '@chakra-ui/react';
import Page from '../util/Page/Page';
import { SECTIONS, toneOf } from '../website-development/sections';
import DemoStores from './DemoStores';
import Pricing from './Pricing';
import Estimate from './Estimate';

// /easy-instant-commerce and /easy-instant-commerce/get-started: the panel's sections in its order, with three
// contents drawn here by slug — "demos" (the panel's EC demos), "pricing" and "estimate" (the lead form).
export const START = '/easy-instant-commerce/get-started';

const BY_SLUG = { demos: DemoStores, pricing: Pricing, estimate: Estimate };

const EasyCommercePage = ({ sections, demos = [], startHref = START }) => {
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
					const Section = BY_SLUG[section.slug] || SECTIONS[section.type];
					return Section ? (
						<Section
							key={section.id || section.slug}
							section={section}
							index={i}
							t={t}
							demos={demos}
							startHref={startHref}
						/>
					) : null;
				})}
			</Flex>
		</Page>
	);
};

export default EasyCommercePage;
