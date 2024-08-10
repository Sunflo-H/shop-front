import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 상품 데이터를 요청하는 비동기 함수, 상품이 추가, 삭제, 업데이트 될 때 실행
export const fetchProduct = createAsyncThunk(
  "productList/fetchProduct",

  async () => {
    let url = `http://localhost:8080/api/product`;
    const response = await fetch(url);
    const productData = await response.json();
    return productData;
  }
);

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    products_origin: [],
    products_filter_category: [], // status에서는 카테고리로 필터된 데이터가 필요하다.
    products: [],
    categoryList: ["ALL", "Man", "Woman", "Accessory", "Shoes"],
    activeCategory: "ALL",
    activeStatus: "ALL",

    status: "idle", //상품 데이터 처리상태
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
      state.products = filterData(state);
      state.products_filter_category = filterData_category(state);
    },
    setActiveStatus: (state, action) => {
      state.activeStatus = action.payload;
      state.products = filterData(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products_origin = action.payload;
        state.products = action.payload;
        state.products_filter_category = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = "failed";
      });
  },
});

const filterData = (state) => {
  return state.products_origin.filter((product) => {
    const categoryMatch =
      state.activeCategory === "ALL" ||
      product.category === state.activeCategory;
    const statusMatch =
      state.activeStatus === "ALL" || product.status === state.activeStatus;

    return categoryMatch && statusMatch;
  });
};

const filterData_category = (state) => {
  return state.products_origin.filter((product) => {
    const categoryMatch =
      state.activeCategory === "ALL" ||
      product.category === state.activeCategory;
    return categoryMatch;
  });
};

export const { setActiveCategory, setActiveStatus, dataFilter } =
  productListSlice.actions;
export default productListSlice.reducer;
