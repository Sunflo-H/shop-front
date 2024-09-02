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
  },
});

export const { setNewUser } = UserRegisterSlice.actions;
export default UserRegisterSlice.reducer;
