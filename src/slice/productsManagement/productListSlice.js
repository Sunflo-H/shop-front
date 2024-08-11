import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 상품 데이터를 요청하는 비동기 함수, 상품이 추가, 삭제, 업데이트 될 때 실행
export const fetchProduct = createAsyncThunk(
  "productList/fetchProduct",

  async ({ category, status, page, limit }, thunkAPI) => {
    // !쿼리스트링으로 필터링하는 코드 (아마 안쓸듯)

    console.log(status);
    const queryParams = new URLSearchParams();
    if (category) queryParams.append("category", category);
    if (status) queryParams.append("status", status);
    if (page) queryParams.append("page", page);
    if (limit) queryParams.append("limit", limit);

    let url = `http://localhost:8080/api/product?${queryParams.toString()}`;

    // let url = `http://localhost:8080/api/product`;
    const response = await axios.get(url, {
      params: { category, status, page, limit },
    });
    const productData = response.data;

    return productData; // 이 값이 action이 된다.
  }
);

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    products_origin: [],
    products_filter_category: [], // status에서는 카테고리로 필터된 데이터가 필요하다.
    products: [],
    categoryList: ["ALL", "Man", "Woman", "Accessory", "Shoes"],
    category: "ALL",
    status: "ALL",
    page: 1,
    limit: 10,

    fetchStatus: "idle", //상품 데이터 처리상태
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.category = action.payload;
    },
    setActiveStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products_origin = action.payload;
        // state.products = action.payload;
        // state.products_filter_category = action.payload;
        state.fetchStatus = "idle";
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.fetchStatus = "failed";
      });
  },
});

export const { setActiveCategory, setActiveStatus, dataFilter } =
  productListSlice.actions;
export default productListSlice.reducer;
