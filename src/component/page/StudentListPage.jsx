import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import StudentList from '../list/StudentList';
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

function StudentListPage(props) {
	const navigate = useNavigate();

	console.log('test');

	return (
		<Wrapper>
			<Container>
				<Button
					title='학생 추가하기'
					onClick={() => {
						navigate('/student-write');
					}}
				/>
				<StudentList
					students={student_data}
					onClickItem={(item) => {
						navigate(`/student/${item.id}`);
					}}
				/>
			</Container>
		</Wrapper>
	);
}

export default StudentListPage;
