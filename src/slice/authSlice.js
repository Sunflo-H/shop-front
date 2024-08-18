import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    logout: (state) => {
      state.isLogin = false;
      state.user = "";
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
