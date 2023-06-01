import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

export default function Join() {
  const { register, handleSubmit, setValue } = useForm();
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const [joinId, setJoinId] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

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
    try {
      const requestData = new URLSearchParams();
      requestData.append("loginId", data.loginId);
      requestData.append("name", data.name);
      requestData.append("password", data.password);
      requestData.append("email", data.email);
      requestData.append("phone", data.phone);
      requestData.append("birth", joinedData.birth);
      requestData.append("gender", data.gender);
      requestData.append("address", data.address);

      const response = await axios.post(
        "http://119.193.0.189:8080/join_loginId",
        requestData.toString()
      );
      if (response.data.result) {
        console.log("회원가입이 완료되었습니다.");
        navigate("/Login");
      } else {
        console.error("회원가입 실패");
      }
    } catch (error) {
      console.error("회원가입이 실패했습니다.", error);
    }
  };

  const checkIdDuple = async () => {
    try {
      const response = await axios.get(
        `http://119.193.0.189:8080/checkid?loginId=${joinId}`
      );

      if (response.data.result) {
        alert("아이디가 사용 가능합니다.");
        setIsFormValid(true);
      } else {
        alert("아이디가 이미 사용 중입니다.");
        setIsFormValid(false);
      }
    } catch (error) {
      console.error("아이디 중복확인 실패", error);
      setIsFormValid(false);
    }
  };

  const handlePostcode = (data) => {
    const { address, zonecode } = data;

    setValue("address", address);
    setValue("zonecode", zonecode);
    setOpenPopup(false);
  };

  const openPostcodeModal = () => {
    setOpenPopup(true);
  };
  const postcodeStyle = {
    position: "absolute",
    top: "-10px",
    display: "block",
    width: "450px",
    height: "400px",
    border: "1px solid #333",
    marginLeft: "130px",
  };

  return (
    <StyledJoin>
      <div className="JoinWrap">
        <div className="joinHead">
          <h3 className="Title"> JOIN US </h3>
          <button className="ExitBtn" onClick={moveLogin}>
            &times;
          </button>
        </div>

        <form className="JoinForm" onSubmit={handleSubmit(handleJoinSubmit)}>
          <tbody className="JoinWrapper">
            <tr>
              <th>Name</th>
              <td>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>ID</th>
              <td>
                <div className="idChkWrap">
                  <input
                    className="idInput"
                    type="text"
                    placeholder="ID"
                    {...register("loginId")}
                    value={joinId}
                    onChange={(e) => setJoinId(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={checkIdDuple}
                    className="doubleChk"
                  >
                    중복확인
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password")}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>Password Check</th>
              <td>
                <input
                  type="password"
                  placeholder="password"
                  {...register("passwordCheck")}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>email</th>
              <td>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>PhoneNumber</th>
              <td>
                <input
                  type="tel"
                  placeholder="PhoneNumber"
                  {...register("phone")}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>citation</th>
              <td>
                <div className="NumberChkWrap">
                  <input
                    className="NumberChk"
                    type="number"
                    placeholder="인증번호"
                  />
                  <button className="ChkBtn">인증확인 </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>address</th>{" "}
              <td>
                <div className="addressWrap">
                  <input
                    type="text"
                    placeholder="address"
                    {...register("zonecode")}
                    // required
                    readOnly
                  />
                  <button
                    type="button"
                    className="ChkBtn"
                    onClick={openPostcodeModal}
                  >
                    우편번호
                  </button>
                </div>
                <div className="moreAddress">
                  <input
                    type="text"
                    placeholder="기본주소"
                    {...register("address")}
                    readOnly
                  />
                  <input type="text" placeholder="상세주소" />
                </div>
              </td>
            </tr>
            <tr>
              <th>생년월일</th>
              <td className="birthWrap">
                <input
                  className="birth"
                  type="text"
                  placeholder="year"
                  {...register("year")}
                />
                <input
                  className="birth"
                  type="text"
                  placeholder="month"
                  {...register("month")}
                />
                <input
                  className="birth"
                  type="text"
                  placeholder="day"
                  {...register("day")}
                />
              </td>
            </tr>
            <tr>
              <th>성별</th>
              <td className="genderWrap">
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
              </td>
            </tr>
          </tbody>
          {openPopup && (
            <div>
              {" "}
              <DaumPostcode
                style={postcodeStyle}
                onComplete={handlePostcode}
                animation
              />
            </div>
          )}
          <JoinSubmit type="submit" disabled={!isFormValid}>
            Join Now
          </JoinSubmit>
        </form>
      </div>
    </StyledJoin>
  );
}

const StyledJoin = styled.div`
  .JoinWrap {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .joinHead {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ExitBtn {
    font-size: 2.8125rem;
    width: 4.25rem;
    cursor: pointer;
    background-color: #fff;
    border: 0;
  }

  .Title {
    text-align: center;
    color: #333;
    margin-right: 100px;
    margin-left: 150px;
  }
  .JoinForm {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-right: 130px;
  }

  th {
    color: aliceblue;
    font-size: 0.8125rem;
    padding: 0.0625rem 1.25rem 0 0;
  }
  td {
    padding: 0.375rem 0rem 0.375rem;
    border-bottom: 0.0625rem solid #ddd;
  }
  input {
    height: 1.25rem;
    width: 17.5rem;
  }
  .idChkWrap {
    display: flex;
    gap: 0.3125rem;
    margin-bottom: 0.3125rem;
  }
  .idInput {
    width: 12.1875rem;
  }
  .idChkWrap > button {
    width: 5rem;
    background-color: #fff;
    color: #aaa;
    cursor: pointer;
  }
  .NumberChkWrap {
    display: flex;
    gap: 0.3125rem;
    margin-bottom: 0.3125rem;
  }
  .NumberChk {
    width: 12.1875rem;
  }
  .NumberChkWrap > button {
    width: 5rem;
    background-color: #fff;
    color: #aaa;
    cursor: pointer;
  }
  .addressWrap {
    display: flex;
    gap: 0.3125rem;
    margin-bottom: 0.3125rem;
  }
  .addressWrap > input {
    width: 12.1875rem;
    color: #aaa;
  }
  .addressWrap > button {
    background-color: #fff;
    cursor: pointer;
    color: #aaa;
    width: 5rem;
  }
  .moreAddress {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }
  .moreAddress > input {
    color: #aaa;
  }
  .birthWrap {
    display: flex;
    gap: 0.3125rem;
    margin-bottom: 0.3125rem;
  }
  .birth {
    width: 5.3125rem;
  }
  .genderWrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .genderWrap > label {
    padding: 0;
    margin: 0;
    width: 0.9375rem;
    font-size: 0.875rem;
  }
  .genderWrap > input {
    width: 0.8125rem;
    position: relative;
    top: -0.0625rem;
  }
  /* .JoinSubmit {
    position: relative;
    margin-left: 7.1875rem;
    width: 18.125rem;
    height: 5rem;
    background-color: #171717;
    color: aliceblue;
    cursor: pointer;
  } */
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
  margin-left: 7.1875rem;
  width: 18.125rem;
  height: 5rem;
  background-color: #171717;
  color: aliceblue;
  cursor: pointer;
`;
