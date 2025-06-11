/**
 * Converts plain text content to HTML with proper paragraph tags
 * @param {string} text - The plain text content
 * @returns {string} - HTML content with paragraph tags
 */
export const convertTextToHtml = text => {
	if (!text) return '';

	// Split text by double line breaks (paragraphs)
	const paragraphs = text
		.split(/\n\s*\n/)
		.map(para => para.trim())
		.filter(para => para.length > 0);

	// Wrap each paragraph in <p> tags
	const htmlContent = paragraphs
		.map(paragraph => {
			// Replace single line breaks with <br> tags
			const formattedParagraph = paragraph.replace(/\n/g, '<br>');
			return `<p>${formattedParagraph}</p>`;
		})
		.join('\n');

	return htmlContent;
};

/**
 * Converts text content that might already be HTML or needs conversion
 * @param {string} content - The content to process
 * @returns {string} - Properly formatted HTML content
 */
export const processContentForDisplay = content => {
	if (!content) return '';

	// Check if content already contains HTML tags
	const hasHtmlTags = /<[^>]+>/.test(content);

	if (hasHtmlTags) {
		// Content already has HTML tags, return as is
		return content;
	} else {
		// Content is plain text, convert to HTML
		return convertTextToHtml(content);
	}
};
