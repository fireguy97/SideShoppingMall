import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    name: "",
    loginId: "",
    id: "",
    birth: "",
    phone: "",
    email: "",
  },
  reducers: {
    setUserInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
