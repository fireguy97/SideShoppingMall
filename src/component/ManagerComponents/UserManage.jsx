import { styled } from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UserManage() {
  const users = useSelector((state) => state.userList.users);
  return (
    <StyledUserManage>
      <div className="MenuTitle">사용자 목록</div>
      <div className="main">
        <input className="searchUser" type="text" />
        <div className="userList">
          <ul className="Membercategory">
            <li>이름</li>
            <li>ID</li>
            <li>회원 유형</li>
            <li>가입일</li>
            <li>누적 구매 금액</li>
            <li>작성한 글</li>
          </ul>
          {users.map((user) => (
            <ul className="userSubstance" key={user.userID}>
              <li>{user.username}</li>
              <li>{user.userID}</li>
              <li>{user.userType}</li>
              <li>{user.userJoinDate}</li>
              <li>{user.userAmount}</li>
              <li>{user.userPost}</li>
            </ul>
          ))}
        </div>
      </div>
    </StyledUserManage>
  );
}

const StyledUserManage = styled.div`
  margin-top: 60px;
  .selectedMenu {
    height: 20px;
  }
  .main {
    width: 800px;
    margin: 0 auto;
    background-color: #fff;
  }
  .searchUser {
    margin-top: 20px;
    width: 788px;
    height: 25px;
    display: flex;
    flex-direction: column;
  }
  .Membercategory {
    display: flex;
    padding: 0;
    margin: 0;
    margin-top: 20px;
    max-width: 800px;
    flex-wrap: wrap;
    gap: 0;
  }
  .Membercategory > li {
    border: 1px solid #333;
    width: 131px;
    height: 50px;
    text-align: center;
    line-height: 3;
  }
  .userSubstance {
    display: flex;
    padding: 0;
    margin: 0;
    max-width: 800px;
    flex-wrap: wrap;
    gap: 0;
  }
  .userSubstance > li {
    border: 1px solid #333;
    width: 131px;
    height: 50px;
    text-align: center;
    line-height: 3;
  }
`;
