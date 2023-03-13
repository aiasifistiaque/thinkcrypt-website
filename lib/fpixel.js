export const FB_PIXEL_ID = '516909410276038';

export const pageview = () => {
	window.fbq('track', 'PageView');
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
	window.fbq('track', name, options);
};
