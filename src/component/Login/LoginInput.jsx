import { styled } from "styled-components";

export default function LoginInput({ register }) {
  return (
    <StyledLoginInput>
      <LoginInputWrap>
        <label htmlFor="loginId">
          <LoginInputWrapInput
            id="id"
            className="inputEmail"
            placeholder="ID"
            type="text"
            {...register("loginId")}
          />
        </label>
        <label htmlFor="password">
          <LoginInputWrapInput
            type="password"
            className="inputPassword"
            placeholder="Password"
            {...register("password")}
          />
        </label>
      </LoginInputWrap>
      <LoginSubmitWrap>
        <SubmitLogin type="submit"> Login </SubmitLogin>
      </LoginSubmitWrap>
    </StyledLoginInput>
  );
}

const LoginInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.25rem;
  margin-top: 0.875rem;
  gap: 1.0125rem;
`;
const LoginInputWrapInput = styled.input`
  width: 16.75rem;
  height: 1.875rem;
  margin-left: 1.875rem;
  color: #8f8f91;
  border: 0.0625rem solid #d9d9d9;
`;
const LoginSubmitWrap = styled.div`
  margin-top: 0.875rem;
`;
const SubmitLogin = styled.button`
  width: 6rem;
  height: 5.2875rem;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;
const StyledLoginInput = styled.div`
  display: flex;

  .inputEmail::placeholder {
    color: lightgrey;
  }
  .inputPassword::placeholder {
    color: lightgrey;
  }
`;
