import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
  },
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload;
    },

    logout: (state) => {
      state.username = "";
    },
  },
});

export const { setUserName, logout } = authSlice.actions;
export default authSlice.reducer;
