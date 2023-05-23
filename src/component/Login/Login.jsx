import { useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import LoginKakao from "./kakaoLoginComponent";

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
        <div className="kakaoForm">
          <LoginKakao />
        </div>
      </form>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  height: 35.9375rem;
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
    margin-top: 3.125rem;
  }
  .title {
    margin-top: 5rem;
    font-size: 1.875rem;
    font-weight: 500;
    margin-bottom: 1.875rem;
    text-align: center;
    margin-left: 0.625rem;
  }
  .formWrapper {
    width: 37.5rem;
    margin: 0 auto;
  }
  .memberSep {
    display: flex;
    justify-content: center;
    gap: 0.0625rem;
    margin-bottom: 1.25rem;
    margin-left: 1.875rem;
  }
  .memberSep > li {
    width: 12.5rem;
    border: 0.0625rem solid #333;
    cursor: pointer;
    border: 0.0625rem solid #d9d9d9;
    color: #333;
    text-align: center;
    height: 1.5625rem;
    line-height: 1.5;
  }
  .loginForm {
    display: flex;
    justify-content: center;
    margin-bottom: 1.25rem;
  }
  .loginInputWrap {
    display: flex;
    flex-direction: column;
    margin-right: 1.25rem;
    margin-top: 1.875rem;
    gap: 0.3125rem;
  }
  .loginInputWrap > label > input {
    width: 18.75rem;
    height: 1.875rem;
    margin-left: 1.875rem;
    color: #8f8f91;
    border: 0.0625rem solid #d9d9d9;
  }
  .inputEmail::placeholder {
    color: lightgrey;
  }
  .inputPassword::placeholder {
    color: lightgrey;
  }
  .submitLogin {
    width: 5rem;
    height: 4.6875rem;
    background-color: #333;
    color: #fff;
  }
  .loginSubmitWrap {
    margin-top: 1.875rem;
  }
  .joinAndFinder {
    color: #333;
    font-size: 0.875rem;
    display: flex;
    justify-content: center;
    margin-left: 0.625rem;
    gap: 1.25rem;
  }
  .nonMemberChkWrap {
    display: flex;
    gap: 1.25rem;
  }
  .orderChkWrap {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }
  .orderChkWrap > label > input {
    width: 17.1875rem;
    height: 1.5625rem;
    margin-left: 1.875rem;
    color: #8f8f91;
    border: 0.0625rem solid #d9d9d9;
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
  .kakaoForm {
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 48rem) {
    .formWrapper {
      width: 90%;
    }
  }

  @media only screen and (max-width: 30rem) {
    .formWrapper {
      width: 100%;
    }
    .title {
      font-size: 1.5rem;
    }
    .loginInputWrap > label > input,
    .orderChkWrap > label > input {
      width: 100%;
    }
    .submitLogin {
      width: 100%;
      height: 3.125rem;
    }
  }
`;
