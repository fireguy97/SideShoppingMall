import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const moveHome = () => {
    navigate("/");
  };
  return (
    <StyledProfile>
      <button className="exitBtn" onClick={moveHome}>
        &times;
      </button>
      <h3 className="title">Profile</h3>
      <div className="subTitle">
        <div>UserInfo</div>
        <div className="postListTitle">PostList</div>
      </div>
      <div className="pageWrpper">
        <div className="userInfoPostListWrap">
          <div className="userInfo">
            <ul className="infoCategory">
              <li>이름</li>
              <li>아이디</li>
              <li>생일</li>
              <li>핸드폰 번호</li>
              <li>이메일</li>
              <li>SNS 수신동의</li>
            </ul>
            <ul className="infoSubstance">
              <input type="text" placeholder="Name" value="Name" disabled />
              <input type="ID" placeholder="ID" value="ID" disabled />
              <input type="date" disabled />
              <input type="tel" placeholder="PhoneNumber" />
              <input type="email" placeholder="Email" />
              <div className="agreeWrap">
                <div className="agreeContainer">
                  <label className="agree" htmlFor="yes">
                    Y
                  </label>
                  <input name="agreeOption" type="radio" value="yes" />
                </div>
                <div className="disAgreeContainer">
                  <label className="disAgree" htmlFor="no">
                    N
                  </label>
                  <input name="agreeOption" type="radio" value="no" />
                </div>
              </div>
            </ul>
          </div>
          <div className="postListWrap">
            <ul className="postDate">
              <li>date</li>
              <li>date</li>
              <li>date</li>
              <li>date</li>
              <li>date</li>
              <li>date</li>
            </ul>
            <ul className="postContent">
              <li>ex 재고문의</li>
              <li>ex 사이즈문의</li>
              <li>ex 배송문의</li>
              <li>ex 배송문의</li>
              <li>ex 배송문의</li>
              <li>ex 배송문의</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="submitBtn">
        <button className="fixComplete">수정완료</button>
        <button className="delectingAccount">회원탈퇴</button>
      </div>
    </StyledProfile>
  );
}

const StyledProfile = styled.div`
  width: 1280px;
  margin: 0 auto;
  margin-bottom: 150px;

  ul li {
    list-style: none;
  }
  .exitBtn {
    font-size: 45px;
    position: relative;
    margin-left: 1050px;
    top: 55px;
    background-color: #fff;
    border: 0;
    cursor: pointer;
  }
  .pageWrpper {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  .title {
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
  }
  .subTitle {
    display: flex;
    justify-content: center;
    gap: 450px;
    margin-bottom: 20px;
  }
  .postListTitle {
    position: relative;
    right: 50px;
  }

  .userInfoPostListWrap {
    display: flex;
    gap: 150px;
  }
  .userInfo {
    display: flex;
    position: relative;
    gap: 20px;
  }
  .infoCategory {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .infoCategory > li {
    height: 35px;
    text-align: center;
    font-size: 12px;
    line-height: 3;
    font-weight: 600;
  }
  .infoSubstance {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .infoSubstance > input {
    height: 30px;
  }
  .agreeWrap > input {
    width: 10px;
  }
  .agreeWrap {
    display: flex;
    justify-content: center;
    padding-top: 5px;
    gap: 15px;
  }
  .agree,
  .disAgree {
    font-size: 13px;
    font-weight: 600;
    color: #333;
  }
  .postListWrap {
    position: relative;
    /* right: 100px; */
    display: flex;
    height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 0;
    margin-top: -5px;
  }
  .postListWrap::-webkit-scrollbar {
    width: 0.5em;
  }

  .postListWrap::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  .postDate > li {
    height: 60px;
    width: 60px;
    border: 1px solid #aaa;
    text-align: center;
    line-height: 3.5;
  }
  .postContent > li {
    height: 60px;
    width: 350px;
    border: 1px solid #aaa;
    border-left: none;
  }
  .postContent {
    padding: 0;
    line-height: 3.5;
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
