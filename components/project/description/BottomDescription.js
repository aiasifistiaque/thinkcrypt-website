import React from 'react';
import styles from './Description.module.css';

const BottomDescription = ({ data }) => {
	return (
		<div className={styles.container}>
			<SectionBig
				heading='Project Duration'
				data={data.duration}
				style={{ flex: 0 }}
			/>
			<SectionBig
				heading='Our Remarks'
				data={data.remarks}
				style={{ flex: 0 }}
			/>
		</div>
	);
};

const SectionBig = ({ heading, data }) => {
	return (
		<div className={styles.bottomSection}>
			<h6>{heading}</h6>
			{data && data.map((item, i) => <p key={i}>{item}</p>)}
		</div>
	);
};

export default BottomDescription;
