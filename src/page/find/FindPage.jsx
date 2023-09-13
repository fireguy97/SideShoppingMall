import IdPasswordFind from "../../component/Find/IdPasswordFind";
import Layout from "../../layout/Layout";
import { styled } from "styled-components";

export default function LoginPage() {
  return (
    <Layout>
      <StyledLoginPage>
        <IdPasswordFind />
      </StyledLoginPage>
    </Layout>
  );
}

const StyledLoginPage = styled.div``;
