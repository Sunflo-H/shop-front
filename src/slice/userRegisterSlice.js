import { createSlice } from "@reduxjs/toolkit";

const UserRegisterSlice = createSlice({
  name: "userRegister",
  initialState: {
    newUser: {
      email: "",
      emailLocal: "",
      emailDomain: "",
      password: "",
      name: "",
      phone: "",
      role: "User",
    },
    progress: {
      email: false,
      password: false,
      info: false,
    },
  },
  reducers: {
    setNewUser: (state, action) => {
      state.newUser = action.payload;
    },
    resetNewUser: (state) => {
      state.newUser = {
        emailLocal: "",
        emailDomain: "",
        password: "",
        name: "",
        phone: "",
        role: "User",
      };
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
});

export const { setNewUser, resetNewUser, setProgress } =
  UserRegisterSlice.actions;
export default UserRegisterSlice.reducer;
