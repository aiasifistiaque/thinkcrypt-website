import React from 'react';
import styles from './Top.module.css';

const Top = ({ data }) => {
	return (
		<div className={styles.container}>
			<h4>{data.name}</h4>
			<p className={styles.headingP}>{data.heading}</p>
			<a className={styles.button} href={data.link}>
				<p>View Project</p>
			</a>
		</div>
	);
};

export default Top;
