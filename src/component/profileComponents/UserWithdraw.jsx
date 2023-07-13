import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../api/api";

export default function Withdraw() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const moveHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const keyId = localStorage.getItem("id");
    if (keyId) {
      setUserId(keyId);
    }
  }, []);

  const handleLogout = () => {
    // 로그아웃 처리
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("loginId");
    moveHome();
  };
  const handleWithdrawal = async () => {
    try {
      const response = await axios.post(`${API_URL}/withdraw?id=${userId}`);
      if (response.data.result) {
        handleLogout();
        console.log("회원탈퇴가 완료되었습니다.");
      } else {
        console.error("회원탈퇴 실패");
      }
    } catch (error) {
      console.error("회원탈퇴가 실패했습니다.", error);
    }
  };
  return <StyedWithdraw onClick={handleWithdrawal}>회원탈퇴</StyedWithdraw>;
}

const StyedWithdraw = styled.button`
  cursor: pointer;
  background-color: #333;
  color: #fff;
  border: 0;
  width: 200px;
`;
