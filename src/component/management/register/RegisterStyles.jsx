import { styled } from "styled-components";

export const RegisterTitle = styled.div`
  text-align: center;
  position: relative;
  font-size: 23px;
  font-weight: 600;
  top: -30px;
`;

export const RegisterWrap = styled.div`
  /* width: 300px; */
  padding: 3.125rem;
  max-width: 50rem;
  background-color: aliceblue;
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
  position: sticky;
  margin-bottom: 5px;
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

export const RegisterImgDiv1 = styled.div`
  white-space: wrap;
`;

export const RegisterImgDiv2 = styled.div`
  display: inline-block;
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
`;

export const RegisterImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
`;

export const RegisterImgRemoveButton = styled.div`
  text-align: center;
  background-color: #333;
  cursor: pointer;
  color: #fff;
  font-size: 0.9375rem;
`;
