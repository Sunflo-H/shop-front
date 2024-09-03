import { createSlice, current } from "@reduxjs/toolkit";

const userManagementSlice = createSlice({
  name: "userManagement",
  initialState: {
    //filter && pageNation
    activeRole: "ALL",
    page: 1,
    limit: 10,
    pageGroup: 1, // 현재 페이지 그룹 1~5, 6~10// 1이면 1~5

    // remove
    isSelectMode: false,
    idList: [],

    // search
    searchQuery: "",

    // checkbox
    checkboxList: [],
  },
  reducers: {
    setActiveRole: (state, action) => {
      state.activeRole = action.payload;
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
      state.activeRole = "ALL";
      state.searchQuery = "";
    },

    // checkbox
    setCheckboxList: (state, action) => {
      state.checkboxList = action.payload;
    },
  },
});

export const {
  setActiveRole,
  setLimit,
  setPage,
  setPageGroup,
  setIsSelectMode,
  setIdList,
  setSearchQuery,
  resetFilter,
  setCheckboxList,
} = userManagementSlice.actions;
export default userManagementSlice.reducer;
