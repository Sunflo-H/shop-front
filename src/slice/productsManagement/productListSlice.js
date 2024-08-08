import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 비동기 액션
export const fetchProduct = createAsyncThunk("counter/fetchCount", async () => {
  const response = await fetch("http://localhost:8080/api/product");
  const productData = await response.json();
  return productData;
});

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
    categoryList: ["ALL", "Men", "Women", "Accessories", "Shoes"],
    activeCategory: "ALL",
    status: "idle",
  },
  reducers: {
    categoryFilter: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { categoryFilter } = productListSlice.actions;
export default productListSlice.reducer;
