import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/shop/Home";
import ProductDetail from "./pages/shop/ProductDetail";
import Products from "./pages/shop/Products";
import ProductsRecommend from "./pages/shop/ProductsRecommend";
import MyFavorites from "./pages/shop/MyFavorites";
import { Provider } from "react-redux";
import store from "./store";
import UploadProduct from "./pages/management/UploadProduct";
import ManagementApp from "./pages/management/ManagementApp";
import Login from "./pages/shop/Login";
import Register from "./pages/shop/Register";
import ProductManagement from "./pages/management/ProductManagement";
import UserManagement from "./pages/management/UserManagement";
import ManagementHome from "./pages/management/ManagementHome";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserRegister from "./pages/management/UserRegister";
import Register_email from "./components/shop/signUp/Register_email";
import Register_password from "./components/shop/signUp/Register_password";
import Register_info from "./components/shop/signUp/Register_info";
import Cart from "./pages/shop/Cart";

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
      {
        path: "/products/:category",
        element: <Products />,
      },
      {
        path: "/products/:category/:id",
        element: <ProductDetail />,
      },
      {
        path: "/carts",
        element: (
          // <ProtectedRoute_isUser>
          <Cart />
          // </ProtectedRoute_isUser>
        ),
      },
      {
        path: "/favorites",
        element: (
          // <ProtectedRoute_isUser>
          <MyFavorites />
          // </ProtectedRoute_isUser>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Login />
        </Provider>
      </QueryClientProvider>
    ),
  },
  {
    path: "/register",
    element: (
      <Provider store={store}>
        <Register />
      </Provider>
    ),
    children: [
      {
        index: true,
        element: <Register_email />,
      },
      {
        path: "/register/password",
        element: <Register_password />,
      },
      {
        path: "/register/info",
        element: <Register_info />,
      },
    ],
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
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <UploadProduct />
        </Provider>
      </QueryClientProvider>
    ),
  },
  {
    path: "/manage/user/register",
    element: (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <UserRegister />
        </Provider>
      </QueryClientProvider>
    ),
  },
]);

root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

reportWebVitals();
