import { useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import styled from "styled-components";

export default function JoinIdForm() {
  const { register } = useForm();
  const [joinId, setJoinId] = useState("");
  const [isIdValid, setIsIdValid] = useState(false);

  const checkIdDuple = async () => {
    try {
      const response = await axios.get(
        `http://119.193.0.189:8080/checkid?loginId=${joinId}`
      );

      if (response.data.result) {
        alert("아이디가 사용 가능합니다.");
        setIsIdValid(true);
      } else {
        alert("아이디가 이미 사용 중입니다.");
        setIsIdValid(false);
      }
    } catch (error) {
      console.error("아이디 중복확인 실패", error);
      setIsIdValid(false);
    }
  };
  return (
    <StyledJoinId>
      <tr>
        <label>
          <NameInput type="text" placeholder="Name" {...register("name")} />
        </label>
      </tr>
      <tr>
        <th>ID</th>
        <td>
          <IdChkWrap>
            <IdInput
              type="text"
              placeholder="ID"
              {...register("loginId")}
              value={joinId}
              onChange={(e) => setJoinId(e.target.value)}
              required
            />
            <DoubleChk
              type="button"
              onClick={checkIdDuple}
              className="doubleChk"
            >
              중복확인
            </DoubleChk>
          </IdChkWrap>
        </td>
      </tr>
    </StyledJoinId>
  );
}
const StyledJoinId = styled.div`
  margin-left: 60px;
`;
const NameInput = styled.input`
  width: 17.4875rem;
`;
const IdChkWrap = styled.div`
  display: flex;
  gap: 0.3125rem;
  margin-bottom: 0.3125rem;
`;
const IdInput = styled.input`
  width: 12.1875rem;
`;
const DoubleChk = styled.button`
  width: 5rem;
  background-color: #fff;
  color: #aaa;
  cursor: pointer;
`;
