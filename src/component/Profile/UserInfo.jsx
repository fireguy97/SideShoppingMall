import { styled } from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

export default function UserInfoFix() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [loginId, setLoginId] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const keyId = localStorage.getItem("id");
    if (keyId) {
      setUserId(keyId);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      getUserInfo();
    }
  }, [userId]);

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        `http://119.193.0.189:8080/getUserInfo?id=${userId}`
      );
      const fetchedUserInfo = response.data;
      console.log(fetchedUserInfo);
      setName(fetchedUserInfo.userInfo.name);
      setLoginId(fetchedUserInfo.userInfo.loginId);
      setBirth(fetchedUserInfo.userInfo.birth);
      setPhone(fetchedUserInfo.userInfo.phone);
      setEmail(fetchedUserInfo.userInfo.email);
    } catch (error) {
      console.error("Error", error);
    }
  };

  // const UpdateUserInfo = () => {
  //   axios
  //     .post("/updateUserInfo")
  //     .then((response) => {
  //       console.log("updated");
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // };

  return (
    <InfoSubstance>
      <input type="text" value={name} readOnly />
      <input type="ID" value={loginId} readOnly />
      <input type="text" value={birth} readOnly />
      <input
        type="tel"
        value={phone}
        // onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
      />
      <input type="email" value={email} />
      <input type="text" />
      <AgreeWrap>
        <Agree htmlFor="yes">Y</Agree>
        <input name="agreeOption" type="radio" value="yes" />
        <DisAgree htmlFor="no">N</DisAgree>
        <input name="agreeOption" type="radio" value="no" />
      </AgreeWrap>
    </InfoSubstance>
  );
}
const InfoSubstance = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  input {
    height: 30px;
  }
`;
const AgreeWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  gap: 15px;
  align-items: center;
  input {
    width: 10px;
  }
`;
const Agree = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #333;
`;
const DisAgree = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #333;
`;
