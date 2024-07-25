import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import authReducer from "./slice/authSlice";
import productManagementReducer from "./slice/productsManagement/productManagementSlice";
import pageNationReducer from "./slice/productsManagement/pageNationSlice";
import newProductReducer from "./slice/productsManagement/newProductSlice";

export default configureStore({
  reducer: {
    // shop
    category: categoryReducer,
    auth: authReducer,

    // productManage
    productManagement: productManagementReducer,
    pageNation: pageNationReducer,

    // newProduct
    newProduct: newProductReducer,
  },
  middleware: getDefaultMiddleware({
    // 비 직렬화 값을 허용
    serializableCheck: false,
  }),
});
