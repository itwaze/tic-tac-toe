import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
	outline: none;
	padding: 8px 16px 8px 8px;
	border-radius: 4px;
	border: 1px solid #ccc;
    transition: 0.3s;
	&:hover {
		border-color: #888;
	}
`;

const Input = (props) => {
	return <StyledInput {...props} />;
};

export default Input;
