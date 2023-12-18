import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
	width: calc(100% - 32px);
	${(props) =>
		props.height &&
		`
        height: ${props.height}px;
    `}
	padding: 16px;
	font-size: 16px;
	line-height: 20px;
`;

function NameInput(props) {
	const { height, label, value, onChange } = props;

	return (
		<div>
			{label} <StyledTextarea height={height} value={value} onChange={onChange} />
		</div>
	);
}

export default NameInput;
