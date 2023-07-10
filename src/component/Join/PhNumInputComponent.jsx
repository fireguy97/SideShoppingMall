import styled from "styled-components";

export default function PhNumInput({ register }) {
  return (
    <div>
      <div>
        <input
          type="tel"
          placeholder="PhoneNumber"
          {...register("phone")}
          required
        />
      </div>
      <NumberChkWrap>
        <input className="NumberChk" type="number" placeholder="인증번호" />
        <button className="ChkBtn">인증확인 </button>
      </NumberChkWrap>
    </div>
  );
}

const NumberChkWrap = styled.div`
  margin-top: 7px;
  display: flex;
  gap: 0.3125rem;
  margin-bottom: 0.3125rem;
  button {
    width: 5rem;
    background-color: #fff;
    color: #aaa;
    cursor: pointer;
  }
  .NumberChk {
    width: 12.1875rem !important;
  }
`;
