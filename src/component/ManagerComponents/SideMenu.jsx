import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardPage from "./Dashboard/DashboardPage";
import UserManage from "./UserManage";
import Register from "../../page/Register";

export default function SideMenu() {
  const navigate = useNavigate();
  const movehome = () => {
    navigate("/");
  };
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [menuContent, setMenuContent] = useState("대시보드");
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    // 메뉴 선택 조건
    if (menu === "dashboard") {
      setMenuContent("대시보드");
    } else if (menu === "user") {
      setMenuContent("사용자 관리");
    } else if (menu === "content") {
      setMenuContent("컨텐츠 관리");
    } else if (menu === "payment") {
      setMenuContent("결제");
    } else if (menu === "shopping") {
      setMenuContent("쇼핑");
    } else if (menu === "setting") {
      setMenuContent("환경설정");
    }
  };
  return (
    <StyledSideMenu>
      <div className="sideMneuWrap">
        <ul className="sidemenuItemWrap">
          <li
            className={`home ${selectedMenu === "home" ? "active" : ""}`}
            onClick={movehome}
          >
            kekemon
          </li>
          <li
            className={`${selectedMenu === "dashboard" ? "active" : ""}`}
            onClick={() => handleMenuClick("dashboard")}
          >
            대시보드
          </li>
          <li
            className={`${selectedMenu === "user" ? "active" : ""}`}
            onClick={() => handleMenuClick("user")}
          >
            사용자 관리
          </li>
          <li
            className={`${selectedMenu === "content" ? "active" : ""}`}
            onClick={() => handleMenuClick("content")}
          >
            컨텐츠 관리
          </li>
          <li
            className={`${selectedMenu === "payment" ? "active" : ""}`}
            onClick={() => handleMenuClick("payment")}
          >
            결제
          </li>
          <li
            className={`${selectedMenu === "shopping" ? "active" : ""}`}
            onClick={() => handleMenuClick("shopping")}
          >
            쇼핑
          </li>
          <li
            className={`${selectedMenu === "setting" ? "active" : ""}`}
            onClick={() => handleMenuClick("setting")}
          >
            환경설정
          </li>
        </ul>
      </div>
      <div className="DashboardPage">
        {selectedMenu === "dashboard" && <DashboardPage />}
      </div>
      <div className="UserManage">
        {selectedMenu === "user" && <UserManage />}
      </div>
      <ContentsPage>{selectedMenu === "content" && <Register />}</ContentsPage>
    </StyledSideMenu>
  );
}

const StyledSideMenu = styled.div`
  margin-top: 60px;
  display: flex;
  position: sticky;
  .home {
    padding-top: 10px;
    line-height: 1;
  }
  .sideMneuWrap {
    /* margin-top: 60px; */
    float: left;
    width: 200px;
    height: 100%;
    margin-right: 20px;
  }
  ul li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .sideMneuWrap > ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 2;
    gap: 3px;
  }
  .sidemenuItemWrap > li {
    border-bottom: 1px solid #333;
    background-color: #333;
    height: 30px;
    cursor: pointer;
    color: #fff;
  }
  .DashboardPage {
  }
`;

const ContentsPage = styled.div`
  background-color: #fff;
`;
