import { styled } from "styled-components";

export default function OrderCount() {
  return (
    <StyledOrderCount>
      <Title>주문 수</Title>
      <div>orderCount/임시/</div>
    </StyledOrderCount>
  );
}

const StyledOrderCount = styled.div`
  border: 1px solid #aaa;
  padding: 3px;
  border-radius: 10px;
`;
const Title = styled.div`
  text-align: center;
`;
