import { styled } from "styled-components";
import SideMenu from "../../component/ManagerComponents/SideMenu";
import Layout from "../../layout/Layout";

export default function ManagerPage() {
  return (
    <Layout>
      <StyledManagerPage>
        <SideMenu />
      </StyledManagerPage>
    </Layout>
  );
}

const StyledManagerPage = styled.div``;
