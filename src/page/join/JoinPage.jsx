import Join from "../../component/Join/Join";
import Layout from "../../layout/Layout";
import { styled } from "styled-components";

export default function JoinPage() {
  return (
    <Layout>
      <StyledJoin>
        <Join />
      </StyledJoin>
    </Layout>
  );
}

const StyledJoin = styled.div``;
