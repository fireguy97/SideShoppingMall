import { styled } from "styled-components";

export default function Profile() {
  return (
    <StyledProfile>
      <h3 className="title">Profile</h3>
      <div className="pageWrpper">
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
            <li>ex 김민규</li>
            <li>ex mk97</li>
            <li>ex date</li>
            <li>ex 01012345678</li>
            <li>ex email</li>
            <li>ex y or n</li>
          </ul>
          <div className="postList">내가 작성한 글 목록</div>
          <ul className="">
            <li>date</li>
            <li>date</li>
            <li>date</li>
            <li>date</li>
          </ul>
          <ul>
            <li>ex 재고문의</li>
            <li>ex 사이즈문의</li>
            <li>ex 배송문의</li>
            <li>ex 배송문의</li>
          </ul>
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
  width: 1060px;
  margin: 0 auto;

  ul li {
    list-style: none;
  }
  .pageWrpper {
    display: flex;
    justify-content: center;
  }
  .title {
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
  }
  .userInfo {
    display: flex;
  }
  .infoCategory {
    display: flex;
    flex-direction: column;
  }
  .infoCategory > li {
    height: 35px;
    text-align: center;
    font-size: 12px;
    line-height: 2.5;
    font-weight: 600;
  }
  .infoSubstance {
    display: flex;
    flex-direction: column;
  }
  .infoSubstance > li {
    border: 1px solid #e1e2e3;
    height: 35px;
  }
  .postList {
    position: relative;
    margin-left: 70px;
    margin-bottom: 30px;
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
