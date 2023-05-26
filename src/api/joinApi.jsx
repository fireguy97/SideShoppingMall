import axios from "axios";

export const joinApi = async (data) => {
  try {
    const response = await axios.post("http://119.193.0.189:8080/login", {
      loginId: data.loginId,
      password: data.password,
    });

    // 응답이 성공인지 확인
    if (response.status === 200) {
      return "success";
    } else {
      throw new Error("회원가입 실패했습니다.");
    }
  } catch (error) {
    throw new Error("회원가입 실패했습니다. 다시 시도해주세요.");
  }
};
