import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 외부에서 상품 데이터를 요청 -> slice에 데이터 저장 -> 컴포넌트는 slice로부터 데이터를 가져와서 렌더링한다.
export const productListSlice = createSlice({
  name: "productList",
  initialState: {
    products,
  },
  reducers: {
    initProducts: async (state) => {
      const { data } = await axios.get("http://localhost:8080/api/product");
      state.products = data;
      console.log(state.products);
    },
  },
});

export const { initProducts } = productListSlice.actions;
export default productListSlice.reducer;
