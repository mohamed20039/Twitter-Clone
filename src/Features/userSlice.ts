import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
  value: { name: "", photoUrl: "", id: 0, username: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
