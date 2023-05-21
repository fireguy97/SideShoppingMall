import { createSlice } from "@reduxjs/toolkit";

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

export default likeSlice.reducer;
