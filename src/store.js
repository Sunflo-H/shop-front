import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productManagementReducer from "./slice/productsManagement/productManagementSlice";
import pageNationReducer from "./slice/productsManagement/pageNationSlice";

export default configureStore({
  reducer: {
    category: categoryReducer,
    productManagement: productManagementReducer,
    pageNation: pageNationReducer,
  },
});
