import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import authReducer from "./slice/authSlice";
import productManagementReducer from "./slice/productsManagement/productManagementSlice";
import productListReducer from "./slice/productsManagement/productListSlice";
import pageNationReducer from "./slice/productsManagement/pageNationSlice";
import createProductReducer from "./slice/productsManagement/createProductSlice";

export default configureStore({
  reducer: {
    // shop
    category: categoryReducer,
    auth: authReducer,

    // productList
    productManagement: productManagementReducer,
    productList: productListReducer,
    pageNation: pageNationReducer,

    // createProduct
    createProduct: createProductReducer,
  },
  middleware: getDefaultMiddleware({
    // 비 직렬화 값을 허용
    serializableCheck: false,
  }),
});
