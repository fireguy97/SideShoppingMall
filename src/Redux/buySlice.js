import { createSlice } from "@reduxjs/toolkit";

const buySlice = createSlice({
  name: "buy",
  initialState: [],
  reducers: {
    buyPlusCount(state, action) {
      const { id, size } = action.payload;
      const item = state.find((item) => item.id === id && item.size === size);
      if (item) {
        item.count += 1;
      }
    },
    buyMinusCount(state, action) {
      const { id, size } = action.payload;
      const item = state.find((item) => item.id === id && item.size === size);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    },
    buyAddItem(state, action) {
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
    buyDeleteItem(state, action) {
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

export const { buyPlusCount, buyMinusCount, buyAddItem, buyDeleteItem } =
  buySlice.actions;
export default buySlice.reducer;
