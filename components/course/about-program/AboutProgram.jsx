import React from 'react';
import BorderContainer from '../../util/container/BorderContainer';
import Column from '../../util/Column';
import HeaderText from '../../util/dynamic-text/HeaderText';
import BodyText from '../../util/dynamic-text/BodyText';

const AboutProgram = ({ data }) => {
	return (
		<BorderContainer>
			<Column gap={{ base: 4, md: 6 }} p={{ base: 4, md: 3 }}>
				<HeaderText fontSize={{ base: '2.25rem', md: '3.75rem' }}>
					About The Program
				</HeaderText>
				<Column gap={{ base: 4, md: 6 }}>
					{data?.map((item, index) => (
						<BodyText key={index}>{item}</BodyText>
					))}
				</Column>
			</Column>
		</BorderContainer>
	);
};

export default AboutProgram;
