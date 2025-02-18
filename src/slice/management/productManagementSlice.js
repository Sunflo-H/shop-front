import { createSlice, current } from "@reduxjs/toolkit";

const productManagementSlice = createSlice({
  name: "productManagement",
  initialState: {
    categoryList: ["ALL", "Man", "Woman", "Accessory", "Shoes"],

    //filter && pageNation
    activeCategory: "ALL",
    activeStatus: "ALL",
    page: 1,
    limit: "10",
    pageGroup: 1, // 현재 페이지 그룹 1~5, 6~10// 1이면 1~5

    // remove
    isSelectMode: false,
    idList: [],

    // search
    searchQuery: "",

    // checkbox
    allCheckbox: false,
    checkboxList: [],
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

    /**
     * 상품 삭제후 현재 페이지의 상품이 0개일 떄 이전 페이지로 이동하는 리듀서함수
     * @param {*} state
     */
    setPrevPage: (state) => {
      state.page = state.page - 1;
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

    // checkbox
    setCheckboxList: (state, action) => {
      state.checkboxList = action.payload;
    },
    setAllCheckBox: (state, action) => {
      state.allCheckbox = action.payload;
    },
  },
});

export const {
  setActiveCategory,
  setActiveStatus,
  setLimit,
  setPage,
  setPageGroup,
  setPrevPage,
  setIsSelectMode,
  setIdList,
  setSearchQuery,
  resetFilter,
  setCheckboxList,
  setAllCheckBox,
} = productManagementSlice.actions;
export default productManagementSlice.reducer;
