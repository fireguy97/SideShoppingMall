import axios from "axios";
import styled from "styled-components";
import { API_URL } from "../../api/api";

export default function IdInput({
  onCheckIdDuple,
  register,
  joinId,
  setJoinId,
}) {
  const handleCheckIdDuple = async () => {
    try {
      const response = await axios.get(`${API_URL}/checkid?loginId=${joinId}`);

      if (response.data.result) {
        alert("아이디가 사용 가능합니다.");
        onCheckIdDuple(true);
      } else {
        alert("아이디가 이미 사용 중입니다.");
        onCheckIdDuple(false);
      }
    } catch (error) {
      console.error("아이디 중복확인 실패", error);
    }
  };
  return (
    <div>
      <IdChkWrap>
        <IdInputTag
          type="text"
          placeholder="ID"
          {...register("loginId", { value: joinId })}
          onChange={(e) => setJoinId(e.target.value)}
          required
        />
        <DoubleChk type="button" onClick={handleCheckIdDuple}>
          중복확인
        </DoubleChk>
      </IdChkWrap>
    </div>
  );
}
const IdChkWrap = styled.div`
  display: flex;
  gap: 0.3125rem;
  margin-bottom: 0.3125rem;
  button {
    width: 5rem;
    background-color: #fff;
    color: #aaa;
    cursor: pointer;
  }
`;
const IdInputTag = styled.input`
  width: 12.1875rem !important;
`;
const DoubleChk = styled.button``;
