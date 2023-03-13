import React from 'react';
import styles from './Description.module.css';

const Description = ({ data }) => {
	return (
		<div className={styles.container}>
			<div className={styles.sections}>
				<div className={styles.sectionOne}>
					<Section heading='Services' data={data.services} />
					<Section heading='Tech Stack' data={data.stack} />
				</div>
				<div className={styles.sectionTwo}>
					<SectionBig heading='The Ask' data={data.ask} />
					<SectionBig heading='The Solution' data={data.solution} />
				</div>
			</div>
		</div>
	);
};

const Section = ({ heading, data }) => {
	return (
		<div className={styles.section}>
			<h6>{heading}</h6>
			{data && data.map((item, i) => <p key={i}>{item}</p>)}
		</div>
	);
};

const SectionBig = ({ heading, data }) => {
	return (
		<div className={styles.sectionBig}>
			<h6>{heading}</h6>
			{data && data.map((item, i) => <p key={i}>{item}</p>)}
		</div>
	);
};

export default Description;
