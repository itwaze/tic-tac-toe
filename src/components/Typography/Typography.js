import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
	font-size: ${({ variant }) => (variant === "body1" ? "24px" : "16px")};
	margin: ${({ margin }) => margin};
	display: block;
	width: fit-content;
`;

const Typography = (props) => {
	const { children, ...rest } = props;
	return <StyledSpan {...rest}>{children}</StyledSpan>;
};

export default Typography;
