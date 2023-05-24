import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartPlusCount(state, action) {
      let number = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[number].count++;
    },
    cartMinusCount(state, action) {
      const number = state.findIndex((item) => item.id === action.payload);
      state[number].count--;
    },
    cartAddItem(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count++;
      } else {
        state.push(action.payload);
      }
    },
    cartDeleteItem(state, action) {
      const item = state.filter((item) => item.id !== action.payload);
      return item;
    },
  },
});

export const { cartAddItem, cartDeleteItem, cartPlusCount, cartMinusCount } =
  cartSlice.actions;
export default cartSlice.reducer;
