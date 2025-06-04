// SEO Keywords for ThinkCrypt - Software Development Company in Dhaka, Bangladesh

export const seoKeywords = {
	// Primary business keywords
	primary: [
		'software development company Dhaka',
		'web development Bangladesh',
		'mobile app development',
		'custom software solutions',
		'MVP development',
		'minimum viable product',
		'startup development',
		'ThinkCrypt',
		'thinkcrypt.io',
	],

	// Services keywords
	services: [
		'ecommerce website development',
		'online store development',
		'portfolio website design',
		'CMS development',
		'content management system',
		'ERP software development',
		'enterprise resource planning',
		'inventory management system',
		'POS system development',
		'custom web solutions',
		'bespoke software development',
		'enterprise software',
		'small business software',
		'startup MVP',
		'prototype development',
		'proof of concept',
	],

	// Technology stack keywords
	technologies: [
		'Node.js development',
		'Express.js backend',
		'Next.js development',
		'React development',
		'React.js frontend',
		'JavaScript development',
		'TypeScript development',
		'MongoDB database',
		'NoSQL development',
		'Laravel PHP development',
		'full stack development',
		'MERN stack development',
		'API development',
		'REST API',
		'GraphQL development',
	],

	// Industry specific keywords
	industries: [
		'fintech development',
		'edtech solutions',
		'healthtech applications',
		'logistics software',
		'supply chain management',
		'customer relationship management',
		'CRM development',
		'human resource management',
		'HRM software',
		'accounting software',
		'invoicing system',
		'booking system',
		'appointment scheduling',
		'event management platform',
	],

	// Location based keywords
	location: [
		'Bangladesh IT company',
		'Dhaka software company',
		'software development Bangladesh',
		'web development Dhaka',
		'IT services Bangladesh',
		'technology company Dhaka',
		'software outsourcing Bangladesh',
		'offshore development',
		'remote development team',
	],

	// Business model keywords
	businessModel: [
		'outsourcing development',
		'offshore development',
		'remote development team',
		'freelance developers',
		'software consulting',
		'tech startup',
		'software architecture consulting',
		'technical consulting',
		'CTO as a service',
		'agile development',
		'DevOps services',
	],

	// Specialized features
	features: [
		'cloud deployment',
		'AWS development',
		'digital transformation',
		'business automation',
		'progressive web app',
		'PWA development',
		'responsive web design',
		'UI UX design',
		'database design',
		'system architecture',
		'software engineering',
		'microservices architecture',
		'scalable web applications',
		'real-time applications',
	],

	// E-commerce specific
	ecommerce: [
		'online shopping website',
		'e-commerce platform',
		'shopping cart development',
		'payment gateway integration',
		'multi-vendor marketplace',
		'B2B ecommerce',
		'B2C ecommerce',
		'dropshipping platform',
		'subscription ecommerce',
		'headless commerce',
	],

	// Security and compliance
	security: [
		'secure web development',
		'data protection',
		'GDPR compliance',
		'payment security',
		'SSL implementation',
		'authentication system',
		'authorization framework',
		'cybersecurity',
		'penetration testing',
		'security audit',
	],

	// Performance and optimization
	performance: [
		'website performance optimization',
		'SEO optimization',
		'speed optimization',
		'mobile optimization',
		'cross browser compatibility',
		'load testing',
		'performance monitoring',
		'scalability testing',
		'code optimization',
		'database optimization',
	],

	// Analytics and reporting
	analytics: [
		'business intelligence',
		'data analytics',
		'reporting system',
		'dashboard development',
		'admin panel development',
		'analytics integration',
		'conversion tracking',
		'user behavior tracking',
		'performance metrics',
		'KPI dashboard',
	],

	// Integration keywords
	integrations: [
		'third party API integration',
		'payment gateway integration',
		'social media integration',
		'email marketing automation',
		'CRM integration',
		'ERP integration',
		'inventory integration',
		'shipping integration',
		'SMS integration',
		'WhatsApp integration',
	],

	// Modern development practices
	modernPractices: [
		'CI/CD pipeline',
		'continuous integration',
		'continuous deployment',
		'automated testing',
		'test driven development',
		'code review',
		'version control',
		'Git workflow',
		'Docker containerization',
		'Kubernetes deployment',
	],

	// Emerging technologies
	emergingTech: [
		'artificial intelligence',
		'machine learning',
		'chatbot development',
		'AI integration',
		'blockchain development',
		'IoT development',
		'voice assistant',
		'computer vision',
		'natural language processing',
		'predictive analytics',
	],
};

// Generate complete keywords string
export const getAllKeywords = () => {
	const allKeywords = [];

	Object.values(seoKeywords).forEach(categoryKeywords => {
		allKeywords.push(...categoryKeywords);
	});

	return allKeywords.join(', ');
};

// Get keywords by category
export const getKeywordsByCategory = (categories = []) => {
	if (categories.length === 0) {
		return getAllKeywords();
	}

	const selectedKeywords = [];
	categories.forEach(category => {
		if (seoKeywords[category]) {
			selectedKeywords.push(...seoKeywords[category]);
		}
	});

	return selectedKeywords.join(', ');
};

// Default meta information
export const defaultSEO = {
	title: 'Thinkcrypt - Software Development Company in Dhaka | MVP, Ecommerce, Web Development',
	description:
		'Thinkcrypt - Leading software development company in Dhaka, Bangladesh. We specialize in MVP development, ecommerce websites, custom web applications, mobile apps, CMS, ERP, and inventory management systems. Expert full-stack development using Node.js, React, Next.js, MongoDB, and Laravel. Transform your business with our cutting-edge software solutions.',
	author: 'ThinkCrypt Software Development',
	siteName: 'Thinkcrypt',
	siteUrl: 'https://thinkcrypt.dev',
	image: '/hero.jpeg',
	keywords: getAllKeywords(),
};
