import { styled } from "styled-components";
import { useForm } from "react-hook-form";

export default function JoinBirth() {
  const { register } = useForm();
  return (
    <StyledBirth>
      <tr>
        <th>생년월일</th>
        <BirthWrap>
          <Birth
            type="number"
            placeholder="year"
            {...register("year", { required: true })}
          />
          <Birth
            type="number"
            placeholder="month"
            {...register("month", { required: true })}
          />
          <Birth
            type="number"
            placeholder="day"
            {...register("day", { required: true })}
          />
        </BirthWrap>
      </tr>
    </StyledBirth>
  );
}
const StyledBirth = styled.div`
  margin-left: 43px;
`;
const BirthWrap = styled.td`
  display: flex;
  gap: 0.3125rem;
`;
const Birth = styled.input`
  width: 5.3125rem;
`;
