import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
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

export const { addItem, deleteItem, plusCount, minusCount } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
