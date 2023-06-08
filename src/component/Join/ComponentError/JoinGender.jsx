import { styled } from "styled-components";
import { useForm } from "react-hook-form";

export default function JoinGender() {
  const { register } = useForm();
  return (
    <StyledGender>
      <tr>
        <th>성별</th>
        <GenderWrap>
          <label htmlFor="male">남</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="M"
            {...register("gender", { defaultvalue: "M" })}
          />

          <label htmlFor="female">여</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="F"
            {...register("gender", { defaultvalue: "F" })}
          />
        </GenderWrap>
      </tr>
    </StyledGender>
  );
}
const StyledGender = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 110px;
`;

const GenderWrap = styled.td`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    padding: 0;
    margin: 0;
    width: 0.9375rem;
    font-size: 0.875rem;
  }
  input {
    width: 0.8125rem;
    position: relative;
    top: -0.0625rem;
  }
`;
