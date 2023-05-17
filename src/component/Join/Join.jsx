import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const moveLogin = () => {
    navigate("/Login");
  };

  return (
    <StyledJoin>
      <div className="JoinWrap">
        <h3 className="Title"> JOIN US </h3>
        <button className="ExitBtn" onClick={moveLogin}>
          &times;
        </button>

        <form
          className="JoinForm"
          onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
        >
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
                <div className="idChkWrap">
                  <input
                    className="idInput"
                    type="text"
                    placeholder="ID"
                    {...register("id")}
                  />
                  <button className="doubleChk">중복확인</button>
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
            <tr>
              <th>성별</th>
              <td className="genderWrap">
                <label htmlFor="male">남</label>
                <input type="radio" id="male" name="gender" value="male" />

                <label htmlFor="female">여</label>
                <input type="radio" id="female" name="gender" value="female" />
              </td>
            </tr>
          </tbody>
          <button className="JoinSubmit">Join Now</button>
        </form>
      </div>
    </StyledJoin>
  );
}

const StyledJoin = styled.div`
  margin-top: 80px;
  height: 625px;
  .ExitBtn {
    top: 5px;
    font-size: 45px;
    position: absolute;
    width: 100px;
    right: 480px;
    cursor: pointer;
    background-color: #fff;
    border: 0;
    margin-top: 50px;
  }

  .Title {
    text-align: center;
    margin-top: 2%;
    padding-top: 10px;
    color: #333;
    margin-left: 30px;
    margin-bottom: 20px;
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
  .idChkWrap {
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
  }
  .idInput {
    width: 195px;
  }
  .idChkWrap > button {
    width: 80px;
    background-color: #fff;
    color: #aaa;
    cursor: pointer;
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
    margin-bottom: 5px;
  }
  .birth {
    width: 85px;
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
    width: 15px;
    font-size: 14px;
  }
  .genderWrap > input {
    width: 13px;
    position: relative;
    top: -1px;
  }
  .JoinSubmit {
    position: absolute;
    margin-left: 115px;
    bottom: 90px;
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
