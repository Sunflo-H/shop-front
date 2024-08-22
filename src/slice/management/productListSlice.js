import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 필터링된 상품 데이터를 요청
export const fetchProduct = createAsyncThunk(
  "productList/fetchProduct",

  async ({ category, status, page, limit }, thunkAPI) => {
    let url = `http://localhost:8080/api/product`;

    if (category === "ALL") category = "";
    if (status === "ALL") status = "";

    const response = await axios.get(url, {
      params: { category, status, page, limit },
    });
    const productData = response.data;

    return productData;
  }
);

// 모든 상품데이터를 요청
export const fetchAllProduct = createAsyncThunk(
  "productList/fetchAllProduct",

  async () => {
    let url = `http://localhost:8080/api/product`;

    const response = await axios.get(url);
    const productData = response.data;
    return productData;
  }
);

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    allProducts: [], // 모든 상품 데이터
    products_filteredByCategory: [], // status에서는 카테고리로 필터된 데이터가 필요하다.
    products: [], // 실제로 렌더링할 상품 데이터
    categoryList: ["ALL", "Man", "Woman", "Accessory", "Shoes"],

    //filter && pageNation
    activeCategory: "ALL",
    activeStatus: "ALL",
    page: 1,
    limit: 10,
    pageGroup: 1, // 현재 페이지 그룹 1~5, 6~10// 1이면 1~5

    //fetch
    allProductStatus: "idle",
    productStatus: "idle",
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
      if (state.activeCategory === "ALL")
        state.products_filteredByCategory = state.allProducts;
      else {
        state.products_filteredByCategory = state.allProducts.filter(
          (product) => state.activeCategory === product.category
        );
      }
    },
    setActiveStatus: (state, action) => {
      state.activeStatus = action.payload;
    },

    //pageNation
    setLimit: (state, action) => {
      state.limit = action.payload;
    },

    setPage: (state, action) => {
      state.page = action.payload;
    },

    setPageGroup: (state, action) => {
      state.pageGroup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.pending, (state) => {
        state.allProductStatus = "loading";
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.products_filteredByCategory = action.payload;
        state.allProductStatus = "idle";
      })
      .addCase(fetchAllProduct.rejected, (state) => {
        state.allProductStatus = "failed";
      });

    builder
      .addCase(fetchProduct.pending, (state) => {
        state.productStatus = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productStatus = "idle";
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.productStatus = "failed";
      });
  },
});

export const {
  setActiveCategory,
  setActiveStatus,
  setLimit,
  setPage,
  setPageGroup,
} = productListSlice.actions;
export default productListSlice.reducer;
