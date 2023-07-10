import { styled } from "styled-components";

export default function OrderCancel() {
  return (
    <StyledOrderCancel>
      <Title>주문 취소</Title>
      <div>OrderCancel/임시/</div>
    </StyledOrderCancel>
  );
}

const StyledOrderCancel = styled.div`
  border: 1px solid #aaa;
  padding: 3px;
  border-radius: 10px;
`;
const Title = styled.div`
  text-align: center;
`;
