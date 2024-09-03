import { createSlice } from "@reduxjs/toolkit";

const UserRegisterSlice = createSlice({
  name: "userRegister",
  initialState: {
    newUser: {
      emailLocal: "",
      emailDomain: "",
      password: "",
      name: "",
      phone: "",
      role: "User",
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
  },
});

export const { setNewUser, resetNewUser } = UserRegisterSlice.actions;
export default UserRegisterSlice.reducer;
