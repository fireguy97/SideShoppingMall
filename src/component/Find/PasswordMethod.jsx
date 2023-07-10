import { styled } from "styled-components";

export default function PassswordMethod({
  findMethodPassword,
  handleFindMethodPassword,
}) {
  return (
    <ChooseFindMethod>
      <input
        type="radio"
        name="findMethod"
        id="email"
        value="emailPw"
        checked={findMethodPassword === "emailPw"}
        onChange={handleFindMethodPassword}
      />
      <label htmlFor="emailPw">Email</label>
      <input
        type="radio"
        name="findMethod"
        id="phoneNumber"
        value="phNum"
        checked={findMethodPassword === "phNum"}
        onChange={handleFindMethodPassword}
      />
      <label htmlFor="phNum">Phone Number</label>
    </ChooseFindMethod>
  );
}
const ChooseFindMethod = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.3125rem;
  label {
    margin-right: 0.3125rem;
  }
  input {
    margin-left: 1.125rem;
  }
`;
