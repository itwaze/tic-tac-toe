import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: ${({ justify }) => justify};
	margin: ${({ margin }) => margin};
	width: ${({ width }) => width};
`;

const Box = (props) => {
	const { children, ...rest } = props;
	return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default Box;
