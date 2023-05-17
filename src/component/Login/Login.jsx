import { useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [isMember, setIsMember] = useState(false);
  const navigate = useNavigate();
  const moveJoin = () => {
    navigate("/Join");
  };
  const moveFind = () => {
    navigate("/IdPasswordFind");
  };
  const moveManager = () => {
    navigate("/managerPage");
  };
  const moveProfile = () => {
    navigate("/Profile");
  };

  return (
    <StyledLogin>
      <div className="imsiBtn">
        <button onClick={moveManager}>관리자 페이지</button>
        <button onClick={moveProfile}>프로필 페이지</button>
      </div>
      <form
        className="formWrapper"
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
      >
        <div className="title">kekemon</div>
        <div>
          <ul className="memberSep">
            <li
              className={isMember ? "member selected" : "member"}
              onClick={() => setIsMember(true)}
            >
              회원
            </li>
            <li
              className={!isMember ? "nonMember selected" : "nonMember"}
              onClick={() => setIsMember(false)}
            >
              비회원
            </li>
          </ul>

          <div className="loginForm">
            {isMember ? (
              <>
                <div className="loginInputWrap">
                  <label htmlFor="">
                    <input
                      className="inputEmail"
                      placeholder="ID"
                      type="email"
                      {...register("email")}
                    />
                  </label>
                  <label htmlFor="">
                    <input
                      type="password"
                      className="inputPassword"
                      placeholder="Password"
                      {...register("password")}
                    />
                  </label>
                </div>
                <div className="loginSubmitWrap">
                  <button className="submitLogin" type="submit">
                    {" "}
                    Login{" "}
                  </button>
                </div>
              </>
            ) : (
              <div className="nonMemberChkWrap">
                <div className="orderChkWrap">
                  <label htmlFor="">
                    <input
                      type="text"
                      placeholder="Name"
                      className="orderName"
                    />
                  </label>
                  <label htmlFor="">
                    <input
                      type="tel"
                      placeholder="PhoneNumber"
                      className="orderPhNum"
                    />
                  </label>
                  <label htmlFor="">
                    <input
                      type="number"
                      placeholder="OrderNumber"
                      className="orderNum"
                    />
                  </label>
                </div>
                <button className="orderDeliverChkBtn">Order Check</button>
              </div>
            )}
          </div>
          <div className="joinAndFinder">
            <a href="#" onClick={moveFind}>
              ID / Password
            </a>{" "}
            ㅣ{" "}
            <a href="#" onClick={moveJoin}>
              {" "}
              Join
            </a>
          </div>
        </div>
      </form>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  height: 575px;
  ul,
  ol,
  li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .imsiBtn {
    margin-top: 50px;
  }
  .title {
    margin-top: 80px;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 30px;
    text-align: center;
    margin-left: 10px;
  }
  .formWrapper {
    width: 600px;
    margin: 0 auto;
  }
  .memberSep {
    display: flex;
    justify-content: center;
    gap: 1px;
    margin-bottom: 20px;
    margin-left: 30px;
  }
  .memberSep > li {
    width: 200px;
    border: 1px solid #333;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    color: #333;
    text-align: center;
    height: 25px;
    line-height: 1.5;
  }
  .loginForm {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .loginInputWrap {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-top: 30px;
    gap: 5px;
  }
  .loginInputWrap > label > input {
    width: 300px;
    height: 30px;
    margin-left: 30px;
    color: #8f8f91;
    border: 1px solid #d9d9d9;
  }
  .inputEmail::placeholder {
    color: lightgrey;
  }
  .inputPassword::placeholder {
    color: lightgrey;
  }
  .submitLogin {
    width: 80px;
    height: 75px;
    background-color: #333;
    color: #fff;
  }
  .loginSubmitWrap {
    margin-top: 30px;
  }
  .joinAndFinder {
    color: #333;
    font-size: 14px;
    display: flex;
    justify-content: center;
    margin-left: 10px;
    gap: 20px;
  }
  .nonMemberChkWrap {
    display: flex;
    gap: 20px;
  }
  .orderChkWrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .orderChkWrap > label > input {
    width: 275px;
    height: 25px;
    margin-left: 30px;
    color: #8f8f91;
    border: 1px solid #d9d9d9;
  }
  .orderDeliverChkBtn {
    background-color: #333;
    color: #fff;
  }
  .orderName::placeholder,
  .orderPhNum::placeholder,
  .orderNum::placeholder {
    color: lightgrey;
  }
  .selected {
    background-color: #333;
    color: #fff !important;
  }
`;
