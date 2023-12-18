import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
// Pages
import StudentListPage from './component/page/StudentListPage';
import StudentWritePage from './component/page/StudentWritePage';
import StudentViewPage from './component/page/StudentViewPage';

const MainTitleText = styled.p`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
`;

function App(props) {
	return (
		<BrowserRouter>
			<MainTitleText>Student List</MainTitleText>
			<Routes>
				<Route index element={<StudentListPage />} />
				<Route path='student-write' element={<StudentWritePage />} />
				<Route path='student/:studentId' element={<StudentViewPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
