import { createSlice } from "@reduxjs/toolkit";
import userList from "../db/userList.json";

export const userListSlice = createSlice({
  name: "userList",
  initialState: {
    users: userList,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { setUserList, addUser } = userListSlice.actions;

export default userListSlice.reducer;
