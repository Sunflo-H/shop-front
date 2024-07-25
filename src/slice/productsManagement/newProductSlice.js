import { createSlice } from "@reduxjs/toolkit";

export const newProductSlice = createSlice({
  name: "newProduct",
  initialState: {
    newProduct: {
      name: "",
      price: "",
      category: "",
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

export const { setNewProduct } = newProductSlice.actions;
export default newProductSlice.reducer;
