import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import React from "react";
import LoginKakao from "./kakaoLoginComponent";
import axios from "axios";
import { API_URL } from "../../api/api";

import LoginIsMember from "./LoginIsMember";
import LoginInput from "./LoginInput";
import LoginNonMember from "./LoginNonMember";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [isMember, setIsMember] = useState(true);
  const dispatch = useDispatch();

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

  const onSubmit = async (data) => {
    try {
      const requestData = new URLSearchParams();
      //객체에 key : value 형태로 저장
      requestData.append("loginId", data.loginId);
      requestData.append("password", data.password);

      const response = await axios.post(
        `${API_URL}/login`,
        requestData.toString()
      );
      const { token } = response.data;
      const { name } = response.data.userInfo;
      const { loginId } = response.data.userInfo;
      const { id } = response.data.userInfo;
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      localStorage.setItem("loginId", loginId);
      localStorage.setItem("id", id);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      return alert("이메일 혹은 비밀번호를 확인하세요");
    }
  };

  return (
    <StyledLogin>
      <div className="imsiBtn">
        <button onClick={moveManager}>관리자 페이지</button>
        <button onClick={moveProfile}>프로필 페이지</button>
      </div>
      <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="title">kekemon</div>
        <div>
          <LoginIsMember isMember={isMember} setIsMember={setIsMember} />

          <LoginForm>
            {isMember ? <LoginInput register={register} /> : <LoginNonMember />}
          </LoginForm>
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

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;
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

  .loginForm {
    display: flex;
    justify-content: center;
    margin-bottom: 1.25rem;
  }
  .joinAndFinder {
    color: #333;
    font-size: 0.875rem;
    display: flex;
    justify-content: center;
    margin-left: 0.625rem;
    gap: 1.25rem;
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
