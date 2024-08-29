import { createSlice } from "@reduxjs/toolkit";

const detailModalSlice = createSlice({
  name: "detailModal",
  initialState: {
    selectedItem: null,
    isOpen: false,
    detailData: {}, // 리스트 아이템을 클릭시 그 데이터가 저장되는 변수
    updatedData: {},
  },
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    setDetailData: (state, action) => {
      state.detailData = action.payload;
    },
    // setUpdatedData: (state,action)=> {
    //   const {key,value} = action.payload
    //   state.updatedData
    // }
  },
});

export const { closeModal, openModal, setData, setDetailData } =
  detailModalSlice.actions;
export default detailModalSlice.reducer;
