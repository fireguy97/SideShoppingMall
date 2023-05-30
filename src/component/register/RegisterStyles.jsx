import { styled } from "styled-components";

export const RegisterWrap = styled.div`
  padding: 3.125rem;
  max-width: 50rem;
  background-color: #f7f7f7;
  border-radius: 0.625rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
`;

export const RegisterForm = styled.form`
  display: grid;
  grid-gap: 1.25rem;
`;

export const RegisterLabel = styled.label`
  font-weight: bold;
`;

export const RegisterInputFile = styled.input`
  display: block;
  margin-top: 0.3125rem;
`;

export const RegisterTextarea = styled.textarea`
  width: 100%;
  min-height: 6.25rem;
`;

export const RegisterButton = styled.button`
  margin-top: 1.25rem;
  padding: 0.625rem 1.25rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
