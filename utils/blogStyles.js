import { colors } from '../theme/styles';

/**
 * Returns Chakra UI sx styles for blog content rendering
 * @param {string} colorMode - The current color mode ('light' or 'dark')
 * @returns {object} - The sx style object for blog content
 */
export const getBlogContentStyles = colorMode => {
	return {
		// Typography
		color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		'& h1': {
			fontSize: { base: '1.8rem', md: '2rem' },
			fontWeight: '800',
			margin: '1.5rem 0 1rem 0',
			lineHeight: 1.2,
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& h2': {
			fontSize: { base: '1.6rem', md: '1.75rem' },
			fontWeight: '800',
			margin: '1.4rem 0 0.8rem 0',
			lineHeight: 1.3,
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& h3': {
			fontSize: { base: '1.4rem', md: '1.5rem' },
			fontWeight: '800',
			margin: '1.3rem 0 0.7rem 0',
			lineHeight: 1.4,
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& h4, & h5, & h6': {
			fontSize: { base: '1.2rem', md: '1.25rem' },
			fontWeight: '800',
			margin: '1.2rem 0 0.6rem 0',
			lineHeight: 1.4,
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& p': {
			margin: '1rem 0',
			lineHeight: 1.4,
			fontSize: { base: '1.1rem', md: '1.14rem' },
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& span': {
			margin: '1rem 0',
			lineHeight: 1.3,
			fontSize: { base: '1.1rem', md: '1.1rem' },
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& strong': {
			fontWeight: '900 !important',
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
		},
		'& em': {
			fontStyle: 'italic',
		},
		'& u': {
			textDecoration: 'underline',
		},
		'& s': {
			textDecoration: 'line-through',
		},
		'& blockquote': {
			borderLeft: `4px solid ${colorMode === 'dark' ? '#4A5568' : '#E2E8F0'}`,
			paddingLeft: '1rem',
			margin: '1.5rem 0',
			fontStyle: 'italic',
			color: colorMode === 'dark' ? 'gray.300' : 'gray.600',
			backgroundColor: colorMode === 'dark' ? 'gray.800' : 'gray.50',
			padding: '1rem',
			borderRadius: '8px',
		},
		'& code': {
			backgroundColor: colorMode === 'dark' ? 'gray.700' : 'gray.100',
			color: colorMode === 'dark' ? 'green.300' : 'green.600',
			padding: '0.2rem 0.4rem',
			borderRadius: '3px',
			fontFamily: 'Monaco, Consolas, "Courier New", monospace',
			fontSize: '0.9rem',
		},
		'& pre': {
			backgroundColor: colorMode === 'dark' ? 'gray.800' : 'gray.100',
			color: colorMode === 'dark' ? 'gray.200' : 'gray.800',
			padding: '1rem',
			borderRadius: '8px',
			overflowX: 'auto',
			margin: '1rem 0',
			border: `1px solid ${colorMode === 'dark' ? 'gray.600' : 'gray.300'}`,
		},
		'& pre code': {
			backgroundColor: 'transparent',
			color: 'inherit',
			padding: 0,
		},
		'& ol, & ul': {
			margin: '1rem 0',
			paddingLeft: '2rem',
			color: `${colorMode === 'dark' ? '#FAF8F1' : '#0D0D0D'} !important`,
			fontSize: '1rem',
		},
		'& ol li, & ul li': {
			margin: '0.5rem 0',
			lineHeight: 1.3,
			fontSize: '1.1rem',
		},
		'& img': {
			maxWidth: '100%',
			height: 'auto',
			margin: '1.5rem 0',
			borderRadius: '8px',
			boxShadow:
				colorMode === 'dark' ? '0 4px 8px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
		},
		'& a': {
			color: colorMode === 'dark' ? '#63B3ED' : '#0066CC',
			textDecoration: 'underline',
			'&:hover': {
				color: colorMode === 'dark' ? '#90CDF4' : '#004499',
			},
		},
		'& .ql-align-center': {
			textAlign: 'center',
		},
		'& .ql-align-right': {
			textAlign: 'right',
		},
		'& .ql-align-left': {
			textAlign: 'left',
		},
		'& .ql-align-justify': {
			textAlign: 'justify',
		},
	};
};
