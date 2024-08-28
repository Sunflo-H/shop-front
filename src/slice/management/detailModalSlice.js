import { createSlice } from "@reduxjs/toolkit";

const detailModalSlice = createSlice({
  name: "detailModal",
  initialState: {
    selectedItem: null,
    isOpen: false,
    detailData: {},
  },
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setDetailData: (state, action) => {
      state.detailData = action.payload;
    },
  },
});

export const { setIsOpen, setData, setDetailData } = detailModalSlice.actions;
export default detailModalSlice.reducer;
