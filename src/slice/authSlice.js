import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
    isLoading: true,
    isLogin: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    login: (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
      console.log(action.payload);
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = "";
    },
  },
});

export const { setIsLoading, login, logout } = authSlice.actions;
export default authSlice.reducer;
