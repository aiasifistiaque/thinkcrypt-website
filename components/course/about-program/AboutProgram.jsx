import React from 'react';
import BorderContainer from '../../util/container/BorderContainer';
import Column from '../../util/Column';
import HeaderText from '../../util/dynamic-text/HeaderText';
import BodyText from '../../util/dynamic-text/BodyText';
import MichromaText from '../../util/dynamic-text/MichromaText';

const AboutProgram = ({ data }) => {
	return (
		<BorderContainer>
			<Column gap={{ base: 4, md: 6 }} p={{ base: 4, md: 3 }}>
				<HeaderText fontSize={{ base: '2.25rem', md: '3.75rem' }}>
					About The Program
				</HeaderText>
				<Column gap={{ base: 4, md: 6 }}>
					{data?.map((item, index) => (
						<MichromaText
							fontSize={{ base: '1rem', md: '1.25rem' }}
							fontWeight={index === 2 ? '600' : '400'}
							key={index}
						>
							{item}
						</MichromaText>
					))}
				</Column>
			</Column>
		</BorderContainer>
	);
};

export default AboutProgram;
