import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: { value: { content: "", imageUrl: "" } },
  reducers: {
    Addpost: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { Addpost } = postSlice.actions;

export default postSlice.reducer;
