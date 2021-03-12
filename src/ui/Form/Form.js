import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 50%;
  min-width: 300px;
  border: 1px solid #ccc;
  padding: 24px;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 4px;
`;

const Form = (props) => {
  const { children, ...rest } = props;
  return <StyledForm {...rest}>{children}</StyledForm>;
};

export default Form;
