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
    imageFile: null,
  },
  reducers: {
    setNewProduct: (state, action) => {
      const { key, value } = action.payload;
      console.log(action.payload);
      state.newProduct = { ...state.newProduct, [key]: value };
      console.log(state.newProduct);
    },
    setImageFile: (state, action) => {
      state.imageFile = action.payload;
      console.log(state.imageFile);
    },
    resetNewProduct: (state) => {
      state.newProduct = {
        name: "",
        price: "",
        category: "man",
        size: [],
        color: [],
        description: "",
        imageUrl: "",
        status: "Sale",
      };
    },
  },
});

export const { setNewProduct, setImageFile, resetNewProduct } =
  createProductSlice.actions;
export default createProductSlice.reducer;
