// Blog data for the blog page
export const blogData = {
	doc: [
		{
			id: '1',
			title: 'Building Scalable SaaS Applications with MERN Stack',
			excerpt:
				'Learn how to architect and build scalable SaaS applications using MongoDB, Express.js, React, and Node.js. Discover best practices for performance optimization.',
			content: `In this comprehensive guide, we explore the intricacies of building production-ready SaaS applications with the MERN stack. 

From setting up a robust project structure to implementing authentication, authorization, and multi-tenancy, every aspect is covered in detail. We begin by discussing the importance of modular architecture and how to separate concerns for scalability. Next, we dive into database schema design using MongoDB, focusing on strategies for handling large datasets and ensuring data integrity.

Performance optimization is a recurring theme throughout this article. We cover techniques such as query optimization, indexing, and caching with Redis to ensure your application remains responsive under heavy load. The guide also explores best practices for deploying Node.js servers, managing environment variables, and setting up CI/CD pipelines for seamless updates.

Security is paramount in SaaS, so we dedicate a section to implementing JWT-based authentication, role-based access control, and secure API endpoints. The article concludes with tips on monitoring, logging, and scaling your application horizontally using containerization tools like Docker and orchestration platforms such as Kubernetes.

By the end of this guide, you will have a clear roadmap for building, deploying, and maintaining scalable SaaS applications that can grow with your business.`,
			author: 'Sarah Johnson',
			authorImage:
				'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150&h=150&fit=crop&crop=face',
			authorBio: 'Full-Stack Developer and Technical Writer',
			publishedAt: '2024-12-15',
			readTime: '8 min read',
			category: 'Development',
			tags: ['SaaS', 'MERN Stack', 'React', 'Node.js', 'MongoDB'],
			featuredImage:
				'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
			slug: 'building-scalable-saas-applications-mern-stack',
			views: 1240,
			likes: 89,
			status: 'published',
			featured: true,
		},
		{
			id: '2',
			title: 'The Future of Web Development: AI-Powered Tools',
			excerpt:
				'Explore how artificial intelligence is revolutionizing web development with automated code generation, intelligent debugging, and smart design systems.',
			content: 'Artificial Intelligence is transforming the way we approach web development...',
			author: 'Michael Chen',
			authorImage:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
			authorBio: 'AI Researcher and Frontend Architect',
			publishedAt: '2024-12-10',
			readTime: '6 min read',
			category: 'Technology',
			tags: ['AI', 'Web Development', 'Automation', 'Future Tech'],
			featuredImage:
				'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
			slug: 'future-web-development-ai-powered-tools',
			views: 892,
			likes: 67,
			status: 'published',
			featured: false,
		},
		{
			id: '3',
			title: 'E-commerce Security: Protecting Customer Data in 2024',
			excerpt:
				'Essential security measures every e-commerce platform should implement to protect customer data and maintain trust in an increasingly digital world.',
			content: 'Security has never been more critical for e-commerce platforms...',
			author: 'Emily Rodriguez',
			authorImage:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
			authorBio: 'Cybersecurity Expert and E-commerce Consultant',
			publishedAt: '2024-12-05',
			readTime: '10 min read',
			category: 'Security',
			tags: ['E-commerce', 'Security', 'Data Protection', 'Privacy'],
			featuredImage:
				'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
			slug: 'ecommerce-security-protecting-customer-data-2024',
			views: 1567,
			likes: 124,
			status: 'published',
			featured: true,
		},
		{
			id: '4',
			title: 'React 18 Features Every Developer Should Know',
			excerpt:
				"Dive deep into React 18's new features including Concurrent Rendering, Automatic Batching, and Suspense improvements that enhance user experience.",
			content:
				'React 18 introduces groundbreaking features that change how we build applications...',
			author: 'David Kim',
			authorImage:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
			authorBio: 'React Core Contributor and Tech Lead',
			publishedAt: '2024-11-28',
			readTime: '7 min read',
			category: 'Development',
			tags: ['React', 'JavaScript', 'Frontend', 'Performance'],
			featuredImage:
				'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
			slug: 'react-18-features-every-developer-should-know',
			views: 2134,
			likes: 187,
			status: 'published',
			featured: false,
		},
		{
			id: '5',
			title: 'Building Mobile-First Progressive Web Apps',
			excerpt:
				'Learn how to create fast, reliable, and engaging Progressive Web Apps that work seamlessly across all devices and network conditions.',
			content: 'Progressive Web Apps represent the future of mobile web experiences...',
			author: 'Lisa Wang',
			authorImage:
				'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
			authorBio: 'Mobile UX Designer and PWA Specialist',
			publishedAt: '2024-11-20',
			readTime: '9 min read',
			category: 'Mobile',
			tags: ['PWA', 'Mobile', 'Web Development', 'UX'],
			featuredImage:
				'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
			slug: 'building-mobile-first-progressive-web-apps',
			views: 743,
			likes: 56,
			status: 'published',
			featured: false,
		},
		{
			id: '6',
			title: 'Database Optimization Strategies for High-Traffic Applications',
			excerpt:
				'Master database optimization techniques including indexing, query optimization, and caching strategies to handle millions of users efficiently.',
			content: 'When your application scales, database performance becomes critical...',
			author: 'Robert Martinez',
			authorImage:
				'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
			authorBio: 'Database Architect and Performance Expert',
			publishedAt: '2024-11-15',
			readTime: '12 min read',
			category: 'Backend',
			tags: ['Database', 'Performance', 'Optimization', 'MongoDB'],
			featuredImage:
				'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
			slug: 'database-optimization-strategies-high-traffic-applications',
			views: 1876,
			likes: 143,
			status: 'published',
			featured: true,
		},
		{
			id: '7',
			title: 'Implementing Real-Time Features with WebSockets',
			excerpt:
				'Build interactive real-time applications with WebSockets. Learn about chat systems, live notifications, and collaborative features.',
			content: 'Real-time communication is essential for modern web applications...',
			author: 'Alexandra Thompson',
			authorImage:
				'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
			authorBio: 'Real-time Systems Engineer',
			publishedAt: '2024-11-08',
			readTime: '11 min read',
			category: 'Development',
			tags: ['WebSockets', 'Real-time', 'Node.js', 'Chat'],
			featuredImage:
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
			slug: 'implementing-realtime-features-websockets',
			views: 654,
			likes: 42,
			status: 'published',
			featured: false,
		},
		{
			id: '8',
			title: 'Microservices Architecture: When and How to Implement',
			excerpt:
				'Understand when microservices make sense for your project and learn practical implementation strategies with Docker and Kubernetes.',
			content: 'Microservices architecture offers scalability but comes with complexity...',
			author: 'James Wilson',
			authorImage:
				'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
			authorBio: 'DevOps Engineer and System Architect',
			publishedAt: '2024-11-01',
			readTime: '15 min read',
			category: 'Architecture',
			tags: ['Microservices', 'Docker', 'Kubernetes', 'DevOps'],
			featuredImage:
				'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
			slug: 'microservices-architecture-when-how-implement',
			views: 1432,
			likes: 98,
			status: 'published',
			featured: false,
		},
	],
	totalCount: 8,
	categories: [
		{ name: 'All Posts', value: '' },
		{ name: 'Development', value: 'development' },
		{ name: 'Technology', value: 'technology' },
		{ name: 'Security', value: 'security' },
		{ name: 'Mobile', value: 'mobile' },
		{ name: 'Backend', value: 'backend' },
		{ name: 'Architecture', value: 'architecture' },
	],
};

export default blogData;
