import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    currentCategory: "Man",
    categoryList: ["Man", "Woman", "Accessory", "Shoes"],
  },
  reducers: {
    chageCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { chageCurrentCategory } = categorySlice.actions;
export default categorySlice.reducer;
