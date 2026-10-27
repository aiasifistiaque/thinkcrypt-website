'use client';

import { Flex, useColorMode } from '@chakra-ui/react';
import Page from '../util/Page/Page';
import { SECTIONS, toneOf } from './sections';
import InterestSection from '../products/InterestSection';

// A page drawn from its panel sections, in the panel's order: /website-development, /about,
// /business-software, /products and /products/<slug>. A product page's content "interest" is its sign-up
// form, when the page passes `interest` ({ fields, product }).
const WebsiteDevelopmentPage = ({ sections, interest }) => {
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
					if (section.slug === 'interest' && interest)
						return (
							<InterestSection
								key={section.id || section.slug}
								section={section}
								index={i}
								t={t}
								{...interest}
							/>
						);
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
