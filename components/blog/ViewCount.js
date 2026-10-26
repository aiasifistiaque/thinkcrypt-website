'use client';

import { useEffect, useState } from 'react';
import { SecondaryText } from '../util/text';

// A post's view count: shows the saved number and counts this reader once per browser session
const ViewCount = ({ id, views = 0, ...props }) => {
	const [count, setCount] = useState(views);

	useEffect(() => {
		if (!id) return;
		const key = `blog-viewed:${id}`;
		try {
			if (sessionStorage.getItem(key)) return;
			sessionStorage.setItem(key, '1');
		} catch {}
		fetch('/api/blog-views', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id }),
		})
			.then(r => (r.ok ? r.json() : null))
			.then(d => typeof d?.views === 'number' && setCount(d.views))
			.catch(() => undefined);
	}, [id]);

	return (
		<SecondaryText {...props}>
			{count.toLocaleString('en-US')} {count === 1 ? 'view' : 'views'}
		</SecondaryText>
	);
};

export default ViewCount;
