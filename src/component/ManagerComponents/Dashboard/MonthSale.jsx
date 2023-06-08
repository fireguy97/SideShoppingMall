import { styled } from "styled-components";

export default function MonthSales() {
  return (
    <Sales>
      <Title>이번달 매출</Title>
      <div>sales/임시/</div>
    </Sales>
  );
}

const Sales = styled.div`
  border: 1px solid #aaa;
  padding: 3px;
  border-radius: 10px;
`;
const Title = styled.div`
  text-align: center;
`;
