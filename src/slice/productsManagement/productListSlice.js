import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 비동기 액션
export const fetchProduct = createAsyncThunk(
  "productList/fetchProduct",

  async ({ category, status }, thunkAPI) => {
    const queryParams = new URLSearchParams();

    if (category) queryParams.append("category", category);
    if (status) queryParams.append("status", status);

    let url = `http://localhost:8080/api/product?${queryParams.toString()}`;
    const response = await fetch(url);
    const productData = await response.json();
    return productData;
  }
);

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    products_origin: [],
    products: [],
    categoryList: ["ALL", "Men", "Women", "Accessories", "Shoes"],
    activeCategory: "ALL",
    activeStatus: "ALL",

    status: "idle", //상품 데이터 처리상태
  },
  reducers: {
    categoryFilter: (state, action) => {
      state.activeCategory = action.payload;
    },
    setActiveStatus: (state, action) => {
      state.activeStatus = action.payload;
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
        if (state.products_origin.length === 0)
          state.products_origin = action.payload;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { categoryFilter, setActiveStatus } = productListSlice.actions;
export default productListSlice.reducer;
