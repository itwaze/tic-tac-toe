import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
	display: block;
	outline: none;
	background: transparent;
	border-radius: 4px;
	border: 1px solid #ccc;
	padding: 8px 16px;
	transition: 0.3s;
	margin: ${({ margin }) => margin};
	${({ disabled }) =>
		!disabled &&
		css`
			&:hover {
				background: #eee;
				cursor: pointer;
			}
		`}
`;

const Button = (props) => {
	const { children, ...rest } = props;
	return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
