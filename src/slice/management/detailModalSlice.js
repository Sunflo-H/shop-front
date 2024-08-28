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
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    openModal: (state, action) => {
      state.isOpen = true;
    },
    setDetailData: (state, action) => {
      state.detailData = action.payload;
    },
  },
});

export const { closeModal, openModal, setData, setDetailData } =
  detailModalSlice.actions;
export default detailModalSlice.reducer;
