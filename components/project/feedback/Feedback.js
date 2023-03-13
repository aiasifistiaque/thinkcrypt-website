import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ data }) => {
	return (
		<div className={styles.container}>
			<h2>Feedback from our client</h2>
			<p>{data.feedback}</p>
			<div className={styles.user}>
				<img src={data.image} alt='pp' />
				<div className={styles.text}>
					<p>{data.client}</p>
					<h6>{data.project}</h6>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
