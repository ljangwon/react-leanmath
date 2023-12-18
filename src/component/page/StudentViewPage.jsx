import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import StudyList from '../list/StudyList';
import StudyInput from '../ui/StudyInput';
import Button from '../ui/Button';
import student_data from '../../data/student_data.json';

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;

	:not(:last-child) {
		margin-bottom: 16px;
	}
`;

const StudentContainer = styled.div`
	padding: 8px 16px;
	border: 1px solid green;
	border-radius: 8px;
`;

const NameText = styled.p`
	font-size: 28px;
	font-weight: 500;
`;

const GradeText = styled.p`
	font-size: 20px;
	line-height: 32px;
	white-space: pre-wrap;
`;

const StudyLabel = styled.p`
	font-size: 16px;
	font-weight: 500;
`;

function StudentViewPage(props) {
	const navigate = useNavigate();

	const { studentId } = useParams();

	console.log('studentId:' + studentId);

	const student = student_data.find((item) => {
		return item.id == studentId;
	});

	const [study, setStudy] = useState('');

	return (
		<Wrapper>
			<Container>
				<Button
					title='뒤로 가기'
					onClick={() => {
						navigate('/');
					}}
				/>
				<StudentContainer>
					<NameText>{student.name}</NameText>
					<GradeText>{student.grade}</GradeText>
				</StudentContainer>

				<StudyLabel>학습리스트</StudyLabel>

				<StudyList studys={student.studys} />

				<StudyInput
					height={40}
					value={study}
					onChange={(event) => {
						setStudy(event.target.value);
					}}
				/>
				<Button
					title='댓글 작성하기'
					onClick={() => {
						navigate('/');
					}}
				/>
			</Container>
		</Wrapper>
	);
}

export default StudentViewPage;
