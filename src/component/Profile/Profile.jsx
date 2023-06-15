import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import UserInfoFix from "./UserInfo";
import PostList from "./PostList";
import Withdraw from "./UserWithdraw";

export default function Profile() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const moveHome = () => {
    navigate("/");
  };

  const handleFixComplete = async () => {
    try {
      await axios.post(
        `http://119.193.0.189:8080/updateUserInfo?id=${userInfo.userId}`,
        userInfo
      );
      console.log("User info updated successfully");
      console.log(userInfo);
    } catch (error) {
      console.error("Error updating user info", error);
    }
  };
  return (
    <StyledProfile>
      <ExitBtn onClick={moveHome}>&times;</ExitBtn>
      <Title>Profile</Title>
      <SubTitle>
        <div>UserInfo</div>
        <PostListTitle>PostList</PostListTitle>
      </SubTitle>
      <PageWrpper>
        <div className="userInfoPostListWrap">
          <UserInfo>
            <UserInfoFix />
          </UserInfo>
          <PostList />
        </div>
      </PageWrpper>
      <SubmitBtnWrap>
        <FixComplete onClick={handleFixComplete}>수정완료</FixComplete>
        <Withdraw />
      </SubmitBtnWrap>
    </StyledProfile>
  );
}
const ExitBtn = styled.button`
  font-size: 45px;
  position: relative;
  margin-left: 1050px;
  top: 55px;
  background-color: #fff;
  border: 0;
  cursor: pointer;
`;
const Title = styled.h3`
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
`;
const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: 450px;
  margin-bottom: 20px;
`;
const PostListTitle = styled.div`
  position: relative;
  right: 50px;
`;
const PageWrpper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
const UserInfo = styled.div`
  display: flex;
  position: relative;
  gap: 20px;
`;

const SubmitBtnWrap = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  button {
    cursor: pointer;
    background-color: #333;
    color: #fff;
    border: 0;
    width: 200px;
  }
`;
const FixComplete = styled.button`
  cursor: pointer;
  background-color: #333;
  color: #fff;
  border: 0;
  width: 200px;
`;
const StyledProfile = styled.div`
  width: 1280px;
  margin: 0 auto;
  margin-bottom: 150px;

  .userInfoPostListWrap {
    display: flex;
    gap: 150px;
  }

  .postListWrap::-webkit-scrollbar {
    width: 0.5em;
  }

  .postListWrap::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  .submitBtn {
    display: flex;
    gap: 5px;
    justify-content: center;
  }
  .submitBtn > button {
    cursor: pointer;
    background-color: #333;
    color: #fff;
    border: 0;
    width: 200px;
  }
`;
