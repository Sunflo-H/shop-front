import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

// 필터링된 상품 데이터를 요청
// export const fetchProduct = createAsyncThunk(
//   "productList/fetchProduct",

//   async ({ category, status, page, limit }, thunkAPI) => {
//     let url = `http://localhost:8080/api/product`;

//     if (category === "ALL") category = "";
//     if (status === "ALL") status = "";

//     const response = await axios.get(url, {
//       params: { category, status, page, limit },
//     });
//     const productData = response.data;

//     return productData;
//   }
// );

// 모든 상품데이터를 요청
// export const fetchAllProduct = createAsyncThunk(
//   "productList/fetchAllProduct",

//   async () => {
//     let url = `http://localhost:8080/api/product`;

//     const response = await axios.get(url);
//     const productData = response.data;
//     return productData;
//   }
// );

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    categoryList: ["ALL", "Man", "Woman", "Accessory", "Shoes"],

    //filter && pageNation
    activeCategory: "ALL",
    activeStatus: "ALL",
    page: 1,
    limit: 10,
    pageGroup: 1, // 현재 페이지 그룹 1~5, 6~10// 1이면 1~5

    // remove
    isSelectMode: false,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
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

    // Remove
    setIsSelectMode: (state, action) => {
      state.isSelectMode = action.payload;
    },
  },
});

export const {
  setActiveCategory,
  setActiveStatus,
  setLimit,
  setPage,
  setPageGroup,
  setIsSelectMode,
} = productListSlice.actions;
export default productListSlice.reducer;
