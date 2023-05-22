import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartPlusCount(state, action) {
      let number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count++;
    },
    cartMinusCount(state, action) {
      const number = state.findIndex((a) => a.id === action.payload);
      state[number].count--;
    },
    cartAddItem(state, action) {
      state.push(action.payload);
    },
    cartDeleteItem(state, action) {
      const item = state.filter((x) => x.id !== action.payload);
      return item;
    },
  },
});

export const { cartAddItem, cartDeleteItem, cartPlusCount, cartMinusCount } =
  cartSlice.actions;
export default cartSlice.reducer;
