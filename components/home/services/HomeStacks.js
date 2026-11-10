import { Image } from '@chakra-ui/react';
import CardSection from '../../services/website/CardSection';
import StackCard from './StackCard';

// The panel's tags line ("fast-rendering, component") as the card's tags
export const tagsOf = item =>
	String(item?.subTitle || '')
		.split(',')
		.map(t => t.trim())
		.filter(Boolean);

// The home page's tech stack. Its heading, button and cards are the Mint panel's content "tech-stack"
// on the home page (items: title, description, image = the icon, subTitle = tags, comma-separated);
// the home page shows the first three, /techstacks shows them all.
const HomeStacks = ({ theme, section }) => {
	if (!section) return null;
	const d = section.data || {};
	const items = (d.items || []).filter(i => i?.title).slice(0, 3);
	return (
		<CardSection
			columns={{ base: 1, md: 3 }}
			colorMode={theme}
			btnText={d.buttonLabel || 'View Our Tech Stacks'}
			href={d.buttonUrl || '/techstacks'}
			title={d.heading || 'Technology Stack'}>
			{items.map((item, i) => (
				<StackCard
					colorMode={theme}
					icon={
						item.image && (
							<Image
								src={item.image}
								alt={item.title}
								h='44px'
								w='44px'
								objectFit='contain'
							/>
						)
					}
					tags={tagsOf(item)}
					title={item.title}
					description={item.description}
					key={i}
				/>
			))}
		</CardSection>
	);
};

export default HomeStacks;
