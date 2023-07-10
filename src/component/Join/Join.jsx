import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { API_URL } from "../../api/api";

import IdInput from "./IdInputComponent";
import PasswordInput from "./PasswordInputComponent";
import EmailInput from "./EmailInputComponent";
import PhNumInput from "./PhNumInputComponent";
import AddressInput from "./AddresInputComponent";

export default function Join() {
  const { register, handleSubmit, setValue } = useForm();
  const [isFormValid, setIsFormValid] = useState(false);
  const [joinId, setJoinId] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  const navigate = useNavigate();
  const popupRef = useRef(null);

  const moveLogin = () => {
    navigate("/Login");
  };
  const handleJoinSubmit = async (data) => {
    if (!isFormValid) {
      return;
    }
    const { year, month, day, ...restData } = data;
    const joinedData = {
      ...restData,
      birth: `${year}${month}${day}`,
    };
    const { basicaddress, detailAddress, ...addrestData } = data;
    const allAddress = {
      ...addrestData,
      address: `${basicaddress}/${detailAddress}`,
    };
    try {
      const requestData = {
        loginId: data.loginId,
        name: data.name,
        password: data.password,
        email: data.email,
        phone: data.phone,
        birth: joinedData.birth,
        gender: data.gender,
        address: allAddress.address,
      };
      const response = await axios.post(`${API_URL}/join_loginId`, requestData);
      if (response.data.result) {
        console.log("회원가입이 완료되었습니다.");
        navigate("/Login");
        console.log(requestData);
      } else {
        console.error("회원가입 실패");
        console.log(requestData);
      }
    } catch (error) {
      console.error("회원가입이 실패했습니다.", error);
      console.log(isFormValid);
    }
  };

  const checkIdDuple = (result) => {
    if (result) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    const handlePopupClose = (e) => {
      if (
        openPopup &&
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setOpenPopup(false);
      }
    };

    document.addEventListener("click", handlePopupClose);
    return () => {
      document.removeEventListener("click", handlePopupClose);
    };
  }, [openPopup]);

  return (
    <StyledJoin>
      <JoinWrap ref={popupRef}>
        <JoinHead>
          <Title> JOIN US </Title>
          <ExitBtn onClick={moveLogin}>&times;</ExitBtn>
        </JoinHead>

        <JoinForm onSubmit={handleSubmit(handleJoinSubmit)}>
          <JoinWrapper>
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                required
              />
            </div>

            <IdInput
              register={register}
              onCheckIdDuple={checkIdDuple}
              joinId={joinId}
              setJoinId={setJoinId}
            />
            <PasswordInput register={register} />
            <EmailInput register={register} />
            <PhNumInput register={register} />
            <AddressInput
              setValue={setValue}
              register={register}
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            />

            <BirthWrap>
              <Birth
                type="text"
                placeholder="year"
                {...register("year")}
                required
              />
              <Birth
                type="text"
                placeholder="month"
                {...register("month")}
                required
              />
              <Birth
                type="text"
                placeholder="day"
                {...register("day")}
                required
              />
            </BirthWrap>

            <GenderWrap>
              <label htmlFor="male">남</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="M"
                {...register("gender", { defaultvalue: "M" })}
              />

              <label htmlFor="female">여</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="F"
                {...register("gender", { defaultvalue: "F" })}
              />
            </GenderWrap>
          </JoinWrapper>

          <JoinSubmit type="submit" disabled={!isFormValid}>
            Join Now
          </JoinSubmit>
        </JoinForm>
      </JoinWrap>
    </StyledJoin>
  );
}
const JoinWrap = styled.div`
  margin-top: 60px;
`;
const JoinHead = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;
const Title = styled.h3`
  font-weight: 600;
  margin-left: 170px;
`;
const ExitBtn = styled.button`
  font-size: 2.8125rem;
  width: 4.25rem;
  cursor: pointer;
  background-color: #fff;
  border: 0;
`;
const JoinForm = styled.form`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const BirthWrap = styled.td`
  display: flex;
  gap: 0.3125rem;
  margin-bottom: 0.3125rem;
`;
const Birth = styled.input`
  width: 5.3125rem !important;
`;
const GenderWrap = styled.td`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    padding: 0;
    margin: 0;
    width: 0.9375rem;
    font-size: 0.875rem;
  }
  input {
    width: 0.8125rem !important;
    position: relative;
    top: -0.0625rem;
  }
`;
const StyledJoin = styled.div`
  .Title {
    text-align: center;
    color: #333;
  }

  input {
    height: 1.25rem;
    width: 17.5rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  input::placeholder {
    color: lightgrey;
  }

  @media (max-width: 768px) {
    .JoinWrap {
      margin-top: 30px;
    }
    .joinHead {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 10px;
    }
    .ExitBtn {
      margin-top: 10px;
      margin-right: 0;
    }
    .Title {
      margin: 0;
    }
    .JoinForm {
      margin-right: 0;
    }
    input {
      width: 15rem;
    }
    .addressWrap > input {
      width: 11rem;
    }
    .JoinSubmit {
      margin-left: 0;
      width: 15rem;
    }
  }
`;

const JoinSubmit = styled.button`
  position: relative;
  width: 18.125rem;
  height: 5rem;
  background-color: #171717;
  color: aliceblue;
  margin-bottom: 50px;
  cursor: pointer;
`;
