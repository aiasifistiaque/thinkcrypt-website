import React from 'react';
import styles from './Cover.module.css';

const Cover = ({ src }) => {
	return (
		<div className={styles.container}>
			<img src={src} alt='cvr' />
		</div>
	);
};

export default Cover;
