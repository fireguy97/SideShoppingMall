import { styled } from "styled-components";

import OrderCount from "./OrderCnt";
import MonthSales from "./MonthSale";
import OrderState from "./OrderState";

export default function DashboardPage() {
  return (
    <ProductRegistWrap>
      <DashboarHeader>
        <OrderCount />
        <OrderState />
      </DashboarHeader>
      <MonthSales />
    </ProductRegistWrap>
  );
}

const ProductRegistWrap = styled.div`
  /* justify-content: center; */
  position: relative;
  display: flex;
  margin-left: 100px;
  gap: 20px;
  margin-top: 60px;
  flex-direction: column;
`;
const DashboarHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
