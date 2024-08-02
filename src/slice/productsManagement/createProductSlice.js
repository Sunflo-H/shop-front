import { createSlice } from "@reduxjs/toolkit";

export const createProductSlice = createSlice({
  name: "createProduct",
  initialState: {
    newProduct: {
      name: "",
      price: "",
      category: "man",
      size: [],
      color: [],
      description: "",
      imageUrl: "",
      status: "Sale",
    },
  },
  reducers: {
    setNewProduct: (state, action) => {
      const { key, value } = action.payload;
      console.log(action.payload);
      state.newProduct = { ...state.newProduct, [key]: value };
      console.log(state.newProduct);
    },
  },
});

export const { setNewProduct } = createProductSlice.actions;
export default createProductSlice.reducer;
