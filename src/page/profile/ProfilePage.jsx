import Profile from "../../component/profileComponents/Profile";
import Layout from "../../layout/Layout";
import { styled } from "styled-components";

export default function ProfilePage() {
  return (
    <Layout>
      <StyledProfilePage>
        <Profile />
      </StyledProfilePage>
    </Layout>
  );
}

const StyledProfilePage = styled.div``;
