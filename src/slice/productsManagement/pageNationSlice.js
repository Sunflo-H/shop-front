import { createSlice } from "@reduxjs/toolkit";

export const pageNationSlice = createSlice({
  name: "pageNation",
  initialState: {
    viewCount: 10, // 한번에 보여질 데이터 개수
    currentPage: 1, // 현재 페이지
    currentPageGroup: 1, // 현재 페이지 그룹 1~5, 6~10// 1이면 1~5
    search: null,
  },
  reducers: {
    changeViewCount: (state, action) => {
      state.viewCount = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setCurrentPageGroup: (state, action) => {
      state.currentPageGroup = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
      state.activeCategory = "ALL";
      state.activeStatus = "ALL";
    },
  },
});

export const {
  changeViewCount,
  setCurrentPage,
  setCurrentPageGroup,
  setSearch,
} = pageNationSlice.actions;
export default pageNationSlice.reducer;
