import Login from "../../component/Login/Login";
import Layout from "../../layout/Layout";
import { styled } from "styled-components";

export default function LoginPage() {
  return (
    <Layout>
      <StyledLoginPage>
        <Login />
      </StyledLoginPage>
    </Layout>
  );
}

const StyledLoginPage = styled.div``;
