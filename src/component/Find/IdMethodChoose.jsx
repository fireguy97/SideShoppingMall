import { styled } from "styled-components";

export default function IdMethod({ findMethod, handleFindMethod }) {
  return (
    <ChooseFindMethod>
      <input
        type="radio"
        name="findMethod"
        id="email"
        value="email"
        checked={findMethod === "email"}
        onChange={handleFindMethod}
      />

      <label htmlFor="email">Email</label>
      <input
        type="radio"
        name="findMethod"
        id="phoneNumber"
        value="phoneNumber"
        checked={findMethod === "phoneNumber"}
        onChange={handleFindMethod}
      />
      <label htmlFor="phoneNumber">Phone Number</label>
    </ChooseFindMethod>
  );
}

const ChooseFindMethod = styled.div`
  display: flex;
  justify-content: center;
  label {
    margin-right: 0.3125rem;
  }
  input {
    margin-left: 1.125rem;
  }
`;
