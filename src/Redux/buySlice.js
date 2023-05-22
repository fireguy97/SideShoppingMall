import { createSlice } from "@reduxjs/toolkit";

const buySlice = createSlice({
  name: "buy",
  initialState: [],
  reducers: {
    buyPlusCount(state, action) {
      let number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count++;
    },
    buyMinusCount(state, action) {
      const number = state.findIndex((a) => a.id === action.payload);
      state[number].count--;
    },
    buyAddItem(state, action) {
      state.push(action.payload);
    },
    buyDeleteItem(state, action) {
      const item = state.filter((x) => x.id !== action.payload);
      return item;
    },
  },
});

export const { buyPlusCount, buyMinusCount, buyAddItem, buyDeleteItem } =
  buySlice.actions;
export default buySlice.reducer;
