import styled from "styled-components";
import * as D from "./DashBoardStyle";

export default function OrderState() {
  return (
    <D.DashboardTopBlock>
      <D.TopTitle>주문상태 현황</D.TopTitle>
      <D.TopBlockDetailWrap>
        <D.TopBlockResultWrap>
          <OrderStateSubTitle>입금대기</OrderStateSubTitle>
          <OrderStateSubTitle>입금완료</OrderStateSubTitle>
          <OrderStateSubTitle>배송준비</OrderStateSubTitle>
          <OrderStateSubTitle>배송중</OrderStateSubTitle>
          <OrderStateSubTitle>배송완료</OrderStateSubTitle>
        </D.TopBlockResultWrap>
        <D.TopBlockResultWrap>
          <OrderStateResult>67</OrderStateResult>
          <OrderStateResult>247850</OrderStateResult>
          <OrderStateResult>67</OrderStateResult>
          <OrderStateResult>247850</OrderStateResult>
          <OrderStateResult>67</OrderStateResult>
        </D.TopBlockResultWrap>
      </D.TopBlockDetailWrap>
    </D.DashboardTopBlock>
  );
}

const OrderStateSubTitle = styled.div`
  width: 80px;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  padding: 10px 8px;
  text-align: center;
`;
const OrderStateResult = styled.div`
  width: 80px;
  padding: 10px 8px;
  text-align: center;
  background-color: #e1e2e3;
  font-weight: 600;
`;
