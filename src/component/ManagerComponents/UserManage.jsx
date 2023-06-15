import { styled } from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserManage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "http://119.193.0.189:8080/getUserList"
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, []);
  return (
    <StyledUserManage>
      <MenuTitle>사용자 목록</MenuTitle>
      <SearchUser type="text" />
      <UserMain>
        <UserList>
          <Membercategory>
            <li>이름</li>
            <li>ID</li>
            <li>회원 유형</li>
            <li>가입일</li>
            <li>누적 구매 금액</li>
            <li>작성한 글</li>
          </Membercategory>
          {/* {users.map((user)=> {})} */}
          <UserSubstance>
            <li>username</li>
            <li>userID</li>
            <li>userType</li>
            <li>userJoinDate</li>
            <li>userAmount</li>
            <li>userPost</li>
          </UserSubstance>
        </UserList>
      </UserMain>
    </StyledUserManage>
  );
}
const UserMain = styled.div`
  width: 800px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
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
const UserList = styled.div``;
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
    height: 50px;
    text-align: center;
    line-height: 3;
  }
`;
const StyledUserManage = styled.div`
  margin-left: 100px;
  .selectedMenu {
    height: 20px;
  }
`;
