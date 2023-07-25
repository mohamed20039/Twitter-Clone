import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   value: { content: "", imageUrl: "" },
// };

const postSlice = createSlice({
  name: "post",
  initialState: { value: {} },
  reducers: {
    Addpost: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { Addpost } = postSlice.actions;

export default postSlice.reducer;
