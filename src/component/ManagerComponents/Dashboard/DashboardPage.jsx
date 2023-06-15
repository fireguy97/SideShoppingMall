import { styled } from "styled-components";

import OrderCount from "./OrderCnt";
import MonthSales from "./MonthSale";
import TodatVisitCnt from "./TodayVisit";

export default function DashboardPage() {
  return (
    <ProductRegistWrap>
      <OrderCount />
      <MonthSales />
      <TodatVisitCnt />
    </ProductRegistWrap>
  );
}

const ProductRegistWrap = styled.div`
  width: 800pxpx;
  margin: 0 auto;
  justify-content: center;
  position: relative;
  display: flex;
  margin-left: 100px;
  gap: 20px;
  margin-top: 60px;
`;
