import TitleSection from './TitleSection';

// The home page's second section. Its words and button are the Mint panel's content "about-us" on
// the home page (heading lines → the two title lines, text paragraphs split on a blank line);
// the panel's seed copy (lib/content/home.js) shows only when the panel can't be reached.
const AboutUsSection = ({ theme, section }) => {
	if (!section) return null;
	const d = section.data;
	const [titleTop, ...rest] = String(d.heading || '').split('\n');
	const [first, ...more] = String(d.text || '').split(/\n\s*\n/);

	return (
		<TitleSection
			colorMode={theme}
			pb='92px'
			titleTop={titleTop}
			title={d.eyebrow}
			index='02'
			titleBottom={rest.join(' ')}
			paragraph={more.join('\n\n')}
			btn={d.buttonLabel}
			href={d.buttonUrl}
			clickEvent={
				d.buttonLabel && {
					elementType: 'link',
					elementName: d.buttonLabel,
					elementId: 'home-about-us',
					elementSlug: 'home-about-us',
					elementText: d.buttonLabel,
					elementHref: d.buttonUrl,
					clickType: 'click',
				}
			}>
			{first}
		</TitleSection>
	);
};

export default AboutUsSection;
