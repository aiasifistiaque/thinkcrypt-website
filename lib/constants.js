//
export const basePadding = { base: '24px', lg: '28px' };

export const links = {
	contact:
		'https://docs.google.com/forms/d/e/1FAIpQLSeu0GxkeIBfjuAXlPALET-5S1Dxs6JASbV2CSjv2Yv4YA1vZQ/viewform?usp=sf_link',
};

export const fonts = {
	heading: 'Michroma, sans-serif',
	body: 'Apercu, sans-serif',
	Michroma: 'Michroma, sans-serif',
	// primary: 'Mona Sans, sans-serif',
	primary: 'Apercu, sans-serif',
	title: 'Bebas Neue, sans-serif',
};

// export const AboutUs = {
// 	ABOUT_DESCRIPTION: `At Thinkcrypt, we specialize in transforming your vision into reality by crafting custom SaaS MVPs that not only launch your ideas into the market but also optimize them for fundraising. From strategic planning through to prototyping, user testing, and final deployment, we focus on building precisely what you need for each funding round, ensuring time and cost efficiency. Our goal is to deliver scalable, innovative solutions that propel your startup's success and attract investor interest.`,
// };

export const AboutUs = {
	ABOUT_DESCRIPTION: `Thinkcrypt is a leading software development company that helps startups, SMEs, and enterprises build innovative digital solutions that drive growth and impact. We specialize in turning ideas into MVPs and providing expert digital consultation to streamline your journey. Our goal is to help organizations save time, cut costs, and improve their business workflows by transforming manual processes into smart, digital systems. From scalable platforms to custom tools, we take care of the technology so you can focus on running and growing your business.`,
};

export const colors = {
	primary: '#7dbcf3',
	primaryDark: `#4ea4ef`,
	primaryLight: `#acd4f7`,
};

export const gap = {
	base: '0.625rem',
	md: '2rem',
	lg: '2.75rem',
};

export const BORDER = '1px solid #DEDEE0';
export const BORDERDARK = '2px solid #424242';

export const boxShadow = `2px 2px 10px rgba(153, 140, 140, 0.2)`;
export const boxShadowHover = `4px 4px 10px rgba(153, 140, 140, 0.4)`;

export const breakpoints = {
	desktop: '1008px',
	tab: '640px',
	small: '370px',
	laptop: '850px',
	xLarge: '1290px',
	xxl: '1400px',
};

export const zIndex = {
	navbar: 900,
};
export const layout = {
	MAX_W: '1440px',
	NAV_HEIGHT: '64px',
};
export const padding = {
	baseNavbar: '1rem',
	lgNavbar: '1.5rem',
	baseBody: '1rem',
	lgBody: '32px',
	baseSectionY: '1.5rem',
	lgSectionY: '3rem',
};

export const STYLE = {
	outlineHeader: {
		'-webkit-text-stroke': '1px #444' /* Width and color of the text outline */,
		textStroke: { base: '1px #444', md: '1px #444' },
		fontSize: { base: '3rem', md: '5rem', lg: '7rem' },
		lineHeight: { base: '3rem', md: '5rem', lg: '7rem' },
		fontWeight: '400',
		color: 'bgColor.light',
		fontFamily: 'Michroma, sans-serif',
	},
};

export const URL = {
	root: process.env.NEXT_PUBLIC_BACKEND || 'http://localhost:5000/api',
};
