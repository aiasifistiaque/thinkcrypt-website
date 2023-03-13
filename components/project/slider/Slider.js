import React from 'react';
import styles from './Slider.module.css';

const Slider = ({ src }) => {
	return (
		<div className={styles.container}>
			<img src={src} alt='s1' />
		</div>
	);
};

export default Slider;
