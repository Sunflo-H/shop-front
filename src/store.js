import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import authReducer from "./slice/authSlice";
import productManagementReducer from "./slice/management/productManagementSlice";
import detailModalReducer from "./slice/management/detailModalSlice";
import userManagementReducer from "./slice/management/userManagementSlice";
import pageNationReducer from "./slice/management/pageNationSlice";
import createProductReducer from "./slice/management/createProductSlice";
import userRegisterReducer from "./slice/management/userRegisterSlice";

export default configureStore({
  reducer: {
    // shop
    category: categoryReducer,
    auth: authReducer,

    // productManagement
    productManagement: productManagementReducer,
    pageNation: pageNationReducer,
    createProduct: createProductReducer,

    // userManagement
    userManagement: userManagementReducer,
    userRegister: userRegisterReducer,

    // Product & User
    detailModal: detailModalReducer,
  },
  middleware: getDefaultMiddleware({
    // 비 직렬화 값을 허용
    serializableCheck: false,
  }),
});
