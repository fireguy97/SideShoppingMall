import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IdPasswordFind() {
  const { register, handleSubmit } = useForm();
  const [findMethod, setFindMethod] = useState("email");
  const [findMethodPassword, setfindMethodPassword] = useState("emailP");
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
  return (
    <StyledIdPasswordFind>
      <button className="exitBtn" onClick={moveLogin}>
        &times;
      </button>
      {/* 아이디 찾기 */}
      <div className="FindWrap">
        <form
          className="EmailFindWrap"
          onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
        >
          <h3 className="IdTitle">ID FIND</h3>
          <div className="ChooseFindMethod">
            <input
              type="radio"
              name="findMethod"
              id="email"
              value="email"
              checked={findMethod === "email"}
              onChange={handleFindMethod}
            />
            <label htmlFor="email">Email</label>
            <input
              type="radio"
              name="findMethod"
              id="phoneNumber"
              value="phoneNumber"
              checked={findMethod === "phoneNumber"}
              onChange={handleFindMethod}
            />
            <label htmlFor="phoneNumber">Phone Number</label>
          </div>

          <div className="formInputWrap">
            <div className="nameInput">
              <span>Name</span>
              <input type="text" placeholder="Name" {...register("name")} />
            </div>
            {findMethod === "email" ? (
              <div className="emailInput">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  {...register("email")}
                />
              </div>
            ) : (
              <div className="phoneNumberInput">
                <span>PhoneNumber</span>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="PhoneNumber"
                  {...register("tel")}
                />
              </div>
            )}
          </div>

          {findMethod === "email" ? (
            <button className="idFindSub">Email</button>
          ) : (
            <button className="idFindSub">Phone Number</button>
          )}
        </form>
        {/* 비밀번호 찾기 */}
        <form
          className="PasswordFindWrap"
          onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
        >
          <h3 className="PasswordTitle">PASSWORD FIND</h3>
          <div className="ChooseFindMethod">
            <input
              type="radio"
              name="findMethod"
              id="email"
              value="emailP"
              checked={findMethodPassword === "emailP"}
              onChange={handleFindMethodPassword}
            />
            <label htmlFor="emailP">Email</label>
            <input
              type="radio"
              name="findMethod"
              id="phoneNumber"
              value="phNum"
              checked={findMethodPassword === "phNum"}
              onChange={handleFindMethodPassword}
            />
            <label htmlFor="phNum">Phone Number</label>
          </div>
          <div className="formInputWrap">
            <div className="IDInput">
              <span>ID</span>
              <input type="text" placeholder="ID" {...register("id")} />
            </div>
            {findMethodPassword === "emailP" ? (
              <div className="emailInput">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  {...register("email")}
                />
              </div>
            ) : (
              <div className="phoneNumberInput">
                <span>PhoneNumber</span>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="PhoneNumber"
                  {...register("tel")}
                />
              </div>
            )}
          </div>

          {findMethodPassword === "emailP" ? (
            <button className="idFindSub">Email</button>
          ) : (
            <button className="idFindSub">Phone Number</button>
          )}
        </form>
      </div>
    </StyledIdPasswordFind>
  );
}

const StyledIdPasswordFind = styled.div`
  display: flex;
  justify-content: center;
  height: 625px;
  .exitBtn {
    font-size: 45px;
    position: absolute;
    margin-left: 500px;
    top: 45px;
    background-color: #fff;
    border: 0;
    cursor: pointer;
  }

  .EmailFindWrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .IdTitle {
    text-align: center;
    margin-top: 80px;
  }
  .PasswordTitle {
    text-align: center;
    margin-top: 50px;
  }
  .ChooseFindMethod {
    display: flex;
    justify-content: center;
  }
  .ChooseFindMethod > label {
    margin-right: 5px;
  }
  .ChooseFindMethod > input {
    margin-left: 18px;
  }
  .formInputWrap {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .nameInput {
    display: flex;
    gap: 20px;
  }
  .nameInput > span {
    padding-right: 61px;
  }
  .emailInput {
    display: flex;
    justify-content: space-between;
  }
  .phoneNumberInput {
    display: flex;
    gap: 20px;
    justify-content: center;
    justify-content: space-between;
  }
  .idFindSub {
    background-color: #333;
    color: #fff;
    height: 40px;
  }
  .PasswordFindWrap {
    display: flex;
    flex-direction: column;
  }
  .IDInput {
    display: flex;
    justify-content: space-between;
  }
`;
