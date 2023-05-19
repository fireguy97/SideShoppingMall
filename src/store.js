import { configureStore, createSlice } from "@reduxjs/toolkit";
import userListReducer from "./Redux/userList";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    plusCount(state, action) {
      let number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count++;
    },
    minusCount(state, action) {
      const number = state.findIndex((a) => a.id === action.payload);
      state[number].count--;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      const item = state.filter((x) => x.id !== action.payload);
      return item;
    },
  },
});

export const { addItem, deleteItem, plusCount, minusCount } = cartSlice.actions;

const likeSlice = createSlice({
  name: "like",
  initialState: [],
  reducers: {
    incrementLikes: (state, action) => {
      const itemId = action.payload;
      const item = state.find((item) => item.id === itemId);
      if (item) {
        item.likes += 1;
      }
    },
  },
});

export const { incrementLikes } = likeSlice.actions;

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    like: likeSlice.reducer,
    userList: userListReducer,
  },
});
