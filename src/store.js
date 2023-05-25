import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "./Redux/userList";
import buyReducer from "./Redux/buySlice";
import cartReducer from "./Redux/cartSlice";
import likeReducer from "./Redux/likeSlice";
import orderReducer from "./Redux/orderSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    buy: buyReducer,
    like: likeReducer,
    userList: userListReducer,
    order: orderReducer,
  },
});

export default store;
