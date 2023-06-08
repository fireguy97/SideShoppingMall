import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import IdMethod from "./IdMethodChoose";
import EmailInput from "./EmailInput";
import PhNumInput from "./PhNumInput";
import PassswordMethod from "./PasswordMethod";

export default function IdPasswordFind() {
  const { register, handleSubmit } = useForm();
  const [findMethod, setFindMethod] = useState("email");
  const [findMethodPassword, setfindMethodPassword] = useState("emailPw");
  const [idPwSelect, setIdPwSelect] = useState("id"); // 초기값을 "id"로 설정

  const navigate = useNavigate();

  const moveLogin = () => {
    navigate("/Login");
  };

  const handleFindMethod = (event) => {
    setFindMethod(event.target.value);
  };

  const handleFindMethodPassword = (event) => {
    setfindMethodPassword(event.target.value);
  };

  const handleSelectForm = (type) => {
    setIdPwSelect(type);
  };

  const handleSubmitEmailFind = (data) => {
    alert(JSON.stringify(data));
    console.log("id찾기");
  };

  const handleSubmitPasswordFind = (data) => {
    alert(JSON.stringify(data));
    console.log("pw찾기");
  };

  return (
    <StyledIdPasswordFind>
      <SelectWrap>
        <SelectBtn onClick={() => handleSelectForm("id")}>id</SelectBtn>{" "}
        {/* 클릭 시 ID 폼 선택 */}
        <SelectBtn onClick={() => handleSelectForm("pw")}>pw</SelectBtn>{" "}
        {/* 클릭 시 비밀번호 폼 선택 */}
      </SelectWrap>
      <ExitBtn onClick={moveLogin}>&times;</ExitBtn>
      {/* 아이디 찾기 */}
      <FindWrap>
        {idPwSelect === "id" ? ( // idPwSelect 상태에 따라 ID 폼 또는 비밀번호 폼 렌더링
          <EmailFindWrap onSubmit={handleSubmit(handleSubmitEmailFind)}>
            <IdTitle>ID FIND</IdTitle>
            {/* 아이디 찾는 방법 선택 */}
            <IdMethod
              findMethod={findMethod}
              handleFindMethod={handleFindMethod}
            />

            <FormInputWrap>
              <NameInput>
                <span>Name</span>
                <input type="text" placeholder="Name" {...register("name")} />
              </NameInput>
              {/* 방법이 email 일 때와 아닐 때 */}
              {findMethod === "email" ? (
                <EmailInput register={register} />
              ) : (
                <PhNumInput register={register} />
              )}
            </FormInputWrap>
            {/* 방법에 따른 submit 버튼 내용 */}
            {findMethod === "email" ? (
              <IdFindSub>Email</IdFindSub>
            ) : (
              <IdFindSub>Phone Number</IdFindSub>
            )}
          </EmailFindWrap>
        ) : (
          <PasswordFindWrap onSubmit={handleSubmit(handleSubmitPasswordFind)}>
            <PasswordTitle>PASSWORD FIND</PasswordTitle>
            {/* 패스워드 찾기에서 찾는 방법 email인지 password인지 확인 */}
            <PassswordMethod
              findMethodPassword={findMethodPassword}
              handleFindMethodPassword={handleFindMethodPassword}
            />
            <FormInputWrap>
              <IDInput>
                <span>ID</span>
                <input type="text" placeholder="ID" {...register("id")} />
              </IDInput>
              {/* 패스워드 찾기에서 찾는 방법 email인지 password인지에 따라 다른 내용 */}
              {findMethodPassword === "emailPw" ? (
                <EmailInput register={register} />
              ) : (
                <PhNumInput register={register} />
              )}
            </FormInputWrap>

            {findMethodPassword === "emailPw" ? (
              <IdFindSub>Email</IdFindSub>
            ) : (
              <IdFindSub>Phone Number</IdFindSub>
            )}
          </PasswordFindWrap>
        )}
      </FindWrap>
    </StyledIdPasswordFind>
  );
}
const SelectWrap = styled.div`
  top: 11.875rem;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  position: absolute;
`;
const SelectBtn = styled.button`
  border: 0.0625rem solid #fff;
  width: 9.375rem;
  height: 1.875rem;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;

const ExitBtn = styled.button`
  font-size: 2.8125rem;
  position: absolute;
  margin-left: 31.25rem;
  top: 5.3125rem;
  background-color: #fff;
  border: 0;
  cursor: pointer;
`;
const FindWrap = styled.div``;

const EmailFindWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const IdTitle = styled.h3`
  text-align: center;
  /* margin-top: 8.75rem; */
`;

const PasswordTitle = styled.h3`
  text-align: center;
  margin-bottom: 0.25rem;
  position: relative;
  top: -0.5rem;
`;
const FormInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
`;
const PasswordFindWrap = styled.form`
  display: flex;
  flex-direction: column;
`;
const NameInput = styled.div`
  display: flex;
  gap: 1.25rem;
  span {
    padding-right: 3.8125rem;
  }
`;
const IDInput = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledIdPasswordFind = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 39.0625rem;

  @media (max-width: 30rem) {
    .exitBtn {
      margin-left: 0.625rem;
    }

    .IdTitle,
    .PasswordTitle {
      margin-top: 0.625rem;
    }

    .ChooseFindMethod {
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 0.3125rem;
    }

    .nameInput {
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 0.3125rem;
    }

    .nameInput > span {
      padding-right: 0.3125rem;
    }

    .emailInput,
    .phoneNumberInput {
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 0.3125rem;
    }

    .idFindSub {
      width: 100%;
    }
  }
`;

const IdFindSub = styled.button`
  background-color: #333;
  color: #fff;
  height: 2.5rem;
  cursor: pointer;
`;
