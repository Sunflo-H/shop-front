import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogined: "",
  },
  reducers: {
    setIsLogined: (state, action) => {
      state.isLogined = action.payload;
    },
  },
});

export const { setIsLogined } = authSlice.actions;
export default authSlice.reducer;
