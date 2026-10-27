// A WhatsApp chat link from a number as typed in the panel ("+880 1828-398225") or a wa.me link
const digitsOf = v => {
	const s = String(v || '');
	const m = s.match(/wa\.me\/(\d+)/);
	return (m ? m[1] : s).replace(/\D/g, '');
};

export const whatsappHref = (number, message) => {
	const digits = digitsOf(number);
	return digits ? `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ''}` : '';
};
