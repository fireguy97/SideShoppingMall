import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartPlusCount(state, action) {
      const { id, size } = action.payload;
      const item = state.find((item) => item.id === id && item.size === size);
      if (item) {
        item.count += 1;
      }
    },
    cartMinusCount(state, action) {
      const { id, size } = action.payload;
      const item = state.find((item) => item.id === id && item.size === size);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    },
    cartAddItem(state, action) {
      const { id, size } = action.payload;
      const existingItem = state.find(
        (item) => item.id === id && item.size === size
      );
      if (existingItem) {
        existingItem.count++;
      } else {
        state.push(action.payload);
      }
    },
    cartDeleteItem(state, action) {
      const { id, size } = action.payload;
      const index = state.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { cartAddItem, cartDeleteItem, cartPlusCount, cartMinusCount } =
  cartSlice.actions;
export default cartSlice.reducer;
