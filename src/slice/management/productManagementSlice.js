import { createSlice, current } from "@reduxjs/toolkit";

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
    idList: [],

    // search
    searchQuery: "",
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
    setIdList: (state, action) => {
      state.idList = action.payload;
    },

    // search
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    // resetFilter
    resetFilter: (state) => {
      state.activeCategory = "ALL";
      state.activeStatus = "ALL";
      state.searchQuery = "";
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
  setIdList,
  setSearchQuery,
  resetFilter,
} = productListSlice.actions;
export default productListSlice.reducer;
