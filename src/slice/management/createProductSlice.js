import { createSlice } from "@reduxjs/toolkit";

export const createProductSlice = createSlice({
  name: "createProduct",
  initialState: {
    newProduct: {
      name: "",
      price: "",
      category: "Man",
      size: [],
      color: [],
      description: "",
      image: "",
      status: "Sale",
    },
    defaultImage: "/images/default-placeholder.png",
  },
  reducers: {
    setNewProduct: (state, action) => {
      const { key, value } = action.payload;

      if (key === "size" || key === "color") {
        state.newProduct = { ...state.newProduct, [key]: value.split(",") };
      } else {
        state.newProduct = { ...state.newProduct, [key]: value };
      }
    },
    resetNewProduct: (state) => {
      state.newProduct = {
        name: "",
        price: "",
        category: "Man",
        size: [],
        color: [],
        description: "",
        image: "",
        status: "Sale",
      };
    },
  },
});

export const { setNewProduct, resetNewProduct } = createProductSlice.actions;
export default createProductSlice.reducer;
