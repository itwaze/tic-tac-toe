import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize};
  display: block;
  width: fit-content;
`;

const Typography = (props) => {
  const { children, ...rest } = props;
  return <StyledSpan {...rest}>{children}</StyledSpan>;
};

export default Typography;
