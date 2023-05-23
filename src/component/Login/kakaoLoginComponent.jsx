import KakaoLogin from "react-kakao-login";
import { styled } from "styled-components";
import axios from "axios";

export default function LoginKakao() {
  const handleLogin = async (response) => {
    try {
      const kakaoToken = response.response.access_token;
      const result = await axios.post("/api/login", {
        token: kakaoToken,
      });
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFailure = (error) => {
    console.error(error);
  };
  return (
    <StyledLoginkakao>
      <KakaoLogin
        token="dca3d8099d9d4c511f2eac5b25e9b66a"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        render={(props) => (
          <button className="kakaoLoginBtn" onClick={props.onClick}>
            카카오로 로그인
          </button>
        )}
      />
    </StyledLoginkakao>
  );
}

const StyledLoginkakao = styled.div`
  .kakaoLoginBtn {
    background-color: #333;
    color: #fff;
    border-radius: 5px;
    border: solid 1px #333;
    width: 300px;
    height: 30px;
    margin-top: 20px;
  }
`;
