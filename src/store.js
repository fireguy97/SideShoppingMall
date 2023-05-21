import { configureStore, createSlice } from "@reduxjs/toolkit";
import userListReducer from "./Redux/userList";
import buyReducer from "./Redux/buySlice";
import cartReducer from "./Redux/cartSlice";
import likeReducer from "./Redux/likeSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    buy: buyReducer,
    like: likeReducer,
    userList: userListReducer,
  },
});

export default store;
