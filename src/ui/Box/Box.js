import React from "react";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: ${({ justify }) => justify};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  box-sizing: border-box;
  ${({ border }) =>
    border &&
    css`
      border: 1px solid #ccc;
    `};
`;

const Box = (props) => {
  const { children, ...rest } = props;
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default Box;
