import { styled } from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../api/api";

export default function UserManage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(`${API_URL}/getUserList`);
        setUsers(response.data.userList);
        console.log(response.data.userList);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <StyledUserManage>
      <UserMain>
        <MenuTitle>사용자 목록</MenuTitle>
        <SearchUser type="text" />
        <UserListWrap>
          <Membercategory>
            <li>이름</li>
            <li>ID</li>
            <li>가입일</li>
            <li>회원 유형</li>
            <li>누적 구매 금액</li>
            <li>작성한 글</li>
          </Membercategory>
          {users.map((user, index) => (
            <UserSubstance key={index}>
              <li>{user.username}</li>
              <li>{user.userID}</li>
              <JoinDate>{user.userJoinDate}</JoinDate>
              <li>{user.userType}</li>
              <li>{user.userAmount}</li>
              <li>{user.userPost}</li>
            </UserSubstance>
          ))}
        </UserListWrap>
      </UserMain>
    </StyledUserManage>
  );
}
const UserMain = styled.div`
  width: 800px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
const MenuTitle = styled.h3`
  text-align: center;
  font-weight: 600;
  margin-top: 10px;
`;
const SearchUser = styled.input`
  margin-top: 20px;
  width: 788px;
  height: 25px;
`;
const UserListWrap = styled.div``;
const Membercategory = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  max-width: 800px;
  flex-wrap: wrap;
  gap: 0;
  li {
    border: 1px solid #333;
    width: 131px;
    height: 50px;
    text-align: center;
    line-height: 3;
  }
`;
const UserSubstance = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  max-width: 800px;
  flex-wrap: wrap;
  gap: 0;
  li {
    border: 1px solid #333;
    width: 131px;
    height: 60px;
    text-align: center;
    line-height: 3;
  }
`;
const StyledUserManage = styled.div`
  .selectedMenu {
    height: 20px;
  }
`;
const JoinDate = styled.li`
  overflow: hidden;
`;
