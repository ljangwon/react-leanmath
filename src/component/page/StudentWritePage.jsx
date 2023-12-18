import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NameInput from '../ui/NameInput';
import GradeInput from '../ui/GradeInput';
import Button from '../ui/Button';

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

function StudentWritePage(props) {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [grade, setGrade] = useState('');

	return (
		<Wrapper>
			<Container>
				<NameInput
					height={10}
					value={name}
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>

				<GradeInput
					height={10}
					label={'학년'}
					value={grade}
					onChange={(event) => {
						setGrade(event.target.value);
					}}
				/>

				<Button
					title='학생 추가하기'
					onClick={() => {
						navigate('/');
					}}
				/>
			</Container>
		</Wrapper>
	);
}

export default StudentWritePage;
