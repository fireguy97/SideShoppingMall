import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    orderAddItem: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { orderAddItem } = orderSlice.actions;
export default orderSlice.reducer;
