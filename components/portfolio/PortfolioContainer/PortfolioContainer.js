import React from 'react';
import styles from './PortfolioContainer.module.css';

const PortfolioContainer = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default PortfolioContainer;
