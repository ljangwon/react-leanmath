import React from 'react';
import styled from 'styled-components';
import StudentListItem from './StudentListItem';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	:not(:last-child) {
		margin-bottom: 16px;
	}
`;

function StudentList(props) {
	const { students, onClickItem } = props;

	return (
		<Wrapper>
			{students.map((student, index) => {
				return (
					<StudentListItem
						key={student.id}
						student={student}
						onClick={() => {
							onClickItem(student);
						}}
					/>
				);
			})}
		</Wrapper>
	);
}

export default StudentList;
