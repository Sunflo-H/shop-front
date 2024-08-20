import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/shop/Home";
import MyCart from "./pages/shop/MyCart";
import ProductDetail from "./pages/shop/ProductDetail";
import Products from "./pages/shop/Products";
import ProductsRecommend from "./pages/shop/ProductsRecommend";
import MyFavorites from "./pages/shop/MyFavorites";
import ProtectedRoute_isUser from "./components/protectedRoute/ProtectedRoute_isUser";
import { Provider } from "react-redux";
import store from "./store";
import UploadProduct from "./pages/productManagement/UploadProduct";
import ProductManagementApp from "./pages/productManagement/ProductManagementApp";
import Login from "./pages/shop/Login";
import Register from "./pages/shop/Register";
import DashBoard from "./pages/productManagement/DashBoard";
import ProductManagement from "./pages/productManagement/ProductManagement";
import UserManagement from "./pages/productManagement/UserManagement";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/products/recommend",
      //   element: <ProductsRecommend />,
      // },
      {
        path: "/products/:category",
        element: <Products />,
      },
      // ! 몽고디비로 바꿈에 따라 변화할 수 있는 페이지
      {
        path: "/products/:category/:id",
        element: <ProductDetail />,
      },
      {
        path: "/carts",
        element: (
          <ProtectedRoute_isUser>
            <MyCart />
          </ProtectedRoute_isUser>
        ),
      },
      {
        path: "/favorites",
        element: (
          <ProtectedRoute_isUser>
            <MyFavorites />
          </ProtectedRoute_isUser>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Provider store={store}>
        <Login />
      </Provider>
    ),
  },
  {
    path: "/register",
    element: (
      <Provider store={store}>
        <Register />
      </Provider>
    ),
  },
  {
    path: "/manage",
    element: <ProductManagementApp />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "/manage/product",
        element: <ProductManagement />,
      },
      {
        path: "/manage/product/new",
        element: <UploadProduct />,
      },
      {
        path: "/manage/user",
        element: <UserManagement />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
