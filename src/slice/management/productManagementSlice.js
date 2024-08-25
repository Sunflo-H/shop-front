import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

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
    filteredProducts: [], // 카테고리와 상태로 필터링한 데이터
    products: [], // 렌더링할 상품 데이터
    categoryList: ["ALL", "Man", "Woman", "Accessory", "Shoes"],

    //filter && pageNation
    activeCategory: "ALL",
    activeStatus: "ALL",
    page: 1,
    limit: 10,
    pageGroup: 1, // 현재 페이지 그룹 1~5, 6~10// 1이면 1~5

    //fetch status
    allProductStatus: "idle",
    productStatus: "idle",
  },
  reducers: {
    setActiveCategory: (state, action) => {
      const allProducts = current(state.allProducts);
      const selectedCategory = action.payload;

      const filteredProducts = getFilteredProduct(
        allProducts,
        selectedCategory,
        state.activeStatus
      );

      if (filteredProducts.length === 0) {
        Swal.fire("No data available");
      } else {
        state.activeCategory = action.payload;
        state.filteredProducts = filteredProducts;
      }
    },

    setActiveStatus: (state, action) => {
      const allProducts = current(state.allProducts);
      const selectedStatus = action.payload;

      const filteredProducts = getFilteredProduct(
        allProducts,
        state.activeCategory,
        selectedStatus
      );

      if (filteredProducts.length === 0) Swal.fire("No data available");
      else {
        state.activeStatus = action.payload;
        state.filteredProducts = filteredProducts;
      }
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
        state.filteredProducts = action.payload;
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
        state.productStatus = "idle";
        if (!action.payload.length) return;
        state.products = action.payload;
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

function getFilteredProduct(allProduct, category, status) {
  const filteredProducts = allProduct.filter((product) => {
    const isCategoryMatch = product.category === category || category === "ALL";
    const isStatusMatch = product.status === status || status === "ALL";

    return isCategoryMatch && isStatusMatch;
  });

  return filteredProducts;
}
