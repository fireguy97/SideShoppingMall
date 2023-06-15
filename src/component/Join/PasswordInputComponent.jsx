import styled from "styled-components";

export default function PasswordInput({ register }) {
  return (
    <div>
      <Password>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          required
        />
      </Password>
      <PasswordDoubleCheck>
        <input
          type="password"
          placeholder="PasswordCheck"
          {...register("passwordCheck")}
          required
        />
      </PasswordDoubleCheck>
    </div>
  );
}

const Password = styled.div`
  margin-bottom: 7px;
`;

const PasswordDoubleCheck = styled.div``;
