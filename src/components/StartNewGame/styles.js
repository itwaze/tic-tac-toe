import styled from "styled-components";

export const Form = styled.form`
  width: fit-content;
  border: 0.1em solid #ccc;
  padding: 1em 2em;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 1em;
`;

export const FormTitle = styled.h1`
  font-size: 1.2em;

  margin: 0 0 0.5em;
  text-align: center;
`;

export const InputLabel = styled.label`
  margin-right: 0.3em;
`;

export const InputField = styled.input`
  flex-grow: 1;
  outline: none;
  padding: 0.5em;
  border-radius: 0.4em;
  border: 0.1em solid rgb(204, 204, 204);
  transition: 0.3s;
  font-size: 0.6em;
  height: 2.6em;

  &:hover {
    border-color: #888;
  }
`;

export const FieldGroup = styled.div`
  margin-bottom: 1em;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
