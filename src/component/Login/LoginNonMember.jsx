import { styled } from "styled-components";

export default function LoginNonMember() {
  return (
    <StyledNonMember>
      <div className="nonMemberChkWrap">
        <div className="orderChkWrap">
          <label htmlFor="">
            <input type="text" placeholder="Name" className="orderName" />
          </label>
          <label htmlFor="">
            <input
              type="tel"
              placeholder="PhoneNumber"
              className="orderPhNum"
            />
          </label>
          <label htmlFor="">
            <input
              type="number"
              placeholder="OrderNumber"
              className="orderNum"
            />
          </label>
        </div>
        <button className="orderDeliverChkBtn">Order Check</button>
      </div>
    </StyledNonMember>
  );
}

const StyledNonMember = styled.div`
  .nonMemberChkWrap {
    display: flex;
    gap: 1.25rem;
  }
  .orderChkWrap {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }
  .orderChkWrap > label > input {
    width: 17.1875rem;
    height: 1.5625rem;
    margin-left: 1.875rem;
    color: #8f8f91;
    border: 0.0625rem solid #d9d9d9;
  }
  .orderDeliverChkBtn {
    background-color: #333;
    color: #fff;
  }
  .orderName::placeholder,
  .orderPhNum::placeholder,
  .orderNum::placeholder {
    color: lightgrey;
  }
`;
