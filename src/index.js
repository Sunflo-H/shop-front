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
import UploadProduct from "./pages/management/UploadProduct";
import ManagementApp from "./pages/management/ManagementApp";
import Login from "./pages/shop/Login";
import Register from "./pages/shop/Register";
import ProductManagement from "./pages/management/ProductManagement";
import UserManagement from "./pages/management/UserManagement";
import ManagementHome from "./pages/management/ManagementHome";
import UpdateProduct from "./pages/management/UpdateProduct";
import ManagementProductDetail from "./pages/management/ManagementProductDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

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
    element: <ManagementApp />,
    children: [
      {
        index: true,
        element: <ManagementHome />,
      },
      {
        path: "/manage/product",
        element: <ProductManagement />,
      },

      {
        path: "/manage/user",
        element: <UserManagement />,
      },
    ],
  },
  {
    path: "/manage/product/new",
    element: (
      <Provider store={store}>
        <UploadProduct />
      </Provider>
    ),
  },
  {
    path: "/manage/product/detail/:id",
    element: (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ManagementProductDetail />
        </Provider>
      </QueryClientProvider>
    ),
  },
  {
    path: "/manage/product/update/:id",
    element: (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <UpdateProduct />
        </Provider>
      </QueryClientProvider>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
