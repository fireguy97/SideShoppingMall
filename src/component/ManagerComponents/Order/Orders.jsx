import { styled } from "styled-components";
import React, { useState } from "react";

export default function Order() {
  const [searchWord, setSearchWord] = useState("");
  const [allOrders, setAllOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const handleSearchMethodChange = (e) => {
    setSearchWord(e.target.value);
  };
  return (
    <StyledOrder>
      <Title>주문리스트(전체)</Title>
      <OrderListWrap>
        <OrderListLabelWrap>
          <label htmlFor="orderSearchWord">검색어</label>
          <label htmlFor="dateInput">기간검색</label>
          <label htmlFor="">결제방법</label>
          <label htmlFor="">주문상태</label>
        </OrderListLabelWrap>
        <OrderListInputWrap>
          <OrderSearch>
            <select
              name="orderSearchMethod"
              onChange={handleSearchMethodChange}
            >
              <option value="">주문번호</option>
              <option value="">회원아이디</option>
              <option value="">입금자명</option>
            </select>

            <input type="text" name="orderSearchMethod" id="orderSearchWord" />
          </OrderSearch>
          <DateSearch>
            <select name="searchDate" id="searchDate">
              <option value="">주문일</option>
              <option value="">입금완료일</option>
              <option value="">주문취소일</option>
            </select>
            <input type="date" id="dateInput" />
            ~
            <input type="date" />
            <DateBtn>
              <input type="button" value={"오늘"}></input>
              <input type="button" value={"어제"}></input>
              <input type="button" value={"일주일"}></input>
              <input type="button" value={"한달"}></input>
            </DateBtn>
          </DateSearch>
          <InputRadioWrap>
            <InputRadio>
              <label htmlFor="allPayments">전체</label>
              <input type="radio" id="allPayments" name="paymentsMethod" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="BankPayment">무통장</label>
              <input type="radio" id="bankPayment" name="paymentsMethod" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="virtualAccount">가상계좌</label>
              <input type="radio" id="virtualAccount" name="paymentsMethod" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="creditCard">신용카드</label>
              <input type="radio" id="creditCard" name="paymentsMethod" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="tel">핸드폰</label>
              <input type="radio" id="tel" name="paymentsMethod" />
            </InputRadio>
          </InputRadioWrap>
          <InputRadioWrap>
            <InputRadio>
              <label htmlFor="allState">전체</label>
              <input type="radio" id="allState" name="orderState" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="depositWait">입금대기</label>
              <input type="radio" id="depositWait" name="orderState" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="depositDone">입금완료</label>
              <input type="radio" id="depositDone" name="orderState" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="readyforShip">배송준비</label>
              <input type="radio" id="readyforShip" name="orderState" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="shipping">배송중</label>
              <input type="radio" id="shipping" name="orderState" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="shipped">배송완료</label>
              <input type="radio" id="shipped" name="orderState" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="orderCancel">취소</label>
              <input type="radio" id="orderCancel" name="orderState" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="refund">환불</label>
              <input type="radio" id="refund" name="orderState" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="return">반품</label>
              <input type="radio" id="return" name="orderState" />
            </InputRadio>
            <InputRadio>
              <label htmlFor="exchange">교환</label>
              <input type="radio" id="exchange" name="orderState" />
            </InputRadio>
          </InputRadioWrap>
        </OrderListInputWrap>
      </OrderListWrap>
      <OrderSearchBtnWrap>
        <OrderSearchBtn>검색</OrderSearchBtn>
        <OrderSearchBtn>초기화</OrderSearchBtn>
      </OrderSearchBtnWrap>
      <OrderSearchResultWrap>
        <OrderSearchResultTitle>
          <li>번호</li>
          <li>주문일시</li>
          <li>주문번호</li>
          <li>주문상품</li>
          <li>수량</li>
          <li>상품금액</li>
          <li>주문상태</li>
          <li>주문자</li>
          <li>수령자</li>
          <li>총주문금액</li>
          <li>결제방식</li>
        </OrderSearchResultTitle>
        <OrderSearchResultListWrap>
          <li>1</li>
          <li>2023-06-29</li>
          <li>333</li>
          <li>kekemonT</li>
          <li>1</li>
          <li>10000</li>
          <li>배송중</li>
          <li>mk97</li>
          <li>mk97</li>
          <li>10000</li>
          <li>신용카드</li>
        </OrderSearchResultListWrap>
      </OrderSearchResultWrap>
    </StyledOrder>
  );
}
const StyledOrder = styled.div`
  width: 1060px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 600;
`;
const OrderListWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const OrderListLabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  label {
    width: 80px;
    height: 45px;
    line-height: 2.8;
    text-align: center;
    background-color: #e1e2e3;
  }
`;
const OrderListInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  padding-top: 8px;
  input {
    height: 25px;
  }
`;
const OrderSearch = styled.div`
  display: flex;
  gap: 10px;
`;
const DateSearch = styled.div`
  display: flex;
  gap: 10px;
`;
const DateBtn = styled.div`
  display: flex;
  gap: 5px;
  input {
    width: 50px;
    font-size: 12px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #aaa;
    cursor: pointer;
  }
`;
const InputRadioWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;
const InputRadio = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  label {
    text-align: center;
    font-size: 12px;
  }
`;
const OrderSearchBtnWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 1%;
`;
const OrderSearchBtn = styled.button`
  height: 40px;
  width: 60px;
  background-color: #333;
  color: #fff;
`;
const OrderSearchResultWrap = styled.div``;
const CommonColumnStyle = `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 6px !important;
  border: 1px solid #e1e2e3;
`;
const OrderSearchResultTitle = styled.ul`
  display: flex;
  max-width: 900px;
  min-width: 700px;
  li {
    ${CommonColumnStyle}
    font-weight: 600;
    font-size: 13px;
    background-color: #fff;
  }
  li:nth-child(1) {
    flex: 1;
  }
  li:nth-child(2) {
    flex: 1;
  }
  li:nth-child(3) {
    flex: 1;
  }
  li:nth-child(4) {
    flex: 1;
  }
  li:nth-child(5) {
    flex: 1;
  }
  li:nth-child(6) {
    flex: 1;
  }
  li:nth-child(7) {
    flex: 1;
  }
  li:nth-child(8) {
    flex: 1;
  }
  li:nth-child(9) {
    flex: 1;
  }
  li:nth-child(10) {
    flex: 1;
  }
  li:nth-child(11) {
    flex: 1;
  }
`;
const OrderSearchResultListWrap = styled.ul`
  display: flex;
  max-width: 900px;
  min-width: 700px;
  li {
    ${CommonColumnStyle}
    font-size: 13px;
    background-color: #fff;
  }
  li:nth-child(1) {
    flex: 1;
  }
  li:nth-child(2) {
    flex: 1;
  }
  li:nth-child(3) {
    flex: 1;
  }
  li:nth-child(4) {
    flex: 1;
  }
  li:nth-child(5) {
    flex: 1;
  }
  li:nth-child(6) {
    flex: 1;
  }
  li:nth-child(7) {
    flex: 1;
  }
  li:nth-child(8) {
    flex: 1;
  }
  li:nth-child(9) {
    flex: 1;
  }
  li:nth-child(10) {
    flex: 1;
  }
  li:nth-child(11) {
    flex: 1;
  }
`;
