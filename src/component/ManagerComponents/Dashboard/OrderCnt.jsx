import { styled } from "styled-components";
import * as D from "./DashBoardStyle";

export default function OrderCount() {
  return (
    <D.DashboardTopBlock>
      <D.TopTitle>전체 주문현황</D.TopTitle>
      <D.TopBlockDetailWrap>
        <D.TopBlockResultWrap>
          <OrderCntTitle>총 주문건수</OrderCntTitle>
          <TotalAmountTitle>총 주문액</TotalAmountTitle>
        </D.TopBlockResultWrap>
        <D.TopBlockResultWrap>
          <OrderCnt>67</OrderCnt>
          <TotalAmount>247850</TotalAmount>
        </D.TopBlockResultWrap>
      </D.TopBlockDetailWrap>
    </D.DashboardTopBlock>
  );
}

const OrderTitle = `
width: 220px;
background-color: #333;
color: #fff;
font-size: 14px;
padding: 10px 8px;
text-align: center;
`;
const OrderResult = `
width: 220px;
padding: 10px 8px;
text-align: center;
background-color: #e1e2e3;
font-weight: 600;
`;

const OrderCntTitle = styled.div`
  ${OrderTitle}
  max-width: 80px;
`;
const TotalAmountTitle = styled.div`
  ${OrderTitle}
  min-width: 140px;
`;

const OrderCnt = styled.div`
  ${OrderResult}
  max-width: 80px;
`;
const TotalAmount = styled.div`
  ${OrderResult}
  min-width: 140px;
`;
