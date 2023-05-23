import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { joinApi } from "../../api/joinApi";

export default function Join() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const moveLogin = () => {
    navigate("/Login");
  };

  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const result = await joinApi(data);

      if (result === "success") {
        alert("회원 가입이 성공적으로 완료되었습니다.");
        moveLogin();
      } else {
        throw new Error("회원가입 실패했습니다.");
      }
    } catch (error) {
      setError("회원가입 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <StyledJoin>
      <div className="JoinWrap">
        <h3 className="Title"> JOIN US </h3>
        <button className="ExitBtn" onClick={moveLogin}>
          &times;
        </button>

        <form className="JoinForm" onSubmit={handleSubmit(onSubmit)}>
          <tbody className="JoinWrapper">
            <tr>
              <th>Name</th>
              <td>
                <input type="text" placeholder="Name" {...register("name")} />
              </td>
            </tr>
            <tr>
              <th>ID</th>
              <td>
                <input type="text" placeholder="ID" {...register("id")} />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password")}
                />
              </td>
            </tr>
            <tr>
              <th>Password Check</th>
              <td>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password")}
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
                />
              </td>
            </tr>
            <tr>
              <th>PhoneNumber</th>
              <td>
                <input
                  type="tel"
                  placeholder="PhoneNumber"
                  {...register("tel")}
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
                    {...register("address")}
                  />
                  <button className="ChkBtn">우편번호</button>
                </div>
                <div className="moreAddress">
                  <input type="text" placeholder="기본주소" />
                  <input type="text" placeholder="상세주소" />
                </div>
              </td>
            </tr>
            <tr>
              <th>생년월일</th>
              <td className="birthWrap">
                <input className="birth" type="Number" placeholder="year" />
                <input className="birth" type="Number" placeholder="month" />
                <input className="birth" type="Number" placeholder="day" />
              </td>
            </tr>
          </tbody>
          <button className="JoinSubmit">Join Now</button>
          {error && <p className="ErrorMessage">{error}</p>}
        </form>
      </div>
    </StyledJoin>
  );
}

const StyledJoin = styled.div`
  .ExitBtn {
    top: 5px;
    font-size: 45px;
    position: absolute;
    width: 100px;
    right: 480px;
    cursor: pointer;
    background-color: #fff;
    border: 0;
  }

  .Title {
    text-align: center;
    margin-top: 2%;
    padding-top: 10px;
    color: #333;
    margin-left: 30px;
  }
  .JoinForm {
    width: 1060px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-left: 200px;
    height: 100%;
  }
  th {
    color: aliceblue;
    font-size: 13px;
    padding: 1px 20px 0 0;
  }
  td {
    padding: 6px 0px 6px;
    border-bottom: 1px solid #ddd;
  }
  input {
    height: 20px;
    width: 280px;
  }
  .NumberChkWrap {
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
  }
  .NumberChk {
    width: 195px;
  }
  .NumberChkWrap > button {
    width: 80px;
    background-color: #fff;
    color: #aaa;
    cursor: pointer;
  }
  .addressWrap {
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
  }
  .addressWrap > input {
    width: 195px;
  }
  .addressWrap > button {
    background-color: #fff;
    cursor: pointer;
    color: #aaa;
    width: 80px;
  }
  .moreAddress {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .birthWrap {
    display: flex;
    gap: 5px;
  }
  .birth {
    width: 85px;
  }
  .JoinSubmit {
    position: absolute;
    margin-left: 115px;
    bottom: 140px;
    width: 290px;
    height: 80px;
    background-color: #171717;
    color: aliceblue;
    cursor: pointer;
  }
  input::placeholder {
    color: lightgrey;
  }
`;
