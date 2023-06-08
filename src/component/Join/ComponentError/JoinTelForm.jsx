import { styled } from "styled-components";
import { useForm } from "react-hook-form";

export default function JoinTelForm() {
  const { register } = useForm();
  return (
    <StyledPhNum>
      <tr>
        <th>PhoneNumber</th>
        <td>
          <PhoneNumber
            type="tel"
            placeholder="PhoneNumber"
            {...register("phone")}
            required
          />
        </td>
      </tr>
      <tr>
        <th>citation</th>
        <td>
          <NumberChkWrap>
            <NumberChk type="number" placeholder="인증번호" />
            <ChkBtn>인증확인 </ChkBtn>
          </NumberChkWrap>
        </td>
      </tr>
    </StyledPhNum>
  );
}
const StyledPhNum = styled.div`
  margin-left: 9px;
`;
const PhoneNumber = styled.input`
  height: 1.25rem;
  width: 17.5rem;
`;
const NumberChkWrap = styled.div`
  display: flex;
  gap: 0.3125rem;
  margin-bottom: 0.3125rem;
`;
const NumberChk = styled.input`
  width: 12.1875rem;
`;
const ChkBtn = styled.button`
  width: 5rem;
  background-color: #fff;
  color: #aaa;
  cursor: pointer;
`;
