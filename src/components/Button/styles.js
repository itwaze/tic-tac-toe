import styled from "styled-components";

export const Button = styled.button`
  display: block;
  outline: none;
  background: transparent;
  border-radius: 0.4em;
  border: 0.1em solid #ccc;
  padding: 0.5em 1em;
  transition: 0.3s;
  min-height: 3em;
  :not(:disabled) {
    cursor: pointer;
  }
`;
