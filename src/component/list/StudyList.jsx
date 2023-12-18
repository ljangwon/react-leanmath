import React from 'react';
import styled from 'styled-components';
import StudyListItem from './StudyListItem';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	:not(:last-child) {
		margin-bottom: 16px;
	}
`;

function StudyList(props) {
	const { studys } = props;

	return (
		<Wrapper>
			{studys.map((study, index) => {
				return <StudyListItem key={study.id} study={study} />;
			})}
		</Wrapper>
	);
}

export default StudyList;
