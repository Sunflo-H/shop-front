import { createSlice } from "@reduxjs/toolkit";

const updateProductSlice = createSlice({
  name: "updateProduct",
  initialState: {
    updatedProduct: {},
  },
  reducers: {
    setUpdatedProduct: (state, action) => {
      console.log("hi");
    },
  },
});

export const { setUpdatedProduct } = updateProductSlice.actions;
export default updateProductSlice.reducer;
